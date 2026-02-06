import { CVData } from '@/types/cv';

interface AboutMeProps {
    data: CVData;
}

export const AboutMe = ({ data }: AboutMeProps) => {
    if (!data.about) return null;

    return (
        <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
                <span className="shrink-0">
                    <img src="/media/nino.png" alt="Yo" className="w-8 h-8 object-contain brightness-0 invert" />
                </span>
                <h2 className="text-3xl font-bold text-zinc-100">Sobre mí</h2>
            </div>
            <div className="p-8 bg-zinc-900/30 border border-zinc-800/50 rounded-3xl relative overflow-hidden group hover:border-cyan-500/30 transition-all">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-all" />

                <div className="relative z-10 space-y-4">
                    {data.about.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-zinc-300 leading-relaxed text-sm md:text-base selection:bg-cyan-500/30">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
};
