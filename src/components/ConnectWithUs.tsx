import React from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  // Twitter,
  // Instagram,
  Link as LinkIcon,
} from 'lucide-react';



type Social = {
  id: string;
  name: string;
  href: string;
  Icon: React.ComponentType<any>;
};

const socials: Social[] = [
  { id: 'github', name: 'GitHub', href: 'https://github.com/cse23-mora', Icon: Github },
  { id: 'linkedin', name: 'LinkedIn', href: 'https://www.linkedin.com/company/cse-23/', Icon: Linkedin },
  { id: 'facebook', name: 'Facebook', href: 'https://www.facebook.com/cse23mora/', Icon: Facebook },
  // { id: 'twitter', name: 'Twitter', href: 'https://twitter.com/yourname', Icon: Twitter },
  // { id: 'instagram', name: 'Instagram', href: 'https://instagram.com/yourname', Icon: Instagram },
  { id: 'email', name: 'Email', href: 'mailto:contact@cse23.org', Icon: Mail },
];

const container = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06, when: 'beforeChildren' } },
};

const item = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 18 } },
};

export default function ConnectWithUs({ title = 'Connect with me' }: { title?: string }) {
  return (
    <section className="relative p-6 flex flex-col items-center justify-center overflow-hidden bg-transparent text-white">
     

      <motion.ul
        className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {socials.map((s) => (
          <motion.li key={s.id} variants={item}>
          <a
  href={s.href}
  target="_blank"
  rel="noreferrer"
  className="group p-10 flex items-center justify-between h-full border border-gray-200 hover:scale-105 transition-transform duration-500 ease-in-out backdrop-blur-sm focus:outline-none focus:border-transparent rounded-xl dark:border-gray-800 dark:focus:border-transparent bg-indigo-400 dark:bg-indigo-700 dark:bg-opacity-10 bg-clip-padding backdrop-filter bg-opacity-10"
>
  {/* Left icon */}
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 flex items-center justify-center rounded-full text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
      <s.Icon size={24} />
    </div>
    <div className="flex flex-col text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
      <span className="font-semibold text-lg">{s.name}</span>
      <span className="text-sm opacity-70">Click to open</span>
    </div>
  </div>

  {/* Right link icon */}
  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
    <LinkIcon size={18} />
  </div>
</a>

          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}