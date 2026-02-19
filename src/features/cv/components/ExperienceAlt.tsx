import { CVData } from '@/types/cv';

interface ExperienceProps {
    data: CVData;
}

export const ExperienceAlt = ({ data }: ExperienceProps) => {
    return (
        <section className="mb-16">
            <div className="flex items-center gap-3 mb-10">
                <span className="shrink-0 p-2 bg-zinc-900 rounded-xl border border-zinc-800">
                    <img src="/media/trabajo.png" alt="trabajo" className="w-6 h-6 object-contain brightness-0 invert" />
                </span>
                <h2 className="text-3xl font-bold text-zinc-100 uppercase tracking-tight">Experiencia Laboral</h2>
            </div>

            <div className="relative space-y-16 pl-2">
                {/* Vertical Line with Gradient */}
                <div className="absolute top-2 left-[1.125rem] bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-zinc-800/50 to-transparent" />

                {data.experience.map((exp, index) => (
                    <div key={index} className="relative pl-12 group">
                        {/* Interactive Timeline Dot */}
                        <div className="absolute left-0 top-1.5 w-[2.25rem] h-[2.25rem] flex items-center justify-center -translate-x-[40%]">
                            <div className="w-3 h-3 rounded-full bg-zinc-800 border-2 border-zinc-700 group-hover:bg-cyan-500 group-hover:border-cyan-400 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-500 z-10" />
                        </div>

                        <div className="flex items-center justify-between gap-4 mb-4">
                            <h3 className="text-xl md:text-2xl font-bold text-zinc-100 group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                                {exp.companyUrl ? (
                                    <a
                                        href={exp.companyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 decoration-cyan-500/20 underline-offset-4 hover:underline"
                                    >
                                        {exp.company}
                                        <svg className="w-4 h-4 opacity-0 group-hover:opacity-60 transition-opacity hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                ) : (
                                    exp.company
                                )}
                            </h3>

                            {/* CONSISTENT PREMIUM DATE STYLING */}
                            <span className="inline-flex items-center justify-center whitespace-nowrap px-4 py-1.5 bg-zinc-950/80 border border-zinc-800/80 rounded-full text-[10px] md:text-xs font-black text-cyan-400/90 tracking-wider uppercase shadow-sm group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5 transition-all duration-500 shrink-0">
                                {exp.period}
                            </span>
                        </div>

                        <div className="text-cyan-500/90 font-bold mb-5 text-lg tracking-wide uppercase border-l-2 border-cyan-500/20 pl-4 py-1">
                            {exp.role}
                        </div>

                        <div className="text-zinc-400 leading-relaxed text-[1.05rem] bg-zinc-900/10 p-5 rounded-3xl border border-transparent group-hover:bg-zinc-900/20 group-hover:border-zinc-800/30 transition-all duration-500">
                            {Array.isArray(exp.description) ? (
                                <ul className="space-y-3">
                                    {exp.description.map((desc, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-cyan-500/40 shrink-0 group-hover:bg-cyan-500/60 transition-colors" />
                                            <span className="group-hover:text-zinc-300 transition-colors">{desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="group-hover:text-zinc-300 transition-colors">{exp.description}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
