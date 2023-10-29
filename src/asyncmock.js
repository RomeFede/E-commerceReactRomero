const misProductos = [
    { id: "1", nombre: "Muzzarella", precio: 4000, img: "../public/img/mozzarella.jpg", idCat: "2" },
    { id: "2", nombre: "Napolitana", precio: 4200, img: "../public/img/napo.webp", idCat: "2" },
    { id: "3", nombre: "Fugazzeta", precio: 5000, img: "../public/img/pizza-fugarellena2.jpg", idCat: "2" },
    { id: "4", nombre: "Jamon y Morron", precio: 4500, img: "../public/img/pizza_jym.jpg", idCat: "2" },
    { id: "5", nombre: "Tropical", precio: 4500, img: "../public/img/pizza-tropical.jpg", idCat: "2" },
    { id: "6", nombre: "Rúcula y crudo", precio: 4500, img: "../public/img/pizza-tropical.jpg", idCat: "2" },
    { id: "7", nombre: "Calabresa", precio: 4400, img: "../public/img/pizza.longaniza.webp", idCat: "2" },
    { id: "8", nombre: "Anchoas", precio: 4700, img: "../public/img/pizza-anchoas.jpg", idCat: "2" },
    { id: "9", nombre: "Jamon y queso", precio: 500, img: "../public/img/empanadajyq.jpg", idCat: "3" },
    { id: "10", nombre: "Humita", precio: 550, img: "../public/img/empanadahumita.jpg", idCat: "3" },
    { id: "11", nombre: "Carne suave", precio: 500, img: "../public/img/empanadacarne.jpg", idCat: "3" },
    { id: "12", nombre: "Cebolla y queso", precio: 500, img: "../public/img/empanadaqyc.jpg", idCat: "3" },
    { id: "13", nombre: "Caprese", precio: 600, img: "../public/img/empanadacaprese.jpg", idCat: "3" },
    { id: "14", nombre: "Pollo", precio: 550, img: "../public/img/empanadapollo.jpg", idCat: "3" },
    { id: "15", nombre: "Flan", precio: 1200, img: "../public/img/flan.jpg", idCat: "4" },
    { id: "16", nombre: "Tiramisu", precio: 1500, img: "../public/img/tiramisu.jpg", idCat: "4" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 500)
    })
}




export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id);
            resolve(producto);
        }, 500)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria)
            resolve(productosCategoria);
        }, 500)
    })
}