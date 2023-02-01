base_number = 0 #this is the the base number which will be used in our loops 
bsclicked = 0 #number of times the button B is clicked
astimes = 0 #number of times the button A is clicked to control which numbers we will display


#This function executes the function below for the set of numbers indicated by how many A's the user presses
def user_interact(interval: number):

    #global variable
    global base_number

    #clearing screen
    basic.clear_screen()
    base_number = 1
    while base_number < interval + 1:
        basic.show_string("" + str(harmonic_series(base_number)))
        basic.pause(100)
        basic.clear_screen()
        base_number += 1

#harmonic series function to calculate sequence
def harmonic_series(n):
    sum = 0
    for i in range(1, n+1):
        sum += 1/i
    return sum

#this function manages when the user_interact and harmonic functions are called
def numElements():
    #global variables
    global astimes, bsclicked

    while bsclicked < 1:
        #if A button is pressed showing A and clearing screen and staying in loop so the user can input more numbers
        if input.button_is_pressed(Button.A):
            basic.show_string("A")
            basic.clear_screen()
            astimes += 1
            basic.show_string("" + str(astimes))

            #if user inputs B gets out of the loop
        elif input.button_is_pressed(Button.B):
            basic.show_string("B")
            bsclicked += 1
        basic.pause(50)
    basic.clear_screen()
    music.play_melody("", 120)
    basic.show_string("Harmonic --> ")
    user_interact(astimes)
def showIcon():
    basic.clear_screen()
    music.start_melody(music.built_in_melody(Melodies.ENTERTAINER),
        MelodyOptions.ONCE)
    for index in range(4):
        basic.show_icon(IconNames.SMALL_DIAMOND)
        basic.pause(100)
        basic.show_icon(IconNames.DIAMOND)
        basic.pause(100)
    basic.clear_screen()
    basic.show_string("Harmonic")
    basic.clear_screen()

def on_forever():
    global astimes, bsclicked
    music.set_built_in_speaker_enabled(True)
    atimes = 0
    bclicked = 0
    showIcon()
    basic.show_string("A = input | B = finish")
    numElements()
    basic.pause(500)

basic.forever(on_forever)
