import { clsx } from 'clsx';
import type { PropsWithChildren } from 'react';
import styles from './card.module.scss';

export function Card({
    className,
    children,
}: PropsWithChildren<{
    className?: string;
}>): JSX.Element {
    return <p className={clsx(styles.card, className)}>{children}</p>;
}
