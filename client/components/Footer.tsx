import { FC, ReactNode } from 'react';
import { FaGithub } from 'react-icons/fa';

const footerIcons: Array<{ icon: ReactNode; href: string; title: string }> = [
  {
    icon: <FaGithub />,
    href: 'https://github.com/RockyWearsAHat',
    title: 'My GitHub',
  },
];

const Footer: FC = (): ReactNode => {
  return (
    <footer className="align-center footer bottom-0 z-10 flex w-[100vw] justify-center bg-emerald-800">
      <div className="p-5 text-2xl text-white">
        {footerIcons.map((icon) => (
          <a
            key={icon.title}
            className="transition-all duration-200 ease-in-out hover:text-emerald-200"
            href={icon.href}
            title={icon.title}
            target="_blank"
          >
            {icon.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
