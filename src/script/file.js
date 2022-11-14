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
    }, '')
    ctx.filter = fil.toString()

    const flipX = transformState['flip'].scaleX
    const flipY = transformState['flip'].scaleY
    ctx.scale(flipX, flipY)
    ctx.drawImage(
        image, 
        flipX==-1 ? canvas.width * flipX : 0, 
        flipY==-1 ? canvas.height * flipY : 0, 
        canvas.width, 
        canvas.height
    )

    const link = document.createElement('a')
    link.download = file.name + '.' + Date.now() + '.jpg'
    link.href = canvas.toDataURL('image/jpeg')
    link.click()
}

image.addEventListener('load', unlockEditor)
choose_btn.addEventListener('click', () => file_input.click())
file_input.addEventListener('change', loadImage)
save_btn.addEventListener('click', saveImage)