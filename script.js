
const cataloge = document.querySelector("#catalogue");


function generateData (array){
//this first loop creates the div boxes and the h1 title nested in the divs
    for (let index = 0; index < array.length; index++) {
        //create the div box for product
        var creaDiv = document.createElement("DIV");
        //create the h1
        var tilte = document.createElement("H1");
        //add class to div created
        creaDiv.classList.add("grid_product")
        //append div in big box and h1 under div as child
        cataloge.appendChild(creaDiv).appendChild(tilte);
    }
    //secon part here is to add the background pics to the generated divs and the names of products to the h1
    var productSlots = document.querySelectorAll('.grid_product');
    var titlesProd = document.querySelectorAll('.grid_product h1');
    
    for (let index = 0; index < productSlots.length; index++) {
        //add pic to div background and more style specifications;
        productSlots[index].style.background = "url("+ array[index].imgLarge +") no-repeat center";
        productSlots[index].style.backgroundSize = "contain";
        //seet the ID it will be usefuul to retreve the item later
        //we used a regex to fill the spaces we will reverseEngineer this on reuse
        var setID = array[index].idg;
        productSlots[index].setAttribute("id", setID)
        //add product name to the h1 to the tilte
        titlesProd[index].innerText = array[index].name;
    }
}

generateData(allProducts);

function search(){
    cataloge.innerHTML = "";
    var inputSearch = document.querySelector("#search_data").value; 
    inputSearch = inputSearch.toLowerCase();
    var result = allProducts.filter(function(element){
        var test = "";
        for (const key in element) {
            test += element[key];
        }
        test = test.toLowerCase();
        return (test.includes(inputSearch));
    });
    if(result.length ===0){
        alert("Sorry we have no match for your demande please try searching for something else :)")
        generateData(allProducts);
    } else {
        generateData(result);
    }
     
}


function clickswitch(str){
    cataloge.innerHTML = "";
    var result = allProducts.filter(function(element){
        var test = "";
        for (const key in element) {
            test += element[key];
        }
        test = test.toLowerCase();
        return (test.includes(str));
    }); 
    generateData(result);
}


const searchBtn = document.getElementById("search_btn");

function searchclick(){
    searchBtn.addEventListener('click', search);
};
searchclick();


// finish the click-on function like the food one and thats all;
const closePopup = document.querySelector("#closer");
const popupGun = document.querySelector("#pop_gun");

function closePopupClick(){
    closePopup.addEventListener('click', function(){
        popupGun.classList.add('close');
    })
}
closePopupClick();


function takeId(theIdHolder){
    return parseInt(theIdHolder.attributes[1].value);
}



function showGun(clicker){ 
    clicker.addEventListener('click', function(){
        popupGun.classList.remove('close');
        var applay = {...allProducts[takeId(clicker)]};
        document.querySelector("#pop_text").innerText = applay.name;
        document.querySelector("#pop_price").innerText = applay.price;
        document.querySelector("#pop_div").style.background = "url("+ applay.imgLarge +") no-repeat";
        document.querySelector("#pop_div").style.backgroundSize = "contain";
        applay = {};
        window.scrollTo(0, 0);
    });
}
const productSlots = document.querySelectorAll('.grid_product');

productSlots.forEach(Element => showGun(Element));
