import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
}

const ProjectCard = ({ title, description, techStack, githubUrl, demoUrl }: ProjectCardProps) => {
  return (
    <div className="glass-card group hover:scale-[1.02] flex flex-col h-full overflow-hidden">
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-blue transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs font-semibold bg-white/10 text-white rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ExternalLink size={18} />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
