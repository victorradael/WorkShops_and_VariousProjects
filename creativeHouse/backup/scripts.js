const onOff = _ => {
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")

    document
        .querySelector("body")
        .classList
        .toggle('hideScroll')

    document
        .querySelector('#modal')
        .classList
        .toggle('addScroll')
}

function checkFields (event) {

    const valuesToCheck = [
        "title",
        "image_url",
        "category",
        "description",
        "link",
    ]

    const isEmpty = valuesToCheck.find(value => {

        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIfIsEmpty = !event.target[value].value.trim()
        if(checkIfIsString && checkIfIsEmpty) {
            return true
        }
    })

    if(isEmpty){
        event.preventDefault()
        alert('Preencha todos os campos')
    }
}