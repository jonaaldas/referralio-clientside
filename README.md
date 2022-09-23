

# Referral-io

Referral System for Realtors! 

**Link to live demo:** [https://transcendent-sunshine-b16a5f.netlify.app/auth)
**YouTube:** [https://transcendent-sunshine-b16a5f.netlify.app/auth)
**Checkout the backend:** [https://github.com/jonaaldas/referralio-serverside)



![enter image description here](https://i.imgur.com/W6diMP6.png)


## How It's Made:

**Tech used:** MongoDB, ExpressJS, React, Node, JWT Tokens for authentication and authorization, TailwindCss

This app came to life when I was talking to a friend in the real estate industry. The problem I was trying to solve is the ability of a real estate agent to be able to receive and send referrals. Realtors do not have a platform for which agents can exchange referrals. 

The main objective of this form is for the agent to be able to exchange referrals, I created the form using Fornik and Yup for authentication. The user fills out the form and the referral is saved in a MongoDB database. With this referral, the user can interact with it based if it's a sent referral or a received referral. 
If the user receives a referral the user adds updates in the note sections, and he can also delete notes. The notes are rendered with react and we are getting the data from the database.  

The backend is built with node and express. I used an MVC model to organize my folder structure to make sure everything is in the correct place, for faster development and faster debugging. For authentication and authorization used JWT Tokens. The tokens are saved in local storage I know this is not the safest place to store them however in the future I will build a more secure method. 


## Optimizations

Let the user be able to receive and send referrals via WebSockets. Ad a profile page and let the user being able to edit their information. 
Add notification via email and SMS so the users can get reminded of checking in with clients. 


## Lessons Learned:

This is the application of the fit I integrated a full-on authentication and authorization feature using JTW tokens. I could have just used Auth0 or any other third-party service however I really wanted to build my own. I learned a lot about how to pass the token via the headers from the backend to the front end. How to store them and how to use protected routes to make sure cant do CRUD application to stuff it not theirs. 


## Examples:
Take a look at these couple examples that I have in my own portfolio:

**Checkout the backend:** [https://github.com/jonaaldas/referralio-serverside)

**Transaction Management App:** https://github.com/alecortega/palettable

**Sweet Treats (Hackathon Win):** https://github.com/jonaaldas/Hackathon-sweet-treats-heroku




