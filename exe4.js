
let products = [
  { name: "Rice", price: 3000, quantity: 50 },
  { name: "Beans", price: 1800, quantity: 30 },
  { name: "Oil", price: 2500, quantity: 20 }
];

function pProducts() {
    for(let i=0; i<products.length; i++){
        console.log(`This is ${products[i].name} and the price is ${products[i].price}`)

        let totalvalue = (products[i].price * products[i].quantity)

        console.log(totalvalue)
    }

}

pProducts()