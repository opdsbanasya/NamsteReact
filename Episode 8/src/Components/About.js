import UserCardClass from "./UserCardClass";
import UserCardFunction from "./UserCardFunction";

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <UserCardClass name={"Dharm Singh"} city={"Jaipur"} />
            <UserCardFunction name={"Dharm Singh"} city={"Jaipur"} />
        </div>
    );
}

export default About;
