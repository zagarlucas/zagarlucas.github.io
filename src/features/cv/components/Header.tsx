import { CVData } from '@/types/cv';

interface HeaderProps {
    data: CVData;
}

export const Header = ({ data }: HeaderProps) => {
    return (
        <header className="mb-12 border-b border-slate-800 pb-8">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                {data.name}
            </h1>
            <p className="text-2xl text-slate-300 font-medium">{data.title}</p>
            <div className="flex flex-col gap-2 mt-4 text-slate-400 text-sm">
                <div className="flex gap-4">
                    <span>📍 {data.location}</span>
                    <span>✉️ {data.email}</span>
                </div>
                <div className="flex gap-4">
                    {data.phone && <span>📞 {data.phone}</span>}
                    {data.age && <span>🎂 {data.age}</span>}
                </div>
                <div className="flex gap-4">
                    {data.links.github && <a href={data.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>}
                    {data.links.linkedin && <a href={data.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>}
                </div>
            </div>
            {data.about && <p className="mt-6 text-slate-400 max-w-2xl leading-relaxed">{data.about}</p>}
        </header>
    );
};
