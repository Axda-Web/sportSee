import React, { Suspense } from 'react'
import StyledApp from './App.styled';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyles from './Global.styled';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import TopNav from './component/topNav/TopNav';
import SideNav from './component/sideNav'
// import Loader from './component/loader'
import Dashboard from './component/dashboard';
// const Dashboard = React.lazy( async () => await import('./component/dashboard'))

function App() {
  return (
    
    <StyledApp>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <TopNav />
        <SideNav />
        <BrowserRouter>
          <Routes>
            <Route  path="/:id" element={<Dashboard />}
                    // element={ <Suspense fallback={<Loader />}>
                    //             <Dashboard />
                    //           </Suspense> }
                />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StyledApp>
  );
}

export default App;
