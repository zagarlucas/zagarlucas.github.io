import { CVData } from '@/types/cv';

interface ValuePropositionProps {
    data: CVData;
}

export const ValueProposition = ({ data }: ValuePropositionProps) => {
    if (!data.valueProposition || data.valueProposition.length === 0) return null;

    return (
        <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
                <span className="shrink-0">
                    <img src="/media/propuesta-de-valor.png" alt="Propuesta de valor" className="w-8 h-8 object-contain brightness-0 invert" />
                </span>
                <h2 className="text-3xl font-bold text-zinc-100">¿Qué puedo aportar?</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
                {data.valueProposition.map((item, index) => (
                    <div
                        key={index}
                        className="p-5 bg-gradient-to-br from-cyan-500/5 to-transparent border border-cyan-500/20 rounded-2xl hover:border-cyan-500/40 transition-all flex gap-4 items-start"
                    >
                        <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-cyan-400 text-xs font-bold">{index + 1}</span>
                        </div>
                        <p className="text-zinc-300 font-medium leading-relaxed">
                            {item}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
