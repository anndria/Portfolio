import {Code} from "lucide-react";
import {User} from "lucide-react";
import {Briefcase} from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">I'm proficient in UI/UX design and Front-end development</h3>
                        <p className="text-muted-foreground">
                            Creating user-centered and user-friendly designs and building responsive and interactive websites is my forte.
                            Using HTML, CSS, and JavaScript with experience in frameworks like React, Vue and Nuxt.
                        </p>

                        <p className="text-muted-foreground">
                            I strive to create seamless user experiences across all devices.
                            I focus on understanding user needs and translating them into intuitive interfaces and
                            continuously improving my skills and staying updated with the latest design trends and technologies.
                            I believe in lifelong learning and actively seek opportunities to expand my knowledge.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button"> Get In Touch </a>
                            <a href="/Resume.pdf" target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"> Download Resume </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="text-primary h-6 w-6"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Started my journey in web development using plain HTML, CSS, and JavaScript.
                                        Now I continue to create responsive websites with modern frameworks like React, Vue, and Nuxt.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="text-primary h-6 w-6"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p lassName="text-muted-foreground">
                                        Designing user-centered interfaces that are not only visually appealing but also functional and easy to use.
                                        I focus on creating intuitive user experiences that meet the needs of users.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="text-primary h-6 w-6"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Work Experience</h4>
                                    <p className="text-muted-foreground">
                                        I have worked on various projects, collaborating with teams to deliver high-quality web applications during my on-the-job training.
                                        My experience includes working with a client to understand their requirements and translating them into effective solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}