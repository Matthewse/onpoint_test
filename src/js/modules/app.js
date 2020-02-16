const app = () => {
   const rangeInput = document.getElementById('range');
   const firstBlock = document.querySelector('.first-block');
   const secondBlock = document.querySelector('.second-block');

   const values = [0];
   let rangeValue;

   rangeInput.addEventListener('input', () => {
      rangeValue = range.value;
      values.push(rangeValue);

      firstBlock.style.transition = "0.7s ease";
      secondBlock.style.transition = "0.7s ease";

      if (values[values.length - 2] < rangeValue) {
         if (rangeValue > 25 && rangeValue < 75) {
            firstBlock.style.marginLeft = '-1024px';
         } else if (rangeValue > 75) {
            secondBlock.style.marginLeft = '-1024px';
            firstBlock.style.marginLeft = '-1024px';
         }
      } else {
         if (rangeValue > 25 && rangeValue < 75) {
            secondBlock.style.marginLeft = '0';
         } else if (rangeValue < 75) {
            firstBlock.style.marginLeft = '0';
            secondBlock.style.marginLeft = '0';
         }
      }
   })
}

export default app;