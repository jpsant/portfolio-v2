import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import './styles.scss';

import ErrorImage from '~assets/svg/404.svg';
import Moon from '~assets/svg/moon.svg';
import Planet1 from '~assets/svg/planet1.svg';
import StarsAnimation from '~atoms/animations/Stars';

const ErrorTemplate = () => {
  return (
    <>
      <div className="errorTemplate__starsContainer">
        <StarsAnimation />
      </div>
      <div className="errorTemplate">
        <Fade left>
          <img className="errorTemplate-moon" src={Moon} alt="Moon" />
        </Fade>
        <Fade top>
          <img className="errorTemplate-img" src={ErrorImage} alt="404 Error svg" />
        </Fade>
        <Fade delay={800}>
          <h1 className="errorTemplate-title">Page not found.</h1>
        </Fade>
        <Fade bottom delay={800}>
          <Link href="/" as="/">
            <a className="errorTemplate-link">Return</a>
          </Link>
        </Fade>
        <Fade right>
          <img className="errorTemplate-planet2" src={Planet1} alt="Planet 1" />
        </Fade>
      </div>
    </>
  );
};

export default ErrorTemplate;
