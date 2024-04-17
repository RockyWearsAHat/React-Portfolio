import { FC, ReactNode, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string | any;
  id?: string;
  linkTo: string;
  liveLink?: string;
  imgClasses?: string;
  gitIconClasses?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  id,
  linkTo,
  liveLink,
  imgClasses,
  gitIconClasses,
}): ReactNode => {
  useEffect(() => {
    const liveLinkElement = document.getElementById(`liveLink${id}`);
    if (!liveLinkElement) return;

    const titleElement = document.getElementById(`title${id}`)!;

    liveLinkElement.addEventListener('mouseenter', () => {
      titleElement.classList.replace('text-emerald-200', 'text-emerald-300');
    });

    liveLinkElement.addEventListener('mouseleave', () => {
      titleElement.classList.replace('text-emerald-300', 'text-emerald-200');
    });
  }, [id]);

  return (
    <div className="relative m-auto flex size-[400px] select-none transition-all duration-200 ease-in-out hover:scale-105">
      <FaGithub
        className={`pointer-events-none absolute left-[20px] top-[20px] z-10 ${gitIconClasses ? gitIconClasses : 'text-emerald-950'}`}
      />
      <a href={linkTo} target="_blank">
        <img
          draggable={false}
          src={imageSrc}
          alt={title}
          className={`project-card__image size-[400px] object-cover ${imgClasses ? imgClasses : ''}`}
        />
      </a>
      <div className="pointer-events-none absolute bottom-[20px] right-[20px] flex flex-col">
        <h3
          className="pointer-events-none self-end uppercase text-emerald-200 underline transition-all duration-200 ease-in-out"
          id={`title${id}`}
        >
          {title}
        </h3>
        <p className="pointer-events-none">{description}</p>
        <a
          href={liveLink ? liveLink : linkTo}
          target="_blank"
          id={`liveLink${id}`}
          className="pointer-events-auto relative self-end after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-[0%] after:bg-emerald-300 after:transition-all after:duration-200 after:ease-in-out after:content-[''] hover:text-emerald-300 hover:after:w-[100%]"
        >
          {liveLink ? 'Live Site' : 'Source Code'}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
