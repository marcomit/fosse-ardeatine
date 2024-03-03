const imagesLoaded = require('imagesloaded');

const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;

const lerp = (a, b, n) => (1 - n) * a + n * b;

const calcWinsize = () => {
    return { width: window.innerWidth, height: window.innerHeight };
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getMousePos = e => {
    return {
        x: e.clientX,
        y: e.clientY
    };
};

const preloadImages = (selector) => {
    return new Promise((resolve, reject) => {
        imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve);
    });
};

/**
 * Gets computed translate values
 * @param {HTMLElement} element
 * @returns {Object}
 */
const getTranslateValues = element => {
    const style = window.getComputedStyle(element)
    const matrix = style['transform'] || style.webkitTransform || style.mozTransform

    if (matrix === 'none' || typeof matrix === 'undefined') {
        return {
            x: 0,
            y: 0,
            z: 0
        }
    }

    const matrixType = matrix.includes('3d') ? '3d' : '2d'
    const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ')

    if (matrixType === '2d') {
        return {
            x: matrixValues[4],
            y: matrixValues[5],
            z: 0
        }
    }

    if (matrixType === '3d') {
        return {
            x: matrixValues[12],
            y: matrixValues[13],
            z: matrixValues[14]
        }
    }
}

export { map, lerp, calcWinsize, getRandomNumber, getMousePos, preloadImages, getTranslateValues };