import { FC, ReactNode } from 'react';
import ProjectCard from '../components/ProjectCard';

import Project1Img from '../assets/lepidopterarium.jpg';
import Project2Img from '../assets/nosql.jpg';
import Project3Img from '../assets/books.jpg';
import Project4Img from '../assets/notes.jpg';
import Project5Img from '../assets/logo.jpg';
import Project6Img from '../assets/planner.jpg';

const Projects: FC = (): ReactNode => {
  return (
    <div className="relative flex flex-shrink flex-grow basis-auto flex-col items-center bg-emerald-950 pt-10 text-white">
      <h1 className="mb-8 text-2xl underline">Projects</h1>
      <div className="mb-24 grid w-auto max-w-[100vw] grid-cols-1 items-center justify-center gap-10 lg:grid-cols-2 2xl:grid-cols-3">
        <ProjectCard
          title="The Lepidopterarium"
          description="Learn about bugs and butterflies"
          imageSrc={Project1Img}
          linkTo="https://github.com/RockyWearsAHat/lepidopterarium"
          liveLink="https://lepidopterarium-ac74b3d1a334.herokuapp.com/"
          gitIconClasses="text-white"
          id="_project1"
        />
        <ProjectCard
          title="NoSQL Social Media"
          description="A social media API using MongoDB"
          imageSrc={Project2Img}
          linkTo="https://github.com/RockyWearsAHat/NoSQL-Social-Media-Server"
          imgClasses="brightness-50"
          gitIconClasses="text-white"
          id="_project2"
        />
        <ProjectCard
          title="Books"
          description="A browser for finding and saving books"
          imageSrc={Project3Img}
          linkTo="https://github.com/RockyWearsAHat/NoSQL-Social-Media-Server"
          liveLink="https://graphql-refactor.onrender.com/"
          id="_project3"
        />
        <ProjectCard
          title="Note Taker"
          description="Take and save notes in your browser"
          imageSrc={Project4Img}
          linkTo="https://github.com/RockyWearsAHat/note-taker"
          liveLink="https://note-taker-rockywearsahat-f643741601c3.herokuapp.com/notes"
          imgClasses="brightness-75"
          id="_project4"
        />
        <ProjectCard
          title="Logo Generator"
          description="A simple program for generating SVG logos"
          imageSrc={Project5Img}
          linkTo="https://github.com/RockyWearsAHat/Logo-Generator"
          gitIconClasses="text-red-500"
          id="_project5"
        />
        <ProjectCard
          title="Affirm"
          description="A planner/goal tracker"
          imageSrc={Project6Img}
          linkTo="https://github.com/hyrumsdolan/Affirm"
          liveLink="https://affirm.onrender.com/"
          gitIconClasses="text-white"
          id="_project6"
        />
      </div>
    </div>
  );
};

export default Projects;
