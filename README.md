# SportSee

[![React.js](https://img.shields.io/badge/React.js-18.2.0-61DAFB?logo=react&logoColor=white&style=flat-square)](https://reactjs.org/)
[![Styled Components](https://img.shields.io/badge/Styled_Components-5.3.5-%23DB7093?logo=styled-components&logoColor=white&style=flat-square)](https://styled-components.com/)

![screenshot](/screenshot.jpg)

## Description

Build a user dashboard displaying complex data using React and the Recharts library. Use of the Styled-components library for the formatting.

This project explores various concepts and features including:

- React State
- CSS in JS
- CSS Animations
- ES6
- REST API

and more.

## Technologies Used

- [React.js](https://reactjs.org/) - Version 18.2.0
- [Styled Components](https://styled-components.com/) - Version 5.3.5
- [Recharts](https://recharts.org/) - Version 2.1.14

## Getting Started

To get started with the SportSee project, follow the steps below:

1. Clone the repository:

   ```shell
   git clone git@github.com:Axda-Web/sportSee.git
   ```

2. Change into the project directory:

   ```shell
   cd sportSee
   ```

3. Install the project dependencies:

   ```shell
   npm install
   ```

4. Run the project in development mode:

   ```shell
   npm start
   ```

5. Change the dafault URL manually in the browser: `http://localhost:${portNumber}/user/${userId}`.

6. Switch the `userId` to see different user data. Currently only two users have been mocked, they have userId 12 and 18. You can choose one of the two.

## Getting the data from a real backend

### Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

### Launching the project

- Fork the repository [SportSee-BackEnd](https://sport-see-five.vercel.app/user/12).
- Clone it on your computer.
- The `yarn` command will allow you to install the dependencies.
- The `yarn dev` command will allow you to run the micro API.

### Switch from mocked data to API data

- Go to the Dashboard page `/src/pages/dashboard/Dashboard.jsx`
- If you want to use the API data:
  - Uncomment line 8 - `import { getUserData, getUserActivity, getUserAverageSessions, getUserPerformance } from '../../service/apiManager'`
  - Comment line 11 - `import { getUserData, getUserActivity, getUserAverageSessions, getUserPerformance } from '../../service/mockManager'`
- If you want to use the mocked data:
  - Uncomment line 11 - `import { getUserData, getUserActivity, getUserAverageSessions, getUserPerformance } from '../../service/mockManager'`
  - Comment line 8 - `import { getUserData, getUserActivity, getUserAverageSessions, getUserPerformance } from '../../service/apiManager'`

A deployed version of the SportSee project is available on Vercel at [SportSee](https://daily-quotes-beryl.vercel.app/).
