let start = parseInt(prompt("Table ki shuruaat ka number dijiye:"));
let end = parseInt(prompt("Table ka end number dijiye:"));
let tableNumber = parseInt(prompt("Kaunsa table print karna hai (1, 2, 3, ...)?"));

if (isNaN(start) || isNaN(end) || isNaN(tableNumber) || start >= end) {
    alert("Galat input! Shuruaat ka number chhota hona chahiye end number se.");
} else {
    let tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';

    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    let header = document.createElement('th');
    header.textContent = "Table of "+tableNumber+"";
    headerRow.appendChild(header);
    table.appendChild(headerRow);

    for (let i = start; i <= end; i++) {
        let row = document.createElement('tr');
        let cell = document.createElement('td');
        cell.textContent = `${tableNumber} x ${i} = ${tableNumber * i}`;
        row.appendChild(cell);
        table.appendChild(row);
    }

    tableContainer.appendChild(table);
}