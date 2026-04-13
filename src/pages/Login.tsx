import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (): void => {
    const userId: string = Date.now().toString();
    localStorage.setItem("userId", userId);
    navigate(`/user/${userId}`);
  };

  return (
    <div>
      <h1>Login page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
