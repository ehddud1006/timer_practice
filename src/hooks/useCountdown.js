import { useEffect, useState } from "react";

const useCountdown = (targetDate) => {
  //   let countDownDate = targetDate;
  //   let coo = 0;
  const [countDown, setCountDown] = useState(60);
  const [co, setCo] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      //   countDownDate -= 1;
      //   setCountDown(countDownDate);
      setCountDown((count) => count - 1);
      console.log(countDown);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  //   useEffect(() => {
  //     const interval2 = setInterval(() => {
  //       coo += 1;
  //       setCo(coo);
  //       console.log(co);
  //     }, 5
  //     return () => clearInterval(interval2);
  //   }, []);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = countDown;

  return [days, hours, minutes, seconds];
};

export { useCountdown };
