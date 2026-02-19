import { CVData } from '@/types/cv';

interface LanguagesProps {
    data: CVData;
}

export const Languages = ({ data }: LanguagesProps) => {
    if (!data.languages || data.languages.length === 0) return null;

    return (
        <section className="mb-12">
            <h3 className="text-xl font-bold text-zinc-100 mb-6 flex items-center gap-3 uppercase tracking-wider">
                <span className="shrink-0 p-2 bg-zinc-900 rounded-xl border border-zinc-800">
                    <img src="/media/idioma-extranjero.png" alt="Idiomas" className="w-5 h-5 object-contain brightness-0 invert opacity-80" />
                </span>
                Idiomas
            </h3>
            <div className="space-y-4">
                {data.languages.map((lang) => (
                    <div
                        key={lang}
                        className="p-5 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl text-zinc-300 text-sm flex items-center gap-4 hover:border-cyan-500/30 transition-all group backdrop-blur-md"
                    >
                        <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.6)] group-hover:scale-125 transition-transform" />
                        <span className="font-semibold tracking-wide">{lang}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};
