import { CVData } from '@/types/cv';

interface ExperienceProps {
    data: CVData;
}

export const Experience = ({ data }: ExperienceProps) => {
    return (
        <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">💼</span>
                <h2 className="text-3xl font-bold text-slate-100">Experiencia Profesional</h2>
            </div>

            <div className="relative space-y-12">
                {/* Vertical Line */}
                <div className="absolute top-2 left-3.5 bottom-2 w-0.5 bg-gradient-to-b from-slate-700 via-slate-800 to-transparent" />

                {data.experience.map((exp, index) => (
                    <div key={index} className="relative pl-10 group">
                        {/* Timeline Dot */}
                        <div className="absolute left-[9px] top-2 w-4 h-4 rounded-full border-2 border-slate-900 bg-slate-600 group-hover:bg-blue-500 group-hover:scale-110 transition-all z-10" />

                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                            <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                                {exp.role}
                            </h3>
                            <span className="text-sm font-mono text-slate-500 bg-slate-900/50 px-2 py-1 rounded">
                                {exp.period}
                            </span>
                        </div>

                        <div className="text-emerald-400 font-medium mb-3 text-sm tracking-wide">
                            {exp.company}
                        </div>

                        <div className="text-slate-400 leading-relaxed text-sm md:text-base">
                            {Array.isArray(exp.description) ? (
                                <ul className="space-y-2">
                                    {exp.description.map((desc, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="mt-2 w-1 h-1 rounded-full bg-slate-600 shrink-0" />
                                            <span>{desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{exp.description}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
