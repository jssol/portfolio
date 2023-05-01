import React, { useContext } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { NavContext } from './NavContext';

const CircleAnimation: React.FC<any> = () => {
  const { isNavOpen } = useContext(NavContext);

  const style = useSpring({
    transform: isNavOpen ? 'scale(100)' : 'scale(1)',
    config: { duration: 1000 },
  });

  return (
    <animated.div style={{ position: 'fixed', backgroundColor: '#fff', top: 0, right: 0, width: 100, height: 100, borderRadius: '50%', ...style }} />
  );
};

export default CircleAnimation;
