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

                console.log(`Cantidad de ${comprobarNombre}: ${cantidad}`);
                console.log('Comprobar el amount mayor a cantidad: ' + this._market.products[ubicacionProductoMarket].amount + " >= " + cantidad);


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
                                    //SI amount > existencias_del_supermercado || amount == existencias_del_supermercado
                                    if (amount == this._market.products[ubicacionProductoMarket].amount) {
                                        this._market.products[ubicacionProductoMarket].amount = 0;
                                        cantidadCarrito = this.products[ubicacionProductoCarrito].amount;
                                        suma = cantidadCarrito + amount;
                                        this.products[ubicacionProductoCarrito].amount = suma;
                                    }else if (amount > this._market.products[ubicacionProductoMarket].amount || amount == this._market.products[ubicacionProductoMarket].amount) {
                                        let cantidadMarket = this.products[ubicacionProductoCarrito].amount
                                        this._market.products[ubicacionProductoMarket].amount = cantidadMarket;
                                        
                                        this._market.products[ubicacionProductoMarket].amount = 0;
                                        cantidadCarrito = this.products[ubicacionProductoCarrito].amount;
                                        suma = cantidadCarrito + amount;
                                        this.products[ubicacionProductoCarrito].amount = suma;



                                        //SI amount < existencias_del_supermercado
                                    }else if(amount < this._market.products[ubicacionProductoMarket].amount) {

                                    }
                            //NO existe en el carrito el producto con name:
                            //**Si el producto no existe en el carrito, las existencias se suman a la cantidad del carrito, y se restan de las existencias_del_supermercado.
                            } else {
                                    //SI amount > existencias_del_supermercado || amount == existencias_del_supermercado
                                    if (amount > this._market.products[ubicacionProductoMarket].amount || amount == this._market.products[ubicacionProductoMarket].amount) {
                                        
                                    }
                                    //SI amount < existencias_del_supermercado
                                    if (amount < this._market.products[ubicacionProductoMarket].amount) {
                                        
                                    }
                                
                            }
        //NO existe en el supermercado
        } else {
            return 0;
        }
    }
}

/* 
Función constructora del objeto CartProduct con los siguientes requisitos
*/
function CartProduct(name, amount) {
    this.name = name;
    this.amount = amount;
};
// Ejemplo para crear un producto:
let cereales = new CartProduct('Cereales', 2);

/* Ejercicio 3

*/


let cart = new ShoppingCart(supermarket);
console.log(cart);

// Añadir al carrito
let añadidos = cart.add('Cereales', 5);
