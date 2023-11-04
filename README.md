# Tic-Tac-Toe in jaavascript

what is program design?
-program design is a systemtic mathod of destructuring hallow ideas and than converting it to a code.
-also about writing code that is maintainable perform well and changable

//implicit domain design
step 1 - write down the requirements first

for a game tic tac toe easiest plays to start by simpling writing down the sequence of events will happen
-every problem space as it s own core functionality

1.we start the game
2.there are two players [rule]
3.lets say we store their names.
4.x plays first [rule]
5.they mark their spot:

<!--   x _ _
       _ _ _
       _ _ _              -->

6. O, PLAYS:

- O cannot play where x is already played,they have to take some other spot
- when a player is making a spot in physical medium the validation comes from the fact that u can only mark the x on the 3x3 grid we have drawn and in a physical medium this is understanding between two players so how do u translate this understanding to a rule in computer medium ?
  -thats called validation
  when the x has been asked to provide their input they are gonna input something as a program designer u need to validate that input , u need to make sure that they are marking inside the grid not outside,thier sending a valid move for example they are writing emoji isntead of x so we cannot accept emoji so thats called input validation its a part of any game strategy

-IN UI THIS IS VERY EASY IF U PROVIDE THEM A BUTTON TO CLICK AND THE MARKING ACTION HAPPENS ONLY THROUGH A BUTTON ,THEY DONT HAVE ANY OTHER BUT WHEN DESIGNING A API FOR A PROGRAM UR GONNA RECEIVE INPUT PERHAPS ANOTHER PROGRAM .

<!--   x _ _
       _ O _
       _ _ _              -->

7.game continuos ,until one of these things happen:
1, x wins 2. O wins 3. more moves are left
4.draw

##Emerging Requirements
1.store the players name
2.currentPlayer, nextPlayer
3.store the board
4.game status .
5.Game orchestation - something to simulate turn by turn game

//lets create the game -

<!-- part 1 game engine - maintains the state of the game,advances the game udaptes the board etc -->

step 1 - lets start by installing core game engine in place - its just a simple file that impliments the game tic tac toe [tic-tac-toe.js]
in terms of AAA games the game engine term has a very specific meaning,usually a game play is outside the engine and the game engine is repsonsible for envrionment and enforcing the rules of the game.

const ticTacToe = () => {}; //this const ticTacToe becomes our close we hold out values here

##Board Representation

                  1 2 3
                  4 5 6
                  7 8 9


                  0 1 2
                  3 4 5
                  6 7 8  //0 index is not intuitive to users so we dont use this reperesnetn

-but js does't have 1 index arrays so,

//visual representation

  <!-- const board: string[] = [
           "", "", "",
           "", "", "",
           "", "", "",
      ]; -->

      //this is zero index array so ,we will add one more and than ignore the zero index,we only use 1 to 9 index this is far better than gettign the input from the user and everytime subtracting 1 to get the right index

  <!-- const board: string[] = [
           "",
           "", "", "",
           "", "", "",
           "", "", "",
      ]; -->

-we can use the 0 index to actually store the board status ,instead of returning multiple value if we have a simple data stucture that represent both the values in a clean way that's to be prefered

<!--
     const board: string[] = [
           "ongoing ",//ongoing,win-X , win -O,draw
           "", "", "",
           "", "", "",
           "", "", "",
      ]; -->

## <!-- part 2 - orchaestatrates the gameplay-makes the move talks to player etc -->

-orcahsetatration can have happen in multiple ,different ways byt the game engine is core engine of tic tac toe it doesnt change .and thats the reason we have seprate parts for both
-tic-tac-toe-play.js
