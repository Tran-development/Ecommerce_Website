

export function startCountdown(targetDate, callback) {
    const timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const difference = targetDate - currentTime;
  
      // Tính toán thời gian còn lại
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
      const remainingTime = { days, hours, minutes, seconds };
  
      callback(remainingTime);
  
      if (difference <= 0) {
        clearInterval(timer);
      }
    }, 1000);
  }