"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, Send, MapPin, Phone } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        // Mock submission
        setTimeout(() => {
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 3000);
        }, 1500);
    };

    return (
        <div className="container mx-auto px-6 py-24 animate-fade-in relative z-10">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                        Get in <span className="text-accent-blue font-light">Touch</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Have a question or want to work together? Feel free to reach out through the form below or via any of my social links.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <div className="space-y-8 animate-slide-up opacity-0 fill-mode-forwards">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-white">Contact Information</h2>
                            <p className="text-gray-400">
                                I'm always open to discussing new projects, creative ideas, or being part of your vision.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-accent-blue/20 transition-colors">
                                    <Mail className="text-accent-blue" size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Email</p>
                                    <p className="text-white hover:text-accent-blue transition-colors">akanksha@example.com</p>
                                </div>
                            </div>
                            
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-accent-purple/20 transition-colors">
                                    <Linkedin className="text-accent-purple" size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">LinkedIn</p>
                                    <p className="text-white hover:text-accent-purple transition-colors">linkedin.com/in/akanksha</p>
                                </div>
                            </a>

                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-white/20 transition-colors">
                                    <Github className="text-white" size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">GitHub</p>
                                    <p className="text-white hover:text-accent-blue transition-colors">github.com/akanksha</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-card animate-slide-up opacity-0 fill-mode-forwards delay-150">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400" htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue transition-all"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400" htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue transition-all resize-none"
                                    placeholder="How can I help you?"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status !== "idle"}
                                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                                    status === "success" 
                                    ? "bg-green-500 text-white" 
                                    : "bg-accent-blue text-white hover:bg-accent-purple"
                                }`}
                            >
                                {status === "idle" && <>Send Message <Send size={18} /></>}
                                {status === "sending" && "Sending..."}
                                {status === "success" && "Message Sent!"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
