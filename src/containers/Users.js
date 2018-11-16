import React from 'react';
import { connect } from 'react-redux';
import Menu from "./Menu";

const Users = ({ users }) => {
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
                <div className='col-md-7'>
                    <h2>Список пользователей</h2>
                    {usersElements}
                </div>
            </div>
        </div>

    );
}

const mapStateToProps = (state) => {
    return {
        users: state.login
    };
};

export default connect(mapStateToProps)(Users);