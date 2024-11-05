# Rock-Paper-Scissors-game
This is a simple browser-based "Rock-Paper-Scissors" game built using HTML, CSS, and JavaScript. The game allows the user to play against the computer and keeps track of wins, losses, and ties using `localStorage`. The player can also play in Auto mode, where the computer automatically picks moves at intervals, and can reset the score.

## Features
- **Play Mode**: Choose between "Rock", "Paper," or "Scissors" by clicking buttons or pressing the 'R', 'P', or 'S' keys.
- **Auto-Play Mode**: Click the "Auto Play" button to let the game play automatically with random moves.
- **Score Tracking**: The game tracks wins, losses, and ties in localStorage, so the scores persist even after refreshing the page.
**Reset Score**: Reset the score at any time with the "Reset Score" button.

## Files Overview
### HTML (`rock-paper-scissors.html`)
This file structures the game elements:
- Buttons for player moves (rock, paper, scissors), each displaying an icon for easy identification.
- A display for the game results, moves, and current score.
- Buttons for "Auto Play" and "Reset Score" functionalities.
- References to external CSS and JavaScript files.

### CSS (`rock-paper-scissors.css`)
Defines the styling for the game:
- Dark background with white text for contrast.
- Styles for buttons and icons to represent moves.
- Specific classes for titles, result display, score section, and buttons to improve the user experience and visual appeal​.

## JavaScript (`rock-paper-scissors.js`)
Implements the game logic:
- **Game Mechanics**: `playGame(playerMove)` determines the outcome based on player and computer moves, updates the result, and modifies the score accordingly.
- **Auto-Play**: The `autoPlay()` function automates moves, playing once every second until stopped.
- **Score Tracking**: Stores the score in `localStorage` so that it remains available across page reloads.
- **Keyboard Controls**: Listens for 'R', 'P', or 'S' keys to select moves without using the mouse​.

## Getting Started
To play the game:

1. Download the `zip` file and extract the main folder 
2. Open `rock-paper-scissors.html` in a browser.
3. Choose your move by clicking a button or pressing 'R' (Rock), 'P' (Paper), or 'S' (Scissors).
4. View the result, moves, and updated score on the screen.
5. Use "Auto Play" for an automated game or "Reset Score" to clear the score history.
