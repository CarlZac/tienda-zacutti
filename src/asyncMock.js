const products = [
    {
        id: '1',
        name: "Clásico",
        price: 1000,
        img: "/images/clasico.jpg",
        category: 'hidromiel',
        vol: 750,
        stock: 30,
        description: 'A la vista presenta de un intenso color oro, posee una gran nitidez debido a una alta atenuación lograda mediante meses de madurado. Con aroma expresivo, asidrado y refrescante, se aprecia la complejidad de la miel. En boca es balanceado entre acaramelado, fresco y frutal. Extra dulce con cuerpo medio a bajo, graduación alcohólica de 14%.'
    },
    {
        id: '2',
        name: "Brúnt",
        price: 1000,
        img: "/images/jegerarven-brunt.jpg",
        category: 'aperitivo',
        vol: 750,
        stock: 30,
        description: 'De un intenso color marrón oscuro. Con aroma herbal, maltoso y tostado, se aprecia la miel de fondo. En boca están muy presentes las hierbas, con notas anisadas, la malta tostada da una sensación a café mientras la miel la suaviza. Con cuerpo medio a bajo, graduación alcohólica de 14%. Podés tomarlo puro o diluirlo con lo que más te guste!'
    },
    {
        id: '3',
        name: "Idunn",
        price: 500,
        img: "/images/absenta.jpg",
        category: 'licor',
        vol: 200,
        stock: 20,
        description: 'El verde esmeralda es la principal característica de esta bebida. Su aroma es herbal, predominando especialmente el anís. En boca se funde el amargo del ajenjo con el dulzor de la miel y la frescura del resto de las hierbas, logrando un balance épico. Con cuerpo ligero, graduación alcohólica de 70%.'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === id))
        }, 500)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}