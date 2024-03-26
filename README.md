# Js_Analog_Clock

A Simple analog clock module for javascript that can be used to display the current local time.

# Usage
To use the clock you can download the script file and import it as `<script src="script.js" defer></script>`<br> or try the github pages script link `<script src="https://geher-marcell.github.io/Js_Analog_Clock/script.js" defer></script>`<br><br>
To make the clock appear you have to use `<div id="clock"></div>`

# Customization
The clock is customizable by changing the already assigned CSS class and id stylings or by rewriting the array values in the script.js
For styling it is recommended to create a container div around the clock to not mess with any javascript that could cause misbehaviour

### The javascript options
The `clockstats` array is used to control the number of numbers that's on the clock's pointer (`numCount`) and to control the number of rotations it takes for the pointer to make a full rotation (`oneRot`)

### Styling options
You can use the following ids and classes to style the clock:
- Clock itself
  - `#clock`
- clockhands
  - `#second`
  - `#minute`
  - `#hour`
  - `.clockNum`
- background
  - `#background`
  - `.pivot`
  - `.hourLine`
 
