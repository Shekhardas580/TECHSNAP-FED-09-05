const faqDivs = document.querySelectorAll('.faq');



faqDivs.forEach((div) => {
   div.addEventListener('click', (e) => {
       e.target.closest('.faq').classList.toggle('active');
   });
});