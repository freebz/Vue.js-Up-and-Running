import style from './styles.css';

// ...

render() {
  return (
    <div className={styles.user}>
      <h2 className={styles.name}>{user.name}</h2>
      <p className={styles.bio}>{user.bio}</p>
    </div>
  );
}
