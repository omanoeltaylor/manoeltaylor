/**
 * Content loader utility using Vite's import.meta.glob
 * Loads markdown files from src/content/ at build time
 * Parses YAML frontmatter without external dependencies
 */

import type { Artwork, Article, Product, Project } from '../types';

// ---------- YAML Frontmatter Parser ----------

function parseFrontmatter(raw: string): { data: Record<string, any>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const yamlBlock = match[1];
  const content = match[2].trim();
  const data: Record<string, any> = {};

  let currentKey = '';
  let inList = false;
  let listItems: string[] = [];

  for (const line of yamlBlock.split('\n')) {
    const trimmed = line.trimEnd();

    // List item (starts with "  - ")
    if (inList && /^\s+-\s+/.test(trimmed)) {
      const val = trimmed.replace(/^\s+-\s+/, '').replace(/^["']|["']$/g, '');
      listItems.push(val);
      continue;
    }

    // New key — flush any pending list
    if (inList && currentKey) {
      data[currentKey] = listItems;
      inList = false;
      listItems = [];
    }

    // Key: value pair
    const kvMatch = trimmed.match(/^(\w+):\s*(.*)$/);
    if (kvMatch) {
      const key = kvMatch[1];
      let value = kvMatch[2].trim();

      if (value === '') {
        // Possibly a list follows
        currentKey = key;
        inList = true;
        listItems = [];
        continue;
      }

      // Strip quotes
      value = value.replace(/^["']|["']$/g, '');

      // Try to parse numbers
      if (/^\d+(\.\d+)?$/.test(value)) {
        data[key] = parseFloat(value);
      } else {
        data[key] = value;
      }
      currentKey = key;
    }
  }

  // Flush final list
  if (inList && currentKey) {
    data[currentKey] = listItems;
  }

  return { data, content };
}

// ---------- Glob Imports ----------

const artworkFiles = import.meta.glob('../content/artworks/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;
const productFiles = import.meta.glob('../content/products/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;
const blogFiles = import.meta.glob('../content/blog/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;
const projectFiles = import.meta.glob('../content/projects/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;
const lectureFiles = import.meta.glob('../content/lectures/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;

// ---------- Slug from path ----------

function slugFromPath(path: string): string {
  const filename = path.split('/').pop() || '';
  return filename.replace(/\.md$/, '');
}

// ---------- Public API ----------

export function getArtworks(): Artwork[] {
  return Object.entries(artworkFiles).map(([path, raw]) => {
    const { data } = parseFrontmatter(raw);
    return {
      id: slugFromPath(path),
      title: data.title || '',
      category: data.category || '',
      imageUrl: data.imageUrl || '',
    };
  });
}

export function getProducts(): Product[] {
  return Object.entries(productFiles).map(([path, raw]) => {
    const { data } = parseFrontmatter(raw);
    return {
      id: slugFromPath(path),
      title: data.title || '',
      price: data.price || 0,
      category: data.category || '',
      imageUrl: data.imageUrl || '',
      description: data.description || '',
      specs: Array.isArray(data.specs) ? data.specs : [],
      sizes: Array.isArray(data.sizes) ? data.sizes : [],
    };
  });
}

export function getArticles(): Article[] {
  return Object.entries(blogFiles)
    .map(([path, raw]) => {
      const { data, content } = parseFrontmatter(raw);
      return {
        id: slugFromPath(path),
        title: data.title || '',
        category: data.category || '',
        date: data.date ? String(data.date).slice(0, 4) : '',
        imageUrl: data.imageUrl || '',
        excerpt: data.excerpt || '',
        content,
      };
    })
    .sort((a, b) => b.id.localeCompare(a.id)); // Newer first (date is in filename)
}

export function getProjects(): Project[] {
  return Object.entries(projectFiles).map(([path, raw]) => {
    const { data } = parseFrontmatter(raw);
    return {
      id: slugFromPath(path),
      title: data.title || '',
      category: data.category || '',
      imageUrl: data.imageUrl || '',
      description: data.description || '',
      year: data.year || '',
      institution: data.institution || '',
    };
  });
}

export interface Lecture {
  id: string;
  title: string;
  institution: string;
  year: string;
  category: string;
  audience: string;
  duration: string;
  format: string;
  description: string;
}

export function getLectures(): Lecture[] {
  return Object.entries(lectureFiles).map(([path, raw]) => {
    const { data } = parseFrontmatter(raw);
    return {
      id: slugFromPath(path),
      title: data.title || '',
      institution: data.institution || '',
      year: data.year || '',
      category: data.category || '',
      audience: data.audience || '',
      duration: data.duration || '',
      format: data.format || '',
      description: data.description || '',
    };
  });
}
