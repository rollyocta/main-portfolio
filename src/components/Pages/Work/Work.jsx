import React, { useState } from 'react';
import { Link as LinkIcon, Github, ChevronLeft, ChevronRight } from 'lucide-react';

import './work.css';

import lazada from '../../../image/system/lazada.jpg';
import CoffeeShop from '../../../image/system/coffee-shop.png';
import moneyTrackExpenses from '../../../image/system/moneyTrackExpenses.jpg';

const Work = () => {
  const [page, setPage] = useState(1);

  const content = [
    {
      number: "01",
      title: "Lazada webpage",
      text: "I created this project as a way to apply the knowledge and skills I’ve gained in HTML, CSS, and JavaScript. It also serves as practice in building responsive web designs that work well across different screen sizes and devices.",
      tools: "HTML, CSS3, Bootstrap JS",
      image: lazada,
      link: "https://rollyocta.github.io/Lazada/",
      githubLink: "https://github.com/rollyocta/Lazada"
    },
    {
      number: "02",
      title: "Coffee Shop",
      text: "I have the ability to create multiple web pages using HTML, CSS, Javascript and Bootstrap. I can design consistent layouts, and link pages together to build a complete and user-friendly website.",
      tools: "HTML, CSS, Javascript, Bootstrap",
      image: CoffeeShop,
      link: "https://rollyocta.github.io/coffee-shop/",
      githubLink: "https://github.com/rollyocta/coffee-shop"
    },
    {
      number: "03",
      title: "Money Track Expenses",
      text: "This project was built to enhance my skills in PHP and MySQL by creating a structured, maintainable web application. It uses OOP, PDO for secure database interaction, and Bootstrap for a responsive UI. Core features include CRUD operations, user authentication, profile picture upload, and a dynamic dashboard.",
      tools: "HTML, CSS3, Bootstrap JS, PHP, MySQL",
      image: moneyTrackExpenses,
      link: "https://drive.google.com/file/d/1X_r-aXYAokcF0Rcs3g_Mwm4PFJknPKYB/view?usp=sharing"
    }
  ];

  const handleNext = () => {
    if (page < content.length) {
      setPage(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage(prev => prev - 1);
    }
  };

  const current = content[page - 1];

  return (
    <section className='work mt-5' id='Work'>

      <div>
        <h1 className="fw-bold text-center">My Work</h1>
      </div>

      <div className="container">
        <div className="row justify-content-md-center">

          <div className="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center mb-5">
            <div className='work-info'>
              <h1 className='text-stroke'>{current.number}</h1>
              <h1>{current.title}</h1>
              <p>{current.text}</p>
              <span>{current.tools}</span>
              <hr />

              <div className='work-link'>
                {current.title === "Money Track Expenses" && current.link && (
                  <a href={current.link} target="_blank" rel="noopener noreferrer" title='Live Demo'>
                    <button className="btn btn-primary">Demo</button>
                  </a>
                )}

                {current.title !== "Money Track Expenses" && current.link && current.githubLink && (
                  <>
                    <a href={current.link} target="_blank" rel="noopener noreferrer" title='Link'>
                      <span>
                        <LinkIcon color="#ffffff" />
                      </span>
                    </a>
                    <a href={current.githubLink} target="_blank" rel="noopener noreferrer" title='Repositories'>
                      <span>
                        <Github color="#ffffff" />
                      </span>
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center flex-column align-items-center mb-5">

            <div className='work-image mb-3'>
              <img src={current.image} alt='project' />
            </div>

            <div className='work-button'>
              <button onClick={handlePrevious} disabled={page === 1}>
                <ChevronLeft />
              </button>
              <span style={{ margin: "0 15px" }}>Page {page} of {content.length}</span>
              <button onClick={handleNext} disabled={page === content.length}>
                <ChevronRight />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Work;