const container = document.createElement("div");
document.body.appendChild(container);
const instanceRoot = container.attachShadow({ mode: "open" });

generateTable();

function generateTable() {
  let height = 5;
  let width = 3;
  let newTable = document.createElement("table");
  let newHead = newTable.createTHead().insertRow();
  let newBody = newTable.createTBody();

  for (i = 0; i < width; i++) {
    newHead.insertCell(i).textContent = `Header ${i + 1}`;
  }

  cellInserter(newBody, height, width);

  let cells = newTable.querySelectorAll("td");
  cells.forEach((cell) => {
    cell.style.border = "1px solid";
    cell.style.width = "130px";
  });

  newTable.createCaption().textContent = "superkult dynamisk loop table";

  instanceRoot.appendChild(newTable);

  console.log("new table", newTable);
}

function cellInserter(body, height, width) {
  for (i = 0; i < height; i++) {
    let newRow = body.insertRow(i);
    for (j = 0; j < width; j++) {
      let newCell = newRow.insertCell(j);
      newCell.textContent = `Row ${i + 1} Coloumn ${j + 1}`;
      let count = 0;
      newCell.addEventListener("click", function () {
        count++;
        this.textContent = count;
      });
    }
  }
}
