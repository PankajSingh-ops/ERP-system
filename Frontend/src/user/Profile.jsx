import Header from '../shared/components/Header'
import styles from './Profile.module.css'

export default function Profile() {
  return (
    <>
    <Header/>
      <div className={styles.profile_main}>
        My name is profile
      </div>
    </>
  )
}
