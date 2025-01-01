'use client';
import '../styles/main.css';
import React, {useEffect} from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';

export default function App() {

    useEffect(() => {
        document.title = "Muhammad Huzaifah Portfolio";
    }, []);

    return (
        <main>
            <section id="hero">
                <Hero />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </main>
    );
}
