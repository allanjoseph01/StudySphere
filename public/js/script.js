function scrollLeftCards(){

    document.getElementById("cardScroll").scrollBy({

        left: -300, // This will scroll 300 px to the left !
        behavior: "smooth"

    });

    console.log("Clicked");
    

}

function scrollRightCards(){

    document.getElementById("cardScroll").scrollBy({

        left:300,
        behavior:"smooth"

    });

    console.log("Clicked the Right Button");
    
    
}