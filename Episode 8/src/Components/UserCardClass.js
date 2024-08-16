import React from 'react';

class UserCardClass extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className='user-card'>
                <h2>Name: Dharm Singh</h2>
                <h3>City: Jaipur</h3>
                <h3>Twitter: @opdsbanasya</h3>
            </div>
        )
    }
}

export default UserCardClass;