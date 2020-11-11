import React, { useState, useEffect } from 'react';
import Clock from '../../class/Clock.js';
import style from './index.scss';

const Main = () => {
  const [hourAngle, setHourAngle] = useState(0);
  const [minAngle, setMinAngle] = useState(0);
  const [secAngle, setSecAngle] = useState(0);

  useEffect(() => {
    const updateNeedleAngle = () => {
      const clock = new Clock();
      setSecAngle(clock.getSecondAngle());
      setMinAngle(clock.getMinuteAngle());
      setHourAngle(clock.getHourAngle());
    };
    updateNeedleAngle();

    setInterval(updateNeedleAngle, 1000);
  }, []);

  return (
    <div className={style.clock}>
      <div
        className={style.hour}
        style={{ transform: `rotateZ(${hourAngle}deg)`, }}
      />
      <div
        className={style.min}
        style={{ transform: `rotateZ(${minAngle}deg)`, }}
      />
      <div
        className={style.sec}
        style={{ transform: `rotateZ(${secAngle}deg)`, }}
      />
    </div>
  );
};

export default Main;
