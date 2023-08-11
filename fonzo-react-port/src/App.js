import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Developer Portfolio</h1>
        <nav>
          <ul>
            <li>
              <a
                href="#about"
                className={activeSection === "about" ? "active" : ""}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#work"
                className={activeSection === "work" ? "active" : ""}
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#languages"
                className={activeSection === "languages" ? "active" : ""}
              >
                Languages
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === "contact" ? "active" : ""}
              >
                Contact
              </a>
            </li>
            <li>
              <a href="https://github.com/Af0nz0" target="_blank">
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="container">
        <section id="about">
          <h2>About</h2>
          <p>
            Welcome to my portfolio! I am a skilled developer with a passion for
            creating innovative solutions. My name is Alfonso Torres Gonzalez,
            and I am currently 19 years old. My first job was my own landscaping
            business, which taught me many things about running a business and
            landscaping.
          </p>
        </section>

        <section id="work">
          <h2>Work</h2>
          <div className="work-grid">
            <div className="work-item">
              <h3>Ball Don't Lie</h3>
              <p>
                A simple, sleek, and functional NBA player search application to
                track your favorite basketball players in the NBA. With this
                application, you can easily track the entire NBA roster with a
                simple search, and save your favorite players in your account's
                dashboard. Player data and storage possible by the
                implementation of a MySQL database to store user data, NBA team
                logos, and api info received from third party APIs.
              </p>
              <a
                href="https://balldontlie-5b4e2d2e88fb.herokuapp.com/"
                className="blue-button"
              >
                View Project
              </a>
            </div>

            <div className="work-item">
              <h3>Weather Show</h3>
              <p>
                A weather dashboard that allows users to search for cities and
                view the current weather conditions as well as a 5-day forecast.
              </p>
              <a
                href="https://af0nz0.github.io/fonzo-weather-show/"
                className="blue-button"
              >
                View Project
              </a>
            </div>

            <div className="work-item">
              <h3>Logo Maker</h3>
              <p>
                A command-line application that generates SVG logos based on
                user input.
              </p>
              <a
                href="https://github.com/Af0nz0/logo-maker"
                className="blue-button"
              >
                View Project
              </a>
            </div>

            <div className="work-item">
              <h3>Employee Tracker</h3>
              <p>
                Employee Tracker is a command-line application built using
                Node.js, MySQL, and Inquirer. It allows business owners to
                easily view and manage departments, roles, and employees in
                their company. With this application, you can organize and plan
                your business efficiently.
              </p>
              <a
                href="https://github.com/Af0nz0/fonzo-employee-tracker"
                className="blue-button"
              >
                View Project
              </a>
            </div>

            <div className="work-item">
              <h3>Read Generator</h3>
              <p>
                A command-line application that dynamically generates a
                professional README.md file based on user input using the
                Inquirer package.
              </p>
              <a
                href="https://github.com/Af0nz0/Fonzo-readme-generator"
                className="blue-button"
              >
                View Project
              </a>
            </div>

            <div className="work-item">
              <h3>Simple Health</h3>
              <p>
                This project aims to provide a simple web-based application for
                creating customized diet and exercise routines based on user
                input. Users can select their dietary preferences and fitness
                levels to receive personalized recommendations.
              </p>
              <a
                href="https://af0nz0.github.io/simple-health/"
                className="blue-button"
              >
                View Project
              </a>
            </div>

            <div className="work-item">
              <h3>Coding Quiz</h3>
              <p>
                This project is a coding quiz to help students understand more.
                Welcome to the Code Quiz project. This site allows you to test
                your knowledge through a timed quiz. You can also save your high
                scores and compare with other students.
              </p>
              <a
                href="https://af0nz0.github.io/fonzo-coding-quiz/"
                className="blue-button"
              >
                View Project
              </a>
            </div>

            <div className="work-item">
              <h3>Password Generator</h3>
              <p>
                The problem that this project solves is straightforward. Let's
                say you have something that requires you to have a passcode, for
                security reasons and you can't think of something clever. Matter
                in fact you want something random since it'll be harder for it
                to get bypassed, type in how many characters you want the
                passcode to have if you want Uppercase, Lowercase, Numbers or
                characters. It'll generate a password as many times as you need
                until you like the end result.
              </p>
              <a
                href="https://af0nz0.github.io/Fonzo-Password-Generator/"
                className="blue-button"
              >
                View Project
              </a>
            </div>

            <div className="work-item">
              <h3>Work Scheduler</h3>
              <p>
                Welcome to the Work Day Scheduler project! This is a simple web
                site that allows you to schedule your tasks for each hour of the
                work day.
              </p>
              <a
                href="https://af0nz0.github.io/fonzo-work-scheduler/"
                className="blue-button"
              >
                View Project
              </a>
            </div>

            <div className="work-item">
              <h3>LinkedIn Clone</h3>
              <p>
                A clone of the LinkedIn social media platform, built using
                React, Redux, Firebase, and styled with CSS. Users can sign up,
                create profiles, connect with other users, and post content.
              </p>
              <a
                href="https://linkedin-clone-f1db3.web.app/"
                className="blue-button"
              >
                View Project
              </a>
            </div>

            <div className="work-item">
              <h3>URL Shortener</h3>
              <p>
                A URL shortening service that takes long URLs and generates
                short, shareable links. Built with Node.js, Express, and
                MongoDB.
              </p>
              <a
                href="https://fonzo-url-shortener.herokuapp.com/"
                className="blue-button"
              >
                View Project
              </a>
            </div>

            {/* Add more work items here */}
          </div>
        </section>

        <section id="languages">
          <h2>Languages</h2>
          <div className="languages-grid">
            <div className="language-item">
              <img src="/pictures/HTML pic.png" alt="HTML" />
              <h3>HTML</h3>
            </div>
            <div className="language-item">
              <img src="/pictures/CSS pic.png" alt="CSS" />
              <h3>CSS</h3>
            </div>
            <div className="language-item">
              <img src="/pictures/JS Pic.avif" alt="JavaScript" />
              <h3>JavaScript</h3>
            </div>
            <div className="language-item">
              <img src="/pictures/PYthon pic.png" alt="Python" />
              <h3>Python/learning currently</h3>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>
            If you'd like to get in touch, feel free to reach out via email or
            connect with me on social media.
          </p>
          <ul className="contact-links">
            <li>
              <a href="mailto:Alfonsotorres758@gmail.com">
                <i className="far fa-envelope"></i> Email
              </a>
            </li>
            <li>
              <a href=" https://github.com/Af0nz0 ">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Afonzogvret">
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
