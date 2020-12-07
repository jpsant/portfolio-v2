import Lottie from 'lottie-react';

import stars from '~animations/stars-1.json';
import './styles.scss';

const StarsAnimation = () => {
  return (
    <div className="starsContainer" role="animation">
      <Lottie aria-labelledby="Stars lottie animation" animationData={stars} />
    </div>
  );
};

export default StarsAnimation;
