# Proyecto para el curso REACT.JS en CoderHouse, comisión 41080.

## Pasos para ejecutar el proyecto

- Descargar/clonar este repositorio.

- Asegurarse de contar con [NodeJs](https://nodejs.org/en/) en la PC.

- Desde la carpeta del proyecto correr el siguiente comando en la terminal:

```sh
npm install
```
- Cargar o crear las variables de entorno para poder utilizar el proyecto.

- El proyecto ya está listo para compilarse y ejectuarse con el siguiente comando:

```sh
npm start
```

## E-Commerce para Trippelheim

Simulador de E-Commerce de hidromiel artesanal para Trippelheim.

La aplicación se basa en una tienda online de bebidas artesanales, donde se detalla cada producto y se cuenta con un filtrado por categorías usando la información cargada en Firebase, la cual contiene los productos y registra las ordenes de compra.

Las acciones que se pueden realizar en el simulador son las siguientes:

- Filtrado de productos según su categoría.  

- Interactuar con cada producto en el origen y desplegar su card propia con los detalles del mismo. 

- La card de detalle cuenta con un contador que sirve para sumar la cantidad deseada de productos al carrito.

- Al cargar la cantidad deseada de productos al carrito aparece el botón para ir al mismo.

- Dentro del carrito nos encontramos con todos los productos cargados, cantidad de cada estilo y precio por estilo y el total.

- Están las opciones de sacar del carrito algún estilo puntual o todos, y también la opción de avanzar con la compra.

- En el formulario para realizar la orden se deben cargar nombre, email y teléfono para ser contactado una vez realizada la misma.

- Al realizar la orden, un alert nos indica el código de la misma y nos redirecciona al home.

## Instalaciones mediante npm.

- Framework: React (Create-React-App)
- Libraries:
  > React-router-dom
  > Sweet Alert 2

## Funcionamiento de la App

Las categorías de los productos están linkeadas en el navbar para realizar el filtrado de los mismos según su categoría usando las rutas "/category/:categoryId". 

En el componente ItemListContainer están guardados las cards de los productos, creadas de forma dinámica atreves de los componentes ItemList e Item, en estas nos vamos a encontrar con el botón de "Más Info", el cual nos va a dirigir hacia la ruta "/detail/:productId" donde están los detalles del producto seleccionado, y el mismo cuenta con un componente llamado Counter, el cual se va a ocupar de dar la opción interactiva al usuario para sumar la cantidad que desee de producto al carrito de compra, mediante los botones de "-", "+" y "Agregar al Carrito". Una vez agregados los productos el contador va a ser reemplazado por un botón "ir al Carrito", el cuál nos redirecciona al componente CartContainer, donde vamos a encontrar unas versiones simplificadas de las cards de los productos cargados. En este componente nos encontramos con los precios por estilos y el total del carrito, también con las opciones de eliminar el estilo que no se vaya a comprar o eliminar todo el carrito, dejándolo vacío. También se puede avanzar con la compra, lo cual nos lleva al componente Form, el que se va a ocupar de recibir la información del comprador, que, al generar la orden, se le imprime en un alert el código de la misma y se lo redirecciona al home.

## Flow de la App 

![Alt text](trippelcommerce.gif)

## Deployed App

[Deploy](https://tienda-zacutti.vercel.app).
