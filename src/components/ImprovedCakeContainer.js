import { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function ImprovedCakeContainer(props) {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <input
        type='text'
        value={number}
        onChange={event => setNumber(event.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>
        Buy {number > 1 ? `${number} Cakes` : `${number} Cake`}
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: number => dispatch(buyCake(number)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImprovedCakeContainer);
