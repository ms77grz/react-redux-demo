import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import BiscuitContainer from './components/BiscuitContainer';
import HooksBiscuitContainer from './components/HooksBiscuitContainer';

export default function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <BiscuitContainer />
        <HooksBiscuitContainer />
      </div>
    </Provider>
  );
}
