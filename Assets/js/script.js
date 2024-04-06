
window.onload= async ()=> {
    var product = document.getElementById('product');
    let res = await axios.get('https://fakestoreapi.com/products');
   let data = res.data
//    console.log(data)

// for loop
// for each
// ṃap function
data.map((item,index=key)=>{
       let data =  
       `
            <div class="w-full border rounded-md-top overflow-hidden bg-gray-200 p-2 rounded productdata">
                <img src="${item.image}" alt="shopping" class="h-[330px] object-cover w-full">
                <p class="font-bold text-black text-md mt-2">${item.title.slice(0,20)}</p>
                <p class="font-semibold">${item.description.slice(0,40)}</p>
                <p class="font-bold">${item.price} &nbsp; <del>${item.price*2}</del></p>
                <div class="flex justify-between mt-2">
                    <button class="bg-blue-500 py-2 px-2 rounded text-white font-semibold">Buy Now</button>
                    <button class="bg-rose-500 py-2 px-2 rounded text-white font-semibold">Add to Cart</button>
                </div>
            </div>
           `
           product.innerHTML += data ;
})

// Search Section Start
const search = document.getElementById("search");
// search.onkeyup = function(){
//     console.log(this.value);
// }

search.oninput = () => {
    const searchKey = search.value.toLowerCase();
    const productdata = document.getElementsByClassName("productdata");
    // console.log(productdata);
    for(let product of productdata){
        const text = product.innerHTML.toLowerCase();
        // console.log(text);
        const matching = text.indexOf(searchKey)
        console.log(matching)
        if(matching != -1){
            product.style.display = "block"
        }else{
            product.style.display = "none"
        }
    }
}

//Search Section End 

}