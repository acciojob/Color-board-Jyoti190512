//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');

    // Create 800 boxes dynamically
    for (let i = 0; i < 800; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        // Add event listener for hover
        square.addEventListener('mouseenter', function () {
            square.style.backgroundColor = getRandomColor();
        });

        container.appendChild(square);
    }

    // Function to get a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});

