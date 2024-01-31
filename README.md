# EasyMoney Transfer
A basic web app showcasing money transfer system including transactions for database operation.
## Feature
* SignIn
* SignUp
* Random Initial Ammount
* Transaction
* REST APIs for backend

### Features to add
* Form validation
* Snackbars for various events.
* Profile Section

  ### How To Run?
  1. Create a .env file in backend folder and add your MONOG_URI of the database there. If you don't have any MONGO_URI then obtain it from here [Mongo](https://account.mongodb.com/account/login)
  2. Make sure to do the neccessary changes in api calls in frontend, which you can easily trace by searching for "axios" and replace "hk" with the ip address of backend server.
  2. Make sure you have either bun or nodejs installed on your system, if you have nodejs then replace bun with npm.
  3. Then run the following the commands.
```bash
cd backend
bun install
bun run index.js
```
4. Then open another terminal in the same path. 
```bash
cd frontend
bun install
bun run dev
npx run dev #if you have nodejs
``` 


Soon a running website for the web app will be added.....
