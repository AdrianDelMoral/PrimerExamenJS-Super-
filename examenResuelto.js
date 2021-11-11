// Tenemos el objeto supermarket de Mercadona
let supermarket = {
    name: 'Mercadona',
    products: [
        { name: 'Cereales', price: '1.25€', amount: 5 },
        { name: 'Tomates', price: '0.25€', amount: 12 },
        { name: 'Plátanos', price: '0.4€', amount: 4 },
        { name: 'Entrecot de ternera', price: '10.25€', amount: 2 },
        { name: 'Jabón', price: '2.5€', amount: 15 },
        { name: 'Leche entera', price: '1€', amount: 12 },
        { name: 'Detergente', price: '5.45€', amount: 8 },
    ]
};

/* 
   Función constructora para nuestro carrito de la compra
*/
function ShoppingCart(supermarket) {
    this._market = supermarket;
    this.products = [];
    this.add = function (name, amount) {
        let comprobar = false;
        // Verificar que existe en el supermercado el producto con name
        for (let i = 0; i < this._market.products.length; i++) {
            comprobarNombre = this._market.products[i].name;
            if (comprobarNombre == name) {
                // sacamos la ubicación del producto en el array.
                ubicacionProductoMarket = i;
                comprobar = true;
                break;
            };
        };
        //verificar que existe en el supermercado(mediante _market)?
        //SI existe en el supermercado:
        if (comprobar === true) {
            // sacar la cantidad que hay en el mercado
            // existencias_del_supermercado comprobada y guardada cantidad
            cantidad = this._market.products[ubicacionProductoMarket].amount;

            //añadir al carrito todos los que pueda hasta que en super quede 0 o la cantidad pueda meterse:
            //existe en el carrito?
            let comprobarCarrito = false;
            // Verificar que existe en el carrito el producto con name
            for (let i = 0; i < this.products.length; i++) {
                comprobarNombreCarrito = this._market.products[i].name;
                if (comprobarNombreCarrito == name) {
                    // sacamos la ubicación del producto en el array.
                    ubicacionProductoCarrito = i;
                    comprobarCarrito = true;
                    break;
                };
            };
            //SI existe en el carrito el producto con name:
            // **Si el producto ya existe en el carrito, las existencias se suman a la cantidad que había en el carrito, y se restan de las existencias_del_supermercado.
            if (comprobarCarrito == true) {
                //SI 
                // amount == existencias_del_supermercado
                if (amount == this._market.products[ubicacionProductoMarket].amount) {
                    // cojemos cuanto hay en el carrito actualmente
                    cantidadCarrito = this.products[ubicacionProductoCarrito].amount;

                    // lo sumammos a la cantidad que queremos sumarle ya que es la misma que queda en _market
                    suma = cantidadCarrito + amount;

                    // guardamos en el carrito la suma total
                    this.products[ubicacionProductoCarrito].amount = suma;

                    // Al ser igual ya no quedan existencias asi que declaramos las existencias a 0
                    this._market.products[ubicacionProductoMarket].amount = 0;

                    // devolverá los productos añadidos
                    productosAnyadidos = amount;
                    return productosAnyadidos;

                    // amount > existencias_del_supermercado
                } else if (amount > this._market.products[ubicacionProductoMarket].amount) {
                    // cojemos todas las existencias del market posibles
                    let cantidadMarket = this._market.products[ubicacionProductoMarket].amount;

                    // sumamos la cantidad que tenemos en el carrito y la cantidad recojida del _market 
                    suma = cantidadCarrito + cantidadMarket;

                    // guardamos en el carrito la suma total
                    this.products[ubicacionProductoCarrito].amount = suma;

                    // Al ser mayor ya no quedan existencias asi que declaramos las existencias a 0
                    this._market.products[ubicacionProductoMarket].amount = 0;

                    // devolverá los productos añadidos
                    productosAnyadidos = cantidadMarket;
                    return productosAnyadidos;

                    //SI amount < existencias_del_supermercado
                } else if (amount < this._market.products[ubicacionProductoMarket].amount) {
                    // Cojemos la cantidad que hay en el carrito actualmente
                    let cantidadCarrito = this.products[ubicacionProductoCarrito].amount;

                    // Sumamos cuanto hay en el carrito + cuanta cantidad le vamos a meter
                    let suma = cantidadCarrito + amount;

                    // El resultado de la suma lo añadiremos en la ubicacion de la cantidad que queremos cambiar del producto indicado
                    this.products[ubicacionProductoCarrito].amount = suma;

                    // Cojeremos la cantidad que hay en el _market
                    let cantidadMarket = this._market.products[ubicacionProductoMarket].amount;

                    // Restaremos la cantidad que hay en el _market - la cantidad que hemos cojido para añadirla al carrito
                    let resta = cantidadMarket - amount;

                    // Añadiremos en el hueco de amount del array del producto que queremos cambiar y hemos restado su amount
                    this._market.products[ubicacionProductoMarket].amount = resta;

                    // devolverá los productos añadidos
                    productosAnyadidos = amount;
                    return productosAnyadidos;
                }
                //NO existe en el carrito el producto con name:
                /* Si el producto no existe en el carrito, las existencias se suman a la cantidad del carrito, 
                    y se restan de las existencias_del_supermercado.*/
            } else {/* TODO OK */
                // amount == existencias_del_supermercado
                let nuevoProducto;
                if (amount == this._market.products[ubicacionProductoMarket].amount) {
                    // añadir objeto a array con su nombre y amount
                    nuevoProducto = { name: name, amount: amount };
                    this.products.push(nuevoProducto);

                    // Al ser igual ya no quedan existencias asi que declaramos las existencias a 0
                    this._market.products[ubicacionProductoMarket].amount = 0;

                    // devolverá los productos añadidos
                    productosAnyadidos = amount;
                    return productosAnyadidos;
                    // amount > existencias_del_supermercado
                } else if (amount > this._market.products[ubicacionProductoMarket].amount) {
                    // cojemos todas las existencias del market ya que amount es mayor a lo que hay en _market
                    let cantidadMarket = this._market.products[ubicacionProductoMarket].amount;

                    // Al ser mayor ya no quedan existencias asi que declaramos las existencias a 0
                    this._market.products[ubicacionProductoMarket].amount = 0;

                    // añadir objeto a array con su nombre y amount
                    nuevoProducto = { name: name, amount: cantidadMarket };
                    this.products.push(nuevoProducto);

                    // devolverá los productos añadidos
                    productosAnyadidos = cantidadMarket;
                    return productosAnyadidos;

                    //SI amount < existencias_del_supermercado
                } else if (amount < this._market.products[ubicacionProductoMarket].amount) {
                    // Cojeremos la cantidad que hay en el _market
                    let cantidadMarket = this._market.products[ubicacionProductoMarket].amount;

                    // Restaremos la cantidad que hay en el _market - la cantidad que hemos cojido para añadirla al carrito
                    let resta = cantidadMarket - amount;

                    // Añadiremos en el aray _market en el hueco de amount del producto que queremos cambiar y hemos restado su amount
                    this._market.products[ubicacionProductoMarket].amount = resta;

                    // devolverá los productos añadidos
                    productosAnyadidos = amount;
                    return productosAnyadidos;
                }
            }
            //NO existe en el supermercado
        } else {
            return 0;
        }
    };

    this.addAll = function (array) {
        this.products = array;
        let amountArray = [array.length];
        for (let i = 0; i < array.length; i++) {
            amountArray[i] = array[i].amount;
        }
        return amountArray;
    };

    this.remove = function (name, amount) {
        let amountRemoved;
        this.products.forEach((element, index) => 
            {if (element.name.includes(name)) {
                console.log("");
                console.log(`${name} existe y quiere eliminar: ${amount}`);
                console.log("");
                
                // si el amount de la funcion es 0 o undefined
                if (amount <= 0 || amount == undefined) {
                    
                    // coje de la ubicacion del amount y la guarda en total
                    amountRemoved = this.products[index].amount;
                    
                    // se elimina el producto entero ya que elimina toda la cantidad que queria comprar
                    this.products.splice(index, 1);
                // si indica cuanto quiere remover
                } else {
                    // si indica una cantidad menor a la que hay en el elemento, simplemente restaremos
                    if (amount <= element.amount) {
                        element.amount -= amount;
                        amountRemoved = amount;
                    } else{
                        amountRemoved = element.amount;
                        element.amount = 0;
                    }
                }

            } else {
                amountRemoved = 0;
            }
        });
        return amountRemoved;
    };

    this.removeAll = function (name, amount) {
        let amountRemoved;
        this.products.forEach((element, index) => {
            // si existe en el carrito
            if (element.name.includes(name)) {
                
                console.log("");
                console.log(`${name} existe y quiere eliminar: ${amount}`);
                console.log("");

                // si el amount de la funcion es 0 o undefined
                if (amount <= 0 || amount == undefined) {
                    // coje de la ubicacion del amount y la guarda en total
                    amountRemoved = this.products[index].amount;
                    // se elimina el producto entero ya que elimina toda la cantidad que queria comprar
                    this.products.splice(index, 1);
                    // si indica cuanto quiere remover
                } else {
                // si indica una cantidad menor a la que hay en el elemento, simplemente restaremos
                    if (amount <= element.amount) {
                        element.amount -= amount;
                        amountRemoved = amount;
                    }
                }
            } else {
                amountRemoved = 0;
            }
        });
        return amountRemoved;
    }

    this.hasProduct = function (name){
        this.products.forEach((element, index) => {
            // si el elemento existe en el carrito
            if (element.name.includes(name)) {
                devuelve = true;
            }else{
                devuelve = false;
            }
        });
        return devuelve;
    };
}

