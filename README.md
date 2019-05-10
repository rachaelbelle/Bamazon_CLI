# BAMazon 💥🛒🛍

An Amazon-like storefront using MySQL. The app takes in orders from customers and depletes stock from the store's inventory. The app also tracks product sales across the store's departments and then provides a summary of the highest-grossing departments in the store.

## Instructional Video

An instructional video can be found at:

## Instructions

This app is run solely in the command line.  Please clone down the files from github and npm install the required dependencies.


### Challenge #1: Customer View

In terminal run `bamazonCustomer.js`.  This will populate all items available for sale.

Next, you will be prompted with 2 messages:

   * The first will ask for the ID of the product you would like to buy.
   * The second message will ask how many units of the product you would like to buy.


1. Once the customer has placed the order, the application checks if your store has enough of the product to meet the customer's request.

   * If not, the app logs a phrase like `Insufficient quantity!`, and then prevents the order from going through.

2. However, if the store _does_ have enough of the product, it fulfills the customer's order.
   * Updating the SQL database to reflect the remaining quantity.
   * Showing the customer the total cost of their purchase.

- - -

### Thank you.

This was a challenge as I am growing, but I am super proud of what I created.

xoxo Rachael
