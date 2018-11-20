import React from 'react';
import { connect } from 'react-redux';
import Menu from "../components/Menu";

const Users = props => {
    const { users } = props
    const usersElements = users.map((user) =>
        <li key={user.id}>
            {user.name}
        </li>
    );
    return(
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3'>
                    <Menu/>
                </div>
                <div className='col-md-9'>
                    <h2>Список пользователей</h2>
                    {usersElements}
                </div>
            </div>
        </div>

    );
}

const mapStateToProps = (state) => {
    return {
        users: state.login.users
    };
};

export default connect(mapStateToProps)(Users);