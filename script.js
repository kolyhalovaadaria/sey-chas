// Theme switcher functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.querySelector('.header-switch');
    const body = document.body;
    const logo = document.querySelector('.header-logo img');
    const image3 = document.querySelector('img[src="images/image3.png"]');
    const image4 = document.querySelector('img[src="images/image4.svg"]');
    const image7 = document.querySelector('img[src="images/image7.svg"]');
    const imagetime8 = document.querySelector('img[src="images/imagetime8.svg"]');
    const image9 = document.querySelector('img[src="images/image9.svg"]');
    const image11 = document.querySelector('img[src="images/image11.svg"]');
    const image15 = document.querySelector('img[src="images/image15.svg"]');
    const image17 = document.querySelector('img[src="images/image17.svg"]');
    const image16 = document.querySelector('img[src="images/image16.svg"]');
    const switchButtonImage = document.querySelector('.header-switch img');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        logo.src = 'images/logo1.svg';
        if (image3) {
            image3.src = 'images/image3.svg';
        }
        if (image4) {
            image4.src = 'images/image4D.svg';
        }
        if (image7) {
            image7.src = 'images/image7D.svg';
        }
        if (imagetime8) {
            imagetime8.src = 'images/imagetime8D.svg';
        }
        if (image9) {
            image9.src = 'images/image9D.svg';
        }
        if (image11) {
            image11.src = 'images/image11D.svg';
        }
        if (image15) {
            image15.src = 'images/image15D.png';
        }
        if (image17) {
            image17.src = 'images/image17D.png';
        }
        if (image16) {
            image16.src = 'images/image16D.png';
        }
        if (switchButtonImage) {
            switchButtonImage.src = 'images/switchD.svg';
        }
    }

    themeSwitch.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        
        if (body.classList.contains('light-theme')) {
            logo.src = 'images/logo1.svg';
            if (image3) {
                image3.src = 'images/image3.svg';
            }
            if (image4) {
                image4.src = 'images/image4D.svg';
            }
            if (image7) {
                image7.src = 'images/image7D.svg';
            }
            if (imagetime8) {
                imagetime8.src = 'images/imagetime8D.svg';
            }
            if (image9) {
                image9.src = 'images/image9D.svg';
            }
            if (image11) {
                image11.src = 'images/image11D.svg';
            }
            if (image15) {
                image15.src = 'images/image15D.png';
            }
            if (image17) {
                image17.src = 'images/image17D.png';
            }
            if (image16) {
                image16.src = 'images/image16D.png';
            }
            if (switchButtonImage) {
                switchButtonImage.src = 'images/switchD.svg';
            }
        } else {
            logo.src = 'images/logo.png';
            if (image3) {
                image3.src = 'images/image3.png';
            }
            if (image4) {
                image4.src = 'images/image4.svg';
            }
            if (image7) {
                image7.src = 'images/image7.svg';
            }
            if (imagetime8) {
                imagetime8.src = 'images/imagetime8.svg';
            }
            if (image9) {
                image9.src = 'images/image9.svg';
            }
            if (image11) {
                image11.src = 'images/image11.svg';
            }
            if (image15) {
                image15.src = 'images/image15.png';
            }
            if (image17) {
                image17.src = 'images/image17.png';
            }
            if (image16) {
                image16.src = 'images/image16.png';
            }
            if (switchButtonImage) {
                switchButtonImage.src = 'images/switch.png';
            }
        }
        
        const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
    });
}); 