import React, {useEffect} from 'react';
import {fetchUsers} from "../../actions/ActionsCreators";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

const UsersContainer = () => {
    const dispatch = useAppDispatch();
    const {users, isLoading, error} = useAppSelector(state => state.userReducer)
    useEffect(() => {
        dispatch(fetchUsers())
    }, []);
    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {JSON.stringify(users, null, 2)}
        </div>
    );
};

export default UsersContainer;
