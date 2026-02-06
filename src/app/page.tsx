import Link from 'next/link';
import { CV_DATA } from '@/lib/cv-data';
import { HeaderAlt } from '@/features/cv/components/HeaderAlt';
import { ExperienceAlt } from '@/features/cv/components/ExperienceAlt';
import { SkillsAlt } from '@/features/cv/components/SkillsAlt';
import { Education } from '@/features/cv/components/Education';
import { ValueProposition } from '@/features/cv/components/ValueProposition';
import { AboutMe } from '@/features/cv/components/AboutMe';

export default function cv() {
    return (
        <main className="min-h-screen bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-cyan-900/40 via-zinc-950 to-zinc-950 text-zinc-300 font-sans selection:bg-cyan-500/30">



            <div className="max-w-5xl mx-auto p-6 md:p-12 lg:p-20">
                <HeaderAlt data={CV_DATA} />

                <AboutMe data={CV_DATA} />

                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
                    <div className="order-2 lg:order-1 space-y-16">
                        <ValueProposition data={CV_DATA} />
                        <ExperienceAlt data={CV_DATA} />
                        <Education data={CV_DATA} />
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="sticky top-12">
                            <SkillsAlt data={CV_DATA} />
                        </div>
                    </div>
                </div>
            </div>


        </main>
    );
}
