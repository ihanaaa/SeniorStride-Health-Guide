import React from "react";
import "./MainPage.css";
import Gloria from "./images/Gloria-Persona.png";
import David from "./images/David-Persona.png";
import Theresa from "./images/Theresa-Persona.png";
import GloriaJourney from "./images/Gloria-Journey-Map.png";
import DavidJourney from "./images/David-Journey-Map.png";
import TheresaJourney from "./images/Theresa-Journey-Map.png";
import banner from "./images/banner.png";
import inspo1 from "./images/inspo1.jpg";
import inspo2 from "./images/inspo2.jpg";
import inspo3 from "./images/inspo3.jpg";
import palette from "./images/Colour-Palette.png";
import typography from "./images/lato-typography.png";
import logo from "./images/Logo.png";
import survey1 from "./images/surveyq1.png";
import survey2 from "./images/surveyq2.png";
import survey3 from "./images/surveyq3.png";
import survey4 from "./images/surveyq4.png";
import survey5 from "./images/surveyq5.png";
import mockup1 from "./images/mockup 1.png";
import mockup2 from "./images/mockup 2.png";
import onboarding from "./images/onboarding.png";
import pages1 from "./images/pages1.png";
import pages2 from "./images/pages2.png";
import pages3 from "./images/pages3.png";

