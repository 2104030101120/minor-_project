function validate(){
    var username=document.getElementById("user").value;
    var password=document.getElementById("pass").value;

    if( username=="keyur" && password=="keyur"){
        alert("LOGIN SUCCESSFUL");
        window.open("home.html");
        return false;
    }
    else{
        alert("invalid ID or PASSWORD")
    }
    
}
