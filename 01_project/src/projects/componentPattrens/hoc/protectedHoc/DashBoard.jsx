const DashBoard = ({ user }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome, <span className="font-semibold">{user.name}</span>! This is a protected route.</p>
    </div>
  );
};

export default DashBoard;
