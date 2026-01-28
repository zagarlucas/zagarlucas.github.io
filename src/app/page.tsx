import { Header } from '@/features/cv/components/Header';
import { Experience } from '@/features/cv/components/Experience';
import { Skills } from '@/features/cv/components/Skills';

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-950 text-white p-8 sm:p-24 selection:bg-blue-500/30">
            <div className="max-w-4xl mx-auto">
                <Header />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-2">
                        <Experience />
                    </div>
                    <div>
                        <Skills />
                        <section className="mt-12">
                            <h2 className="text-xl font-bold mb-4">Sobre mí</h2>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Desarrollador apasionado por crear arquitectura de software limpia, escalable y eficiente.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
