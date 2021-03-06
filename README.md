# KaBloom
  KaBloom is a mobile app intended to put houseplant care in the palm of the user's hand. It allows the user to see a list of their plants at a glance alongside a few pieces of crucial information - name, photo, type, and date last watered.  As a long-time plant parent, I find naming my plants personifies them and hooks me in to providing more consistent care for them.  Having a photo of the plant as it looked when I first adopted it is an important visual cue for comparing to the plant's current state. With a click, the user can access more detailed information about the plant's care needs, such as lighting, fertilization.  Users can also create personal notes relating to the plant's life events, such as repotting, blooming, etc.

## Table of Contents
  * [Project Requirements and Features List](#project-requirements-and-features-list)
  * [Technologies Used](#technologies-used)
  * [Installing and Launching KaBloom](#instructions-for-installing-simplified-supper)
  * [Appendix 1: Planning Documentation](#appendix-1-planning-documentation)
    * [Entity Relationship Diagrams](#entity-relationship-diagram)
    * [Wireframes](#wireframes)
  * [Appendix 2: Set Up Instructions](#appendix-2-set-up-instructions)

## Project Requirements and Features List
### Get Started
When a user first registers an account with KaBloom they will be asked to enter their first plant.  The user will upload a photo of the plant and all the care instructions that come with the plant: date adopted, plant name and type, watering instructions, light needs, fertilization schedule and date last watered.
![Get Started GIF](src/images/GettingStarted.gif)

### Care Cards
Once a user has entered one or more plants they will be presented with a "home" screen of plant care cards that allow the user to see the photo, name and type of plant along with the plant's last watered date and a "I watered today!" button to easily update when the plant is watered.  
![Recipe Suggestion Engine GIF](src/images/ezgif.com-UsingKaBloom.gif)

## Technologies Used
  ### Development Languages and Libraries
  <img src="./src/images/react.png" width="10%"></img> 
  <img src="./src/images/bootstrap.png" width="10%"></img> <img src="./src/images/cloudinary.png" width="10%"></img> <img src="./src/images/fontawesome.png" width="10%"></img>

  ### Development Tools
 
  <img src="./src/images/github.png" width="10%"></img>
  <img src="./src/images/vsCode .png" width="10%"></img> <img src="./src/images/sketchboard.jpeg" width="10%"></img> <img src="./src/images/dbdiagram.png" width="20%"></img> 
  

## Instructions for Installing KaBloom
  To launch the KaBloom app, you will need to have access to command line tools, node package manager, JSON Server. If you do not have access to any of these tools, you can find instructions for installing them in the [Appendix.](#appendix-2-set-up-instructions)

  Clone this repo on you personal machine using the following command
  ```sh
    git clone git@github.com:xine75/kaBloom.git
  ```

  Install the NPM dependencies for this project using the following commands
  ```sh
    cd kabloom
    npm install
  ```

  From your terminal window, type
  ```sh
    npm start
  ```

  Now that the server is up and running, you can open an internet browser and access the application
  ```sh
    http://localhost:8080/
  ```

 ### Congratulations you are now experiencing KaBloom!

  ## Appendix 1: Planning Documentation

  ### Entity Relationship Diagram
  ![KaBloom ERD](/src/images/erd.png)

  ### Wireframes/ Mockups
  <img src="./src/images/wireframe.png" width="75%"></img> 


  ## Appendix 2: Set Up Instructions

  You will need to have command line tools installed for your computer to use terminal commands.

  Linux/ Windows users, please visit the [Git page](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and follow the instructions for set up

  Mac users follow the instructions below

  Open your terminal and type
  ```sh
    git --version
  ```

  You will now need to configure your git account. In the terminal window, type:
  ```sh
    git config -global user.name "Your Name"
    git config -global user.email "Your Email"
  ```

  If you do not have Node.js installed on your machine, visit the [Node.js Download Page](https://nodejs.org/en/download/) and  follow the instructions. To ensure that it is installed correctly, in your terminal window, type
  ```sh
    echo $PATH
  ```
  Ensure that the result has the following in the $PATH
  ```sh
    /usr/local/bin
    or
    /usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
  ```

  Now you can follow the [installation instructions](#instructions-for-installing-kabloom) to get KaBloom up and running on your machine.

  This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

