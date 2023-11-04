# Tic-Tac-Toe Game in JavaScript

This is a simple implementation of the classic Tic-Tac-Toe game in JavaScript. The goal of this project is to provide an example of program design, including implicit domain design, game engine, board representation, and game orchestration.

## Program Design

Program design is the systematic method of structuring abstract ideas and converting them into code. It involves writing code that is maintainable, performs well, and can be easily modified.

## Implicit Domain Design

In this project, we break down the core functionality of the Tic-Tac-Toe game into a sequence of events:

1. Starting the game.
2. Managing two players.
3. Allowing players to mark their spots on the board.
4. Ensuring input validation.
5. Continuing the game until one of these conditions is met: X wins, O wins, a draw, or more moves are left.

## Emerging Requirements

As the project progresses, you may identify additional requirements, such as storing players' names, managing the game's status, and orchestrating the gameplay.

## Game Engine

The game engine is responsible for maintaining the game's state and enforcing the rules. It is implemented in `tic-tac-toe.js`.

## Board Representation

The game board is represented as a one-dimensional array of strings, where the first element stores the game's status ("ongoing," "win-X," "win-O," "draw"), and the remaining elements represent the board cells.

## Game Orchestration

Game orchestration is responsible for managing the gameplay, making moves, and interacting with players. It is implemented in `tic-tac-toe-play.js`.

## Usage

To use this Tic-Tac-Toe game, you can include the provided JavaScript files in your project and follow the program design principles explained above.
