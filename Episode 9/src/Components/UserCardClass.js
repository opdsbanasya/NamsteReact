import React from 'react';

class UserCardClass extends React.Component{
    constructor(){
        super();

        this.state = {
            status: "active",
            userInfo: {}    
        }
    }

    async componentDidMount(){

        const data = await fetch('https://api.github.com/users/dharm-2245832');

        const json = await data.json();

        console.log(json);
        this.setState({
            userInfo: json,
        })
        
    }

    componentDidUpdate(){
        
    }

    render(){
        
        const {status} = this.state;

        const {name, location, avatar_url} = this.state.userInfo;

        return (
            <div className='user-card'>
                <img className='user-avatar' src={avatar_url} />
                <h2>{name} <span className="user-status">{status}</span></h2>
                <h3>{location}</h3>
                <h3>Twitter: @opdsbanasya</h3>
                <button onClick={()=>{
                    this.setState({
                        status : status == "active" ? "in-active": "active"
                    })
                }} className='user-status-change'>change status</button>
            </div>
        )
    }
}

export default UserCardClass;