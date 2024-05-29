/** @format */

// Importing the NavBar component
import NavBar from '../components/NavBar';

// This component represents the home page
const Index = () => {
  return (
    <div>
      <NavBar />
      <p className='welcomeMessage'>Welcome to my website</p>
      <style global jsx>{`
        .welcomeMessage {
          font-size: 10vw;
        }

        html {
          font-family: monospace;
          background-color: lightblue;
        }
      `}</style>
    </div>
  );
};

export default Index;
