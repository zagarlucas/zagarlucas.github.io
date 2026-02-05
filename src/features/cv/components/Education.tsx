import { CVData } from '@/types/cv';

interface EducationProps {
    data: CVData;
}

export const Education = ({ data }: EducationProps) => {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold bg-slate-800 inline-block px-3 py-1 rounded-md mb-6">Formación Académica</h2>
            <div className="space-y-6">
                {data.education.map((edu, index) => (
                    <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-start border-b border-slate-800 pb-4 last:border-0 hover:bg-slate-900/30 p-2 rounded transition-colors">
                        <div>
                            <h3 className="text-lg font-bold text-slate-100">{edu.degree}</h3>
                            <p className="text-slate-400">{edu.institution}</p>
                            {edu.description && <p className="text-slate-500 text-sm mt-1">{edu.description}</p>}
                        </div>
                        <span className="text-blue-400 font-mono text-sm mt-2 md:mt-0 bg-blue-900/20 px-2 py-1 rounded">{edu.year}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};
