import StyledApp from './App.styled';
import GlobalStyles from './Global.styled';

//Import Routing components
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Import the components
import TopNav from './component/topNav/TopNav';
import SideNav from './component/sideNav'
import Error from './pages/error'
import Dashboard from './pages/dashboard';

/**
 * Display the whole Application
 * @returns {JSX.element} - App component
 */
function App() {
  return (
    <StyledApp>
        <GlobalStyles />
        <TopNav />
        <SideNav />
        <BrowserRouter>
          <Routes>
            <Route path="/user/:id" element={<Dashboard />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
    </StyledApp>
  );
}

export default App;
