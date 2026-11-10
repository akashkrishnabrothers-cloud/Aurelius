import React, { useState } from 'react';
import { Mail, CheckCircle, Sparkles } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 800);
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#FBF8F2] to-[#F0E9DE]/60 py-16 sm:py-20 border-t border-[#E9E1D6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-[#C99A42]" />
          <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-[#C99A42] uppercase">
            Exclusive Invitations
          </span>
          <Sparkles className="w-4 h-4 text-[#C99A42]" />
        </div>

        <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#090807]">
          An Experience Worth Savoring
        </h2>

        <p className="mt-3 text-sm text-[#77716A] max-w-lg mx-auto">
          Subscribe to the Aurelius Gazette for private dining salon invitations, seasonal truffle menus, and sommelier cellar releases.
        </p>

        {status === 'success' ? (
          <div className="mt-8 p-6 bg-[#FFFDF9] rounded-2xl border border-[#C99A42]/40 max-w-md mx-auto shadow-sm animate-fadeIn">
            <CheckCircle className="w-8 h-8 text-[#C99A42] mx-auto mb-2" />
            <h3 className="font-playfair text-lg font-bold text-[#090807]">
              Welcome to the Aurelius Reserve
            </h3>
            <p className="text-xs text-[#77716A] mt-1">
              Your invitation has been registered. Look for our seasonal dining catalog in your inbox.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto">
            <div className="relative flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-[#FFFDF9] p-2 rounded-2xl sm:rounded-full border border-[#E9E1D6] shadow-sm focus-within:border-[#C99A42]">
              <div className="flex items-center w-full pl-3 pr-2 py-1">
                <Mail className="w-4 h-4 text-[#77716A] mr-2 flex-shrink-0" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your email address..."
                  className="w-full text-xs sm:text-sm text-[#090807] placeholder-[#77716A]/70 bg-transparent focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto px-6 py-3 rounded-xl sm:rounded-full text-xs font-semibold uppercase tracking-wider text-[#090807] bg-gradient-to-r from-[#D9AD58] to-[#C99A42] hover:brightness-105 active:scale-95 transition-all shadow-sm whitespace-nowrap"
              >
                {status === 'loading' ? 'Joining...' : 'Subscribe'}
              </button>
            </div>

            {status === 'error' && (
              <p className="text-xs text-red-600 mt-2">{errorMessage}</p>
            )}

            <p className="text-[11px] text-[#77716A]/70 mt-3">
              We respect your privacy. Unsubscribe at any time with a single click.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
