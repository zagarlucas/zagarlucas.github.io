import { CV_DATA } from '@/lib/cv-data';

export const Experience = () => {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold bg-slate-800 inline-block px-3 py-1 rounded-md mb-6">Experiencia</h2>
            <div className="space-y-8">
                {CV_DATA.experience.map((exp, index) => (
                    <div key={index} className="relative pl-6 border-l border-slate-700">
                        <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-2" />
                        <h3 className="text-xl font-bold text-slate-100">{exp.role}</h3>
                        <p className="text-blue-400 text-sm font-semibold">{exp.company} | {exp.period}</p>
                        <p className="mt-2 text-slate-400 leading-relaxed">{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
