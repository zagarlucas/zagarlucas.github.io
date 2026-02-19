import { CVData } from '@/types/cv';

interface AboutMeProps {
    data: CVData;
}

export const AboutMe = ({ data }: AboutMeProps) => {
    if (!data.about) return null;

    return (
        <section className="group">
            <div className="flex items-center gap-3 mb-6">
                <span className="shrink-0">
                    <img src="/media/nino.png" alt="Yo" className="w-8 h-8 object-contain brightness-0 invert" />
                </span>
                <h2 className="text-xl font-bold text-zinc-100 uppercase tracking-wider">Sobre mí</h2>
            </div>
            <div className="p-6 bg-zinc-900/40 border border-zinc-800/60 rounded-[2rem] relative overflow-hidden transition-all duration-500 hover:border-cyan-500/20 shadow-lg">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/5 rounded-full blur-[30px]" />

                <div className="relative z-10 space-y-4">
                    {data.about.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-zinc-400 leading-relaxed text-[0.925rem] font-medium selection:bg-cyan-500/20">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
};
