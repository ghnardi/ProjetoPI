function clickMenu(){

    if (menumenu.style.display == 'flex' && hidemenumenu.style.display == 'none'){
         menumenu.style.display = 'none'
         hidemenumenu.style.display = 'flex'
    } else {
     menumenu.style.display = 'flex'
     hidemenumenu.style.display = 'none'
    }
 }
 function clickMO1(){
     blocobloco2.style.backgroundColor = "#2E2109"
     hidemenubloco2.style.backgroundColor = "#2E2109"
     configs.style.display = 'none'
     
 if (dashdash1.style.display == 'flex' ){
     blocobloco1.style.backgroundColor = "#2E2109"
     dashdash1.style.display = 'none'
     hidemenubloco1.style.backgroundColor = "#2E2109"
 } else {
     dashdash1.style.display = 'flex'
     blocobloco1.style.backgroundColor = "#6D4A00"
     hidemenubloco1.style.backgroundColor = "#6D4A00"
 }
 }

function clickBloco2(){
     if (configs.style.display == "none"){
         blocobloco1.style.backgroundColor = "#2E2109"
         hidemenubloco1.style.backgroundColor = "#2E2109"
         dashdash1.style.display = 'none'

         hidemenubloco2.style.backgroundColor = "#6D4A00"
         blocobloco2.style.backgroundColor = "#6D4A00" 
         configs.style.display = "flex"
     } else {
         configs.style.display = "none"
         blocobloco2.style.backgroundColor = "#2E2109"
         hidemenubloco2.style.backgroundColor = "#2E2109"
     } 
    
 }

 function clickHide01(){
     blocobloco2.style.backgroundColor = "#2E2109"
     hidemenubloco2.style.backgroundColor = "#2E2109"
     configs.style.display = 'none'
     
 if (dashdash1.style.display == 'flex' ){
     blocobloco1.style.backgroundColor = "#2E2109"
     dashdash1.style.display = 'none'
     hidemenubloco1.style.backgroundColor = "#2E2109"
 } else {
     dashdash1.style.display = 'flex'
     blocobloco1.style.backgroundColor = "#6D4A00"
     hidemenubloco1.style.backgroundColor = "#6D4A00"
 }
 }

 function clickHide02(){
     if (configs.style.display == "none"){
         blocobloco1.style.backgroundColor = "#2E2109"
         hidemenubloco1.style.backgroundColor = "#2E2109"
         dashdash1.style.display = 'none'

         hidemenubloco2.style.backgroundColor = "#6D4A00"
         blocobloco2.style.backgroundColor = "#6D4A00" 
         configs.style.display = "flex"
     } else {
         configs.style.display = "none"
         blocobloco2.style.backgroundColor = "#2E2109"
         hidemenubloco2.style.backgroundColor = "#2E2109"
     } 
    
 }

function clickPerfil(){
 if (subsub.style.display == 'flex'){
     subsub.style.display = 'none'
 } else {
     subsub.style.display = 'flex'
}
 

}