import type { Metadata } from 'next';
import { cx } from 'class-variance-authority';
import { Inter } from 'next/font/google';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Free open-source support and sponsorship',
    description: 'Free open-source support and sponsorship',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <html lang="en">
            <body className={cx(inter.className, 'bg-zinc-800 text-white')}>{children}</body>
        </html>
    );
}
