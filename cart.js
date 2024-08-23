var getData = JSON.parse(localStorage.getItem("addToCart"))

for (var i = 0; i < getData.length; i++) {
    menuCreat(getData[i]);
}


function menuCreat(addmenu) {
    var contaier = document.getElementById('con')
    var div = document.createElement("div")
    var tittle = document.createElement("h3");
    var price = document.createElement("h3");
    var description = document.createElement("p");
    var image = document.createElement("img");
    var Remove = document.createElement("button");


    div.className = "div1"
    tittle.className = "title";
    price.className = "price";
    description.className = "desc";
    image.className = "img1";
    Remove.className = "button";
    Remove.innerText = "Remove";
    Remove.onclick = function () {
        getData.splice(getData.indexOf(addmenu), 1)
        localStorage.setItem("addToCart", JSON.stringify(getData))
        contaier.innerText = ""
        for (var i = 0; i < getData.length; i++) {
            menuCreat(getData[i]);
        }
    }
    tittle.innerText = addmenu.title;
    price.innerText = addmenu.price;
    description.innerText = addmenu.description;
    image.src = addmenu.images;

    div.append(image, tittle, price, description, Remove);
    contaier.style.display = 'flex';
    contaier.style.flexWrap = 'wrap';
    contaier.appendChild(div);
}


