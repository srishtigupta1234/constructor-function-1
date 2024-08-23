var newArr = JSON.parse(localStorage.getItem("car")) || [];
display(newArr)

function display(newArr){

     document.querySelector("#container").innerHTML = "";
     document.querySelector("#product-counter").innerText = "Total Products: " + newArr.length;
   
    newArr.forEach(function(el,index){
        var box = document.createElement("div");
    
        var img = document.createElement("img");
        img.setAttribute("src",el.url)
    
        var name = document.createElement("h3");
        name.innerText = el.name;

        var gender = document.createElement("h5");
        gender.innerText = el.gender;
        
        var category = document.createElement("h5");
        category.innerText = el.category;
       
        var price = document.createElement("h3");
        price.innerText = "$" + el.price;
    
        var del = document.createElement("button")
        del.innerText = "DELETE"
        del.style.color = "red"
        del.addEventListener("click",function(){
            deleteItem(index)
        })

        var sold = document.createElement("button")
        sold.style.color = "white"
        sold.innerText = "Sold"
        sold.style.backgroundColor = el.sold == "true" ? "red" : "green";
        sold.addEventListener("click",function(){
            el.sold = el.sold == "true" ? "false" : "true"; // Toggle sold status
            sold.style.backgroundColor = el.sold == "true" ? "red" : "green";
            localStorage.setItem("car", JSON.stringify(newArr))
        })

        box.append(img,name,gender,category,price,del,sold)
        document.querySelector("#container").append(box);
       })
}

function deleteItem(index) {
    newArr.splice(index, 1);
    localStorage.setItem("car", JSON.stringify(newArr))
    display(newArr);
}
