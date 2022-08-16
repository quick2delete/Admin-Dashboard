const clock = document.querySelector('.clock')


const displayClock = function () {
  const curHours = new Date().getHours();
  const curMinutes = new Date().getMinutes();
  const curSeconds = new Date().getSeconds();
  console.log(`${curHours}:${curMinutes}:${curSeconds}`);

  const h2 = document.createElement('h2')
  h2.classList.toggle('show-clock')
  h2.textContent = `${curHours}:${curMinutes}:${curSeconds}`;
  clock.appendChild(h2)
};

displayClock();


