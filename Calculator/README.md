# RookieCalc

A mobile-calculator-inspired web application built using **HTML, CSS, and JavaScript**. RookieCalc features an interactive calculator interface with expression and result displays, responsive styling, animations, and basic mathematical operations.

## HTML Structure

The calculator is structured using HTML elements and containers to organize its different sections.

* A main **container** is created to represent the calculator body.
* **Division (`div`) containers** are used to organize the calculator layout into different sections.
* **Buttons** are created for numbers and calculator operations so that they can be clicked and interacted with.
* Separate **expression** and **answer** sections are used to display the entered expression and calculated result.

## CSS Styling

CSS was used to create the overall visual appearance and layout of the calculator.

* The calculator is centered on the screen using **Flexbox**.
* A glass-like calculator body was created using transparency, `backdrop-filter`, borders, rounded corners, and shadows.
* A **moving glass shine animation** was added using CSS `@keyframes`.
* **CSS Grid** is used to arrange the calculator buttons into rows and columns.
* The calculator screen is styled separately to display the expression and answer clearly.
* Different styles are used to distinguish number buttons, operator buttons, and the equal button.
* Buttons are styled with circular shapes, borders, fonts, and background effects.

## JavaScript Functionality

JavaScript was added to make RookieCalc interactive and perform calculations.

* **`querySelector()`** is used to select calculator buttons and display elements from the HTML document.
* **`addEventListener()`** is used to detect button clicks.
* Number buttons append their corresponding numbers to the expression display.
* Operator buttons append `+`, `−`, `×`, and `÷` to the expression.
* The **decimal button** prevents multiple consecutive decimal points.
* The **AC button** clears both the expression and answer.
* The **backspace button** removes the last character from the expression.
* The **equals button** evaluates the entered mathematical expression and displays the result.
* **`replaceAll()`** is used to convert the calculator's visual multiplication, division, and subtraction symbols into JavaScript-compatible operators before calculation.
* JavaScript's **`eval()`** function is used to evaluate the mathematical expression.

## Current Features

* Mobile-calculator-inspired layout
* Clickable number and operator buttons
* Interactive expression display
* Calculation result display
* Addition
* Subtraction
* Multiplication
* Division
* Decimal input
* `00` input
* `%` percentage input
* AC (All Clear) functionality
* Backspace functionality
* Responsive centering using Flexbox
* Grid-based button arrangement
* Glass-like visual design
* Animated glass shine effect
* Different styling for operators and the equal button

## Technologies Used

* **HTML**
* **CSS**
* **JavaScript**

## Project Structure

```text
Calculator/
├── index.html
├── styles.css
├── script.js
├── calc_visual.png
├── calc_func.png
└── README.md
```

## Live Demo

**RookieCalc:**
https://rookiecalc.netlify.app/

## Project Preview

### Calculator Interface

![RookieCalc Interface](calc_visual.png)

### Calculator Functionality

![RookieCalc Functionality](calc_func.png)
