let modifier = 5;

document.onkeydown = function (e) {
    const { style } = player;
    switch (e.key) {
        case 'ArrowUp':
            style.top = `${parseInt(style.top) - modifier}px`;
            break;
        case 'ArrowDown':
            style.top = `${parseInt(style.top) + modifier}px`;
            break;
        case 'ArrowLeft':
            style.left = `${parseInt(style.left) - modifier}px`;
            break;
        case 'ArrowRight':
            style.left = `${parseInt(style.left) - modifier}px`;
    }
};
