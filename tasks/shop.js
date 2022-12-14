console.clear();

const valiuta = 'EUR';
const prekes = [
    {
        name: 'Bananas',
        price: 2,
        inStock: 10
    },
    {
        name: 'Agurkas',
        price: 3,
        inStock: 10
    },
    {
        name: 'Pomidoras',
        price: 1.57,
        inStock: 30
    }
]

console.log("MUSU PARDUOTUVE:");
console.log("----------------");

let totalPrice = 0;

for (let i = 0; i < prekes.length; i++) {
    console.log(`${prekes[i].name} kainuoja ${prekes[i].price} ${valiuta} ir ju turime ${prekes[i].inStock} vienetu.`);
    totalPrice += prekes[i].price * prekes[i].inStock;
 };
 
console.log("----------------");
console.log(`Viso asortimento kaina: ${totalPrice} ${valiuta}`);