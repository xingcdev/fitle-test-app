# Fitle Test App

## Overview

A full stack app build with SQLite3, Node.js & React.

## Installation

Clone this repository to your local directory and install all required packages using the command below:

```shell
npm install
```

## Usage

### Server-side

Go to the `server` directory and start the local Node.js server with:

```shell
npm start
```

Go to the URL `localhost:4000` in your Internet browser and you should see `You are successful connecting to the API.` message.

### Client-side

Go to the `client` directory and start the React development server with:

```shell
npm start
```

Go to the URL `localhost:3000` in your Internet browser and you should see the app page.

## API routes

### `GET /api/population/all`

Return the population list.

Example response:

```json
{
	"population": [
        {
        "age": "73",
		"class of worker": "Not in universe",
		"industry code": "4",
		"occupation code": "34"
        ...
        },
        {
        "age": "32",
		"class of worker": "Not in universe",
		"industry code": "6",
		"occupation code": "56"
        ...
        },
        ...
    ]
}
```

## Resources

[Querying Data in SQLite Database from Node.js Applications - SQLite Tutorial](https://www.sqlitetutorial.net/sqlite-nodejs/query/)

[React Tutorial: An Overview and Walkthrough - Tania Rascia](https://www.taniarascia.com/getting-started-with-react/)
