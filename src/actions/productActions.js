
export const loadProductAction = () =>({
    type:'LOAD_PRODUCTS'
})

export const productsLoadedAction = products =>({
    type:'PRODUCTS_LOADED',
    products
})