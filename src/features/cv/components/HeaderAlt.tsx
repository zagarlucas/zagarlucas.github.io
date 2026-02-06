import { CVData } from '@/types/cv';
import Link from 'next/link';
/* eslint-disable @next/next/no-img-element */

interface HeaderProps {
    data: CVData;
}

export const HeaderAlt = ({ data }: HeaderProps) => {
    return (
        <header className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16 relative">
            {/* Decorative Background Blur */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Image Section */}
            <div className="relative group shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-zinc-800 shadow-2xl relative z-10">
                    {data.image ? (
                        <img
                            src={data.image}
                            alt={data.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-4xl">
                            👋
                        </div>
                    )}
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-500 blur opacity-20 group-hover:opacity-40 transition duration-500" />
            </div>

            {/* Content Section */}
            <div className="text-center md:text-left flex-1 relative z-10">
                <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-b from-white via-zinc-400 to-zinc-500 bg-clip-text text-transparent mb-2 tracking-tight">
                    {data.name}
                </h1>

                {/* 1. PROFESSIONAL CLAIM */}
                <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-1 uppercase tracking-wider">
                    {data.title}
                </p>
                {data.professionalClaim && (
                    <p className="text-lg text-zinc-300 font-medium mb-4 italic">
                        {data.professionalClaim}
                    </p>
                )}

                <div className="flex flex-wrap justify-center md:justify-start gap-y-2 gap-x-6 text-zinc-400 text-sm mb-6">
                    <span className="flex items-center gap-2">
                        <img src="/media/ubicacion.png" alt="Ubicación" className="w-5 h-5 object-contain brightness-0 invert" /> {data.location}
                    </span>
                    <span className="flex items-center gap-2">
                        <img src="/media/correo-de-propaganda.png" alt="Correo" className="w-5 h-5 object-contain brightness-0 invert" /> {data.email}
                    </span>
                    {data.phone && (
                        <span className="flex items-center gap-2">
                            <img src="/media/telefono-inteligente.png" alt="Celular" className="w-5 h-5 object-contain brightness-0 invert" /> {data.phone}
                        </span>
                    )}
                    {data.driverLicense && (
                        <span className="flex items-center gap-2">
                            <img src="/media/licencia-de-conducir.png" alt="Licencia" className="w-5 h-5 object-contain brightness-0 invert" /> {data.driverLicense}
                        </span>
                    )}
                </div>

                {/* 2. CALL TO ACTION (CTA) */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                    <Link
                        href="/cv/print"
                        className="px-6 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full text-sm font-bold transition-all shadow-lg shadow-cyan-900/20 hover:scale-105 flex items-center gap-2"
                    >
                        <span>📄</span> Descargar CV (PDF)
                    </Link>

                    {data.links.linkedin && (
                        <a
                            href={data.links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-full text-sm font-bold transition-all border border-zinc-700 hover:border-cyan-500/50 flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            LinkedIn
                        </a>
                    )}

                    <a
                        href={`mailto:${data.email}`}
                        className="px-6 py-2.5 bg-zinc-900/50 hover:bg-zinc-800 text-cyan-400 rounded-full text-sm font-bold transition-all border border-cyan-500/30 hover:border-cyan-400 flex items-center gap-2"
                    >
                        <span>✉️</span> Contactar
                    </a>
                </div>

                {data.about && (
                    <div className="max-w-2xl">
                        <p className="text-zinc-400 leading-relaxed text-sm md:text-base border-l-2 border-cyan-500/50 pl-4 py-1">
                            {data.about}
                        </p>
                    </div>
                )}
            </div>
        </header>
    );
};
