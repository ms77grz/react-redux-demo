import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
// import CakeContainer from './components/CakeContainer';
// import HooksCakeContainer from './components/HooksCakeContainer';
// import IceCreamContainer from './components/IceCreamContainer';
// import BiscuitContainer from './components/BiscuitContainer';
// import HooksBiscuitContainer from './components/HooksBiscuitContainer';
// import ImprovedCakeContainer from './components/ImprovedCakeContainer';
// import ItemContainer from './components/ItemContainer';
// import HooksItemContainer from './components/HooksItemContainer';
import HooksUserContainer from './components/HooksUserContainer';
import UserContainer from './components/UserContainer';

export default function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        {/* <HooksItemContainer cake />
        <HooksItemContainer />
        <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <BiscuitContainer />
        <HooksBiscuitContainer />
        <ImprovedCakeContainer /> */}
        <UserContainer />
        <HooksUserContainer />
      </div>
    </Provider>
  );
}
