const form = document.querySelector('form');
const amount = document.querySelector("#amount")
const category = document.querySelector("#category");
const description = document.querySelector("#description");

const tbody = document.querySelector("tbody");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const row = document.createElement("tr");
  row.innerHTML = `
  <td>${Category.value}</td>
  <td>${description.value}</td>
  <td>${Amount.value}</td>
  `;
})