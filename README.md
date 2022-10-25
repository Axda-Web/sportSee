# Getting Started with SportSee App


## 1. BackEnd set up


### 1.1 Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

### 2.2 Launching the project

- Fork the repository [SportSee-BackEnd](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard).
- Clone it on your computer.
- The `yarn` command will allow you to install the dependencies.
- The `yarn dev` command will allow you to run the micro API.



## 2. FrontEnd set up


### 2.1 Launching the project

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- The `npm i` command will allow you to install the dependencies.
- The `npm start` command will allow you to run the app in the development mode.

### 2.2 Switch user profil

- Directly change the user ID in the url: `http://localhost:${portNumber}/user/${userId}`.
- Currently only two users have been mocked, they have userId 12 and 18. You can choose one of the two.
- The port number will be automatically chosen after launching the app with `npm start`.

### 2.3 Switch from API data to mocked data

- Go to the Dashboard page ('/src/pages/dashboard/Dashboard.jsx')
- If you want to use the API data:
    * Uncomment line 8 - `import { getUserData, getUserActivity, getUserAverageSessions, getUserPerformance } from '../../service/apiManager'`
    * Comment line 11 - `import { getUserData, getUserActivity, getUserAverageSessions, getUserPerformance } from '../../service/mockManager'`
- If you want to use the mocked data:
    * Uncomment line 11 - `import { getUserData, getUserActivity, getUserAverageSessions, getUserPerformance } from '../../service/mockManager'`
    * Comment line 8 - `import { getUserData, getUserActivity, getUserAverageSessions, getUserPerformance } from '../../service/apiManager'`
