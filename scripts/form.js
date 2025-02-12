const currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

const lastModified = document.lastModified;
document.getElementById("modification").innerHTML = lastModified;

const mainNav = document.querySelector('.navigation');
const navbutton = document.querySelector('#menu');

navbutton.addEventListener('click', () => {
  mainNav.classList.toggle('show');
  navbutton.classList.toggle('show');
});

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];


document.addEventListener("DOMContentLoaded", function () {
  const productSelect = document.getElementById('product');

  if (productSelect) {
      products.forEach(product => {
          const option = document.createElement('option');
          option.value = product.name;
          option.textContent = product.name;
          productSelect.appendChild(option);
      });
  } 
});

function updateReviewCounter() {

  let reviewCount = localStorage.getItem("reviewCounter") || 0;
  reviewCount = parseInt(reviewCount) + 1; 

  localStorage.setItem("reviewCounter", reviewCount);

  console.log(reviewCount);

  let counter = document.getElementById("counter");
  counter.textContent = reviewCount;
}

updateReviewCounter();


