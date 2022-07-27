const products = [
    {
        id: '1',
        name: "Clásico",
        price: 1000,
        img: "images/clasico.jpg",
        category: 'hidromiel',
        vol: 750,
        stock: 30,
        description: 'A la vista presenta de un intenso color oro, posee una gran nitidez debido a una alta atenuación lograda mediante meses de madurado. Con aroma expresivo, asidrado y refrescante, se aprecia la complejidad de la miel. En boca es balanceado entre acaramelado, fresco y frutal. Extra dulce con cuerpo medio a bajo, graduación alcohólica de 14%.'
    },
    {
        id: '2',
        name: "Brúnt",
        price: 1000,
        img: "images/jegerarven-brunt.jpg",
        category: 'aperitivo',
        vol: 750,
        stock: 30,
        description: 'Descripción del estilo en cuestión.'
    },
    {
        id: '3',
        name: "Idunn",
        price: 500,
        img: "images/absenta.jpg",
        category: 'licor',
        vol: 200,
        stock: 20,
        description: 'Descripción del estilo en cuestión.'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProduct = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products[0])
        }, 2000)
    })
}