import Image from 'next/image';
import React from 'react';

const Projects = () => {
    const projects = [
        {
          name: "Ventmoir",
          description: "A mental health social platform.",
          image: "https://img.freepik.com/free-vector/gaslighting-abstract-concept-vector-illustration-psychological-manipulation-method-mental-destabilization-cognitive-dissonance-creation-changing-beliefs-contradiction-abstract-metaphor_335657-4220.jpg?t=st=1740060923~exp=1740064523~hmac=6b9e95c44eee6c55f9f995abf4a80673e96bd70fde8128174c08fc24cbba42b9&w=740",
          link: "https://www.ventmoir.com",
          technologies: ["React", "Next.js", "Redux", "CSS", "Node.js"],
          overview: "A detailed overview of Project One, including its objectives, challenges faced, and outcomes achieved.",
        },
        {
          name: "Flamepact",
          description: "A brief description of Project Two.",
          image: "/flamepact.jpg",
          link: "https://www.flamepact.com.ng",
          technologies: ["Javascript", "React", "Context api", "Next.js", "Css"],
          overview: "A detailed overview of Project Two, including its objectives, challenges faced, and outcomes achieved.",
        },
        {
          name: "Home Synk",
          description: "A brief description of Project Three.",
          image: "/ventmoir.png",
          link: "https://www.homesynk.com",
          technologies: ["Typescript", "Context api", "Next.js", "React", "Css"],
          overview: "A detailed overview of Project Three, including its objectives, challenges faced, and outcomes achieved.",
        },
        {
          name: "Ventmoir Blog",
          description: "A brief description of Project Four.",
          image: "/vent.jpeg",
          link: "https://blog.ventmoir.com",
          technologies: ["Javascript", "Redux" ,"Next.js", "Tailwind CSS", "React", "Firebase"],
          overview: "A detailed overview of Project Four, including its objectives, challenges faced, and outcomes achieved.",
        },
        {
          name: "Aremudami_luxury",
          description: "A real estatement.",
          image: "/ve.jpg",
          link: "https://realestate-qx5l.onrender.com/",
          technologies: ["Firebase", "Redux", "Typesctipt", "Next.js", "React"],
          overview: "A detailed overview of Project Five, including its objectives, challenges faced, and outcomes achieved.",
        },
        {
          name: "Quiz app",
          description: "Quiz app",
          image: "/quiz.jpg",
          link: "https://ola-irawo.github.io/quiz-app/",
          technologies: ["Javascript", "HTML", "Css"],
          overview: "A detailed overview of Project Six, including its objectives, challenges faced, and outcomes achieved.",
        },
    ];
      

  return (
    <section id='projects'>
      <h2 className="text-4xl py-2 mt-10 border-b-2 border-b-softblue w-fit">Projects</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {projects.map((project, index) => (
          <li key={index} className="border p-4 rounded-lg">
            <Image
              src={project.image}
              alt={project.name}
              width={100}
              height={100}
              className="w-full h-48 object-cover object-center rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-600 mb-2">{project.description}</p>
            <p className="text-sm text-gray-500 mb-4">
              Technologies: {project.technologies.join(", ")}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
