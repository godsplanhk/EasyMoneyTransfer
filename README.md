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
  2. Rename sample.env in frontend folder to .env and add your env varibles basically the address and port of the backend
  3. Make sure you have either bun or nodejs installed on your system, if you have nodejs then replace bun with npm.
  4. Then run the following the commands.
```bash
cd backend
bun install
bun run index.js
```
1. Then open another terminal in the same path. 
```bash
cd frontend
bun install
bun run dev
npm run dev #if you have nodejs
``` 


Soon a running website for the web app will be added.....
