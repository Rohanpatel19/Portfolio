import Tilt from 'react-parallax-tilt';

export default function Projects() {
    const projects = [
        {
            title: 'This Exact Portfolio',
            description: "Wait, you're looking at it right now! I built this responsive, glassmorphic portfolio using React and AI tools because a simple PDF resume just wouldn't cut it. It's basically project inception.",
            tech: ['React', 'Vite', 'CSS Variables', 'AI'],
            links: { github: 'https://github.com/Rohanpatel19', live: '#' }
        },
        {
            title: 'cricScore & cricSCORECARD',
            description: "Built a local live match scorecard and player statistics record system. Because tracking cricket stats by hand is so last century. I basically engineered myself a digital umpire.",
            tech: ['C++', 'Data Structures', 'Algorithms'],
            links: { github: 'https://github.com/Rohanpatel19/cricScore', live: '#' }
        },
        {
            title: 'Flask Railway To-Do',
            description: "A Python Flask app explicitly designed to remind me of all the things I'm procrastinating on. Hosted on Railway because even my chores deserve to be in the cloud.",
            tech: ['Python', 'Flask', 'Railway'],
            links: { github: 'https://github.com/Rohanpatel19/flask-railway-todo', live: '#' }
        }
    ];

    const handleLiveDemoClick = (e, link) => {
        if (link === '#') {
            e.preventDefault();
            alert("Project in progress 🚧 Live demo coming soon!");
        }
    };

    return (
        <section id="projects" className="container projects-section">
            <h2 className="section-title">
                Some Things I've Built
            </h2>
            <div className="projects-grid">
                {projects.map((project, idx) => (
                    <Tilt
                        key={idx}
                        className="tilt-wrapper"
                        tiltMaxAngleX={8}
                        tiltMaxAngleY={8}
                        scale={1.02}
                        transitionSpeed={400}
                        glareEnable={true}
                        glareMaxOpacity={0.15}
                        glareColor="lightblue"
                        glarePosition="all"
                        style={{ display: 'flex' }}
                    >
                        <div className="project-card glass" style={{ width: '100%' }}>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <ul className="project-tech-list">
                                    {project.tech.map((tech, i) => (
                                        <li key={i}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="project-links">
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">GitHub</a>
                                <a
                                    href={project.links.live}
                                    target={project.links.live !== '#' ? "_blank" : undefined}
                                    rel={project.links.live !== '#' ? "noopener noreferrer" : undefined}
                                    aria-label="External Link"
                                    onClick={(e) => handleLiveDemoClick(e, project.links.live)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </Tilt>
                ))}
            </div>
        </section>
    );
}
