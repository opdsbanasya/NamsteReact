import { Component } from "react";
import UserCardClass from "./UserCardClass";

class About extends Component{
    constructor(){
        super();
        
    }

    componentDidMount(){
        // console.log("Parent DidMount called");
    }

    componentWillUnmount(){
        console.log("Unmounted");
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
