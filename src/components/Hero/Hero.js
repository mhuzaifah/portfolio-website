'use client';
import './index.css';
import {Container, Title, Text, Button, Group, Stack, Anchor} from '@mantine/core';
import Portrait from "@/components/Hero/Portrait";
import { FaLinkedin, FaGithub, FaAt } from "react-icons/fa";
import { HiSquare3Stack3D } from "react-icons/hi2";

export default function Hero() {
    const socials = [
        { icon: <FaLinkedin className='socialLink'/>, link: "https://www.linkedin.com/in/muhammadhuzaifahswe/" },
        { icon: <FaGithub className='socialLink'/>, link: "https://github.com/mhuzaifah" }
    ];

    const handleContactMeClick = () => {
        window.location.href = "mailto:mhuzaifah989@gmail.com";
    }

    return (
        <div className="heroContainer">
            <Container className="heroContent">
                <div className="heroMain">
                    <Portrait />
                    <Title className="heroTitle">
                        Hi, i'm <span className="shimmer">Muhammad Huzaifah</span> 👋 <br />
                        an aspiring <span className="shimmer">Software Engineer</span>
                    </Title>
                </div>
                <Text className='heroSubHeading'>
                    i am a Software Engineering student with a keen interest in <strong>Fullstack</strong>, <strong>Blockchain</strong>, and <strong>AI</strong> development to create meaningful & effective software.
                </Text>
                <div className="heroActions">
                    <div className="actionButtons">
                        <Anchor className='heroButton animatedBorder' onClick={handleContactMeClick}>
                            <FaAt size={16} />
                            <Text>Contact Me</Text>
                        </Anchor>
                        <Anchor className='heroButton animatedBorder' href="#projects">
                            <HiSquare3Stack3D size={16} />
                            <Text>View Projects</Text>
                        </Anchor>
                    </div>
                    <div className='divider'></div>
                    <Group className="socialLinks">
                        {socials.map((item, index) => (
                            <a
                                key={index}
                                target="_blank"
                                rel="noreferrer"
                                href={item.link}
                            >
                                {item.icon}
                            </a>
                        ))}
                    </Group>
                </div>
            </Container>
        </div>
    );
}