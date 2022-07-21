const products = [
    {
        id: '1',
        name: "Clásico",
        price: 1000,
        img: "images/clasico.jpg",
        category: 'hidromiel',
        vol: 750,
        stock: 60,
        description: 'Descripción del estilo en cuestión.'
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