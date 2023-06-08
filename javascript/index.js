// get the button by passing id name inside the argument
const button = document.getElementById("submit");


// The container where the snowflakes will be appended
var container = document.querySelectorAll('#snowflakes');

// The number of snowflakes I want to add
var numberOfSnowflakes = 8;
container.forEach(function (obj) {
for (var i = 0; i < numberOfSnowflakes; i++) {
    var snowflake = document.createElement('i');
    snowflake.className = 'fa-solid fa-snowflake';
    obj.appendChild(snowflake);
    
}
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
