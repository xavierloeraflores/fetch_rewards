# fetch_rewards

## Set Up

First clone the project & navigate to the root of the project through the terminal.

Then, run `npm install` to install all node modules.

Finally you can run `npm start` to start the web server.

By default, the project will run on `Port 3000`. 
To change this, you can change the the Port number on line 1 of the root index.js file.

## Endpoints

### GET
`Test Server` [/points](#get-points) <br/>
`Get Balances` [/points/balances](#get-pointsbalances) <br/>

### POST
`Add Transaction` [/points/transactions](#post-pointstransactions) <br/>
`Spend Points` [/points/spend](#post-pointsspend) <br/>

### GET /points

Use this to test the server to see if it is running. If the server is running, you will get a response:

**Response**
```
{
  "message": "Points system in working order. We are good to go."
}
```

### GET /points/balances

Gets balances for all users

**Response**
```
{
  "DANNON": 1000,
  "UNILEVER": 0,
  "MILLER COORS": 300
}
```

### POST /points/transaction

Creates a new transaction

**Request**
```
{ 
  "payer": "DANNON", 
  "points": 1000, 
  "timestamp": "2020-11-02T14:00:00Z" 
}
```

**Response**
```

```

### POST /points/spend

Spends points from the transactions

**Request**
```
{
	"points":5000
}
```

**Response**
```

```


