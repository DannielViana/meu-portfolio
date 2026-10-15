import { Mail, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <footer id="contact" className="border-t border-slate-800 bg-slate-950 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold text-white tracking-tight">Vamos trabalhar juntos?</h2>
        <p className="text-slate-400 max-w-xl mx-auto text-base">
          Estou disponível para novas oportunidades, projetos freelance ou conversas sobre tecnologia.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-300">
          <a
            href="mailto:o-seu-email@gmail.com"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg"
          >
            <Mail className="w-4 h-4 text-blue-400" />
            o-seu-email@gmail.com
          </a>

          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg">
            <MapPin className="w-4 h-4 text-blue-400" />
            Remoto / Brasil
          </div>
        </div>

        <p className="text-xs text-slate-500 pt-8 border-t border-slate-900">
          © {new Date().getFullYear()} Desenvolvido com React, TypeScript e Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};