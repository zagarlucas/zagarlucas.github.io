"use client";
/* eslint-disable @next/next/no-img-element */

import { CV_DATA } from '@/lib/cv-data';

export default function CVPrintPage() {
    return (
        <main className="bg-white min-h-screen w-full text-black font-sans p-0 print:p-0">
            <style jsx global>{`
                @media print {
                    @page {
                        margin: 0;
                        size: A4;
                    }
                    body {
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                        background-color: white !important;
                    }
                }
            `}</style>

            {/* Print Instructions - Hidden when printing */}
            <div className="print:hidden mb-8 p-4 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg text-center max-w-2xl mx-auto mt-8">
                <p className="font-bold">Vista de Impresión (A4 Optimizado)</p>
                <p className="text-sm">Presiona <kbd className="font-mono bg-white px-1 border rounded">Ctrl + P</kbd> para guardar como PDF.</p>
                <p className="text-xs mt-1 text-yellow-600">Asegúrate de seleccionar &quot;Márgenes: Ninguno&quot; y activar &quot;Gráficos de fondo&quot;.</p>
            </div>

            {/* A4 Container - 210mm wide x 297mm high (max) */}
            <div className="mx-auto bg-white print:w-[210mm] w-[210mm] min-h-[297mm] overflow-hidden relative">

                {/* Header Section - Compact & Restructured */}
                <header className="bg-slate-900 text-white p-8 pb-6 print:bg-slate-900 print:text-white relative overflow-hidden">
                    <div className="flex items-center gap-8 relative z-10">
                        {/* Profile Image moved to the LEFT */}
                        {CV_DATA.image && (
                            <div className="shrink-0">
                                <div className="w-24 h-24 rounded-full border-4 border-slate-800 overflow-hidden shadow-lg">
                                    <img
                                        src={CV_DATA.image}
                                        alt={CV_DATA.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="flex-1">
                            <h1 className="text-3xl font-black uppercase tracking-tight mb-1">{CV_DATA.name}</h1>
                            <p className="text-lg text-blue-200 font-medium">{CV_DATA.title}</p>

                            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs text-slate-300 font-semibold">
                                <span className="flex items-center gap-1.5 whitespace-nowrap">📍 {CV_DATA.location}</span>
                                <span className="flex items-center gap-1.5 whitespace-nowrap">✉️ {CV_DATA.email}</span>
                                {CV_DATA.phone && <span className="flex items-center gap-1.5 whitespace-nowrap">📞 {CV_DATA.phone}</span>}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content - Compact Grid */}
                <div className="grid grid-cols-[65%_35%] h-full">

                    {/* Left Column (Main) */}
                    <div className="p-8 pr-6 space-y-5">
                        {/* Profile */}
                        <section>
                            <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 mb-2 pb-1">Perfil Profesional</h2>
                            <p className="text-[11px] text-justify leading-snug text-slate-800">
                                {CV_DATA.about}
                            </p>
                        </section>

                        {/* Experience */}
                        <section>
                            <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 mb-2 pb-1">Experiencia Laboral</h2>
                            <div className="space-y-4">
                                {CV_DATA.experience.map((exp, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between items-baseline mb-0.5">
                                            <h3 className="font-bold text-slate-900 text-[12.5px]">{exp.role}</h3>
                                            <span className="text-[9px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded uppercase">{exp.period}</span>
                                        </div>
                                        <div className="text-[11px] text-blue-700 font-bold mb-1">{exp.company}</div>
                                        <div className="text-[10px] text-slate-700 leading-tight">
                                            {Array.isArray(exp.description) ? (
                                                <ul className="list-disc list-outside ml-3.5 space-y-1">
                                                    {exp.description.map((item, idx) => (
                                                        <li key={idx} className="pl-1">{item}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p>{exp.description}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Education */}
                        <section>
                            <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 mb-2 pb-1">Educación</h2>
                            <div className="space-y-3">
                                {CV_DATA.education.map((edu, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="font-bold text-slate-900 text-[12px]">
                                                {edu.certificateUrl ? (
                                                    <a href={edu.certificateUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 underline decoration-blue-200 decoration-1 underline-offset-2">
                                                        {edu.degree}
                                                    </a>
                                                ) : (
                                                    edu.degree
                                                )}
                                            </h3>
                                            <span className="text-[10px] text-slate-500 font-medium">{edu.year}</span>
                                        </div>
                                        <div className="text-[11px] text-slate-600">{edu.institution}</div>
                                        {edu.description && <div className="text-[10px] text-slate-500 italic mt-0.5">{edu.description}</div>}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Column (Sidebar) */}
                    <div className="bg-slate-50 p-6 pl-6 h-full border-l border-slate-100 print:bg-slate-50">
                        {/* Links section */}
                        <section className="mb-6">
                            <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 mb-3 pb-1">Enlaces y Redes</h2>
                            <div className="space-y-1.5">
                                {CV_DATA.links.linkedin && (
                                    <div className="text-[9px] bg-white p-2 rounded border border-slate-200 text-slate-700 shadow-sm flex flex-col">
                                        <span className="font-bold text-blue-700 uppercase tracking-tighter mb-0.5">LinkedIn</span>
                                        <span className="font-mono overflow-hidden text-ellipsis truncate">{CV_DATA.links.linkedin.replace(/^https?:\/\/(www\.)?/, '')}</span>
                                    </div>
                                )}
                                {CV_DATA.links.github && (
                                    <div className="text-[9px] bg-white p-2 rounded border border-slate-200 text-slate-700 shadow-sm flex flex-col">
                                        <span className="font-bold text-slate-900 uppercase tracking-tighter mb-0.5">GitHub</span>
                                        <span className="font-mono overflow-hidden text-ellipsis truncate">{CV_DATA.links.github.replace(/^https?:\/\/(www\.)?/, '')}</span>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Stack Tecnológico */}
                        <section className="mb-6">
                            <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 mb-3 pb-1">Stack Tecnológico</h2>
                            <div className="flex flex-wrap gap-1.5">
                                {CV_DATA.skills.map((skill, i) => (
                                    <span key={i} className="text-[9px] font-bold bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-700 shadow-sm uppercase">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Soft Skills */}
                        {CV_DATA.softSkills && (
                            <section className="mb-6">
                                <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 mb-3 pb-1">Competencias</h2>
                                <ul className="text-[10px] text-slate-700 space-y-1.5 font-medium">
                                    {CV_DATA.softSkills.map((skill, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Languages */}
                        {CV_DATA.languages && (
                            <section className="mb-6">
                                <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 mb-3 pb-1">Idiomas</h2>
                                <div className="space-y-1.5">
                                    {CV_DATA.languages.map((lang, i) => (
                                        <div key={i} className="text-[9px] font-semibold bg-white p-1.5 rounded border border-slate-200 text-slate-700 shadow-sm leading-tight text-center">
                                            {lang}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* QR Code Section - NEW */}
                        <div className="mt-auto pt-6 border-t border-slate-200 text-center">
                            <div className="mb-2 inline-block p-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                                <img
                                    src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://zagarlucas.github.io/"
                                    alt="QR Code CV Web"
                                    className="w-20 h-20"
                                />
                            </div>
                            <p className="text-[9px] font-bold text-slate-600 uppercase tracking-tighter leading-tight">
                                Escaneá para ver la<br />versión web e interactiva
                            </p>
                            <p className="text-[8px] text-blue-600 font-mono mt-1">zagarlucas.github.io</p>
                        </div>

                        <div className="mt-4 pt-4 border-t border-slate-200 text-center opacity-50">
                            <p className="text-[8px] text-slate-400 uppercase tracking-widest font-bold">Lucas Zagar - CV 2026</p>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
