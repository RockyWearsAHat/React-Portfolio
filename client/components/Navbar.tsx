import { FC, ReactNode } from 'react';

interface linkObj {
  name: string;
  href: string;
}

const links: Array<linkObj> = [
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

const Navbar: FC = (): ReactNode => {
  return (
    <nav className="z-10 flex w-[100vw] overflow-hidden bg-emerald-800">
      <h1 className="p-5 text-white sm:text-3xl">Alex</h1>
      <ul className="ml-auto flex list-none justify-center gap-4 p-5 align-middle text-white sm:gap-10">
        {links.map((link) => (
          <li className="flex flex-col justify-center" key={link.name}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
