'use client';
import '../styles/globals.css';
import { MantineProvider } from '@mantine/core';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import {Open_Sans} from "next/font/google";

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['500']
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={openSans.className}>
                <MantineProvider withGlobalStyles withNormalizeCSS>
                    <Header />
                        {children}
                    <Footer />
                </MantineProvider>
            </body>
        </html>
    );
}

