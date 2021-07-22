import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "./../redux";
const UserContainer = ({ usersData, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, []);

  return usersData.loading ? (
    <div className='loading'>Loading .........</div>
  ) : usersData.error ? (
    <div className='error'>{usersData.error}</div>
  ) : (
    <div className='user__container'>
      <h2 className='huge-heading'>The Team</h2>
      {usersData.users.map((user) => (
        <div className='user__card' key={user._id}>
          <h2 className='normal-heading'>{user.name}</h2>
          <img className='user__image' src={user.avatar} alt='UserPhoto' />
          <h2 className='normal-heading'>Role:{user.role}</h2>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    usersData: state.Users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
