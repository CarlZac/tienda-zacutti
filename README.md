# Proyecto para el curso REACT.JS en CoderHouse, comisión 41080.

## E-Commerce para Trippelheim

Simulador de E-Commerce de hidromiel artesanal para Trippelheim.

La aplicación se basa en una tienda online de bebidas artesanales, donde se detalla cada producto y se cuenta con un filtrado por categorías usando información de un JSON propio llamado asyncMock, el cual contiene los productos.

Las acciones que se pueden realizar en el simulador son las siguientes:

- Filtrado de productos según su categoría.  

- Interactuar con cada producto en el origen y desplegar su card propia con los detalles del mismo. 

- La card de detalle cuenta con un contador que sirve para sumar la cantidad deseada de productos al carrito.

## Instalaciones mediante npm.

- Framework: Create-React-App
- Library: React-router-dom

## Que se construyo?

Las categorías de los productos están linkeadas en el navbar para realizar el filtrado de los mismos según su categoría usando las rutas "/category/:categoryId". 

En el componente ItemListContainer están guardados las cards de los productos, creadas de forma dinámica atreves de los componentes ItemList e Item, en estas nos vamos a encontrar con el botón de "Más Info", el cual nos va a dirigir hacia la ruta "/detail/:productId" donde están los detalles del producto seleccionado, y el mismo cuenta con un componente llamado ItemCount, el cual se va a ocupar de dar la opción interactiva al usuario para sumar la cantidad que desee de producto al carrito de compra, mediante los botones de "-", "+" y "Agregar al Carrito". 

## Flow de la App 

![Alt text](https://drive.google.com/file/d/1Es_fPMUY80Ep4mpXL3ZGsFHm_Kc8UyV7/view?usp=sharing)

## Deployed App

[Deploy](https://tienda-zacutti.vercel.app).

