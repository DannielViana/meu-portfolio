import { projects } from '../data/projectsData';
import type { Project } from '../types';
import { ExternalLink, FolderGit2 } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="flex items-center gap-2 text-blue-400 mb-2">
          <FolderGit2 className="w-5 h-5" />
          <span className="text-sm font-semibold tracking-wide uppercase">O meu trabalho</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Projetos em Destaque</h2>
        <div className="w-16 h-1 bg-blue-500 rounded mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: Project) => (
          <div
            key={project.id}
            className="bg-slate-800/60 rounded-xl border border-slate-700/60 p-6 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-3 hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-slate-900/80 text-blue-300 px-3 py-1 rounded-md border border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-slate-700/40">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                Repositório
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors ml-auto"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};