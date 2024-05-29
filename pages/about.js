/** @format */

// Importing the NavBar component to be used
import NavBar from '../components/NavBar';

// This component displays information relating to the website creator's work, education and early life
const About = () => {
  // Arrays that contain information. The map method iterates over them to display the information in the UI
  const education = [
    'Sparrows Combined High School - 2016-2019 (Matriculated 2019)',
    'Master Maths and master sciences - 2020-2021 (Maths and science at higher grade)',
    'University of Pretoria - 2022 (I was offered a position in engineering but decided to instead pursue business and IT)',
    'GetSmarter in partnership with University of Cape Town - 2023 (Course in digital marketing',
    'Hyperiondev - 2023 (Bootcamp in web development)',
    'University of South Africa - UNISA - 2024-present (Bachelor of business administration)',
  ];

  const work = [
    'I am a junior partner in a family-run furniture buying and selling business. I still have a lot to learn but I have developed skills in advert placing, marketing, price negotiation and closing the deal. (2022-present)',
  ];
  return (
    <div>
      <NavBar />

      <div>
        {' '}
        <h1>Who Am I?</h1>
        <div>
          {/** Importing the image from the static directory to be used here */}
          <img src='../static/profile_pic.jpg' alt='my profile picture' />
        </div>
        <p>
          Born in Klerksdorp, South Africa, I developed a passion for building
          things at a young age. I have always liked the idea of being able to
          contribute towards something meaningful and web development is the
          perfect way for me to express that interest.
        </p>
        <h2>Educational History</h2>
        <ul>
          {education.map((institute) => {
            return <li>{institute}</li>;
          })}
        </ul>
        <h2>Work History</h2>
        <ul>
          {work.map((institute) => {
            return <li>{institute}</li>;
          })}
        </ul>
      </div>

      <style global jsx>{`
        img {
          border-radius: 50vw;
          height: 21vw;
          width: 18vw;
        }

        html {
          background-color: lightblue;
          font-family: monospace;
        }
      `}</style>
    </div>
  );
};

export default About;
