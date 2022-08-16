const filterSet = new Array()

filterSet.push({
    name: 'Brightness',
    css: 'brightness',
    origin: 100,
    min: 0,
    max: 200
})

filterSet.push({
    name: 'Saturation',
    css: 'saturate',
    origin: 100,
    min: 0,
    max: 200
})

filterSet.push({
    name: 'Inversion',
    css: 'invert',
    origin: 0,
    min: 0,
    max: 100
})

filterSet.push({
    name: 'Grayscale',
    css: 'grayscale',
    origin: 0,
    min: 0,
    max: 100
})

createFilters()

function getTemplate(filter) {
    return (
        `<div class="filter__range-legend">
            <p>${filter.name}</p>
            <span></span>
        </div>
        <input class="filter__range-bar" type="range" 
        min="${filter.min}" max="${filter.max}">`
    )
}

function createFilters() {
    filterSet.forEach(filter => {
        filter.element = document.createElement('div')
        filter.element.innerHTML = getTemplate(filter)
        document.getElementById('filter_box').append(filter.element)

        filter.plate = filter.element.querySelector('span')
        filter.plate.innerText = filter.origin

        filter.input = filter.element.querySelector('input')
        filter.input.value = filter.origin
    })
    listenFilters()
}

function listenFilters() {
    filterSet.forEach(filter => {
        filter.input.onchange = (e) => {
            filter.plate.innerText = e.target.value + '%'
            applyFilters()
        }
    })
}

function applyFilters() {
    image.style.filter = ''
    filterSet.forEach(filter => {
        image.style.filter += ' ' + filter.css + '(' + filter.input.value + '%' + ')'
    })
}

reset_btn.onclick = () => {
    filterSet.forEach(filter => {
        filter.input.value = filter.origin
        filter.plate.innerText = filter.origin
    })

    applyFilters()
    resetTransform()
}