import { CVData } from '@/types/cv';

interface EducationProps {
    data: CVData;
}

export const Education = ({ data }: EducationProps) => {
    return (
        <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">🎓</span>
                <h2 className="text-3xl font-bold text-zinc-100">Formación Académica</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {data.education.map((edu, index) => (
                    <div key={index} className="group p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-cyan-500/30 hover:bg-zinc-900/50 transition-all">
                        <div className="flex justify-between items-start mb-2">
                            {edu.certificateUrl ? (
                                <a
                                    href={edu.certificateUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link"
                                >
                                    <h3 className="text-lg font-bold text-zinc-100 group-hover/link:text-cyan-400 transition-colors flex items-center gap-2">
                                        {edu.degree}
                                        <span className="text-cyan-500 text-sm opacity-50 group-hover/link:opacity-100 transition-opacity">📜</span>
                                    </h3>
                                </a>
                            ) : (
                                <h3 className="text-lg font-bold text-zinc-100">{edu.degree}</h3>
                            )}
                            <span className="text-xs font-mono text-zinc-500 bg-zinc-950 px-2 py-1 rounded">{edu.year}</span>
                        </div>
                        <p className="text-cyan-400 font-medium text-sm mb-2">{edu.institution}</p>
                        {edu.description && <p className="text-zinc-500 text-sm">{edu.description}</p>}
                    </div>
                ))}
            </div>
        </section>
    );
};
