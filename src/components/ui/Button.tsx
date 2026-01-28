'use client';

import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

export const Button = ({ className, variant = 'primary', ...props }: ButtonProps) => {
    return (
        <button
            className={cn(
                'px-4 py-2 rounded-lg font-medium transition-all active:scale-95',
                variant === 'primary' && 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20',
                variant === 'secondary' && 'bg-slate-800 hover:bg-slate-700 text-slate-200',
                className
            )}
            {...props}
        />
    );
};
