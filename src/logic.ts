// Implement a function which takes an array of Product and returns unique products sorted by price

type Product = {
    name: string;
    price: number;
};
 
<<<<<<< HEAD
export function filterAndSortProducts(products: Product[]): Product[] {
    const uniqueProducts = Array.from(new Map(products.map(p => [p.name, p])).values());
    return uniqueProducts.sort((a, b) => a.price - b.price);
}
=======
function filterAndSortProducts(products: Product[]): Product[] {
    // Your code goes here
    return [] 
}

module.exports = { filterAndSortProducts }
>>>>>>> fdcfbc733ec7b4e1fed69f6da05dfa4761905999
