import React from "react";
import "./MainPage.css";
import Gloria from "./images/Gloria-Persona.png";
import David from "./images/David-Persona.png";
import Theresa from "./images/Theresa-Persona.png";
import GloriaJourney from "./images/Gloria-Journey-Map.png";
import DavidJourney from "./images/David-Journey-Map.png";
import TheresaJourney from "./images/Theresa-Journey-Map.png";
import banner from "./images/banner.png";

const MainPage = () => {
  return (
    <div>
      <img className="image" src={banner} alt="banner" />

      <h1>SeniorStride - Health Guide App</h1>
      <p className="name">By Ihana Fahmy, Muiz Madadi, Shamma Sarah Markis</p>
      <br />
      <div className="container">
        <div className="content">
          <h2>Introduction</h2>
          <p>
            As we grow older, health challenges often arise, leading to
            increased reliance on others for assistance. This is especially true
            for seniors and significantly impacts their overall well-being.
            Research suggests that adults aged 65 and above should aim for at
            least 150 minutes of moderate-intensity activity per week or 75
            minutes of vigorous-intensity activity. Additionally, factors like
            injuries, surgeries, and illness can complicate matters further. We
            firmly believe that seniors deserve to feel strong and independent.
            That's why we advocate for regular exercise and rehabilitation
            programs, which can help enhance physical resilience and improve
            quality of life.
          </p>
          <h2>Problem</h2>
          <p>
            While it's widely recognized that physical exercise and
            rehabilitation programs offer numerous benefits, many elderly
            individuals are not taking advantage of these opportunities as much
            as younger people do. This could be due to reasons like feeling
            self-conscious, lacking knowledge about available options, not
            having enough support, and ironically enough, dealing with health
            issues.
          </p>
          <h2>Our solution</h2>
          <p>
            In response to this challenge, our team set out to develop an app
            that provides simple and convenient access to elderly individuals
            seeking to improve their overall physical health. By establishing
            personalized goals, the app guides users through customized exercise
            programs targeting strength, flexibility, balance, coordination, and
            cardiovascular health. We prioritize clear and interactive
            demonstrations to ensure safe execution, while consistent progress
            tracking and feedback mechanisms monitor improvements over time.
            While the app initially focuses on rehabilitation training for
            individuals dealing with injuries, surgery, illness, or age-related
            decline, it also promotes overall health improvement in the elderly
            by offering personalized exercises aimed at fostering independence
            and a healthier lifestyle, all accessible at their fingertips on
            their smartphones.
          </p>
          <h2>Research</h2>
          <h3>Survey</h3>
          <p>Insert text here</p>
          <h3>Similar Apps</h3>
          <p>Insert text here</p>
          <h2>Personas</h2>
          <p>
            Based on our research, three personas were created that we believe
            fit the general democratic:
          </p>
          <b>Persona #1: Graceful Gloria</b>
          <p>
            Gloria is an 80-year-old retired librarian who has always valued
            quiet activities like reading, painting, and spending time with her
            cat. She enjoys leisurely walks in nature and attending gentle yoga
            classes at her local community center.
          </p>
          <img className="personas" src={Gloria} alt="Gloria Persona " />
          <br />
          <br />
          <b>Persona #2: Devoted David</b>
          <p>
            David is a 65-year-old retired firefighter who spends most of his
            time caring for his wife, who has been living with multiple
            sclerosis for over a decade. He enjoys woodworking, cooking, and
            spending quiet evenings at home with his family.
          </p>
          <img className="personas" src={David} alt="David Persona " />
          <br />
          <br />
          <b>Persona #3: Thoughtful Theresa</b>
          <p>
            Theresa is a 70-year-old retired social worker who enjoys gardening,
            volunteering at her local church, and spending time with her
            grandchildren. She finds fulfillment in helping others and staying
            active in her community.
          </p>
          <img className="personas" src={Theresa} alt="Theresa Persona " />
          <br />
          <br />
          <h2>User Journeys</h2>
          <b>Graceful Gloria Lee's Journey</b>
          <p>
            Gloria discovers Senior Stride through social media and explores its
            features to find tailored exercises for improving her balance and
            flexibility after a recent stroke. She appreciates the clear
            instructions and support from the virtual community, which motivates
            her to continue her wellness journey with confidence.
          </p>
          <img
            className="personas"
            src={GloriaJourney}
            alt="Gloria Journey Map"
          />
          <br />
          <br />
          <b>Devoted David Johnson's Journey</b>
          <p>
            David hears about Senior Stride from a support group and decides to
            try it out to find exercises for himself and his wife. He values the
            personalized exercise plan and finds the caregiver support resources
            helpful in managing stress. With Senior Stride, David feels more
            equipped to prioritize his own health while caring for his wife.
          </p>
          <img
            className="personas"
            src={DavidJourney}
            alt="David Journey Map"
          />
          <br />
          <br />
          <b>Thoughtful Theresa Jackson's Journey</b>
          <p>
            Theresa learns about Senior Stride at a community event and decides
            to explore its features for maintaining her overall health and
            vitality. She enjoys participating in trial classes and engaging
            with the wellness tips and resources tailored to her interests. With
            Senior Stride, Theresa feels empowered to lead an active and
            fulfilling lifestyle in her retirement years.
          </p>
          <img
            className="personas"
            src={TheresaJourney}
            alt="Theresa Journey Map"
          />
          <br />
          <br />
          <h2>Design Ideas</h2>
          <p>Insert text here</p>
          <h3>Design Inpiration</h3>
          <p>Insert text here</p>
          <h3>Colour Palette</h3>
          <p>Insert text here</p>
          <h3>Typography</h3>
          <h2>Sketches</h2>
          <p>Insert text here</p>
          <h2>Mockup</h2>
          <p>Insert text here</p>
          <h2>Final Design</h2>
          <p>Insert text here</p>
          <h2>Onboarding</h2>
          <p>Insert text here</p>
          <h2>Demo</h2>
          <p>Insert text here</p>
          <h2>Conclusion</h2>
          <p>Insert text here</p>
          <h2>References</h2>
          <p>Insert text here</p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
