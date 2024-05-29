/** @format */

// Importing all necessary modules and some optional icon components
import NavBar from '../components/NavBar';
import { CiMail } from 'react-icons/ci';
import { CiLocationOn } from 'react-icons/ci';
import { CiPhone } from 'react-icons/ci';

// This component displays contact information
const Contact = () => {
  return (
    <div>
      <NavBar />
      <div className='contactBox'>
        <h1>Reach Out to Me</h1>
        <h2>
          <CiPhone />
          Phone : 072 6977 919
        </h2>

        <h2>
          <CiMail /> Email: geronimokourie846@gmail.com
        </h2>
        <h2>
          {' '}
          <CiLocationOn />
          Address: 19 8th street, Menlo Park, Pretoria 0081
        </h2>
      </div>
      <style global jsx>{`
        .contactBox {
          text-align: center;
          margin-top: 10vw;
        }

        html {
          background-color: lightblue;
          font-family: monospace;
        }
      `}</style>
    </div>
  );
};

export default Contact;
