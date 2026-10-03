# Analog & Digital Clock

A modern, responsive clock built with **HTML, CSS, and vanilla JavaScript**.

The application combines a traditional analog clock with a digital time and date display. It demonstrates JavaScript date/time handling, DOM manipulation, CSS transforms, responsive design, and modern UI styling without relying on external frameworks.

## Preview

The interface includes:

- Analog clock with hour, minute, and second hands
- Real-time digital clock
- Current date display
- Responsive clock face
- Modern dark glass-inspired interface
- Smooth hand movement and visual transitions

## Features

### Analog Clock

The analog clock dynamically calculates the rotation of each hand based on the current system time.

- Hour hand
- Minute hand
- Second hand
- Dynamically positioned clock numbers
- Smooth real-time updates

### Digital Clock

The digital display provides an easy-to-read representation of the current time alongside the analog interface.

### Current Date

The application also displays the current date using JavaScript's built-in date functionality.

### Responsive Design

The layout adapts to different screen sizes, allowing the clock to remain usable on desktop and mobile displays.

## Technologies

- HTML5
- CSS3
- JavaScript
- CSS Transforms
- CSS Custom Properties
- Responsive Design
- DOM Manipulation
- JavaScript Date API

No frameworks or external JavaScript libraries are required.

## How It Works

JavaScript retrieves the current time using the `Date` API.

The hour, minute, and second values are converted into rotation angles and applied to the corresponding clock hands using CSS transforms.

Conceptually:

```text
Seconds → 6° per second
Minutes → 6° per minute
Hours   → 30° per hour
```

The interface is then updated continuously to keep the analog and digital displays synchronized with the current system time.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/Nini1912/clock.git
```

Navigate to the project directory:

```bash
cd clock
```

Open:

```text
index.html
```

in your browser.

No installation or build process is required.

You can also run the project using an editor extension such as **Live Server**.

## What I Practiced

This project helped reinforce several core frontend development concepts:

- Working with JavaScript's `Date` API
- Updating the DOM dynamically
- Calculating values for visual UI states
- Using CSS `transform` and `rotate()`
- Creating responsive layouts
- Building interfaces with CSS custom properties
- Combining JavaScript logic with CSS animations and transitions
- Structuring a small frontend project without a framework
