import {Link} from "react-router-dom";
export const Home =()=> {
    return (
      <div>
        <h1>Welcome to Home Page</h1>
        <p>Click on a user to visit their page:</p>
        <ul>
          <li><Link to="/user/1">User 1</Link></li>
          <li><Link to="/user/2">User 2</Link></li>
          <li><Link to="/user/3">User 3</Link></li>
        </ul>
      </div>
    );
  }