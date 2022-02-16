function playNote(event) {
    console.log("key pressed", event.key)
    document.getElementById(event.key).classList.add('white-key-pressed')
}

function clearNote(event) {
    document.getElementById(event.key).classList.remove('white-key-pressed')
}