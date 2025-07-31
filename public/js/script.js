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

function showWorkFlow(role){

    const teacherDiv = document.getElementById('teacherWorkflow');
    const studentDiv = document.getElementById('studentWorkflow');

    if(role === 'teacher'){
        
        teacherDiv.style.display = 'flex';
        studentDiv.style.display = 'none';

    }

    else if(role === 'student'){

        teacherDiv.style.display = 'none';
        studentDiv.style.display = 'flex';

    }

}
