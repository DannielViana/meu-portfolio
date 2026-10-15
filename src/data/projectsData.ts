import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Aplicação E-Commerce",
    description: "Plataforma completa de compras com carrinho interativo, gestão de produtos e checkout integrado.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com",
    liveUrl: "https://exemplo-deploy.com"
  },
  {
    id: 2,
    title: "Gestor de Tarefas (Kanban)",
    description: "Sistema para organização e acompanhamento de tarefas diárias com arrastar e soltar (drag & drop).",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com"
  },
  {
    id: 3,
    title: "Dashboard Financeiro",
    description: "Painel analítico com gráficos interativos de receitas, despesas e relatórios mensais em tempo real.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Charts"],
    githubUrl: "https://github.com"
  }
];