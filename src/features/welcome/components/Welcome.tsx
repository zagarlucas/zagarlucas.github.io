'use client';

import { Button } from '@/components/ui/Button';

export const Welcome = () => {
    return (
        <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Arquitectura Next.js Ready
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Esta es una estructura basada en features, diseñada para ser escalable y fácil de testear.
            </p>
            <div className="flex gap-4 justify-center">
                <Button onClick={() => alert('¡Funciona!')}>Explorar</Button>
                <a
                    href="https://nextjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors"
                >
                    Documentación
                </a>
            </div>
        </div>
    );
};
