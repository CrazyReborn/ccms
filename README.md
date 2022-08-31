# Cat Colony Management System (CCMS) Server

This is the backend for the CCMS, an app for non-profit organizations, that work with stray/feral cat colonies on the streets. The app's goal is to make communication between different parts of the non-ptofit more straightforward. Client code can be found [here](https://github.com/CrazyReborn/ccms-client)
*This is a demo app, it is not finished yet, some part may (and will) change.*

<br>

To run this app clone the repository to your local machine and run using this command:
```
npm run start
```
You will also need to set up a .env file with couple of variables:
```
JWT_SECRET=yourJwtSecret
MONGO_URL=yourMongoDB
CLIENT_URL=clientUrl
```
By default the docs are avalible at the adress "http://localhost:5000/docs"