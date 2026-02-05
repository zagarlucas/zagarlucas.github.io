import { CV_DATA_V1 } from '@/lib/cv-data-v1';
import { Header } from '@/features/cv/components/Header';
import { Experience } from '@/features/cv/components/Experience';
import { Skills } from '@/features/cv/components/Skills';
import { Education } from '@/features/cv/components/Education';

export default function CVPageV1() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 p-8 md:p-16 max-w-4xl mx-auto font-sans selection:bg-blue-500/30">
            <div className="fixed top-4 right-4 text-xs text-slate-600 font-mono">VERSION 1 (LITERAL)</div>
            <Header data={CV_DATA_V1} />
            <Experience data={CV_DATA_V1} />
            <Education data={CV_DATA_V1} />
            <Skills data={CV_DATA_V1} />
        </main>
    );
}
