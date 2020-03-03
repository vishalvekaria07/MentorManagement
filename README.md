Steps To Run This Project

1. go to /db folder and run 
```
npm run db
```
   this will install mongodb server and will start the database server locally on port 45000

2. install "Robo 3T" database client from `https://robomongo.org/download` and make connection on localhost `port 45000`

3. go to root folder and run 
```
npm install 
npm start
```
this will strat the backend server on `port 8999`

4. go to /client and run 
```
npm install 
npm start 
```
this will start the user interface on `port 3000`

Use below credentials to login 
```
Username :- admin
Password :- admin
```

Database model:-

```
{
    mentorId: {
        type: String,
        default: uuid
    },
    mentorName: {
        type: String
    },
    mentorAge: {
        type: Number
    },
    tasks: {
       type: Array,
       property: {
            taskId:  {
                type: String
            },
            taskName: {
                type: String
            }
       }
    }   
}

```
