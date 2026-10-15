import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer id="contact" className="border-t border-slate-800 bg-slate-950 py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Envie uma mensagem diretamente por aqui ou entre em contacto através das redes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Informações Diretas */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contactos Diretos</h3>
            
            <a
              href="mailto:danniel_mathos98@outlook.com"
              className="flex items-center gap-3 bg-slate-900 border border-slate-800 p-4 rounded-xl text-slate-300 hover:border-blue-500/50 transition-colors"
            >
              <Mail className="w-5 h-5 text-blue-400 shrink-0" />
              <span className="text-sm">danniel_mathos98@outlook.com</span>
            </a>

            <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 p-4 rounded-xl text-slate-300">
              <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
              <span className="text-sm">Remoto / Brasil</span>
            </div>
          </div>

          {/* Formulário com a chave Web3Forms */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
            {/* >>> É EXATAMENTE AQUI QUE A SUA ACCESS KEY ENTRA <<< */}
            <input type="hidden" name="access_key" value="74b1a138-ab29-4aa9-b289-d4d213aee4b4" />

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="name">
                Nome
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="O seu nome"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="email">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="seu.email@exemplo.com"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="message">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Como posso ajudar no seu projeto?"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
            >
              {status === 'sending' ? (
                'A enviar...'
              ) : (
                <>
                  Enviar Mensagem
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="flex items-center gap-2 text-emerald-400 text-sm pt-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Mensagem enviada com sucesso!</span>
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-2 text-rose-400 text-sm pt-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Ocorreu um erro ao enviar. Tente novamente mais tarde.</span>
              </div>
            )}
          </form>
        </div>

        <p className="text-xs text-slate-500 text-center pt-8 border-t border-slate-900">
          © {new Date().getFullYear()} Desenvolvido com React, TypeScript e Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};