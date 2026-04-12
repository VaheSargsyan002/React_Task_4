import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial, sans-serif",
        color: "#333",
      }}
    >
      <h1 style={{ fontSize: "5rem", margin: "0", color: "#ff6b6b" }}>404</h1>
      <h2 style={{ fontSize: "2rem", margin: "10px 0" }}>
        Oops! Page Not Found 😢
      </h2>
      <p style={{ fontSize: "1.2rem", margin: "20px 0" }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
          fontSize: "1rem",
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
