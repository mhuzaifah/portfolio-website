'use client';
import './index.css';
import { Container, Group, Text } from '@mantine/core';
import {FaGithub, FaLinkedin} from "react-icons/fa";

export default function Footer() {

    const socials = [
        { icon: <FaLinkedin style={{width:'25px', height:'25px'}}/>, link: "https://www.linkedin.com/in/muhammadhuzaifahswe/" },
        { icon: <FaGithub style={{width:'25px', height:'25px'}}/>, link: "https://github.com/mhuzaifah" }
    ];

    return (
        <footer className='footer'>
            <Container className='footerContainer'>
                <Group>
                    <Text size="sm">© 2024 Muhammad Huzaifah. All rights reserved.</Text>
                    <Text size="sm">Based in Canada 🇨🇦</Text>
                </Group>
                <Group style={{display: 'flex', justifyContent:'space-between', alignItems: 'center', gap:'1rem'}}>
                    {socials.map((item, index) => (
                        <a key={index} target="_blank" rel="noreferrer" href={item.link} style={{color: "whitesmoke"}}>
                            {item.icon}
                        </a>
                    ))}
                </Group>
            </Container>
        </footer>
    );
}
