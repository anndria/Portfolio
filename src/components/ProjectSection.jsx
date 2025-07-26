import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "ManPro VTS",
        description: "This project is a comprehensive vehicle tracking system that allows users to monitor and manage their vehicles in real-time, providing features such as location tracking, route optimization, and geofencing.",
        image: "/projects/project1.png",
        tags: ["React", "Laravel", "MySQL"],
        demoUrl: "https://tracker.manpromanagement.com/login",
    },
    {
        id: 2,
        title: "Business Consultant Website",
        description: "This project showcases a professional website for business consultant, featuring responsive and interactive designs and showcasing services and expertise.",
        image: "/projects/project2.png",
        tags: ["WordPress"],
        demoUrl: "https://christophergonzalezfrancisco.com/",
    },
    {
        id: 3,
        title: "IproTECH",
        description: "It is a ecommerce website for a fire protection company, offering products and services related to fire safety, including fire extinguishers, alarms, and safety equipment.",
        image: "/projects/project3.png",
        tags: ["WordPress", "WooCommerce"],
        demoUrl: "https://iprotech.site/",
    },
    {
        id: 4,
        title: "FLEXPERIENCE",
        description: "Flexperience is a web-based platform designed to address the challenges associated with locating fitness centers and related services in Davao City.",
        image: "/projects/project4.png",
        tags: ["Figma", "HTML", "Tailwind CSS", "Express.js", "JavaScript", "MySQL"],
        demoUrl: "https://www.figma.com/design/s9lmsuUUb6BEIpNaewhyX3/fitness-gym?node-id=0-1&t=eiSYdXTC0vg9srer-1",
    },
    {
        id: 5,
        title: "WageGauge Payroll System",
        description: "This project is a payroll system that provides subscription-based plans, giving businesses the option to subscribe on a monthly or annual basis, with different tiers available.",
        image: "/projects/project5.png",
        tags: ["Figma", "HTML", "Tailwind CSS", "Express.js", "JavaScript", "MySQL"],
        demoUrl: "https://www.figma.com/design/LF4zxmPTXuQa4iVJvXE1XT/Untitled?node-id=0-1&t=MSHS7XraJxQmygVu-1",
    },
]

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary"> Projects</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my projects. Each project was carefully created with focus on quality, detail, user performance and experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group  bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full border bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>


                                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-xs mb-4 text-justify">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink size={20} /></a>
                                        <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={20} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}