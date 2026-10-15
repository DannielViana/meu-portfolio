import { ArrowDown, FileText } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-16 bg-slate-900 text-white">
      <div className="max-w-3xl space-y-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-950/60 border border-blue-800/40 rounded-full">
          Disponível para novos projetos
        </span>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Olá, o meu nome é <span className="text-blue-500">Danniel Viana</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 leading-relaxed">
          Desenvolvedor Frontend focado em criar aplicações modernas, responsivas e de alta performance com React, TypeScript e Tailwind CSS.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-blue-500/20"
          >
            Ver Projetos
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-lg border border-slate-700 transition-colors flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Entrar em Contacto
          </a>
        </div>
      </div>
    </section>
  );
};