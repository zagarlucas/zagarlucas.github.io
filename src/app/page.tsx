import Link from 'next/link';

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-200 gap-8 font-sans selection:bg-blue-500/30">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Resumé Versions
            </h1>
            <p className="text-slate-400">Select a version to view</p>
            <div className="flex gap-6">
                <Link
                    href="/cv/v1"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-blue-900/20"
                >
                    View Version 1 (Literal)
                </Link>
                <Link
                    href="/cv/v2"
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-emerald-900/20"
                >
                    View Version 2 (Optimized)
                </Link>
            </div>
        </main>
    );
}
