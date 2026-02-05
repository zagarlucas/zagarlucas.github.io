export interface CVLink {
    github?: string;
    linkedin?: string;
    email?: string;
    [key: string]: string | undefined;
}

export interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    description: string | string[]; // Allow array for bullet points
}

export interface EducationItem {
    institution: string;
    degree: string;
    year: string;
    description?: string; // Added for extra details like GPA
}

export interface CVData {
    name: string;
    title: string;
    email: string;
    location: string;
    phone?: string;
    age?: string;
    about: string;
    skills: string[];
    experience: ExperienceItem[];
    education: EducationItem[];
    links: CVLink;
    languages?: string[]; // Added languages
    softSkills?: string[]; // Added soft skills
}
