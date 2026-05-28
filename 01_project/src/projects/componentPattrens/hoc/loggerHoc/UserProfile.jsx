const dummyUser = {
  name: "Manoj G",
  role: "Frontend Developer",
  email: "manoj@example.com",
  location: "Bengaluru, India",
  status: "Active"
};

function UserProfile() {
  return (
    <div className="border p-4 rounded-sm space-y-3">
      <div>
        <h2 className="text-xl font-bold">User Profile</h2>
        <p className="text-sm text-gray-600">
          Basic profile details for the logged-in user.
        </p>
      </div>

      <div className="space-y-2">
        <p>
          <span className="font-semibold">Name:</span> {dummyUser.name}
        </p>
        <p>
          <span className="font-semibold">Role:</span> {dummyUser.role}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {dummyUser.email}
        </p>
        <p>
          <span className="font-semibold">Location:</span> {dummyUser.location}
        </p>
        <p>
          <span className="font-semibold">Status:</span>{" "}
          <span className="text-green-600 font-semibold">
            {dummyUser.status}
          </span>
        </p>
      </div>
    </div>
  );
}

export default UserProfile;
