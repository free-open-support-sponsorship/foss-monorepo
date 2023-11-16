import { forwardRef, useMemo } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { Loader } from './loader';

const button = cva(
    [
        'h-10',
        'grid',
        'gap-2',
        'grid-flow-col',
        'place-items-center',
        'max-w-fit',
        'transition-transform',
        'active:scale-95',
        'disabled:pointer-events-none',
        'disabled:opacity-50',
        'disabled:transition-none',
    ],
    {
        variants: {
            intent: {
                primary: 'bg-sky-500 text-black hover:bg-sky-400',
                secondary: 'bg-slate-600 hover:bg-slate-500',
                success: 'bg-emerald-500 text-black hover:bg-emerald-400',
                danger: 'bg-rose-700 hover:bg-rose-600',
                warning: 'bg-amber-600 text-black hover:bg-amber-500',
            },
            size: {
                small: 'h-8 min-w-[4rem] gap-1 rounded-lg px-3 text-xs',
                medium: 'min-w-[5rem] rounded-xl px-4 text-sm',
                large: 'h-12 min-w-[6rem] rounded-[0.875rem] px-6 text-base',
            },
            radius: {
                none: 'rounded-none',
                small: 'rounded-lg',
                medium: 'rounded-xl',
                large: 'rounded-[0.875rem]',
                full: 'rounded-full',
            },
            fullWidth: {
                true: 'w-full max-w-none',
                false: '',
            },
            isLoading: {
                true: 'cursor-wait opacity-80 transition-none',
                false: '',
            },
        },
        defaultVariants: {
            intent: 'primary',
            size: 'medium',
            fullWidth: false,
            isLoading: false,
        },
    },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    { className, intent, size, radius, type = 'button', fullWidth, isLoading, children, ...props },
    ref,
): JSX.Element {
    const styles = useMemo(() => {
        return twMerge(button({ intent, radius, size, fullWidth, isLoading, className }));
    }, [className, fullWidth, intent, isLoading, radius, size]);

    return (
        <button className={styles} ref={ref} type={type} {...props}>
            {isLoading ? <Loader intent={intent} size={size} /> : null}
            {children}
        </button>
    );
});
