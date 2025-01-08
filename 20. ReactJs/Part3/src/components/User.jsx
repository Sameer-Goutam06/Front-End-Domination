import { useParams, useNavigate } from "react-router-dom";

function User() {
  const { id } = useParams(); // Retrieve the user ID from the URL
  const navigate = useNavigate();

  return (
    <div>
      <h1>User Page: {id}</h1>
      <button onClick={() => navigate("/")}>Go Back to Home</button>
    </div>
  );
}

export default User;
