const container = document.createElement("div");
document.body.appendChild(container);
const instanceRoot = container.attachShadow({ mode: "open" });

generateTable();

function generateTable() {
  let table = document.createElement("table");
  let header = table.createTHead().insertRow(-1);
  header.insertCell().textContent = "Header 1";
  header.insertCell().textContent = "Header 2";
  header.insertCell().textContent = "Header 3";
  let body = table.createTBody();
  let row1 = body.insertRow();
  let row2 = body.insertRow();
  let row3 = body.insertRow();
  row1.insertCell().outerHTML = "<th>Row 1 Coloumn 1</th>";
  row1.insertCell().textContent = "Row 1 Coloumn 2";
  row1.insertCell().textContent = "Row 1 Coloumn 3";
  row2.insertCell().outerHTML = "<th>Row 2 Coloumn 1</th>";
  row2.insertCell().textContent = "Row 2 Coloumn 2";
  row2.insertCell().textContent = "Row 2 Coloumn 3";
  row3.insertCell().outerHTML = "<th>Row 3 Coloumn 1</th>";
  row3.insertCell().textContent = "Row 3 Coloumn 2";
  row3.insertCell().textContent = "Row 3 Coloumn 3";

  instanceRoot.appendChild(table);
}
