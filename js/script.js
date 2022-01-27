const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

/// 1.
const cat = {
  complain: function () {
    console.log("Meow!");
  },
};
cat.complain();

/// 2.
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

/// 3.
heading.style.fontSize = "2em";

/// 4.
heading.className = "subheading";

/// 5.
const paragraphs = document.querySelectorAll("p");

/// 6.
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

/// 7.
function listOfCats(list) {
  for (i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}
listOfCats(cats);

/// 8.
function createCats(cats) {
  let html = "";
  for (let i = 0; i < cats.length; i++) {
    if (!cats[i].age) {
      cats[i].age = "Age unknown";
    }
    html += `<div> <h5>${cats[i].name}</h5> <p>${cats[i].age}</p> </div>`;
  }
  return html;
}
document.querySelector(".cat-container").innerHTML = createCats(cats);
