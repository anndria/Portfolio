import { ThemeToggle } from '../components/ThemeToggle';
import { StarBackground } from '../components/StarBackground';
import { Navbar } from '../components/Navbar';
import { HomeSection } from '../components/HomeSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { ProjectSection } from '../components/ProjectSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background Effects */}
        <StarBackground />

        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content */}
        <main>
            <HomeSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
    </div>
    );
};