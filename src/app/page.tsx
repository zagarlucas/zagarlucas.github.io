import Link from 'next/link';
import { CV_DATA } from '@/lib/cv-data';
import { Header } from '@/features/cv/components/Header';
import { Experience } from '@/features/cv/components/Experience';
import { Skills } from '@/features/cv/components/Skills';
import { Education } from '@/features/cv/components/Education';

export default function cv() {
    return (
        <main className="min-h-screen bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-cyan-900/40 via-zinc-950 to-zinc-950 text-zinc-300 font-sans selection:bg-blue-500/30 pb-20">

            {/* Floating Print Button */}
            <div className="fixed bottom-8 right-8 z-50">
                <Link
                    href="/cv/print"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold shadow-lg shadow-blue-900/40 hover:scale-105 transition-all"
                    title="Versión para imprimir (A4)"
                >
                    🖨️ <span className="hidden md:inline">Imprimir / PDF</span>
                </Link>
            </div>

            <div className="max-w-5xl mx-auto p-6 md:p-12 lg:p-20">
                <Header data={CV_DATA} />

                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
                    <div className="order-2 lg:order-1">
                        <Experience data={CV_DATA} />
                        <Education data={CV_DATA} />
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="sticky top-12">
                            <Skills data={CV_DATA} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
