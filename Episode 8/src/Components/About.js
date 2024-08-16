import { Component } from "react";
import UserCardClass from "./UserCardClass";

class About extends Component{
    constructor(){
        super();

        console.log("Parent Constructor called");
        
    }

    componentDidMount(){
        console.log("Parent DidMount called");
    }

    render(){
        console.log("Parent render called");

        return (
            <div>
                <h1>About Us</h1>
                <UserCardClass name={"First "} city={"Jaipur"} />
                <UserCardClass name={"Second "} city={"Jaipur"} />
            </div>
        );
    }
}
export default About;
