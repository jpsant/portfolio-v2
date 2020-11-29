import Lottie from 'lottie-react';

import rocket from '~animations/rocket.json';
import './styles.scss';

const RocketAnimation = () => {
  return (
    <div className="rocketContainer">
      <Lottie animationData={rocket} />
    </div>
  );
};

export default RocketAnimation;
