function checkPassword(form){
   let pass= (document.getElementById('password').value);
   let cpass = (document.getElementById('cpassword').value);
   if(pass!=cpass){
      document.getElementById('msg-cpassword').innerHTML="Les deux mot de passes ne sont pas identiques";
        return false;}
        else{
         return true;
 }
}