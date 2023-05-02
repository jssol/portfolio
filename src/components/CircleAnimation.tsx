import React, { useContext } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { NavContext } from './NavContext';

const CircleAnimation: React.FC<any> = () => {
  const { isNavOpen } = useContext(NavContext);

  const expandDuration = 1500;

  const shrinkDuration = 250;

  const style = useSpring({
    transform: isNavOpen ? 'translate(100%, -100%) scale(100)' : 'translate(100%, -100%) scale(1)',
    config: {
      duration: isNavOpen ? expandDuration : shrinkDuration,
      delay: 0,
      mass: 3,
      tension: 200,
      friction: 20,
      precision: 0.001,
    },
  });

  return (
    <animated.div
      className="with-background"
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: 100,
        height: 100,
        borderRadius: '50%',
        ...style,
      }}
    />
  );
};

export default CircleAnimation;
