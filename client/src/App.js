import Messenger from './components/Messenger';
import './App.css';
import AccountProvider from './context/AccountProvider';
import TemplateProvider from './theme/TemplateProvider';
import UserProvider from './context/UserProvider';
function App() {

  return (
    <div className="App">

      <TemplateProvider>
        <UserProvider>
          <AccountProvider>
            <Messenger />
          </AccountProvider>
        </UserProvider>
      </TemplateProvider>


    </div>
  );
}

export default App;
