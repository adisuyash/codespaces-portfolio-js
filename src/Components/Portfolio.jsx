/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Portfolio",
    description:
      "My portfolio website, which I modified while learning from Microsoft (credits goes to Microsoft :)",
    url: "https://adisuyash.github.io",
  },
  {
    title: "Drum Kit",
    description: "Drum Kit is a music producing kit, which I made while learning JavaScript.",
    url: "http://adisuyash.github.io/drum-kit/",
  },
  {
    title: "Anime Town",
    description: "An Anime listing website, built on TailwindCSS.",
    url: "https://adisuyash.github.io/anime-town/",
  },
  {
    title: "Rock Paper Scissors",
    description:
      "This is a Rock Paper Scissors project made by me while I was learning Web Dev from The Odin Project.",
    url: "https://adisuyash.github.io/rock-paper-scissors",
  },
  {
    title: "Odin Indian Recipes",
    description:
      "This project was made when I was learning Web Dev and have to submit a project on from The Odin Project.",
    url: "https://adisuyash.github.io/odin-indian-recipes/",
  },
  {
    title: "Gymnasium",
    description: "A simple GYM website which I made while learning from Code with Harry",
    url: "https://adisuyash.github.io/gymnasium",
  },
  {
    title: "Indian Clock",
    description: "A simple Indian Time Zone website which I made while learning JavaScript.",
    url: "https://adisuyash.github.io/indian-time-zone",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
