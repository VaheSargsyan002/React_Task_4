import { useParams } from "react-router-dom";

interface RouteParams extends Record<string, string | undefined> {
  id: string;
}

const Dashboard: React.FC = () => {
  const { id } = useParams<RouteParams>();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>User ID: {id}</p>
    </div>
  );
};

export default Dashboard;
