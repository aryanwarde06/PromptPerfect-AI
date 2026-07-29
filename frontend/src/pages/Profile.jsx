import { User, Mail } from "lucide-react";
import styles from "./Profile.module.css";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>My Profile</h1>
       <p>View your account information and manage your PromptPerfect AI profile.</p>
      </div>

      <div className={styles.card}>
        <div className={styles.avatar}>
  {user?.name
    ?.split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()}
</div> 

      <h2>{user?.name}</h2>
<p className={styles.email}>{user?.email}</p>

<div className={styles.divider}></div>

<div className={styles.infoSection}>
          <div className={styles.infoCard}>
            <User size={18} />
            <div>
              <span>Name</span>
              <strong>{user?.name}</strong>
            </div>
          </div>

          <div className={styles.infoCard}>
            <Mail size={18} />
            <div>
              <span>Email</span>
              <strong>{user?.email}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;