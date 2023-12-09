import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page can not be found</p>
            <a href="/">
                <button>Back to Homepage</button>
            </a>
        </div>

     );
}
 
export default NotFound;