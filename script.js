var res = fetch("https://restcountries.com/v3.1/all");
res.then((response) => response.json()).then((data) => foo(data));
var container = document.createElement("div");
container.className = "container";
var row = document.createElement("div");
row.className = "row";
function foo(data) {
  for (i = 0; i < data.length; i++) {
    var col = document.createElement("div");
    col.className = "col-md-4";
    col.innerHTML = `<div class="card" style="width: 18rem; mt-5">
    <img src="${data[i].flags.png}" class="card-img-top object-fit-contain" alt="Img">
    <div class="card-body">
      <h5 class="card-title">${data[i].name.common}</h5>
      <p class="card-text">${data[i].capital[0]}</p>
      <p class="card-text">${data[i].region}</p>
      <p class="card-text">${data[i].population}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
    row.append(col);
    container.append(row);
    document.body.append(container);
  }
}
