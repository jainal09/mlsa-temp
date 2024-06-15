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
    title: "10 Things To Know About Azure Static Web Apps 🎉",
    description:
      "Built “ATRIS” which is a startup that focused on personal knowledge base management. It included features such speech to text with note taking and individual speaker text separation, M.O.M.S (minutes of the meeting)automation, ai based meeting/Notes summary, meeting/notes sentiment analysis, searchable meetings/notes in images, audios, and typo tolerant texts, and much more.",
    url: "https://github.com/jainal09/atris",
  },
  {
    title: "NERP-Multi-Modal-Search",
    description:
      "Neural Information Extraction, Retrieval, and Processing for Multi-Modal Neural Search A RAG based search engine that can search through text, images, and audio files. It uses a multimodal transformer to encode the data and a RAG model to search through it. The project is built using the Hugging Face Transformers library and the PyTorch Lightning library.",
    url: "https://github.com/semantic-search",
  },
  {
    title: "Mask_net",
    description:
      "Mask-Net is an IOT device that can be easily attached with existing cameras or surveillance system for effective mask-based detection system. It consists of a Raspberry Pi, webcam and an Ultrasonic sensor. The device uses advanced Machine Learning models to detect whether a person is wearing a mask or not with an accuracy of 90-95%.",
    url: "https://github.com/jainal09/Mask_net",
  },
  {
    title: "Attendico",
    description: "A Smart and innovative way for managing attendance.",
    url: "https://github.com/jainal09/Attendico",
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
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
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
