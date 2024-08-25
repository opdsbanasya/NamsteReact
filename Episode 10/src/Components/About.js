import { Component } from "react";
import UserCardClass from "./UserCardClass";

class About extends Component{
    constructor(){
        super();
    }

    componentDidMount(){
        this.timer = setInterval(()=>{
            console.log("Hello there are on Episode 8");
        }, 2000)
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){

        return (
            <div>
                <h1>About Us</h1>
                <UserCardClass />
            </div>
        );
    }
}
export default About;
