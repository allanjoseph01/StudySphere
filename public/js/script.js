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

function showWorkFlow(role) {
    const teacherDiv = document.getElementById('teacherWorkflow');
    const studentDiv = document.getElementById('studentWorkflow');
    const teacherButton = document.querySelector('.guide-teacher-student:nth-child(1)');
    const studentButton = document.querySelector('.guide-teacher-student:nth-child(2)');

    if (role === 'teacher') {
        teacherDiv.style.display = 'flex';
        studentDiv.style.display = 'none';
        teacherButton.classList.add('active');
        studentButton.classList.remove('active');
    } else if (role === 'student') {
        teacherDiv.style.display = 'none';
        studentDiv.style.display = 'flex';
        teacherButton.classList.remove('active');
        studentButton.classList.add('active');
    }
}

// Initialize with Teacher workflow shown and button active on page load
document.addEventListener('DOMContentLoaded', () => {
    showWorkFlow('teacher');
});

const userIcon = document.querySelector('.personIcon');
const dropdown = document.querySelector('.dropdown');


userIcon.addEventListener('click' , () =>{

    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    // The above line here means if the menu is currently visible then change it to display none and if the menu is not visible then have block display
    // The action only happens when the user clicks on the userIcon

});

document.addEventListener('click', (e) => {

    if (!e.target.closest('.userMenu')) {
        dropdown.style.display = 'none';
    }

});