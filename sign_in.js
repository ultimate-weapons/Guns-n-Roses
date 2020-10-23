var btnSingin = document.querySelector('#btn_in');

function createuser(nic, name, email, password){
    var user ={};

    user.nic = nic;
    user.name = name;
    user.email = email;
    user.password = password;

    return user;
}

var instaceUser = {};

function signIn() {
    btnSingin.addEventListener('click', function(){
        // instaceUser = {};
        var nic = document.querySelector('#cin_in').value;
        var passW = document.querySelector('#pass_in').value;

        if(localStorage.getItem(nic) !== null){
            var arr = localStorage.getItem(nic).split(',');

            instaceUser = createuser(arr[0], arr[1], arr[2], arr[3]);
            if(instaceUser.password !== passW){
                document.getElementById("connection").reset();
                return alert("your password is Wrong !\n please try again :)");
            } else{
                document.getElementById("connection").reset();
                //alert("welcome user : " + instaceUser.name + "\nUser NIC : " + instaceUser.nic);
                window.open("./catalog.html")
                return window.close("./signIn.html")
            }
        }

        return alert("your data entry is wrong NIC not existant !");
    })
}

signIn();

