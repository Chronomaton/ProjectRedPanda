# ProjectRedPanda
### A fun mining game made with React to practice web development skills
#### Purpose
Project Red Panda was created with the intention to learn React while creating a game that is fun to play for both the users and creators
It is a 2D idle game where the users must manage their resource collection skills to create progress in the game and aims to be a space traveler game where users can travel from different planets to collect resources in order to achieve interplanetary domination.
Unfortunately it is currently being delayed due to school and work. 
#### Features
###### 4 views
Project Red Panda currently has 4 placeholder views:
1. Map
2. Fleet
3. Factory
4. Shipyard
The only working view is currently the Map view, where the user can obtain resources

###### Resource Collection
A player can collect resources in the Map view by clicking the "Start Mining" button
These resources can be placed into the users inventory and are intended to have a sell button after further development
Resources are displayed by the users current "gather level", as the gather level increases the player unlocks new resources


###### Resources
Resources are their own object, each has 3 stats:
1. ***Difficulty*** is the required "gather level" a player must have to mine that resource. If gather level is too low the resource will not display
2. ***EXP*** is obtainable by mining resources. Each resource mined adds that much EXP to the player which increment gather level
3. ***Value*** is the sell cost of a resource. It can be used to obtain cash which will allow the player to buy upgrades, increasing the mining ability of the player

___


This project is a work in progress and was made among a group of 3 friends
