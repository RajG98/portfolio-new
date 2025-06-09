import React from "react";

export const Home = () => {
  return (
    <div className="home-hero">
      <div class="home-hero__content">
        <h1 class="heading-primary">Hey, I am Rajarshi 👋</h1>
        <div class="home-hero__info">
          <p class="text-primary">
            Hey There, I'm a Software Developer from Kolkata in India 🇮🇳. I love
            to create web apps that would make life easy and enjoyable for
            people. I am currently working for TCS in Kolkata, India.
          </p>
        </div>
        <div class="home-hero__cta">
          <a href="#projects" class="btn btn--bg">
            Projects
          </a>
        </div>
      </div>
      <div class="home-hero__socials">
        <div class="home-hero__social">
          <a href="https://www.linkedin.com/in/rajarshig007" target="_blank" class="home-hero__social-icon-link">
            <img src="/images/linkedin-ico.png" alt="icon" class="home-hero__social-icon"/>
          </a>
        </div>
        <div class="home-hero__social">
          <a href="https://github.com/RajG98" target="_blank" class="home-hero__social-icon-link">
            <img src="/images/github-ico.png" alt="icon" class="home-hero__social-icon"/>
          </a>
        </div>
        <div class="home-hero__social">
          <a href="https://x.com/Lucifer_RajG98" target="_blank" class="home-hero__social-icon-link">
            <img src="/images/twitter-ico.png" alt="icon" class="home-hero__social-icon"/>
          </a>
        </div>
        <div class="home-hero__social">
          <a href="https://www.instagram.com/rajg.98" target="_blank" class="home-hero__social-icon-link home-hero__social-icon-link--bd-none">
            <img src="/images/insta-ico.png" alt="icon" class="home-hero__social-icon"/>
          </a>
        </div>
      </div>
    </div>
  );
};
