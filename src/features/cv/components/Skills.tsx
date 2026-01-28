import { CV_DATA } from '@/lib/cv-data';

export const Skills = () => {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold bg-slate-800 inline-block px-3 py-1 rounded-md mb-6">Habilidades</h2>
            <div className="flex flex-wrap gap-2">
                {CV_DATA.skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-3 py-1 bg-slate-900 border border-slate-700 text-slate-300 rounded-full text-sm hover:border-blue-500 transition-colors"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
};
