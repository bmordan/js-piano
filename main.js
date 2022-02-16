let context = new AudioContext()

const frequencies = {
    a: 261,
    w: 277.2,
    s: 293.7,
    e: 311.1,
    d: 329.6,
    f: 349.2,
    t: 370,
    g: 392,
    y: 415.3,
    h: 440,
    u: 466.2,
    j: 493.9,
    i: 523.3,
    k: 587.3,
    o: 622.3,
    l: 659.3,
    p: 698.5,
    ";": 740,
    "'": 784
}

function playNote(event) {
    if (!frequencies[event.key]) return
    document.getElementById(event.key).classList.add('white-key-pressed')
    const o = context.createOscillator()
    const g = context.createGain()
    o.type = "square"
    g.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 1)
    o.frequency.value = frequencies[event.key]
    o.connect(g)
    g.connect(context.destination)
    o.start()
    o.stop(context.currentTime + 1)
}

function clearNote(event) {
    if (!frequencies[event.key]) return
    if (Object.keys(frequencies).indexOf(event.key) < 0) return
    document.getElementById(event.key).classList.remove('white-key-pressed')
}

