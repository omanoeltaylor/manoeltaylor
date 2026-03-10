
import { Project, Product, Artwork, Article } from './types';

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

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Distopia NEON',
    category: 'Quadrinhos',
    imageUrl: 'https://picsum.photos/seed/comic1/800/1000',
    description: 'Uma HQ noir cyberpunk de 24 páginas explorando a ética da consciência digital.',
    year: '2024',
    institution: 'Auto-publicação'
  },
  {
    id: '2',
    title: 'Decadência Urbana',
    category: 'Ilustração',
    imageUrl: 'https://picsum.photos/seed/illu1/800/600',
    description: 'Uma série de estudos arquitetônicos focados na beleza de espaços industriais abandonados.',
    year: '2023',
    institution: 'Galeria X'
  },
  {
    id: '3',
    title: 'O Último Sentinela',
    category: 'Arte Conceitual',
    imageUrl: 'https://picsum.photos/seed/concept1/1000/600',
    description: 'Design de personagens e ambientes para um RPG de fantasia não anunciado.',
    year: '2024',
    institution: 'Estúdio Y'
  },
  {
    id: '4',
    title: 'Ritual da Meia-Noite',
    category: 'Quadrinhos',
    imageUrl: 'https://picsum.photos/seed/comic2/800/1000',
    description: 'Antologia de contos sobre ocorrências sobrenaturais na Londres moderna.',
    year: '2023',
    institution: 'Editora Independente'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    title: 'Distopia Neon - Print Limitado',
    price: 45,
    category: 'Prints',
    imageUrl: 'https://picsum.photos/seed/print1/600/800',
    description: 'Impressão Giclée de alta qualidade em papel fine art 300gsm. Assinado e numerado.',
    specs: ['Papel Fine Art', 'Assinado', 'Numerado', 'Tamanho A3'],
    sizes: ['A3', 'A2']
  },
  {
    id: 'p2',
    title: 'Anatomia para Artistas - Zine',
    price: 15,
    category: 'Educação',
    imageUrl: 'https://picsum.photos/seed/zine1/600/800',
    description: 'Um guia de 32 páginas para desenhar figuras dinâmicas e entender grupos musculares.',
    specs: ['32 Páginas', 'P&B', 'Capa Mole'],
    sizes: ['Padrão']
  },
  {
    id: 'p3',
    title: 'Set de Posters Decadência Urbana',
    price: 30,
    category: 'Prints',
    imageUrl: 'https://picsum.photos/seed/print2/600/800',
    description: 'Conjunto de 3 posters A3 apresentando a série Decadência Urbana.',
    specs: ['Conjunto de 3', 'Alto Brilho', 'Tamanho A3'],
    sizes: ['A3']
  },
  {
    id: 'p4',
    title: 'Pack de Pincéis Customizados (Procreate)',
    price: 10,
    category: 'Digital',
    imageUrl: 'https://picsum.photos/seed/digital1/600/600',
    description: 'Os pincéis exatos que uso para meus trabalhos de quadrinhos. Otimizados para line art e textura.',
    specs: ['Apenas Procreate', '15 Pincéis', 'Download Instantâneo'],
    sizes: ['Digital']
  }
];

export const ARTWORKS: Artwork[] = [
  { id: 'a1', title: 'Beco Cyberpunk', category: 'Ilustração', imageUrl: 'https://picsum.photos/seed/art1/800/1200' },
  { id: 'a2', title: 'O Vazio', category: 'Quadrinhos', imageUrl: 'https://picsum.photos/seed/art2/800/1200' },
  { id: 'a3', title: 'Fantasma Industrial', category: 'Ilustração', imageUrl: 'https://picsum.photos/seed/art3/800/1200' },
  { id: 'a4', title: 'Samurai Neon', category: 'Arte Conceitual', imageUrl: 'https://picsum.photos/seed/art4/800/1200' },
];

export const ARTICLES: Article[] = [
  { id: 'ar1', title: 'A Ética da IA nos Quadrinhos', category: 'Ensaio', date: 'Out 2024', imageUrl: 'https://picsum.photos/seed/article1/1200/600', excerpt: 'Explorando o impacto da IA generativa na indústria de histórias em quadrinhos.' },
  { id: 'ar2', title: 'Desenhando a Decadência: Tutorial', category: 'Tutorial', date: 'Set 2024', imageUrl: 'https://picsum.photos/seed/article2/1200/600', excerpt: 'Guia passo a passo para capturar a beleza de ruínas industriais.' },
];

export const LECTURES: Lecture[] = [
  { 
    id: 'l1', 
    title: 'Storytelling Visual', 
    institution: 'Universidade de Artes', 
    year: '2024', 
    category: 'Workshop',
    audience: 'Estudantes de Arte',
    duration: '4 Horas',
    format: 'Presencial',
    description: 'Um mergulho profundo na mecânica da narrativa visual e arte sequencial.'
  },
  { 
    id: 'l2', 
    title: 'O Futuro dos Quadrinhos Indie', 
    institution: 'Comic Con', 
    year: '2023', 
    category: 'Painel',
    audience: 'Público Geral',
    duration: '1 Hora',
    format: 'Híbrido',
    description: 'Explorando o cenário em mudança da publicação independente e distribuição digital.'
  },
];
