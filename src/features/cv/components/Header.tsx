import { CV_DATA } from '@/lib/cv-data';

export const Header = () => {
    return (
        <header className="mb-12 border-b border-slate-800 pb-8">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                {CV_DATA.name}
            </h1>
            <p className="text-2xl text-slate-300 font-medium">{CV_DATA.title}</p>
            <div className="flex gap-4 mt-4 text-slate-400 text-sm">
                <span>📍 {CV_DATA.location}</span>
                <span>✉️ {CV_DATA.email}</span>
                <a href={CV_DATA.links.github} target="_blank" className="hover:text-blue-400 transition-colors">GitHub</a>
                <a href={CV_DATA.links.linkedin} target="_blank" className="hover:text-blue-400 transition-colors">LinkedIn</a>
            </div>
        </header>
    );
};
