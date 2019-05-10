var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1234",
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log(res);
    start();
  });
}

function start() {
  inquirer
    .prompt([{
      name: "ID",
      type: "input",
      message: "What is the ID of the item you would like to purchase?"
    },
    {
      name: "Quantity",
      type: "input",
      message: "How many units would you like to purchase?"
    }])
    .then(function (answer) {
      console.log(answer);
      var query = "SELECT item_id, product_name, stock_quantity, price FROM products WHERE ?";
      connection.query(query, { item_id: answer.ID }, function (err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res, null, 2));
        // console.log(res[0].stock_quantity);
        // console.log(answer.Quantity);

        if (answer.Quantity <= res[0].stock_quantity) {
          var newStockQty = parseInt(res[0].stock_quantity - answer.Quantity)
          var amountOwed = parseFloat(answer.Quantity * res[0].price)
          // console.log(res[0].price)
          // console.log(amountOwed)
          console.log("The new quantity in stock is " + newStockQty)
          var query2 = "UPDATE products SET stock_quantity = " + newStockQty + "WHERE item_id = " + answer.ID;
          console.log("That will be: $" + amountOwed)
        }
        else console.log("I'm very sorry.  We are unable to fulfill your order.")

        start();
      });
    })}
