
function Product(name,category,url,price,gender,sold){
    this.name = name;
    this.category = category;
    this.url = url;
    this.price = price;
    this.gender = gender;
    this.sold = sold;
}


function submitProduct(event){
    event.preventDefault()
    

    let form = document.getElementById("form");
    let name = form.name.value;
    let category = form.category.value;
    let url = form.image.value;
    let price = form.price.value;
    let gender = form.gender.value;
    let sold = form.sold.value;

    var carArr = JSON.parse(localStorage.getItem("car")) || [];
    let p = new Product(name,category,url,price,gender,sold);
        carArr.push(p);
        localStorage.setItem("car", JSON.stringify(carArr));
        window.location.href = "product.html"
}