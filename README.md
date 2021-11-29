# fetch_rewards

## Set Up

First clone the project & navigate to the root of the project through the terminal.

Then, run `npm install` to install all node modules.

Finally you can run `npm start` to start the web server.

By default, the project will run on `Port 3000`. 
To change this, you can change the the Port number on line 1 of the root index.js file.

## Endpoints

### GET
Test Server [/points](#get-points) <br/>
Get Balances [/points/balances](#get-pointsbalances) <br/>

### POST
Add Transaction [/points/transactions](#post-pointstransactions) <br/>
Spend Points [/points/spend](#post-pointsspend) <br/>

### GET /points

Tests the Server

### GET /points/balances

Gets balances for all users

### POST /points/transaction

Creates a new transaction

### POST /points/spend

Spends points from the transactions
