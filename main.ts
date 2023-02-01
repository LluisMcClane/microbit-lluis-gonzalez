let base_number = 0
// this is the the base number which will be used in our loops 
let bsclicked = 0
// number of times the button B is clicked
let astimes = 0
// number of times the button A is clicked to control which numbers we will display
// This function executes the function below for the set of numbers indicated by how many A's the user presses
function user_interact(interval: number) {
    // global variable
    
    // clearing screen
    basic.clearScreen()
    base_number = 1
    while (base_number < interval + 1) {
        basic.showString("" + ("" + harmonic_series(base_number)))
        basic.pause(100)
        basic.clearScreen()
        base_number += 1
    }
}

// harmonic series function to calculate sequence
function harmonic_series(n: number): number {
    let sum = 0
    for (let i = 1; i < n + 1; i++) {
        sum += 1 / i
    }
    return sum
}

// this function manages when the user_interact and harmonic functions are called
function numElements() {
    // global variables
    
    while (bsclicked < 1) {
        // if A button is pressed showing A and clearing screen and staying in loop so the user can input more numbers
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("A")
            basic.clearScreen()
            astimes += 1
            basic.showString("" + ("" + astimes))
        } else if (input.buttonIsPressed(Button.B)) {
            // if user inputs B gets out of the loop
            basic.showString("B")
            bsclicked += 1
        }
        
        basic.pause(50)
    }
    basic.clearScreen()
    basic.showString("Harmonic --> ")
    user_interact(astimes)
}

function showIcon() {
    basic.clearScreen()
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(100)
        basic.showIcon(IconNames.Diamond)
        basic.pause(100)
    }
    basic.clearScreen()
    basic.showString("Harmonic")
    basic.clearScreen()
}

basic.forever(function on_forever() {
    
    music.setBuiltInSpeakerEnabled(true)
    let atimes = 0
    let bclicked = 0
    showIcon()
    basic.showString("A = input | B = finish")
    numElements()
    basic.pause(500)
})
