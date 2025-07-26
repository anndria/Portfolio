import { ArrowUp } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="py-9 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            <p className="text-sm text-muted-foreground pl-5">
                <span>Animation by Pedrotech.co. </span>&copy; {new Date().getFullYear()} Mumei. All rights reserved.
            </p>

            <a href="#home" className='p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors'>
                <ArrowUp size={20}/>
            </a>
        </footer>
    );
}