import { connect } from 'react-redux';
import { buyBiscuit } from '../redux';

function BiscuitContainer(props) {
  return (
    <div>
      <h2>Number of biscuits - {props.numOfBiscuits}</h2>
      <button onClick={props.buyBiscuit}>Buy Biscuit</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    numOfBiscuits: state.biscuit.numOfBiscuits,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyBiscuit: () => dispatch(buyBiscuit()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BiscuitContainer);
