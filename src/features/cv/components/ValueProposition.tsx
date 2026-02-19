import { CVData } from '@/types/cv';

interface ValuePropositionProps {
    data: CVData;
}

export const ValueProposition = ({ data }: ValuePropositionProps) => {
    if (!data.valueProposition || data.valueProposition.length === 0) return null;

    return (
        <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
                <span className="shrink-0 p-2 bg-zinc-900 rounded-xl border border-zinc-800">
                    <img src="/media/propuesta-de-valor.png" alt="Propuesta de valor" className="w-6 h-6 object-contain brightness-0 invert" />
                </span>
                <h2 className="text-3xl font-bold text-zinc-100 uppercase tracking-tight">¿Qué puedo aportar?</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 items-stretch">
                {data.valueProposition.map((item, index) => (
                    <div
                        key={index}
                        className="group relative p-6 bg-gradient-to-br from-zinc-900/60 to-zinc-950/40 border border-zinc-800/60 rounded-[2rem] hover:border-cyan-500/40 transition-all duration-500 overflow-hidden flex flex-col h-full justify-center"
                    >
                        {/* Decorative background flare */}
                        <div className="absolute -right-6 -top-6 w-32 h-32 bg-cyan-500/5 rounded-full blur-[40px] group-hover:bg-cyan-500/15 transition-all duration-700" />

                        <div className="flex gap-5 items-center relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 group-hover:scale-110 transition-all duration-500 shadow-inner">
                                <span className="text-cyan-400 text-base font-bold">{index + 1}</span>
                            </div>
                            <p className="text-zinc-300 font-medium leading-[1.6] text-[1.05rem] group-hover:text-zinc-100 transition-colors">
                                {item}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
