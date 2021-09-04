# My Store

El objetivo es crear una aplicación utilizando HTML, CSS y JS dónde un usuario pueda dar de alta su inventario y manipularlo. Deberán editar todos los archivos que consideren necesario modificar: `index.js`, `store.js`, `index.css` y `index.html`

## Store class en `store.js`

La clase Store en JavaScript contendrá toda la funcionalidad relacionada al inventario. Por ejemplo:

- Almacenar el inventario (👀 `this.items` instance variable)
- Agregar un nuevo artículo al inventario (👀 `addItem(item)` method)
- Listar todos los artículos del inventario (👀 `getItems()` method)
- ¿Cuántos artículos tiene mi tienda? (👀 `getCount()` method)
- ¿Ya había agregado este artículo 🤔? (👀 `exists(item)` method => boolean)

## Pero, ¿cómo funciona?

1. En el archivo `index.js` se crea una instancia de la clase _Store_: `const store = new Store;`
2. La instancia de la clase se crea cuando se llama el `constructor()` de la clase, el cuál crea una nueva variable de instancia `this.items`. Una variable de instancia es aquella que cambia de objeto a objeto, es decir que si creamos una nueva instancia de la clase _Store_ entonces se creará una nueva variable de instancia `this.items` que le pertenece a esa nueva tienda y no a mi tienda. Esta variable de instancia va a apuntar a un arreglo vacio en un inicio: `this.items = [];`
3. Y además `this.items` ya esta disponible en cualquier lugar de la clase! Por ejemplo dentro del código de cualquier método cómo `getCount()`, puedes consultar el valor de `this.items`
4. El método `store.getCount()` será utilizado para obtener la cantidad de artículos que hay en el inventario
5. El método `store.getItems()` será utilizado para leer los artículos y mostrarlos en la UI
6. Un usuario podrá agregar un nuevo artículo al introducir el nombre y llamar ejecutar el método `store.addItem(...)`
7. Cada vez que el usuario ingrese una letra... deberíamos asegurarnos si ese artículo ya existe en el intentario usando el método `store.exists(...)`

Se utilizan además otras funciones como:
- `addEventListener` qué "conecta" un evento a algún elemento interactivo, como un input o un botón, para que ese elemento lo puedan ejecutar en algún momento específico cómo en un click, al presionar una techa, al mover el cursor, etc.
-  `classList.add`, y `classList.remove`, que agregan o remueven una clase de CSS de un elemento de HTML

## Ayuda 🔥👨‍🚒

1. Recuerda que `this.items` es un arreglo y que esta disponible en todos lados de la clase porque es una variable de instancia.
2. Pon atención a que tipo de valor deberá regresar cada método. Por ejemplo `getCount()` debería regresar un número que represente la cantidad de elementos en el arreglo de `this.items`
3. Algunos métodos requieren información para poder completar su operación principal. Por ejemplo `addItem` necesita un `item` para agregarlo al arreglo de elementos (`this.items`) en el inventario.
