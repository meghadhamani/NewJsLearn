let url = fetch("https://dummyjson.com/products");
url.then((res)=>{
    return res.json() 
}).then((res2)=>{
    res2.products.forEach(product=>{
        const markup=`<li>${product.title}</li>`;
        document.querySelector('ul').insertAdjacentHTML('beforeend',markup);
    });
    return console.log(res2)
}).catch(error=>console.log(error));


