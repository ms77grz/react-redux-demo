import { useSelector } from 'react-redux';

export default function HooksItemContainer(props) {
  const item = useSelector(state =>
    props.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams
  );
  return (
    <div>
      <h2>Item - {item}</h2>
    </div>
  );
}
