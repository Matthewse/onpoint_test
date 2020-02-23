const app = () => {
   const rangeInput = document.getElementById('range');
   const firstBlock = document.querySelector('.first-block');
   const secondBlock = document.querySelector('.second-block');
   const navigationDots = document.querySelectorAll('.navigation__dot');

   const values = [0];

   window.addEventListener('scroll', () => {
      navigationDots.forEach(elem => {
         elem.classList.remove('active');

         if (window.scrollY < screen.height / 2) {
            addActiveClass(0);
         } else if (window.scrollY > screen.height / 2 && window.scrollY < screen.height * 1.5) {
            addActiveClass(1);
         } else {
            addActiveClass(2);
         }
      });
   });

   rangeInput.addEventListener('input', () => {
      let rangeValue = range.value;
      values.push(rangeValue);

      if (values[values.length - 2] < rangeValue) {
         if (rangeValue > 25 && rangeValue < 75) {
            addInvisibleClass(firstBlock, 'first-block');
         } else if (rangeValue > 75) {
            addInvisibleClass(secondBlock, 'second-block');
            addInvisibleClass(firstBlock, 'first-block');
         }
      } else {
         if (rangeValue > 25 && rangeValue < 75) {
            removeInvisibleClass(secondBlock, 'second-block');
         } else if (rangeValue < 75) {
            removeInvisibleClass(firstBlock, 'first-block');
            removeInvisibleClass(secondBlock, 'second-block');
         }
      }

      changeProgressBarColor(rangeValue);
   });

   rangeInput.addEventListener('touchend', () => {
      let rangeValue = range.value;

      if (rangeValue <= 25) {
         range.value = 0;
         changeProgressBarColor(range.value);
      } else if (rangeValue > 25 && rangeValue < 75) {
         range.value = 50;
         changeProgressBarColor(range.value);
      } else if (rangeValue >= 75) {
         range.value = 100;
         changeProgressBarColor(range.value);
      }
   });

   function addActiveClass(index) {
      navigationDots[index].classList.add('active');
   }

   function addInvisibleClass(elem, className) {
      elem.classList.add(`${className}__invisible`);
   }

   function removeInvisibleClass(elem, className) {
      elem.classList.remove(`${className}__invisible`);
   }

   function changeProgressBarColor(inputValue) {
      rangeInput.style.background =
         `-webkit-linear-gradient(left, #d1eaff 0%, #d1eaff ${inputValue}%, #435063 ${inputValue}%, #435063 100%)`;
   }

   history.pushState('', document.title, window.location.pathname);
}

export default app;