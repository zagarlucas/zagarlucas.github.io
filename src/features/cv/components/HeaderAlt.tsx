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
                    {data.phone && (
                        <a
                            href={`https://wa.me/${data.phone.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2.5 bg-cyan-600 hover:bg-green-500 text-white rounded-full text-sm font-bold transition-all shadow-lg shadow-cyan-900/20 hover:scale-105 flex items-center gap-2.5"
                        >
                            <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 448 512">
                                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.8 69.4 27.2 106.2 27.2h.1c122.3 0 222-99.6 222-222 0-59.3-23-115.1-65.1-157.1zM223.9 445.2c-33.1 0-65.7-8.9-94.1-25.7l-6.7-4-69.8 18.3L71.6 365l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 54 81.2 54.1 130.5 0 101.7-82.8 184.5-184.6 184.5zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.4-8.6-44.6-27.5-16.4-14.7-27.5-32.8-30.7-38.4-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.6-6.5 8.3-9.7 2.8-3.2 3.7-5.5 5.6-9.2 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.7z" />
                            </svg>
                            WhatsApp
                        </a>
                    )}

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

                    <Link
                        href="/cv/print"
                        className="px-6 py-2.5 bg-zinc-900/50 hover:bg-zinc-800 text-cyan-400 rounded-full text-sm font-bold transition-all border border-cyan-500/30 hover:border-cyan-400 flex items-center gap-2"
                    >
                        <span>📄</span> Versión PDF
                    </Link>
                </div>


            </div>
        </header>
    );
};
