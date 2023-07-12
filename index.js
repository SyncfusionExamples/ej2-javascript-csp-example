//function template
var customTemplate = (data) =>
  `<div class="template">${data.ShipCountry}</div>`;

// Initialize Essential JS 2 JavaScript Grid control
var grid = new ej.grids.Grid({
  columns: [
    {
      field: "OrderID",
      headerText: "Order ID",
      textAlign: "Right",
      width: 125,
    },
    { field: "CustomerName", headerText: "Customer Name", width: 125 },
    { headerText: "ShipCountry", template: customTemplate, width: 125 },
  ],
  //Grid data
  dataSource: [
    { OrderID: 10248, ShipCountry: "France", CustomerName: "Paul Henriot" },
    { OrderID: 10249, ShipCountry: "Germany", CustomerName: "Karin Josephs" },
    { OrderID: 10250, ShipCountry: "Brazil", CustomerName: "Mario Pontes" },
    { OrderID: 10251, ShipCountry: "France", CustomerName: "Mary Saveley" },
  ],
  width: "auto",
});

// render initialized grid
grid.appendTo("#Grid");
