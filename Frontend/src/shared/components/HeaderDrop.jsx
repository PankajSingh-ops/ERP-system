import styles from './HeaderDrop.module.css'

export default function HeaderDrop() {
  return (
    <div className={styles.dropdown_main}>
      <h3><u>Main</u> </h3>
      <p>Dashboard</p>
      <p>Profile</p>
      <h3><u>Admin Section</u></h3>
      <p>Add User</p>
      <p>All Users</p>
      <h3><u>Manager Section</u></h3>
      <p>Add Employee</p>
      <p>All Employees</p>
      <h3><u>Employee SEction</u></h3>
      <p>All Employess</p>
      <p>Projects</p>
      <h3><u>Other</u></h3>
      <p>Calender</p>
      <p>Leaves</p>
      <p>Activities</p>
    </div>
  )
}
