let file = null

function loadImage(e) {
    if(!e.target.files[0]) return
    file = e.target.files[0]
    image.src = window.URL.createObjectURL(file)
    reset_btn.click()
}

function unlockEditor() {
    document.querySelector('.editor').classList.remove('lock')
    placeholder.hidden = true
}

function saveImage() {
    document.querySelector('canvas')?.remove()
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    
    canvas.width = image.naturalWidth
    canvas.height = image.naturalHeight

    const fil = filterSet.reduce((acc, filter) => {
        let add = ' ' + filter.css + '(' + filter.input.value + '%' + ')'
        return acc + add
    })

    console.log(fil.toString())

    ctx.scale(transformState['flip'].scaleX, transformState['flip'].scaleY)

    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
document.body.append(canvas)
    const link = document.createElement('a')
    link.download = file.name + '.' + Date.now() + '.jpg'
    link.href = canvas.toDataURL()
    link.click()
}

image.addEventListener('load', unlockEditor)
choose_btn.addEventListener('click', () => file_input.click())
file_input.addEventListener('change', loadImage)
save_btn.addEventListener('click', saveImage)