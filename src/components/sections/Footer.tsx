import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#03060A] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2 tracking-wide">
              KALAIYARASAN <span className="text-accent">K</span>
            </h2>
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} All rights reserved. Designed with precision.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <SocialIcon icon={Github} link="#" />
            <SocialIcon icon={Twitter} link="#" />
            <SocialIcon icon={Linkedin} link="#" />
            <SocialIcon icon={Instagram} link="#" />
          </div>

        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon, link }: { icon: any, link: string }) {
  return (
    <a 
      href={link} 
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-accent transition-all duration-300 hover:-translate-y-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="w-4 h-4" />
    </a>
  )
}
