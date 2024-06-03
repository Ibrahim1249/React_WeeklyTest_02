import React from "react";
import ProjectCard from "./ProjectCard";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javaScript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";

function Project() {
  let projectInfo = {
    project_01: {
      content:
        "This project is a multi-search engine where users can input their queries and search across various platforms. It incorporates Google Custom Search API for web search, Wikipedia API for encyclopedic information, Gemini API for news, and Unsplash API for image search.",
      projectUrl: "https://github.com/Ibrahim1249/Geekathon_M4",
    },
    project_02: {
      content:
        "In this project, I used the Poki AI API to create an interactive application that displays detailed information about Pokémon. Users can search for their favorite Pokémon and receive comprehensive details, including type, abilities, stats, and more.",
      projectUrl: "https://github.com/Ibrahim1249/Pokemon_Project",
    },
    project_03: {
      content:
        "The Crossword website clone project is a comprehensive online bookstore that caters to book enthusiasts of all ages and interests. Our goal is to provide users with a seamless browsing and purchasing experience, akin to visiting a physical bookstore.",
      projectUrl: "https://github.com/Ibrahim1249/cross-word",
    },
    project_04: {
      content:
        "In this project, I developed a To-Do List application using React. The application allows users to add, edit, and delete tasks, providing an intuitive and efficient way to manage daily activities. With a user-friendly interface and dynamic updating, this React-based To-Do List helps users stay organized and productive.",
      projectUrl: "https://github.com/Ibrahim1249/React-Todo-List",
    },
  };

  return (
    <>
    <h1 className="text-center text-4xl text-white bg-[#0E182C] 2xl:w-4/6 xl:w-[75%] w-[100%] mx-auto underline">Projects</h1>
      <div
        className="project-container xl:px-8 px-4 py-16 bg-[#0E182C] flex items-center justify-center xl:gap-12 lg:gap-0 2xl:w-4/6 xl:w-[75%] w-[100%] mx-auto flex-wrap"
        id="project"
      >
        <ProjectCard
          info={projectInfo.project_01.content}
          name={"MultiSearch"}
          github={projectInfo.project_01.projectUrl}
          html={html}
          css={css}
          javascript={javaScript}
    
        />
        <ProjectCard
          info={projectInfo.project_02.content}
          name={"Pokemon Card"}
          github={projectInfo.project_02.projectUrl}
          html={html}
          css={css}
          javascript={javaScript}
  
        />
        <ProjectCard
          info={projectInfo.project_03.content}
          name={"CrossWord"}
          github={projectInfo.project_03.projectUrl}
          html={html}
          css={css}
          javascript={tailwind}

        />
        <ProjectCard
          info={projectInfo.project_04.content}
          name={"Todo List"}
          github={projectInfo.project_04.projectUrl}
          html={html}
          css={css}
          javascript={react}
        />
      </div>
    </>
  );
}

export default Project;
