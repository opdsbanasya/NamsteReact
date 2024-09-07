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
            <div className='user-card w-[40%] border-2 border-black border-opacity-20 ml-[10vw] mt-[2vw] p-[2vw] grid place-items-center rounded-lg gap-1 bg-lightyellow'>
                <img className='user-avatar w-[10vw]' src={avatar_url} />
                <h2 className='text-2xl font-bold'>
                    {name} <span className="user-status text-xs bg-blue-200 px-2 py-1 rounded-lg ">{status}</span>
                </h2>
                <h3 className='text-xl font-semibold'>{location}</h3>
                <h3 className='text-xl font-semibold'>Twitter: @opdsbanasya</h3>
                <button
                    onClick={() => {
                        this.setState({
                            status: status == "active" ? "in-active" : "active"
                        })
                    }}
                    className='px-4 py-2 bg-blue-600 text-white rounded-lg mt-5'
                >
                    change status
                </button>
            </div>
        )
    }
}

export default UserCardClass;