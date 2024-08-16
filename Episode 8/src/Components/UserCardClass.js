import React from 'react';

class UserCardClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            status: "active"
        }
    }
    render(){
        const {name, city} = this.props;
        const {status} = this.state;
        return (
            <div className='user-card'>
                <h2>Name: {name} class <span className="user-status">{status}</span></h2>
                <h3>City: {city}</h3>
                <h3>Twitter: @opdsbanasya</h3>
            </div>
        )
    }
}

export default UserCardClass;