/* 
Función constructora del objeto CartProduct con los siguientes requisitos
*/
function CartProduct(name, amount) {
    this.name = name;
    this.amount = amount;
};

let cart = new ShoppingCart(supermarket);
console.log(cart);

// Añadir al carrito
let añadidos = cart.add('Cereales', 5);
if (añadidos === 0) {
    console.log('No quedan existencias de Cereales en el super');
} else {
    console.log(`Se han añadido ${añadidos} Cereales`);
}

/*EJ 4 remove start*/
cart2 = new ShoppingCart(supermarket);
let cereales = new CartProduct('Cereales', 2);
let platanos = new CartProduct('Plátanos', 3);

añadidos = cart2.addAll([cereales, platanos]);
console.log(añadidos); // Mostraría [2, 3]
/*EJ 4 remove end*/

/*EJ 5 remove start*/
console.table(cart2.products);

//let eliminados = cart2.remove('Cereales', 1);
//console.log('Eliminar 1 de Cereales eliminados: '+ eliminados); // Mostraría: 1

//eliminados = cart2.remove('Plátanos');
//console.log('Eliminar "undefined" Plátanos eliminados: '+ eliminados); // Mostraría: 3
console.table(cart2.products);
/*EJ 5 remove fin*/

/*EJ 6 removeAll start*/
//Falta que vaya...
eliminados = cart.removeAll([
    new CartProduct('Cereales', 1),
    new CartProduct('Plátanos', 0)
]);
console.log(eliminados); // Mostraría [1, 3]
/*EJ 6 removeAll fin*/

/*EJ 7 removeAll start*/
console.log(cart.hasProduct('Cereales')); // Mostraría: true
console.log(cart.hasProduct('Plátanos')); // Mostraría: false
/*EJ 7 removeAll fin*/
