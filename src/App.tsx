import './App.css';
import { GlobalStyle } from './styles/global';
import { RoutesMain } from './routes';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './contexts/user';
import { TechProvider } from './contexts/techs';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <UserProvider>
        <TechProvider>
          <RoutesMain />
        </TechProvider>
      </UserProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
