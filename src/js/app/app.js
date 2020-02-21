const app = () => {
   const rangeInput = document.getElementById('range');
   const firstBlock = document.querySelector('.first-block');
   const secondBlock = document.querySelector('.second-block');

   const values = [0];

   rangeInput.addEventListener('input', () => {
      let rangeValue = range.value;
      values.push(rangeValue);

      if (values[values.length - 2] < rangeValue) {
         if (rangeValue > 25 && rangeValue < 75) {
            firstBlock.classList.add('first-block__invisible');
         } else if (rangeValue > 75) {
            secondBlock.classList.add('second-block__invisible');
            firstBlock.classList.add('first-block__invisible');
         }
      } else {
         if (rangeValue > 25 && rangeValue < 75) {
            secondBlock.classList.remove('second-block__invisible');
         } else if (rangeValue < 75) {
            firstBlock.classList.remove('first-block__invisible');
            secondBlock.classList.remove('second-block__invisible');
         }
      }

      rangeInput.style.background = `-webkit-linear-gradient(left, #d1eaff 0%, #d1eaff ${rangeValue}%, #435063 ${rangeValue}%, #435063 100%)`;
   });
}

export default app;