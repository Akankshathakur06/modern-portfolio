"use client";

import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
    const projects = [
        {
            title: "AI Image Processor",
            description: "Developed a deep learning model to process and enhance digital images, specifically targeting noise reduction and super-resolution.",
            techStack: ["Python", "PyTorch", "OpenCV", "FastAPI"],
            githubUrl: "https://github.com",
            demoUrl: "https://demo.com"
        },
        {
            title: "E-Commerce Recommender",
            description: "Built a recommendation engine from scratch using collaborative filtering and content-based approaches for a mock e-commerce platform.",
            techStack: ["React", "Node.js", "MongoDB", "Scikit-learn"],
            githubUrl: "https://github.com",
            demoUrl: "https://demo.com"
        },
        {
            title: "Predictive Analytics Dashboard",
            description: "Real-time dashboard for visualizing market trends and predicting stock fluctuations based on historical data patterns.",
            techStack: ["Next.js", "TypeScript", "D3.js", "Python"],
            githubUrl: "https://github.com",
            demoUrl: "https://demo.com"
        },
        {
            title: "NLP Sentiment Analyzer",
            description: "A natural language processing tool that classifies social media sentiment using BERT-based models.",
            techStack: ["Python", "TensorFlow", "HuggingFace", "Flask"],
            githubUrl: "https://github.com",
            demoUrl: "https://demo.com"
        }
    ];

    return (
        <div className="container mx-auto px-6 py-24 animate-fade-in">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                        Featured <span className="text-accent-purple">Projects</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore some of my recent work in artificial intelligence, machine learning, and full-stack web development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={project.title} style={{ animationDelay: `${index * 150}ms` }} className="animate-slide-up opacity-0 fill-mode-forwards">
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
