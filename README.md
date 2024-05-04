# Ripe Mangoes Interface

Ripe Mangoes is a web-based application intended to serve as a interactable movie review platform for a wide array of users. The primary purpose of Ripe Mangoes is to enrich the movie-watching experience for users by fostering a dynamic community centered around the love of cinema. The web app will cater to users' entertainment needs in various situations. They can browse the web app from their personal computers at home, seek movie suggestions during gatherings, and engage in reviews through the browser on their smartphone aswell.

## Installation & Set Up

To be able to reproduce the interface on your local machine, you would require the following tools and technologies:

- The zip file which contains all the code folders

- Code Editor (VSCode recommended)

- MongoDB Compass (To connect to the mongo cluster I have set up)

- You can download the MongoDB Compass GUI from this link: https://www.mongodb.com/try/download/compass

- Make sure you scroll down to where it says `MongoDB Compass Download (GUI)` and select your machine's platform to download the Compass GUI.

- Open up the MongoDB Compass GUI and then click "New Connection". You then need to add this connection string into the URI box: `HIDDEN`

- Then you can click Connect to connect to the Mongo cluster

- _You may also need to add Maven to your code environment_

## Running the application

- Open up your code editor and navigate to `movies/src/main/java/MoviesApplication.java`. This file contains the main method to be able to run the backend API and also get the data from the MongoDB database.

- There should be a play button on the top right which you have to click to start the backend. (See `client/src/images/img1.png` for reference)

- Once it starts, your terminal should be running and look something like this. (See `client/src/images/img2.png` for reference)

- Now back in the root folder, navigate to `client/src` in the terminal.

- Open up the Terminal in your code editor and type `cd/client/src` which will take you to the `src` folder

- Now type `npm i` to install all the node modules and dependencies

- Once that completes, type `npm start` to start the application.

- It should open up in the web browser but if not, open your web browser and in the search field type `localhost:3000`

- You can now start interacting with the application!

### Users

Since the login and registration is implemented in a dummy manner, here are some users which I have added to be able to test the login functionality on the interface:

| Email | Password |

| ------------------ | -------- |

| `jack@gmail.com` | `rEct5u` |

| `tom@gmail.com` | `UYpVnX` |

| `alice@gmail.com` | `Bk84tD` |

| `kaylee@gmail.com` | `ht2KBj` |

| `caleb@gmail.com` | `GWPAUF` |

_These can also be found in_ `client/src/components/user/Login.js`

For Registration, you just have to add a valid email format eg. `abc@xyz` and fill out the Password and Confirm Password fields. Then clicking `Create your account` will take you to the home page. _(This user will not be saved)_.
