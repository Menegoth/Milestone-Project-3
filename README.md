
# Milestone Project 3

  

## Explanation

  

# Front End

  

----


# Back End
## Technologies Used

**NPM Packages**
- bcrypt
- cors
- dotenv
- express
- jsonwebtoken
- mongoose
- ts-node
- typescript
- typescript types for all packages

**Testing**
- REST Client VSCode extention
- MongoDB Compass
- Postman
- Nodemon

**Deployment**
- Mongo Atlas
- Azure WebApp

## Usage

All API calls are made to https://milestone-project-3-backend.azurewebsites.net/

**Routes**

*/authentication*
|method|route|response|description|
|---|---|---|---|
|POST|/authentication|JWT on success|user login|
|GET|/authentication/profile|User data|requires a JWT to be passed in the header to receive user object back|

*/users*
|method|route|response|description|
|---|---|---|---|
|POST|/users|returns user object and JWT on success|user signup|
|PUT|/users/cart|returns success message|adds a post to user's cart, requires user id and post id to be passed in request body|
|GET|/users/:id/cart|returns array of user cart|requires user id to be passed in URL parameter|
|GET|/users|returns array of user objects|for testing only|

*/posts*
|method|route|response|description|
|---|---|---|---|
|GET|/posts/:id|returns post object|requires post id in URL parameter|
|GET|/posts|returns array of post objects| |
|POST|/posts|returns new post object|requires user ID to be passed in the body of the request, and user must be an admin|


**Database**

*users*
| property | datatype | required | other |
| -------- | -------- | -------- | ----- |
| username | string | yes | must be unique |
| password | string | yes | |
| role | string | yes | defaults to user on creation, must be between user and admin |
| cart | mongoose objectID | no | array of IDs referencing posts in user's cart |

*posts*
| property | datatype | required | other |
| -------- | -------- | -------- | ----- |
| title | string | yes | |
| content | string | yes | |
| price | string | yes | |
| image | string | yes | |

# Font End
## Techonologies Used

- React
- Material UI
- Axios