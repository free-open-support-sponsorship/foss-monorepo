import { forwardRef, useMemo } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const loaderWrapper = cva('relative inline-grid items-center justify-center', {
    variants: {
        size: {
            small: 'h-3 w-3',
            medium: 'h-4 w-4',
            large: 'h-4 w-4',
        },
    },
    defaultVariants: {
        size: 'medium',
    },
});

const loader = cva(
    'absolute h-full w-full animate-spin rounded-full border-2 border-solid border-r-transparent border-t-transparent',
    {
        variants: {
            intent: {
                primary: 'border-b-black border-l-black',
                secondary: 'border-b-white border-l-white',
                success: 'border-b-black border-l-black',
                danger: 'border-b-white border-l-white',
                warning: 'border-b-black border-l-black',
            },
        },
        defaultVariants: {
            intent: 'primary',
        },
    },
);

export interface LoaderProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof loaderWrapper>,
        VariantProps<typeof loader> {
    children?: never;
}

export const Loader = forwardRef<HTMLSpanElement, LoaderProps>(function Loader(
    { className, size, intent, ...props },
    ref,
): JSX.Element {
    const [wrapperStyles, loaderStyles] = useMemo(() => {
        return [twMerge(loaderWrapper({ size, className })), twMerge(loader({ intent }))];
    }, [className, intent, size]);

    return (
        <span className={wrapperStyles} ref={ref} {...props}>
            <div className={loaderStyles} />
        </span>
    );
});
