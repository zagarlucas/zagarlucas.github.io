import { CVData } from '@/types/cv';

interface SkillsProps {
    data: CVData;
}

export const Skills = ({ data }: SkillsProps) => {
    return (
        <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Tech Skills */}
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="shrink-0">
                            <img src="media/pantalla-del-ordenador.png" alt="Habilidades Tech" className="w-8 h-8 object-contain brightness-0 invert" />
                        </span>
                        <h2 className="text-2xl font-bold text-zinc-100">Tech Stack</h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {data.skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1.5 bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 rounded-lg text-sm hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-200 transition-all cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Soft Skills & Languages */}
                <div className="space-y-8">
                    {data.softSkills && data.softSkills.length > 0 && (
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="shrink-0">
                                    <img src="media/cerebro.png" alt="Soft Skills" className="w-8 h-8 object-contain brightness-0 invert" />
                                </span>
                                <h2 className="text-2xl font-bold text-zinc-100">Soft Skills</h2>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {data.softSkills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-emerald-900/10 border border-emerald-900/30 text-emerald-400 rounded-lg text-sm hover:bg-emerald-900/20 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {data.languages && data.languages.length > 0 && (
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-2xl">🌍</span>
                                <h2 className="text-xl font-bold text-zinc-200">Idiomas</h2>
                            </div>
                            <div className="space-y-3">
                                {data.languages.map((lang) => (
                                    <div
                                        key={lang}
                                        className="p-3 bg-zinc-800/20 border border-zinc-700/30 rounded-xl text-zinc-300 text-sm flex items-start gap-3 hover:bg-zinc-800/40 transition-all cursor-default"
                                    >
                                        <div className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.5)] shrink-0 mt-1.5" />
                                        <span className="leading-tight">{lang}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
