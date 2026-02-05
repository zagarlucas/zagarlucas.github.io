import { CV_DATA_V2 } from '@/lib/cv-data-v2';
import { Header } from '@/features/cv/components/Header';
import { Experience } from '@/features/cv/components/Experience';
import { Skills } from '@/features/cv/components/Skills';
import { Education } from '@/features/cv/components/Education';

export default function CVPageV2() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 p-8 md:p-16 max-w-4xl mx-auto font-sans selection:bg-emerald-500/30">
            <div className="fixed top-4 right-4 text-xs text-emerald-600 font-mono">VERSION 2 (OPTIMIZED 2026)</div>
            <Header data={CV_DATA_V2} />
            <Experience data={CV_DATA_V2} />
            <Education data={CV_DATA_V2} />
            <Skills data={CV_DATA_V2} />
        </main>
    );
}
