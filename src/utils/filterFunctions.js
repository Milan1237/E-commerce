export const filterProductByCategory = ({category , allProducts })=>{
    if(category === 'all') return  allProducts ;
    const result =  allProducts.filter((products)=> products.category === category);
    return result ; 
}

export const filterProductByRating = ({rate , allProducts})=>{
    
    const result = allProducts.filter(product=> product.rating.rate >= rate);
    return result ; 
}

export const filterProductByBudget = ({budget , allproducts})=>{
        const result = allproducts.filter(product=> product.price <= budget ) ; 
        return result ; 
}

export const sortProducts = ({sort , allProducts})=>{
    const sortedArray = [...allProducts];
    if(sort === 'high'){
        sortedArray.sort((a , b)=>  b.price - a.price );
    }
    if(sort === 'low'){
        sortedArray.sort((a , b)=> a.price - b.price  );
    }
    return sortedArray ;
}