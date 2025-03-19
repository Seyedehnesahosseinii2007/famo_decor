document.addEventListener('DOMContentLoaded', () => {
    const menu1 = document.querySelector('.menu1');
    const menu2 = document.querySelector('.menu2');
    const menu3 = document.querySelector('.menu3');
    const menu4 = document.querySelector('.menu4')

    const horizontalOne = document.querySelector('.horizental-one');
    const horizontalTwo = document.querySelector('.horizental-two');
    const horizontalThree = document.querySelector('.horizental-three');
    const fourthHorizental = document.querySelector('.horizental-four');

    const headingVase = document.querySelector('.the-heading-vas');
    const headingCandle = document.querySelector('.the-candle-holder');
    const glass = document.querySelector('.the-glass');
    const lamp = document.querySelector('.the-lamp');


    // Initially hide horizontalTwo and candle heading
    horizontalTwo.style.display = 'none';
    headingCandle.style.display = 'none';
    glass.style.display = 'none';
    lamp.style.display = 'none';

    menu1.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior

        // Show horizontalOne and vase heading, hide horizontalTwo and candle heading
        horizontalOne.style.display = 'flex';
        headingVase.style.display = 'block';
        horizontalTwo.style.display = 'none';
        horizontalThree.style.display = 'none';
        glass.style.display = 'none';
        headingCandle.style.display = 'none';
        lamp.style.display = 'none';
        fourthHorizental.style.display = 'none';
    });

    menu2.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior

        // Show horizontalTwo and candle heading, hide horizontalOne and vase heading
        horizontalOne.style.display = 'none';
        headingVase.style.display = 'none';
        horizontalThree.style.display = 'none';
        glass.style.display = 'none';
        horizontalTwo.style.display = 'flex';
        headingCandle.style.display = 'block';
        lamp.style.display = 'none';
        fourthHorizental.style.display = 'none';

    });
    menu3.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior

        // Show horizontalTwo and candle heading, hide horizontalOne and vase heading
        horizontalOne.style.display = 'none';
        headingVase.style.display = 'none';
        horizontalTwo.style.display = 'none';
        headingCandle.style.display = 'none';
        horizontalThree.style.display = 'flex';
        glass.style.display = 'block';
        lamp.style.display = 'none';
        fourthHorizental.style.display = 'none';

    });

    menu4.addEventListener('click', (event) => {
        event.preventDefault();
        horizontalOne.style.display = 'none';
        horizontalTwo.style.display = 'none';
        horizontalThree.style.display = 'none';
        headingCandle.style.display = 'none';
        headingVase.style.display = 'none';
        glass.style.display = 'none';
        fourthHorizental.style.display = 'flex';
        lamp.style.display = 'block';
    });
});