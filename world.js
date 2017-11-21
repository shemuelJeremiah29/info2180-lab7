window.onload= function (){  
    var d = document.createElement("INPUT");  
    d.type= "checkbox";
    var e= document.getElementById("controls"); 
    e.appendChild(d);   
    d.setAttribute("class","check");           
    var bel= document.createElement("Label");  
    bel.setAttribute("for",d);  
    bel.innerHTML= "  all: " ;  
    document.getElementById("controls").insertBefore(bel, d);      
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
                     var docval= document.getElementById('country').value; 
                    //  var url ="https://ide.c9.io/shemueljeremiah21/info2180_lab7/world.php";
                     http.open('GET',"world.php?country="+docval,true);  
                     http.send(); 
                 });
                
    } 
    
           var checking= document.getElementsByClassName("check");  
           
           checking.addEventListener("change", function(){ 
                     var checkhttp= new XMLHttpRequest();
                     checkhttp.onreadystatechange() = function() { 
                      console.log(checkhttp); 
                       if(readyState== 4 && this.status == 200){  
                        console.log(checkhttp.responseText);
                        document.getElementById("results").innerHTML=checkhttp.responseText; 
                       }
                      
                     }; 
                     });   
                     
                     var docheck= document.getElementsByClassName("check").checked;
                     checkhttp.open('GET',"world.php?all="+docheck,true);  
                     checkhttp.send(); 
                     
    clickButton(); 
}