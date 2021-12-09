# fetch_rewards
Fetch Rewards take home project

[Prompt](https://fetch-hiring.s3.us-east-1.amazonaws.com/points.pdf) <br/>

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

This will return the total point balances for each user that has made a transaction. 

**Response**
```
{
  "DANNON": 1000,
  "UNILEVER": 0,
  "MILLER COORS": 300
}
```

### POST /points/transactions

This will create a new transaction and change the balances for the payer. Afterwards, a response with all the transactions will be sent. New users will also be added to the balance sheet. 

**Required Body Parameters**
| Name | Type | Description |
| -------------:|:-------:| ------------------------------ |
| `payer` | string  | The username of the user who is making the transaction |
| `points` | integer  | The amounts of points being paid. (Can be positive or negative) |
| `timestamp` | string  | The timestamp for when the transaction was completed | 

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
[
  {
    "payer": "DANNON",
    "points": 1000,
    "timestamp": "2020-11-02T14:00:00Z"
  },
  {
    "payer": "UNILEVER",
    "points": 200,
    "timestamp": "2020-10-31T11:00:00Z"
  },
  {
    "payer": "DANNON",
    "points": -200,
    "timestamp": "2020-10-31T15:00:00Z"
  }
]
```

### POST /points/spend

This will spend a designated amount of points by spending the points from the earliest transactions in the system. If the amount of points requested is larger than what is available, then the points wont be spent and a message will be recieved. Otherwise, the points will be spent and the response will show with users's points were spent. 

**Required Body Parameters**
| Name | Type | Description |
| -------------:|:-------:| ------------------------------ |
| `points` | integer  | The amounts of points that are going to be spent. (Must be positive)|

**Request**
```
{
  "points":5000
}
```

**Response**
```
[
  {
    "payer": "DANNON",
    "points": -100
  },
  {
    "payer": "UNILEVER",
    "points": -200
  },
  {
    "payer": "MILLER COORS",
    "points": -4700
  }
]
```

```
{
  "message": "Not enough points to spend"
}
```