const MainPage = () => {
  return (
    <div>
      <img className="image" src={banner} alt="banner" />
      <div className="space"></div>
      <h1>SeniorStride - Health Guide App</h1>
      <p className="name">By Ihana Fahmy, Muiz Madadi, Shamma Sarah Markis</p>
      <br />
      <div className="container">
        <div className="content">
          <div className="box">
            <h2>Introduction</h2>
            <p>
              As we grow older, health challenges often arise, leading to
              increased reliance on others for assistance. This is especially
              true for seniors and significantly impacts their overall
              well-being. Research suggests that adults aged 65 and above should
              aim for at least 150 minutes of moderate-intensity activity per
              week or 75 minutes of vigorous-intensity activity. Additionally,
              factors like injuries, surgeries, and illness can complicate
              matters further. We firmly believe that seniors deserve to feel
              strong and independent. That's why we advocate for regular
              exercise and rehabilitation programs, which can help enhance
              physical resilience and improve quality of life.
            </p>
            <h2>Problem</h2>
            <p>
              While it's widely recognized that physical exercise and
              rehabilitation programs offer numerous benefits, many elderly
              individuals are not taking advantage of these opportunities as
              much as younger people do. This could be due to reasons like
              feeling self-conscious, lacking knowledge about available options,
              not having enough support, and ironically enough, dealing with
              health issues.
            </p>
            <h2>Our solution</h2>
            <p>
              In response to this challenge, our team set out to develop an app
              that provides simple and convenient access to elderly individuals
              seeking to improve their overall physical health. By establishing
              personalized goals, the app guides users through customized
              exercise programs targeting strength, flexibility, balance,
              coordination, and cardiovascular health. We prioritize clear and
              interactive demonstrations to ensure safe execution, while
              consistent progress tracking and feedback mechanisms monitor
              improvements over time. While the app initially focuses on
              rehabilitation training for individuals dealing with injuries,
              surgery, illness, or age-related decline, it also promotes overall
              health improvement in the elderly by offering personalized
              exercises aimed at fostering independence and a healthier
              lifestyle, all accessible at their fingertips on their
              smartphones.
            </p>
          </div>
          <br /> <br />
          <div className="box">
            <h2>Research</h2>
            <h3>Survey</h3>
            <p>
              Surveys play a crucial role in understanding the needs and
              preferences of the elderly community, informing the development of
              our SeniorStride - Health Guide App. By gathering insights
              directly from seniors, we can tailor our app to address their
              unique physical and mental health challenges effectively. Survey
              results help us prioritize features and interventions based on the
              most pressing concerns expressed by older adults, ensuring that
              our app meets their needs comprehensively and improves their
              overall health and well-being.
            </p>

            <img className="inspo" src={survey1} alt="Survey answer 1" />
            <p>
              While many respondents engage in physical activity regularly, a
              significant portion exercise infrequently or not at all,
              highlighting potential gaps in their fitness routines.
            </p>
            <img className="inspo" src={survey2} alt="Survey answer 2" />
            <p>
              The majority of respondents have encountered barriers to accessing
              resources, indicating a need for improved support services.
            </p>
            <img className="inspo" src={survey3} alt="Survey answer 3" />
            <p>
              A large proportion of respondents value personalized exercise
              programs, highlighting the importance of tailored interventions.
            </p>
            <img className="inspo" src={survey4} alt="Survey answer 4" />
            <p>
              Most respondents recognize the benefits of physical activity for
              mental well-being, emphasizing the need for comprehensive wellness
              programs.
            </p>
            <img className="inspo" src={survey5} alt="Survey answer 5" />
            <p>
              While many are interested in using a health app, some are unsure
              or uninterested, suggesting the importance of addressing potential
              barriers to adoption.
            </p>

            <p>
              In summary, the survey underscores the varied needs and
              preferences of older adults regarding health support. While
              there's a strong desire for personalized exercise programs and
              recognition of the benefits of physical activity, challenges in
              accessing resources and differing levels of interest in health
              apps suggest the importance of tailored interventions and outreach
              efforts. SeniorStride - Health Guide App aims to meet these needs
              effectively, offering personalized support to empower older adults
              in their health journey.
            </p>
          </div>
          <br />
          <br />
          <div className="box">
            <h2>Personas</h2>
            <p>
              Based on our research, three personas were created that we believe
              fit the general democratic:
            </p>
            <b>Persona #1: Graceful Gloria</b>
            <p>
              Gloria is an 80-year-old retired librarian who has always valued
              quiet activities like reading, painting, and spending time with
              her cat. She enjoys leisurely walks in nature and attending gentle
              yoga classes at her local community center.
            </p>
          </div>
          <br />
          <br />
          <img className="personas" src={Gloria} alt="Gloria Persona " />
          <br />
          <br />
          <div className="box">
            <b>Persona #2: Devoted David</b>
            <p>
              David is a 65-year-old retired firefighter who spends most of his
              time caring for his wife, who has been living with multiple
              sclerosis for over a decade. He enjoys woodworking, cooking, and
              spending quiet evenings at home with his family.
            </p>
          </div>
          <br />
          <br />
          <img className="personas" src={David} alt="David Persona " />
          <br />
          <br />
          <div className="box">
            <b>Persona #3: Thoughtful Theresa</b>
            <p>
              Theresa is a 70-year-old retired social worker who enjoys
              gardening, volunteering at her local church, and spending time
              with her grandchildren. She finds fulfillment in helping others
              and staying active in her community.
            </p>
          </div>
          <br />
          <br />
          <img className="personas" src={Theresa} alt="Theresa Persona " />
          <br />
          <br />
          <div className="box">
            <h2>User Journeys</h2>
            <b>Graceful Gloria Lee's Journey</b>
            <p>
              Gloria discovers Senior Stride through social media and explores
              its features to find tailored exercises for improving her balance
              and flexibility after a recent stroke. She appreciates the clear
              instructions and support from the virtual community, which
              motivates her to continue her wellness journey with confidence.
            </p>
          </div>
          <br />
          <br />
          <img
            className="personas"
            src={GloriaJourney}
            alt="Gloria Journey Map"
          />
          <br />
          <br />
          <div className="box">
            <b>Devoted David Johnson's Journey</b>
            <p>
              David hears about Senior Stride from a support group and decides
              to try it out to find exercises for himself and his wife. He
              values the personalized exercise plan and finds the caregiver
              support resources helpful in managing stress. With Senior Stride,
              David feels more equipped to prioritize his own health while
              caring for his wife.
            </p>
          </div>
          <br />
          <br />
          <img
            className="personas"
            src={DavidJourney}
            alt="David Journey Map"
          />
          <br />
          <br />
          <div className="box">
            <b>Thoughtful Theresa Jackson's Journey</b>
            <p>
              Theresa learns about Senior Stride at a community event and
              decides to explore its features for maintaining her overall health
              and vitality. She enjoys participating in trial classes and
              engaging with the wellness tips and resources tailored to her
              interests. With Senior Stride, Theresa feels empowered to lead an
              active and fulfilling lifestyle in her retirement years.
            </p>
          </div>
          <br />
          <br />
          <img
            className="personas"
            src={TheresaJourney}
            alt="Theresa Journey Map"
          />
          <br />
          <br />
          <div className="box">
            <h2>Design Ideas</h2>
            <h3>Design Inpiration</h3>
            <p>
              The vibrant colors of oranges and pinks, along with the
              70s-inspired design, are carefully chosen to make our app more
              appealing and accessible to older users. We believe that these
              design elements play a crucial role in improving visibility and
              readability, especially for those with age-related vision changes.
              Additionally, the nostalgic 70s vibe creates a sense of comfort
              and familiarity, which can encourage users to engage with the app
              more actively. Ultimately, by incorporating these design choices,
              we aim to create a welcoming and inclusive environment that
              empowers older adults to take charge of their health journey with
              ease and confidence.
            </p>
            <p>Some examples that inspired us: </p>
            <img className="inspo" src={inspo1} alt={inspo1} />
            <img className="inspo" src={inspo2} alt={inspo2} />
            <img className="inspo" src={inspo3} alt={inspo3} />
          </div>
          <br />
          <br />
          <div className="box">
            <h3>Colour Palette</h3>
            <p>
              The color palette, featuring shades of deep blue, soft pink,
              vibrant orange, and pale beige, was carefully chosen to create a
              visually appealing and user-friendly interface. These colors evoke
              a sense of calmness, warmth, and energy while ensuring contrast
              and readability. Overall, they contribute to a harmonious and
              engaging experience, reinforcing our app's message of inclusivity
              and empowerment for users of all ages.
            </p>
            <img className="inspo" src={palette} alt="Colour Palette" />
          </div>
          <br />
          <br />
          <div className="box">
            <h3>Typography</h3>
            <p>
              When designing apps for the elderly demographic, prioritizing
              readability and clarity in typography is essential. However, it's
              equally important to ensure an aesthetically pleasing appearance.
              That's why we've selected the Lato font which perfectly balances
              legibility and visual appeal.
            </p>
            <img className="inspo" src={typography} alt="Lato Typography" />
            <p>
              Lato is a humanist sans-serif font that offers excellent
              legibility in both digital and print environments, making it a
              popular choice for web and app design. Lato gives a friendly and
              approachable design which makes it well-suited for communicating
              information clearly to elderly users.
            </p>
          </div>
          <br />
          <br />
          <div className="box">
            <h3>App Logo</h3>
            <p>
              The app logo features a running man in a warm, energetic tone,
              symbolizing vitality and activity, while the finish line is
              depicted in white, representing achievement. Against the vibrant
              orange background, the logo stands out, conveying empowerment and
              progress. Overall, it effectively represents the app's core values
              of vitality and achievement, making it memorable and inviting for
              users.
            </p>
            <img className="inspo" src={logo} alt="App Logo" />
          </div>
          <br />
          <br />
          <div className="box">
            <h2>Mockup</h2>
            <img className="inspo" src={mockup1} alt="Mockup 1" />
            <img className="inspo" src={mockup2} alt="Mockup 2" />
          </div>
          <br />
          <br />
          <div className="box">
            <h2>Final Design</h2>
            <h3>Onboarding Pages</h3>
            <p>
              The onboarding process in SeniorStride is essential as it serves
              as a crucial introduction for users to familiarize themselves with
              the app's features and functionalities. It provides users with an
              overview of what to expect from the app, guiding them through key
              features and encouraging them to create a profile. This initial
              interaction sets the tone for the user's experience and helps them
              feel confident and informed as they begin their health journey
              with SeniorStride.
            </p>
            <img className="inspo" src={onboarding} alt="Onboarding" />
          </div>
          <br />
          <br />
          <div className="box">
            <h3>Pages</h3>
            <img className="inspo" src={pages1} alt="Pages 1" />
            <br />
            <br />
            <img className="inspo" src={pages2} alt="Pages 2" />
            <br />
            <br />
            <img className="inspo" src={pages3} alt="Pages 3" />
          </div>
          <br />
          <br />
          <div className="box">
            <h3>Demo</h3>
          </div>
          <br />
          <br />
          <div className="prototype">
            <iframe
              title="prototype"
              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
              width="800"
              height="450"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FdVrWkDQchwLKJo6wVvIsPA%2FOnboarding%3Ftype%3Ddesign%26node-id%3D17-135%26t%3DXHsxzj9J9FmArPPY-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26mode%3Ddesign"
              allowfullscreen
            ></iframe>
          </div>
          <br />
          <br />
          <div className="box">
            <h2>Conclusion</h2>
            <p>
              SeniorStride stands as a revolutionary solution for older adults,
              offering a holistic platform to support their physical and mental
              well-being. Informed by extensive user research and surveys,
              SeniorStride provides personalized care through intuitive features
              like personalized exercise programs, progress tracking, community
              support, and comprehensive resources. The intuitive UI/UX ensures
              accessibility and engagement, empowering users on their health
              journey. By fostering connections and empowering users to take
              control of their health, SeniorStride is driving positive change
              in the lives of older adults, inspiring confidence, vitality, and
              joy. As we continue to innovate and evolve, SeniorStride remains
              committed to guiding older adults towards a brighter, healthier
              future. Join us on this journey towards wellness with
              SeniorStride.
            </p>
          </div>
          <br />
          <br />
          <div className="box">
            <h2>References</h2>
            <a href="https://www.cdc.gov/physicalactivity/basics/older_adults/index.htm">
              Article 1
            </a>
            <br />
            <br />
            <a href="https://blog.nasm.org/uncategorized/are-older-adults-indifferent-scared-and-reluctant-to-exercise">
              Article 2
            </a>
            <br />
            <br />
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
