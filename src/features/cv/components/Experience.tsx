import { CVData } from '@/types/cv';

interface ExperienceProps {
    data: CVData;
}

export const Experience = ({ data }: ExperienceProps) => {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold bg-slate-800 inline-block px-3 py-1 rounded-md mb-6">Experiencia</h2>
            <div className="space-y-8">
                {data.experience.map((exp, index) => (
                    <div key={index} className="relative pl-6 border-l border-slate-700">
                        <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-2" />
                        <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                        <p className="text-blue-400 text-sm font-semibold">{exp.company} | {exp.period}</p>
                        <div className="mt-2 text-slate-400 leading-relaxed">
                            {Array.isArray(exp.description) ? (
                                <ul className="list-disc list-inside space-y-1">
                                    {exp.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
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
