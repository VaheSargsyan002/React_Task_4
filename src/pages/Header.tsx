import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const userId: string | null = localStorage.getItem("userId");

  return (
    <nav style={{ display: "flex", gap: "20px" }}>
      <Link to="/">Login</Link>
      {/* {userId && <Link to={`/user/${userId}`}>Dashboard</Link>} */}
      {userId && <Link to="/create">Write Article</Link>}
      <Link to="/create">Write Article</Link>
    </nav>
  );
};

export default Header;
