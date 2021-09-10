import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';

function UserContainer({ user, fetchUsers }) {
  useEffect(() => fetchUsers(), [fetchUsers]);

  return user.loading ? (
    <h2>Loading...</h2>
  ) : user.error ? (
    <h2>{user.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      {user &&
        user.users &&
        user.users.map(user => <p key={user.id}>{user.name}</p>)}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
