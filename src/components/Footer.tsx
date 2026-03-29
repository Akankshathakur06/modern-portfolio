import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full py-12 bg-background border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <Link href="/" className="text-xl font-bold tracking-tighter hover:text-accent-blue transition-colors">
                            AKANKSHA <span className="text-accent-blue inline-block animate-pulse">.</span>
                        </Link>
                        <p className="mt-2 text-sm text-gray-500">
                            &copy; {new Date().getFullYear()} Akanksha Thakur. All Rights Reserved.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:akanksha@example.com" className="text-gray-400 hover:text-white transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
