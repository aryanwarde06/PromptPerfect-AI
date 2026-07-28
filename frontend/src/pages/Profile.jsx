function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ padding: "120px 40px", color: "white" }}>
      <h1>My Profile</h1>

      <br />

      <h3>Name</h3>
      <p>{user?.name}</p>

      <h3>Email</h3>
      <p>{user?.email}</p>
    </div>
  );
}

export default Profile;