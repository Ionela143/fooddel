import React from 'react';
import './About.css';
import { assets } from '../../assets/assets';

const About = () => {
  return (
    <div className="about-page">

      <section className="about-hero">
        <div className="about-hero-text">
          <p className="about-subtitle">WELCOME TO FOOD DEL</p>

          <h1>
            Good food,
            <span> good mood.</span>
          </h1>

          <p className="about-description">
            We believe that great food should be delicious, fresh and easy
            to enjoy. Discover your favorite meals and have them delivered
            straight to your door.
          </p>

          <button onClick={() => window.location.href = '/'}>
            Explore Our Menu
          </button>
        </div>

        <div className="about-hero-image">
          <img src={assets.header_img} alt="Delicious food" />
        </div>
      </section>

      <section className="about-story">
        <div className="about-story-image">
          <img src={assets.food_1} alt="Fresh food" />
        </div>

        <div className="about-story-text">
          <p className="about-subtitle">ABOUT US</p>

          <h2>
            Made with love,
            <span> served with care.</span>
          </h2>

          <p>
            Food Del was created with one simple idea: making delicious food
            accessible to everyone. Whether you're looking for a quick lunch,
            a relaxing dinner or something sweet, we've got something for you.
          </p>

          <p>
            From fresh salads and tasty rolls to pasta, cakes and desserts,
            our menu brings together a variety of flavors so there is always
            something new to discover.
          </p>
        </div>
      </section>

      <section className="about-features">
        <h2>Why choose us?</h2>

        <div className="about-cards">

          <div className="about-card">
            <div className="about-card-icon">🍽️</div>
            <h3>Fresh & Delicious</h3>
            <p>
              We offer a variety of delicious dishes prepared with quality
              ingredients.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">🚀</div>
            <h3>Fast Delivery</h3>
            <p>
              Order your favorite food and enjoy a convenient delivery
              experience.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">❤️</div>
            <h3>Made For You</h3>
            <p>
              From everyday meals to special cravings, there is something
              for everyone.
            </p>
          </div>

        </div>
      </section>

      <section className="about-bottom">
        <h2>Hungry already?</h2>

        <p>
          Explore our menu and find something delicious today.
        </p>

        <button onClick={() => window.location.href = '/'}>
          Order Now
        </button>
      </section>

    </div>
  );
};

export default About;