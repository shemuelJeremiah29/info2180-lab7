window.onload= function (){ 
    var clickable=document.getElementById("lookup"); 
   
                function clickButton(){ 
                 clickable.addEventListener("click", function(){ 
                     var http = new XMLHttpRequest();   
                     http.onreadystatechange=function(){  
                         if (this.readyState == 4 && this.status == 200) {  
                             console.log(http.responseText);
                             alert(http.responseText); 
                            document.getElementById("result").innerHTML= http.responseText;
                             
                         }
                     };   
                    //  var docval= document.getElementById('country').value; 
                    //  var url ="https://ide.c9.io/shemueljeremiah21/info2180_lab7/world.php";
                     http.open('GET',"world.php?country=Jamaica",true);  
                     http.send(); 
                 });
                
    }
    clickButton(); 
}