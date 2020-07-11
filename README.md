## Basic auth flow services

This project create a basic auth flow service with user signup and login apis.

## available route:

| URL                           | available HTTP method | description                                                                                      |
| ----------------------------- | --------------------- | ------------------------------------------------------------------------------------------------ |
| http://localhost:3000/signup  | POST                  | User will get message or error depend on their signup process succes or not                      |
| http://localhost:3000/signin  | POST                  | User will get token with user information or error depend on their signin process success or not |
| http://localhost:3000/signout | GET                   | Cookie will removed from the client                                                              |
