/** @format */

// Importing the Next.js Link component
import Link from 'next/link';

/* This component is responsible for user navigation and is imported to be displayed on every page of the website*/
const NavBar = () => {
  return (
    <div>
      <nav>
        {/**Effectively linking to each web page by referencing the file name from the 'pages' directory */}
        <Link href={'/'}>
          <p className='navItem'>Home</p>
        </Link>
        <Link href={'/about'}>
          <p className='navItem'>About</p>
        </Link>
        <Link href={'/projects'}>
          <p className='navItem'>Projects</p>
        </Link>
        <Link href={'/contact'}>
          <p className='navItem'>Contact</p>
        </Link>
      </nav>
      {/**Globally styling elements within this component with the <style> tag */}
      <style global jsx>{`
        nav {
          display: inline-flex;
        }

        .navItem {
          margin-left: 10vw;
          margin-right: 10vw;
        }
      `}</style>
    </div>
  );
};

export default NavBar;
