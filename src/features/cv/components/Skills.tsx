import { CVData } from '@/types/cv';

interface SkillsProps {
    data: CVData;
}

export const Skills = ({ data }: SkillsProps) => {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold bg-slate-800 inline-block px-3 py-1 rounded-md mb-6">Habilidades Técnicas</h2>
            <div className="flex flex-wrap gap-2 mb-8">
                {data.skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-3 py-1 bg-slate-900 border border-slate-700 text-slate-300 rounded-full text-sm hover:border-blue-500 transition-colors"
                    >
                        {skill}
                    </span>
                ))}
            </div>

            {data.softSkills && data.softSkills.length > 0 && (
                <>
                    <h2 className="text-2xl font-bold bg-slate-800 inline-block px-3 py-1 rounded-md mb-6">Competencias Personales</h2>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {data.softSkills.map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1 bg-slate-900 border border-slate-700 text-emerald-300 rounded-full text-sm hover:border-emerald-500 transition-colors"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </>
            )}

            {data.languages && data.languages.length > 0 && (
                <>
                    <h2 className="text-2xl font-bold bg-slate-800 inline-block px-3 py-1 rounded-md mb-6">Idiomas</h2>
                    <div className="flex flex-wrap gap-2">
                        {data.languages.map((lang) => (
                            <span
                                key={lang}
                                className="px-3 py-1 bg-slate-900 border border-slate-700 text-blue-300 rounded-full text-sm"
                            >
                                {lang}
                            </span>
                        ))}
                    </div>
                </>
            )}
        </section>
    );
};
