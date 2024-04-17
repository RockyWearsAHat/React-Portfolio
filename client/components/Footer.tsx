import { FC, ReactNode } from "react";
import { FaGithub } from "react-icons/fa";

const footerIcons: Array<{ icon: ReactNode; href: string; title: string }> = [
  {
    icon: <FaGithub />,
    href: "https://github.com/RockyWearsAHat",
    title: "My GitHub",
  },
];

const Footer: FC = (): ReactNode => {
  return (
    <footer className="w-screen bg-emerald-800 flex align-center justify-center fixed bottom-0 z-10">
      <div className="text-2xl text-white p-5">
        {footerIcons.map((icon) => (
          <a
            key={icon.title}
            className="hover:text-emerald-200 transition-all duration-200 ease-in-out"
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
