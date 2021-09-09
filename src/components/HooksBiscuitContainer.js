import { useSelector, useDispatch } from 'react-redux';
import { buyBiscuit } from '../redux';

export default function HooksBiscuitContainer() {
  const numOfBiscuits = useSelector(state => state.biscuit.numOfBiscuits);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of biscuits - {numOfBiscuits}</h2>
      <button onClick={() => dispatch(buyBiscuit())}>Buy Biscuit</button>
    </div>
  );
}
