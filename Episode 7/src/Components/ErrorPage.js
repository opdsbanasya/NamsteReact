import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    // const err = useRouteError();
    return (
        <div>
            <h1>Ooops!!!</h1>
            <h2>Someting went wrong!!</h2>
        </div>
    );
}

export default ErrorPage;
