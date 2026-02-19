import { CVData } from '@/types/cv';

interface EducationProps {
    data: CVData;
}

export const Education = ({ data }: EducationProps) => {
    return (
        <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
                <span className="shrink-0">
                    <img src="/media/gorro-de-graduacion.png" alt="Educación" className="w-8 h-8 object-contain brightness-0 invert" />
                </span>
                <h2 className="text-3xl font-bold text-zinc-100 uppercase tracking-tight">Formación Académica</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-stretch">
                {data.education.map((edu, index) => (
                    <div key={index} className="group relative p-7 rounded-[2.5rem] bg-gradient-to-b from-zinc-900/50 to-zinc-950/30 border border-zinc-800/60 hover:border-cyan-500/40 transition-all duration-500 flex flex-col h-full shadow-lg hover:shadow-cyan-500/5 justify-center">
                        <div className="flex justify-between items-center mb-6 w-full">
                            <div className="space-y-1.5 flex-grow">
                                <h3 className="text-xl font-bold text-zinc-100 leading-tight">{edu.degree}</h3>
                                <p className="text-cyan-500/90 font-bold tracking-[0.05em] text-sm uppercase">{edu.institution}</p>
                            </div>

                            <span className="shrink-0 text-[0.7rem] font-black text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.15)] flex items-center justify-center min-w-[50px]">
                                {edu.year}
                            </span>
                        </div>

                        {edu.description && (
                            <div className="border-t border-zinc-800/50 pt-5 mt-5">
                                <p className="text-zinc-400 text-[0.95rem] leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity pr-8">
                                    {edu.description}
                                </p>
                            </div>
                        )}

                        {/* Certificate Link - Bottom Right */}
                        {edu.certificateUrl && (
                            <div className="absolute bottom-6 right-6">
                                <a
                                    href={edu.certificateUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-10 h-10 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 text-cyan-400 hover:bg-cyan-500 hover:text-white hover:border-cyan-400 hover:scale-110 transition-all shadow-xl group/btn"
                                    title="Ver Certificado"
                                >
                                    <svg className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};
