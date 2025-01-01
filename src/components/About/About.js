'use client';
import './index.css';
import {useState} from "react";
import {Container, Card, Text, Title, Group, Flex} from '@mantine/core';
import { FaToolbox, FaCode, FaTools } from 'react-icons/fa';
import { TbKeyframesFilled } from "react-icons/tb";
import GradientIcon from "../GradientIcon";
import MiniCard from "@/components/MiniCard";

const InfoCard = ({data}) => (
    <Card className='infoCard'>
        <Card.Section className='infoCardHeader'>
            <GradientIcon Icon={data.icon} size={data.iconSize} />
            <Title className='infoCardTitle'>{data.title}</Title>
        </Card.Section>
        <Text className='infoCardText'>
            {data.subHeading}
        </Text>
        <Container className='infoCardContent'>
            {data.content.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    style={{ width:'100%', display:'flex', justifyContent:'space-evenly', alignItems: 'center' }}
                >
                    {row.map((item, colIndex) => (
                        <MiniCard
                            key={`${rowIndex}-${colIndex}`}
                            icon={item.icon}
                            title={item.title}
                        />
                    ))}
                </div>
            ))}
        </Container>
    </Card>
);

export default function About() {
    const [whatIDo] = useState({
        title: 'What I Can Do',
        icon: FaToolbox,
        iconSize: '2.35rem',
        subHeading: 'I create high-quality solutions to tackle a variety of challenges with precision and innovation',
        content: [
            [
                { icon: '/aboutIcons/fullstackLogo.png', title: 'Full Stack' },
                { icon: '/aboutIcons/mobileLogo.png', title: 'Mobile' },
                { icon: '/aboutIcons/uiuxLogo.png', title: 'UI/UX' }
            ],
            [
                { icon: '/aboutIcons/blockchainLogo.png', title: 'Blockchain' },
                { icon: '/aboutIcons/mlLogo.png', title: 'Machine Learning' }
            ]
        ]
    });

    const [languages] = useState({
        title: 'Languages',
        icon: FaCode,
        iconSize: '2.5rem',
        subHeading: 'I code fluently in multiple programming languages, giving me the versatility to solve problems efficiently',
        content: [
            [
                { icon: '/aboutIcons/javaLogo.png', title: 'Java' },
                { icon: '/aboutIcons/pythonLogo.png', title: 'Python' },
                { icon: '/aboutIcons/jsLogo.png', title: 'JavaScript' },
                { icon: '/aboutIcons/htmlLogo.png', title: 'HTML' }
            ],
            [
                { icon: '/aboutIcons/cssLogo.png', title: 'CSS' },
                { icon: '/aboutIcons/swiftLogo.png', title: 'Swift' },
                { icon: '/aboutIcons/sqlLogo.png', title: 'SQL' },
                { icon: '/aboutIcons/cLogo.png', title: 'C' }
            ]
        ]
    });

    const [frameworks] = useState({
        title: 'Frameworks',
        icon: TbKeyframesFilled,
        iconSize: '2.75rem',
        subHeading: 'I leverage powerful frameworks to build scalable, reliable, and modern applications tailored to any need',
        content: [
            [
                { icon: '/aboutIcons/reactLogo.png', title: 'React' },
                { icon: '/aboutIcons/flaskLogo.png', title: 'Flask' },
                { icon: '/aboutIcons/postgresLogo.png', title: 'PostgreSQL' },
                { icon: '/aboutIcons/springbootLogo.png', title: 'SpringBoot' }
            ],
            [
                { icon: '/aboutIcons/swiftuiLogo.png', title: 'SwiftUI' },
                { icon: '/aboutIcons/nodeLogo.png', title: 'NodeJS' },
                { icon: '/aboutIcons/mongodbLogo.png', title: 'MongoDB' },
                { icon: '/aboutIcons/firebaseLogo.png', title: 'Firebase' }
            ]
        ]
    });

    const [devTools] = useState({
        title: 'Development Tools',
        icon: FaTools,
        iconSize: '2.05rem',
        subHeading: 'I utilize cutting-edge tools to streamline workflows, enhance productivity, and ensure the highest standards in my work',
        content: [
            [
                { icon: '/aboutIcons/dockerLogo.png', title: 'Docker' },
                { icon: '/aboutIcons/gcpLogo.png', title: 'GCP' },
                { icon: '/aboutIcons/gitLogo.png', title: 'Git' },
                { icon: '/aboutIcons/figmaLogo.png', title: 'Figma' }
            ],
            [
                { icon: '/aboutIcons/umlLogo.png', title: 'UML' },
                { icon: '/aboutIcons/pmdLogo.png', title: 'PMD' },
                { icon: '/aboutIcons/kanbanLogo.png', title: 'Kanban' },
                { icon: '/aboutIcons/junitLogo.png', title: 'JUnit' }
            ]
        ]
    });

    return (
        <div className="aboutContainer">
            <Container className="aboutContent">
                <Group className="aboutHeader">
                    <Title className="aboutTitle">About Me</Title>
                    <Text className="aboutDescription">
                        I am an ambitious developer that strives for iterative & incremental progression. I have a
                        unique background that has prepared me to be a team player who communicates effectively, faces
                        problems analytically, and has the technical skills to tackle various challenges.
                    </Text>
                </Group>
                <Flex className="infoCardsContainer">
                    <InfoCard data={whatIDo} />
                    <InfoCard data={languages} />
                    <InfoCard data={frameworks} />
                    <InfoCard data={devTools} />
                </Flex>
            </Container>
        </div>
    );
}