import { CVData } from '@/types/cv';

interface SkillsProps {
    data: CVData;
}

export const SkillsAlt = ({ data }: SkillsProps) => {
    return (
        <section className="mb-16">
            {/* Soft Skills Move to TOP */}
            {data.softSkills && data.softSkills.length > 0 && (
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="shrink-0">
                            <img src="/media/cerebro.png" alt="Soft Skills" className="w-8 h-8 object-contain brightness-0 invert" />
                        </span>
                        <h2 className="text-3xl font-bold text-zinc-100 uppercase tracking-tight">Soft Skills</h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {data.softSkills.map((skill) => (
                            <span
                                key={skill}
                                className="px-5 py-2.5 bg-emerald-500/5 border border-emerald-500/10 text-emerald-400 font-semibold rounded-2xl text-sm hover:bg-emerald-500/10 hover:border-emerald-500/20 transition-all cursor-default shadow-[0_0_20px_rgba(16,185,129,0.05)]"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Technical Skills */}
            <div className="flex items-center gap-3 mb-8">
                <span className="shrink-0">
                    <img src="/media/pantalla-del-ordenador.png" alt="Habilidades Tech" className="w-8 h-8 object-contain brightness-0 invert" />
                </span>
                <h2 className="text-3xl font-bold text-zinc-100 uppercase tracking-tight">HABILIDADES TÉCNICAS</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.categorizedSkills?.map((category) => (
                    <div
                        key={category.name}
                        className="p-6 bg-gradient-to-br from-zinc-900/40 to-black/20 border border-zinc-800/40 rounded-[2rem] hover:border-cyan-500/30 transition-all duration-300 group"
                    >
                        <h3 className="text-lg font-bold text-zinc-100 mb-5 flex items-center gap-3">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full group-hover:shadow-[0_0_12px_#06b6d4] transition-all" />
                            {category.name}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3.5 py-1.5 bg-zinc-950/60 border border-zinc-800/80 text-zinc-400 rounded-xl text-sm font-medium hover:border-cyan-500/40 hover:text-cyan-400 transition-all cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
