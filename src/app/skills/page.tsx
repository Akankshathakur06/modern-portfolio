"use client";

import SkillCard from "@/components/SkillCard";
import { Code2, Globe, Brain, Terminal, Database, Laptop } from "lucide-react";

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming",
            icon: <Terminal className="text-accent-blue" />,
            skills: [
                { name: "Python", category: "Language", proficiency: 90 },
                { name: "C++", category: "Language", proficiency: 85 },
                { name: "C", category: "Language", proficiency: 80 },
                { name: "JavaScript", category: "Language", proficiency: 85 },
            ]
        },
        {
            title: "Web Development",
            icon: <Globe className="text-accent-purple" />,
            skills: [
                { name: "HTML/CSS", category: "Frontend", proficiency: 95 },
                { name: "React", category: "Frontend", proficiency: 85 },
                { name: "Next.js", category: "Frontend", proficiency: 80 },
                { name: "Tailwind CSS", category: "Styling", proficiency: 90 },
            ]
        },
        {
            title: "AI & ML Basics",
            icon: <Brain className="text-white" />,
            skills: [
                { name: "Machine Learning", category: "Core AI", proficiency: 75 },
                { name: "Data Analysis", category: "Data Science", proficiency: 80 },
                { name: "Neural Networks", category: "Deep Learning", proficiency: 70 },
                { name: "NumPy/Pandas", category: "Libraries", proficiency: 85 },
            ]
        }
    ];

    return (
        <div className="container mx-auto px-6 py-24 animate-fade-in">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                        Technical <span className="text-accent-blue">Expertise</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive overview of my technical skills and proficiency levels across various domains of software engineering and artificial intelligence.
                    </p>
                </div>

                <div className="space-y-24">
                    {skillCategories.map((category) => (
                        <div key={category.title} className="space-y-8">
                            <div className="flex items-center gap-4">
                                {category.icon}
                                <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {category.skills.map((skill) => (
                                    <SkillCard key={skill.name} {...skill} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
