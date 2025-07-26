import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Send } from 'lucide-react';
import { cn } from '../lib/utils';
import { useToast } from '../hooks/use-toast';
import { useState } from 'react';

export const ContactSection = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://formsubmit.co/chellyssargente2002@gmail.com', {
                method: 'POST',
                body: new FormData(e.target),
            });

            if (response.ok) {
                setFormData({ name: '', email: '', message: '' });
                toast({
                    title: 'Message Sent!',
                    description: 'Thank you for reaching out! I will get back to you as soon as possible.',
                });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('FormSubmit error:', error);
            toast({
                title: 'Error',
                description: 'Failed to send message. Please try again later.',
                variant: 'destructive',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Get In <span className="text-primary"> Touch</span> </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    If you have any questions, want to collaborate, or just want to say hello, feel free to reach out! I'm always open to discussing new projects,
                    creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-medium'>Email</h4>
                                    <a href="mailto:chellyssargente2002@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'>
                                        chellyssargente2002@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-medium'>Phone</h4>
                                    <a href="tel:+639475784135" className='text-muted-foreground hover:text-primary transition-colors'>
                                        +(63) 947 578 4135
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-medium'>Location</h4>
                                    <a className='text-muted-foreground hover:text-primary transition-colors'>
                                        Davao City, Davao Del Sur, Philippines
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='pt-8'>
                            <h4 className='font-medium mb-4'>Connect With Me</h4>
                            <div className='flex space-x-4 justify-start'>
                                <a href="https://www.linkedin.com/in/chellsey-anndria-argente" target="_blank" rel="noopener noreferrer">
                                    <Linkedin />
                                </a>
                                <a href="https://www.instagram.com/mooommmaaaiii" target="_blank" rel="noopener noreferrer">
                                    <Instagram />
                                </a>
                                <a href="https://www.facebook.com/nndrrgnt" target="_blank" rel="noopener noreferrer">
                                    <Facebook />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='bg-card p-8 rounded-lg shadow-xs'>
                        <h3 className='text-2xl font-semibold mb-6'>Send a message</h3>

                        <form className='space-y-6' onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor='name' className="block text-sm font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Enter your name"
                                    onChange={handleChange}
                                    value={formData.name}
                                />
                            </div>

                            <div>
                                <label htmlFor='email' className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Enter your email"
                                    onChange={handleChange}
                                    value={formData.email}
                                />
                            </div>

                            <div>
                                <label htmlFor='message' className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Enter message"
                                    onChange={handleChange}
                                    value={formData.message}
                                />
                            </div>

                            <button
                                type='submit'
                                disabled={isSubmitting}
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};