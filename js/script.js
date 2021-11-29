document.addEventListener("DOMContentLoaded", function(){

    

    const cards = document.querySelectorAll(".cards"); //Retourne un HTMLCollection
    
    cards.forEach(element => {
        element.addEventListener("click", openPopup); 
    });
    
         function openPopup(){
            const popupWrapper = document.querySelector("#popup--wrapper");
            const popupDiv1 = document.querySelector("#popup--wrapper div:nth-child(1)");
            const popupDiv2 = document.querySelector("#popup--wrapper div:nth-child(2)");
            const popupImg = this.querySelector("img");
            const popupTxt = this.querySelector("div");

            popupImg.classList.remove("imgHebergements");
            popupImg.classList.add("popupImg");
            popupWrapper.style.display = "block";
            
            popupDiv1.append(popupImg);
            popupDiv2.append(popupTxt);
            popupWrapper.addEventListener("click", closePopup)  
            function closePopup(){
                popupWrapper.style.display = "none";
                popupImg.classList.add("imgHebergements");
                popupImg.classList.remove("popupImg");
                
            }         

         }

    
})


