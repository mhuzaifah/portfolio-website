import '../styles/globals.css';
import { MantineProvider } from '@mantine/core';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import {Open_Sans} from "next/font/google";
import emailjs from "@emailjs/browser";

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['500']
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any"/>
                <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <title></title>
            </head>
            <body className={openSans.className}>
            <MantineProvider withGlobalStyles withNormalizeCSS>
                <Header/>
                {children}
                <Footer/>
            </MantineProvider>
            </body>
        </html>
    );
}

