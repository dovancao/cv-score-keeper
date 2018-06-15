# cv-score-keeper

This webapp will allow user to keep track of each player’s score during multiple rounds of a game, their Sum of Score (SoS) 
and Sum of Player’s Score (SoPS).

* Upon entering the root path (http://localhost:8080/), user will see this screen where they can enter players’ name 
and create a new game.
* Upon clicking “CREATE NEW GAME”. The user will be redirected to the new game’s permanent link
(http://localhost:8080/games/<somekindofid>), where players’ name are displayed 

# How To Start

Get to root path of game's file

* Open terminal and type

```
mongod
```

* After that

```
node app.js
```

*Open browser

```
localhost:8080
```
