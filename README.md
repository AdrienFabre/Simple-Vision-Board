# Simple Vision Board

The simple vision board is a tool to help you design your life.

Application deployed here: https://simple-vision-board.firebaseapp.com/

This projects was created with:

- Firebase hosting
- Vue
- Cypress
- Node
- Jest
- MongoDB Atlas

## Installation

### Client side

```bash
cd client
npm install
```

### Server side

```bash
cd server
npm install
```

Create a .env file at the root of the Server folder and insert this line with your Connection String Only from your MongoDB Atlas account.

```.env
DB_URI=PASTE_HERE_YOUR_CONNECTION_STRING;
```

More info about MongoDB Atlas: https://docs.atlas.mongodb.com/getting-started/

## Usage

### Client side

```bash
cd client
npm start
```

Runs on http://localhost:8080

### Server side

```bash
cd server
npm start
```

Runs on http://localhost:8081

### Test with Cypress

```bash
cd client
npx cypress open
```

## Deployment

Follow the instructions here: https://www.youtube.com/watch?v=HqThxPmBGlI

## User stories

```md
As a user,
So I can categorise my life goals,
I want to be able to see the 9 goal categories on a vision board.

The 9 goals categories are: Spiritual, Adventure, Contribution, Personal development, Career / Business, Leisure, Family / Friends / Partner, Environment, Health / Fitness.

As a user,
So I can place and visualise my life goals,
I want to be able to add my goals on the vision board.

As a user,
So I can change my mind about my life goals,
I want to be able to remove goals on the vision board.
```
