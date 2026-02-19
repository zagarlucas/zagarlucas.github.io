import { CV_DATA } from '@/lib/cv-data';
import { HeaderAlt } from '@/features/cv/components/HeaderAlt';
import { ExperienceAlt } from '@/features/cv/components/ExperienceAlt';
import { SkillsAlt } from '@/features/cv/components/SkillsAlt';
import { Education } from '@/features/cv/components/Education';
import { ValueProposition } from '@/features/cv/components/ValueProposition';
import { AboutMe } from '@/features/cv/components/AboutMe';
import { Languages } from '@/features/cv/components/Languages';

export default function cv() {
    return (
        <main className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950 text-zinc-300 font-sans selection:bg-cyan-500/30">

            <div className="max-w-6xl mx-auto p-6 md:p-12 lg:p-16">
                <HeaderAlt data={CV_DATA} />

                <div className="grid grid-cols-1 lg:grid-cols-[2.2fr_1fr] gap-16 mt-12">
                    {/* MAIN COLUMN */}
                    <div className="order-2 lg:order-1 flex flex-col space-y-20">
                        <SkillsAlt data={CV_DATA} />
                        <ValueProposition data={CV_DATA} />
                        <ExperienceAlt data={CV_DATA} />
                        <Education data={CV_DATA} />
                    </div>

                    {/* SIDEBAR */}
                    <div className="order-1 lg:order-2 lg:sticky lg:top-12 h-fit flex flex-col space-y-16 items-center lg:items-start">
                        <AboutMe data={CV_DATA} />
                        <Languages data={CV_DATA} />
                    </div>
                </div>
            </div>

        </main>
    );
}
