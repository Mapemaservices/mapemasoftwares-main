import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsletterSignup from '@/components/NewsletterSignup';

const projectsData = [
  {
    title: "Timeless Strands",
    description: "A premium hair and beauty brand with a modern e-commerce platform.",
    image: "/logo.png",
    link: "https://timelessstrands.com"
  },
  {
    title: "Executive Gents",
    description: "A stylish online presence for a leading men's grooming and fashion brand.",
    image: "/logo.png",
    link: "https://executivegents.com"
  },
  {
    title: "Geo Garage",
    description: "Auto garage website for George Auto Garage, featuring services and booking.",
    image: "/logo.png",
    link: "https://georgeautogarage.com"
  },
  {
    title: "Merryland Premier Schools",
    description: "A digital platform for Merryland Premier Schools, providing information for parents and students.",
    image: "/logo.png",
    link: "https://merrylandpremierschools.sc.ke"
  },
  {
    title: "Tomic Security",
    description: "Corporate website for Tomic Security, showcasing security solutions and services.",
    image: "/logo.png",
    link: "https://tomicsecurity.com"
  },
  {
    title: "Bridge to Renewal",
    description: "A non-profit organization website for Bridge to Renewal, with resources and contact info.",
    image: "/logo.png",
    link: "https://bridgetorenewal.co.ke"
  }
];


const ProjectsPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<typeof projectsData>([]);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setProjects(projectsData);
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
  <main className="max-w-4xl mx-auto py-8 px-2 sm:px-4 min-h-[70vh] mt-20">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Our Projects</h1>
        <div className="mb-8 flex flex-col items-center">
          <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-700 transition mb-4">
            Get a Free Consultation or Quote
          </a>
          <span className="text-gray-500 text-sm">Let's build your next project together!</span>
        </div>
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2">
          {loading
            ? Array.from({ length: 4 }).map((_, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow p-4 sm:p-6 flex flex-col items-center">
                  <Skeleton className="w-24 h-24 mb-4 rounded-full" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))
            : projects.map((project, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow p-4 sm:p-6 flex flex-col items-center">
                  <img src={project.image} alt={project.title} className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-4" />
                  <h2 className="text-lg sm:text-xl font-semibold mb-2 text-center">{project.title}</h2>
                  <p className="text-gray-600 mb-4 text-center text-sm sm:text-base">{project.description}</p>
                  {project.link && (
                    <a href={project.link} className="text-blue-600 hover:underline text-sm sm:text-base" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  )}
                </div>
              ))}
        </div>
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;
