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
                        <span className="text-2xl">⚡</span>
                        <h2 className="text-2xl font-bold text-slate-100">Tech Stack</h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {data.skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1.5 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-lg text-sm hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-200 transition-all cursor-default"
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
                                <span className="text-2xl">🧠</span>
                                <h2 className="text-2xl font-bold text-slate-100">Soft Skills</h2>
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
                                <h2 className="text-xl font-bold text-slate-100">Idiomas</h2>
                            </div>
                            <div className="space-y-2">
                                {data.languages.map((lang) => (
                                    <div key={lang} className="text-slate-400 text-sm flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-slate-600 rounded-full" />
                                        {lang}
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
