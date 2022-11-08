// Union types: it helps us to give more than one type to a variable. it uses the | sign.
function addShipping(price : number, shipping : number) : number | boolean {
    return price + shipping;
}
addShipping(10, 5);
