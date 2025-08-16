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

//For any click on the document -- e -- the place you clicked
// if the place is not closest to userMenu -- the display should be none

// If clicked outside the user menu then again display should be none