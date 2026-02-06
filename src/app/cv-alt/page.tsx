import Link from 'next/link';
import { CV_DATA } from '@/lib/cv-data';
import { HeaderAlt } from '@/features/cv/components/HeaderAlt';
import { ExperienceAlt } from '@/features/cv/components/ExperienceAlt';
import { SkillsAlt } from '@/features/cv/components/SkillsAlt';
import { Education } from '@/features/cv/components/Education';
import { ValueProposition } from '@/features/cv/components/ValueProposition';
import { Footer } from '@/features/cv/components/Footer';

export default function cvAlt() {
    return (
        <main className="min-h-screen bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-cyan-900/40 via-zinc-950 to-zinc-950 text-zinc-300 font-sans selection:bg-cyan-500/30">

            {/* Header / Meta / SEO context - Hidden visually but good for indexers */}
            <title>Lucas Zagar – Perfil Administrativo Digital | Ventas & Odoo</title>
            <meta name="description" content="Perfil administrativo/comercial con enfoque digital y capacitación en desarrollo web jr. Especialista en ventas, Odoo, SEO y automatización." />

            {/* Floating Home Button */}
            <div className="fixed top-8 left-8 z-50">
                <Link
                    href="/"
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 hover:border-cyan-500/50 text-zinc-400 hover:text-cyan-400 rounded-full text-sm font-semibold transition-all shadow-xl"
                >
                    ← Volver
                </Link>
            </div>

            <div className="max-w-5xl mx-auto p-6 md:p-12 lg:p-20">
                <HeaderAlt data={CV_DATA} />

                <div className="space-y-20">
                    <ValueProposition data={CV_DATA} />

                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16">
                        <div>
                            <ExperienceAlt data={CV_DATA} />
                            <Education data={CV_DATA} />
                        </div>

                        <aside>
                            <div className="sticky top-12">
                                <SkillsAlt data={CV_DATA} />
                            </div>
                        </aside>
                    </div>
                </div>

                <Footer data={CV_DATA} />
            </div>
        </main>
    );
}
