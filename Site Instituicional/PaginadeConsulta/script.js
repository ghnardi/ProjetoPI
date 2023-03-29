function clickMenu(){

    if (menumenu.style.display == 'flex' && hidemenumenu.style.display == 'none'){
         menumenu.style.display = 'none'
         hidemenumenu.style.display = 'flex'
    } else {
     menumenu.style.display = 'flex'
     hidemenumenu.style.display = 'none'
    }
 }
 function clickBloco1(){
    blocobloco2.style.backgroundColor = "#2E2109"
    blocobloco3.style.backgroundColor = "#2E2109"
    blocobloco4.style.backgroundColor = "#2E2109"
     hidemenubloco2.style.backgroundColor = "#2E2109"
     hidemenubloco3.style.backgroundColor = "#2E2109"
     hidemenubloco4.style.backgroundColor = "#2E2109"
     alaala2a.style.display = 'none'
     alaala3a.style.display = 'none'
     alaala4a.style.display = 'none'
     
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
    if (alaala2a.style.display == "none"){
        blocobloco1.style.backgroundColor = "#2E2109"
        blocobloco4.style.backgroundColor = "#2E2109"
        blocobloco3.style.backgroundColor = "#2E2109"
        hidemenubloco1.style.backgroundColor = "#2E2109"
        hidemenubloco4.style.backgroundColor = "#2E2109"
        hidemenubloco3.style.backgroundColor = "#2E2109"
        dashdash1.style.display = 'none'
        alaala3a.style.display = 'none'
        alaala4a.style.display = 'none'

        hidemenubloco2.style.backgroundColor = "#6D4A00"
        blocobloco2.style.backgroundColor = "#6D4A00" 
        alaala2a.style.display = "flex"
    } else {
        alaala2a.style.display = "none"
        blocobloco2.style.backgroundColor = "#2E2109"
        hidemenubloco2.style.backgroundColor = "#2E2109"
    } 
 }

 function clickBloco3(){
    if (alaala3a.style.display == "none"){
        blocobloco1.style.backgroundColor = "#2E2109"
        blocobloco2.style.backgroundColor = "#2E2109"
        blocobloco4.style.backgroundColor = "#2E2109"
        hidemenubloco1.style.backgroundColor = "#2E2109"
        hidemenubloco2.style.backgroundColor = "#2E2109"
        hidemenubloco4.style.backgroundColor = "#2E2109"
        dashdash1.style.display = 'none'
        alaala2a.style.display = 'none'
        alaala4a.style.display = 'none'

        hidemenubloco3.style.backgroundColor = "#6D4A00"
        blocobloco3.style.backgroundColor = "#6D4A00" 
        alaala3a.style.display = "flex"
    } else {
        alaala3a.style.display = "none"
        blocobloco3.style.backgroundColor = "#2E2109"
        hidemenubloco3.style.backgroundColor = "#2E2109"
    } 
   
}

function clickBloco4(){
    if (alaala4a.style.display == "none"){
        blocobloco1.style.backgroundColor = "#2E2109"
        blocobloco2.style.backgroundColor = "#2E2109"
        blocobloco3.style.backgroundColor = "#2E2109"
        hidemenubloco1.style.backgroundColor = "#2E2109"
        hidemenubloco2.style.backgroundColor = "#2E2109"
        hidemenubloco3.style.backgroundColor = "#2E2109"
        dashdash1.style.display = 'none'
        alaala2a.style.display = 'none'
        alaala3a.style.display = 'none'

        hidemenubloco4.style.backgroundColor = "#6D4A00"
        blocobloco4.style.backgroundColor = "#6D4A00" 
        alaala4a.style.display = "flex"
    } else {
        alaala4a.style.display = "none"
        blocobloco4.style.backgroundColor = "#2E2109"
        hidemenubloco4.style.backgroundColor = "#2E2109"
    } 
   
}

 function clickHide01(){
     blocobloco2.style.backgroundColor = "#2E2109"
     hidemenubloco2.style.backgroundColor = "#2E2109"
     alaala2a.style.display = 'none'
     
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
     if (alaala2a.style.display == "none"){
         blocobloco1.style.backgroundColor = "#2E2109"
         hidemenubloco1.style.backgroundColor = "#2E2109"
         dashdash1.style.display = 'none'

         hidemenubloco2.style.backgroundColor = "#6D4A00"
         blocobloco2.style.backgroundColor = "#6D4A00" 
         alaala2a.style.display = "flex"
     } else {
         alaala2a.style.display = "none"
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