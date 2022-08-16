const transformState = {
    'rotate': { angle: 0 },
    'flip': { scaleX: 1, scaleY: 1 }
}

function transformImage() {
    image.style.transform = 
        `rotate(${transformState['rotate'].angle}deg)
        scale(${transformState['flip'].scaleX}, ${transformState['flip'].scaleY})`
}

function resetTransform() {
    transformState['rotate'] = { angle: 0 }
    transformState['flip'] = { scaleX: 1, scaleY: 1 }

    transformImage()
}

rotate_left_btn.onclick = (e) => {
    transformState['rotate'].angle -= 90
    transformImage()
}

rotate_right_btn.onclick = (e) => {
    transformState['rotate'].angle += 90
    transformImage()
}

flipX_btn.onclick = (e) => {
    transformState['flip'].scaleX *= -1
    transformImage()
}

flipY_btn.onclick = (e) => {
    transformState['flip'].scaleY *= -1
    transformImage()
}