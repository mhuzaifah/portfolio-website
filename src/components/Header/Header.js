'use client';
import './index.css';
import React, { useState, useEffect } from 'react';
import '../../styles/main.css';
import { Button, Container, Group, Anchor, Image } from '@mantine/core';
import Logo from '/public/logo.png';
import NextImage from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faLaptop, faBars } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [isOpened, setIsOpened] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const modes = ['light', 'dark', 'system'];
    const [currentMode, setCurrentMode] = useState(0);

    const handleModeChange = () => {
        setCurrentMode((prevMode) => (prevMode + 1) % modes.length);
    };

    const renderIcon = () => {
        switch (modes[currentMode]) {
            case 'light':
                return <FontAwesomeIcon icon={faSun} size='xl' />;
            case 'dark':
                return <FontAwesomeIcon icon={faMoon} size='xl' />;
            case 'system':
                return <FontAwesomeIcon icon={faLaptop} size='xl' />;
            default:
                return null;
        }
    };

    return (
        <header className={`header ${isScrolled ? 'headerScrolled' : ''}`}>
            <Container className="headerContainer">
                {/* Desktop Navigation */}
                <Group className="headerOptions desktopNav">
                    <Anchor href="#" size="sm">
                        <Image className="logo" component={NextImage} src={Logo} alt="Logo" />
                    </Anchor>
                    <Anchor className="option" href="#about" variant="text" size="sm">
                        About
                    </Anchor>
                    <Anchor className="option" href="#projects" variant="text" size="sm">
                        Projects
                    </Anchor>
                    <Anchor className="option" href="#contact" variant="text" size="sm">
                        Contact
                    </Anchor>
                </Group>

                {/* Mobile Navigation */}
                <div className="mobileNav">
                    <Anchor href="#" size="sm">
                        <Image className="logo" component={NextImage} src={Logo} alt="Logo" />
                    </Anchor>
                    <div className="mobileControls">
                        <Button
                            isOpened={isOpened}
                            onClick={() => setIsOpened(!isOpened)}
                            aria-label="Toggle navigation"
                            className="headerButton"
                        >
                            <FontAwesomeIcon icon={faBars} size='xl' />
                        </Button>
                        <Button
                            onClick={handleModeChange}
                            className='headerButton'
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={modes[currentMode]}
                                    initial={{ y: -30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 30, opacity: 0 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {renderIcon()}
                                </motion.div>
                            </AnimatePresence>
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpened && (
                        <motion.div
                            className="mobileMenu"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Anchor className="option" href="#about" variant="text" size="sm" onClick={() => setIsOpened(false)}>
                                About
                            </Anchor>
                            <Anchor className="option" href="#projects" variant="text" size="sm" onClick={() => setIsOpened(false)}>
                                Projects
                            </Anchor>
                            <Anchor className="option" href="#contact" variant="text" size="sm" onClick={() => setIsOpened(false)}>
                                Contact
                            </Anchor>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Desktop Theme Button */}
                <Button
                    onClick={handleModeChange}
                    className='headerButton desktopThemeButton'
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={modes[currentMode]}
                            initial={{ y: -30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 30, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {renderIcon()}
                        </motion.div>
                    </AnimatePresence>
                </Button>
            </Container>
        </header>
    );
}
