
var btnRegister = document.querySelector('#btn_register')

function register(){
    btnRegister.addEventListener('click', function(){
        var idCin = document.querySelector('#cin').value;
        var user = document.querySelector('#user_name').value;
        var email = document.querySelector('#mail').value;
        var pass1 = document.querySelector('#passF').value;
        var pass2 = document.querySelector('#passS').value;
            email = email.toLowerCase();
        var alertMsg = "";
        if(idCin === null || user === null || email === null || pass1 === null || pass2 === null){
            return alert("-some or all field are not filled !\n")
        }
        if(user.includes(",") || email.includes(",") || pass1.includes(",") || pass2.includes(",")){
            alertMsg += "comma (,) is a forbiden charracter !\n"
        }
        //no need to check for number data cause the input is set to number !!
        if(!idCin.length === 8){
            alertMsg += "-ID must be 8 numbers!\n";
        }
        if(user.length < 10 || user.length > 46){
            alertMsg += "- your user name must at leest contain 10 charracters and at most 46 !\n";
        }
        if(email.indexOf("@") < 0){
            alertMsg += "-your Email spelling is wrong no @ !\n"; 
        }
        if(pass1 !== pass2){
            alertMsg += "-the password confirmation is wrong !\n";
        }
        if(pass1.length < 6 || pass1.length > 24){
            alertMsg += "-Your password must contain at lest 6 charracters and at most 24 !\n";
        }

        if(alertMsg !== ""){
            return alert(alertMsg);
        }
        var arr = [idCin, user, email, pass1];
        var storeRegister = arr.join(',');
        localStorage.setItem(idCin, storeRegister);

        document.getElementById("registration").reset();
        alert("Your accourt has been registerd user num : " + idCin);
        window.open("./signIn.html")
        return window.close("./catalog.html")
    })
}

register();


// 45698725 ; Hammed bouZoullata ; bouZoullata@gun.com ; Tri1558Oit
// 45829173 ; Ritta Mallita ; mallita@bazzouka.com ; 12Mal78tre
// 78523694 ; Ghorjkam Mafrit ; mafrite@gmail.com ; 12frite8523
// 45682364 ; Hoomago Drigma ; Drigma@gamail.com ; 458Treo458
// 12564863 / jalmoudi gammoudi / gammoudi@frigolo.batata / Rti485poo4
// 45869237 / trafico matnikou / matnikou@google.com / 12Uyr856Oi
// 15975364 / kermoli karbouli / terrmouh@gmail.com / 458Tre526Tp