// work with the arrows to change the project info
// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Athena app',
    job: 'Swift, Firestore, Git',
    img: 'images/Athena.png',
    text: [" • Created an iOS book-tracking app by implementing Swift, Firebase Firestore, and MVVM architecture in an Agile.",
    "• Retrieved and updated backend data utilizing Firestore to enhance users’ reading progress monitoring experience.",
    "• Served a user-friendly notes view, allowing users to create, search, and manage notes linked to their books."]
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: ['Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.'],
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// set starting item
let currentItem = 0;

// load initial item
// whenever window is loaded, this function will be called
// DOM stands for Document Object Model
// addEventListener:  sets up a function that will be called whenever the specified event is delivered to the target.
window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem);
});

// show person based on item
// person is the index of the reviews array
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  
  job.textContent = item.job;
  item.text.forEach(function (obj) {
      console.log(obj);
      var element = document.createElement('div');
      element.innerHTML = obj; 
      info.textContent.appendChild(element);
     
        
    
    });
  
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});



// work with sidebar
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {

  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

