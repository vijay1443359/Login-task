//let password = document.getElementById("pwad");
//let cpassword = document.getElementById("cpwad");




function check(){

    

    let password = document.getElementById("vijay1").value;
    let cpassword = document.getElementById("vijay2").value;
 console.log(password);
 console.log(cpassword);
 
    if(password===cpassword){
        console.log("Equal");
        document.getElementById("print1").innerHTML="Password is equal";
    }else{
        console.log("Not Equal")
        document.getElementById("print1").innerHTML="Password is NOT equal";
    }
}




// var print1 = document.createElement("p"); 
// print1.appendChild(password);
// //document.getElementById("print1");

