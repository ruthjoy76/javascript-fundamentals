const isTodayThursday = () => {
  const date = new Date();
  let day = date.getDay();

  return day === 4;
};

console.log(isTodayThursday());