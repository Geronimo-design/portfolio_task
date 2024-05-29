/** @format */

// Importing the NavBar and Link components
import NavBar from '../components/NavBar';
import Link from 'next/link';

// This component is responsible for displaying some of the web creator's past proects
const Projects = () => {
  return (
    <div>
      <NavBar />

      <div className='body'>
        <h1>My Works</h1>
        <p>
          Listed below are some of my works in web development, compiled by me
          over the course of the last few months.
        </p>
        <ul>
          <li>
            <Link
              target='_blank'
              href={
                'https://dashboard.render.com/static/srv-ckpruo01hnes73ep99qg'
              }>
              Mcdonald's UI recreated
            </Link>
          </li>
          <li>
            <Link
              target='_blank'
              href={'https://cash-balance-manipulator.onrender.com/'}>
              Cash Balance Manipulator
            </Link>
          </li>
        </ul>
      </div>
      <style global jsx>{`
        .body {
          text-align: center;
          margin-top: 15vw;
        }

        ul {
          list-style-type: none;
        }

        li {
          margin: 5vw;
        }

        html {
          background-color: lightblue;
          font-family: monospace;
        }
      `}</style>
    </div>
  );
};

export default Projects;
