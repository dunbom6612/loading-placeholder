const image = document.getElementById('card__image');
const title = document.getElementById('card__title');
const description = document.getElementById('card__description');
const avt = document.getElementById('author__avt');
const user_name = document.getElementById('author__name');
const date = document.getElementById('author__date');

const animated_bgs = document.querySelectorAll('.animated__bg');
const animated_bgs_texts = document.querySelectorAll('.animated__bg__text');

const getData = () => {
  image.innerHTML =
    '<img src="https://images.unsplash.com/photo-1644173307069-a1134241eb4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5Mnx8fGVufDB8fHx8&auto=format&fit=cropw=600&q=30"alt="" srcset=""/>';

  title.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
  description.innerHTML = ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum sit
  explicabo ut nisi praesentium earum, rem dolor, iste repudiandae
  blanditiis est alias saepe necessitatibus id minima sunt error
  incidunt. Tempora blanditiis omnis, ipsum amet necessitatibus alias.
  Cumque a aliquam et repellat placeat cupiditate, reiciendis quos
  officia distinctio dolore ullam totam!`;
  avt.innerHTML = `<img
  src="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=50&q=50"
  alt="avt"
/>`;
  user_name.innerHTML = 'John Doe';
  date.innerHTML = 'Oct 08, 2020';

  animated_bgs.forEach((bg) => bg.classList.remove('animated__bg'));
  animated_bgs_texts.forEach((bg) => bg.classList.remove('animated__bg__text'));
};

setTimeout(getData, 2500);
