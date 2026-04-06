# AUTHENTICATION:
There are two patters in Authentication 

- Statefull     - Stateless 

Statefull: Which maintain state or data or server side. 
Stateless: Wich doesn't have any state. 


# REQUIRED: 
- install express - jsonwebtoken - dotenv. 
- npm i --save-dev nodemon

# REFRESH TOKEN 
- Suppose if we have multiple ports we can take the token at 3000 and use it at port 4000. 
- Why ? : When we create a token it won't have any expiration date, which means anyone with the token will have forever access to the user account. (More of a forever access)
- The idea of refresh token is we save a refresh token in a safe spot. 
- So even if someone has access to it, it will be for a limited time period only. 
- The user must use a refresh token to get new access token. 
- The main goal of refresh token is to invalidate user that shouldn't have access (who stole token)