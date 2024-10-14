let start = parseInt(prompt("Enter the number where table start"));
let end = parseInt(prompt("Enter the number where table end"));
let tableNumber = parseInt(prompt("Enter the number of table (1, 2, 3, ...)?"));

if (isNaN(start) || isNaN(end) || isNaN(tableNumber) || start >= end) {
    alert("wrong input or incomplete data");
    location.assign("table2.html")
} else {
    let tableContainer = document.getElementById('tableContain');
    tableContainer.innerHTML = '';

    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    let header = document.createElement('th');
    header.textContent = "Table of "+tableNumber;
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