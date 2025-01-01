'use client';
import './index.css';
import {Container, Card, Text, Title, Group, Image, Badge} from '@mantine/core';
import Masonry from 'react-masonry-css';

const ProjectCard = ({ data }) => {
    return (
        <Card onClick={() => window.open(data.link)} className="projectCard">
            <div className="projectCardImageContainer">
                <Image
                    src={data.image}
                    alt={data.title}
                    className='projectCardImage'
                />
                <div className="projectCardOverlay">
                    <Title order={3} className="projectCardTitle">{data.title}</Title>
                    <Text className="projectCardDescription">{data.description}</Text>
                    <div className="projectCardTech">
                        {data.technologies.split(', ').map((tech, idx) => (
                            <Badge
                                key={idx}
                                className="techBadge"
                                variant="filled"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default function Projects() {

    const projects = [
        {
            title: "The Maze Runner",
            image: "/projectImages/mazerunner.png",
            description: "A Maze Solver",
            technologies: "ReactJS, SpringBoot, Java, HTML/CSS, JUnit",
            link: "https://github.com/mhuzaifah/The-Maze-Runner"
        },
        {
            title: "Auto Sniper Bot",
            image: "/projectImages/autosniperbot.png",
            description: "A bot for automating trading tokens on DEXs within Solana Blockchain",
            technologies: "TypeScript, NodeJS, XtermJS",
            link: "https://github.com/mhuzaifah/Auto-Sniper-Sol-Trading-Bot"
        },
        {
            title: "Ihsan",
            image: "/projectImages/ihsan.png",
            description: "An app to help Muslims with their religious practices",
            technologies: "Swift, SwiftUI, UIKit",
            link: "https://apps.apple.com/ca/app/ihsan/id6498401513"
        },
        {
            title: "Island Drone Rescue",
            image: "/projectImages/islandrescue.png",
            description: "An Island Rescue simulator",
            technologies: "Java, JUnit, PMD",
            link: "https://github.com/mhuzaifah/Drone-Rescue-Mission"
        },
        {
            title: "iFooty",
            image: "/projectImages/ifooty.png",
            description: "Stay up to date with the beautiful game with in depth statistics, fixture predictions, & latest news summaries",
            technologies: "ReactJS, SpringBoot, PostgreSQL, Python",
            link: "https://github.com/mhuzaifah/iFooty"
        },
        {
            title: "Recycling Bot",
            image: "/projectImages/recyclingsystem.png",
            description: "Automated recycling sorting bot",
            technologies: "Python, Raspberry PI, Quanser Robotics",
            link: "https://www.notion.so/Revenge-of-the-Recycling-System-6842f32697154d6e97929c90830d29c6"
        },
        {
            title: "Warfare Sim",
            image: "/projectImages/warsim.png",
            description: "2D war simulation",
            technologies: "Processing",
            link: "https://github.com/mhuzaifah/Medieval-Warfare-Simulation"
        },
        {
            title: "Pantry Tracker",
            image: "/projectImages/pantrytracker.png",
            description: "Track pantry items and generate recipes",
            technologies: "NextJS, Firebase, MUI",
            link: "https://pantry-tracker-opal-eta.vercel.app/"
        }
    ];

    const breakpointColumns = {
        default: 2,
        768: 1
    };

    return (
        <div className="projectsContainer">
            <Container className="projectsContent">
                <Group className="projectsHeader">
                    <Title className="projectsTitle">My Projects</Title>
                    <Text className="projectsDescription">
                        Here are some projects I have worked on
                    </Text>
                </Group>
                <Masonry
                    breakpointCols={breakpointColumns}
                    className="masonry-grid"
                    columnClassName="masonry-grid-column"
                >
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} data={project} />
                    ))}
                </Masonry>
            </Container>
        </div>
    );
}
