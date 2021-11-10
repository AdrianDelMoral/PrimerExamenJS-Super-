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
        // comprobar en el supermercado si quedan existencias
        // Verificar que existe en el supermercado (accediendo a su propiedad _market) nos dará true si existe
        console.log("Dentro de añadir cart.add:")
        console.log("Variable name es Cereales: " + name);
        // guardo el array productos, para poder trabajar sobre ella solo sin escribir tanto
        let comprobar = false;
        // Verificar que existe en el supermercado el producto con name
        for (let i = 0; i < this._market.products.length; i++) {
            comprobarNombre = this._market.products[i].name;
            if (comprobarNombre == name) {
                // sacamos la ubicación del producto en el array.
                ubicacionProducto = i;
                comprobar = true;
                break;
            };
        };

        // Si existe 
        if (comprobar === true) {
            // sacar la cantidad que hay en el mercado
            cantidad = this._market.products[ubicacionProducto].amount;
            /*ANTES DE AQUI HE SACADO EL ARRAY A UNA VARIABLE Y USADO ESA VARIABLE*/
            console.log(`Cantidad de ${name}: ${cantidad}`);


            console.log('Comprobar el amount mayor a cantidad: ' + this._market.products[ubicacionProducto].amount + " >= " + cantidad);

/*COMPROBAR A PARTIR DE AQUÍ */

//verificar que existe en el supermercado(mediante _market)?
    //SI:
 //       existencias_del_supermercado comprobada y guardada
            //añadir al carrito todos los que pueda hasta que en super quede 0 o la cantidad pueda meterse:
                //existe en el carrito?
                    //SI:
                        // **Si el producto ya existe en el carrito, las existencias se suman a la cantidad que había en el carrito, y se restan de las existencias_del_supermercado.
                            //SI amount > existencias_del_supermercado || amount == existencias_del_supermercado
                                    
                            //SI amount < existencias_del_supermercado
                    //NO:
                        //**Si el producto no existe en el carrito, las existencias se suman a la cantidad del carrito, y se restan de las existencias_del_supermercado.
                            //SI amount > existencias_del_supermercado || amount == existencias_del_supermercado
                            
                            //SI amount < existencias_del_supermercado
    //NO:
        //Return 0;
            // comprobar si existe en el carrito
            let comprobarCarrito = false;
            for (let i = 0; i < this.products.length; i++) {
                comprobarNombreCarrito = this.products[i].name;
                if (comprobarNombreCarrito == name) {
                    // sacamos la ubicación del producto en el array.
                    ubicacionProductoCarrito = i;
                    comprobarCarrito = true;
                    break;
                };
            };

            if (comprobarCarrito == true) {

            } else {
                
            }
/*--------------------------------------------------------------------------------------------------------------------------------------------------------*/

            if (comprobarCarrito == true) {
                // La cantidad en _market es igual o mayor a amount
                if (this._market.products[ubicacionProducto].amount >= cantidad) {
                    if (this._market.products[ubicacionProducto].amount  == cantidad) {
                        // en supermercado se quedará a 0
                        let anyadirLocal = supermarket.products[ubicacionProducto].amount
                        supermarket.products[ubicacionProducto].amount = 0;
                        this.products[i].amount = anyadirLocal
                    } else {

                    }
                    // Restamos los que queremos añadir al carrito al supermercado
                    this._market.products.amount = this._market[name][amount] - amount;
                    // le sumamos la cantidad al carrito
                    this.products[name][amount] = this.products[name][amount] + amount;
                    // si se nos queda a 0 en el super al restarle lo que queremos meterle al carrito:
                }/*  else {
                // Restamos los que queremos añadir al carrito al supermercado que se quedará en 0 porque previamente lo hemos comprobado
                this._market[name][amount] = 0;
                // le sumamos la cantidad al carrito
                this.products[name][amount] = this.products[name][amount] + amount;
            } */

                // si la cantidad que queremos meter(amount) es menor a la cantidad que hay en el _market
                // podremos restar sin que se nos quede a 0
                if (cantidad < amount) {
                    // Restamos los que queremos añadir al carrito al supermercado
                    this._market[name][amount] = this._market[name][amount] - amount;
                    // le sumamos la cantidad al carrito
                    this.products(name, amount);
                    // si se nos queda a 0 en el super al restarle lo que queremos meterle al carrito:
                } else {

                    // Restamos los que queremos añadir al carrito al supermercado que se quedará en 0 porque previamente lo hemos comprobado
                    this._market[name][amount] = 0;
                    // le sumamos la cantidad al carrito
                    this.products(name, amount);
                }

            } else {
                return 0;
            }
        // Si no existe en el mercado, devuelve 0.
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
