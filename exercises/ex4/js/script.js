
 document.getElementById("submit_btn").onclick = function() {

 var fullname= document.getElementById("fullname").value;
 console.log(fullname);
 var resultName = /^[a-zA-Z ]+$/.test(fullname);


 if(resultName==false){
  alert("Enter your Real Name!");
  return false;
 }

 var password= document.getElementById("password").value;
 var len = password.length;
 if(len < 4 ){
  alert("Enter a Real password.");
  return false;
 }


  var parentsPhoneNum =document.getElementById("phone").value;
  var resultPhone = /^\d{10}$/.test(parentsPhoneNum);
  console.log(resultPhone);
  if(resultPhone==false){
    alert("Enter your parents real Phone Number !");
    return false;
  }


   var lengthC = $(":checkbox:checked").length ;
   console.log(lengthC);

  if(lengthC < 9){
    alert("I meant mark everything!");
    console.log("nonono");

    return false;
  }

return true;

}