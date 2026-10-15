import { Cpu } from 'lucide-react';
import { skillsData } from '../data/skillsData';
import type { SkillCategory } from '../types';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto bg-slate-900/50">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="flex items-center gap-2 text-blue-400 mb-2">
          <Cpu className="w-5 h-5" />
          <span className="text-sm font-semibold tracking-wide uppercase">O que utilizo</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Competências Técnicas</h2>
        <div className="w-16 h-1 bg-blue-500 rounded mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillsData.map((group: SkillCategory) => (
          <div
            key={group.category}
            className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-6 hover:border-slate-600 transition-colors"
          >
            <h3 className="text-xl font-bold text-blue-400 mb-6 border-b border-slate-700/60 pb-3">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {group.items.map((skill: string) => (
                <li
                  key={skill}
                  className="bg-slate-900/90 text-slate-200 text-sm px-3.5 py-1.5 rounded-lg border border-slate-700/50 hover:border-blue-500/40 hover:text-white transition-colors"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};