import { CVData } from '@/types/cv';

interface SkillsProps {
    data: CVData;
}

export const SkillsAlt = ({ data }: SkillsProps) => {
    return (
        <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
                <span className="shrink-0">
                    <img src="/media/pantalla-del-ordenador.png" alt="Habilidades Tech" className="w-8 h-8 object-contain brightness-0 invert" />
                </span>
                <h2 className="text-3xl font-bold text-zinc-100 uppercase tracking-tight">HABILIDADES</h2>
            </div>

            <div className="grid grid-cols-1 gap-8 mb-12">
                {data.categorizedSkills?.map((category) => (
                    <div
                        key={category.name}
                        className="p-6 bg-zinc-800/20 border border-zinc-700/30 rounded-2xl hover:bg-zinc-800/40 transition-all group"
                    >
                        <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full group-hover:scale-150 transition-transform shrink-0 mt-1" />
                            {category.name}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 bg-zinc-900/40 border border-zinc-800 text-zinc-300 rounded-lg text-sm hover:border-cyan-500/50 hover:text-cyan-200 transition-all cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 gap-8">
                {/* Soft Skills */}
                {data.softSkills && data.softSkills.length > 0 && (
                    <div>
                        <h3 className="text-lg font-bold text-zinc-300 mb-6 flex items-center gap-2 uppercase tracking-tight">
                            <span className="shrink-0">
                                <img src="/media/cerebro.png" alt="Soft Skills" className="w-6 h-6 object-contain brightness-0 invert" />
                            </span>
                            Soft Skills
                        </h3>
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

                {/* Idiomas */}
                {data.languages && data.languages.length > 0 && (
                    <div>
                        <h3 className="text-lg font-bold text-zinc-300 mb-6 flex items-center gap-2 uppercase tracking-tight">
                            <span className="shrink-0">
                                <img src="/media/idioma-extranjero.png" alt="Idiomas" className="w-6 h-6 object-contain brightness-0 invert" />
                            </span>
                            Idiomas
                        </h3>
                        <div className="space-y-3">
                            {data.languages.map((lang) => (
                                <div
                                    key={lang}
                                    className="p-3 bg-zinc-800/10 border border-zinc-700/20 rounded-xl text-zinc-300 text-sm flex items-center gap-3"
                                >
                                    <div className="w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                                    <span>{lang}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
