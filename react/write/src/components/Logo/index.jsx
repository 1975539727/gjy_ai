import styles from "./logo.module.css";
import logo from '@/assets/logo.png';
const Logo = () => {
    return (
        <div className={styles.container}>
            <img src={logo} alt="logo"  className={styles.bookIcon}/>
            <span className={styles.text}>爱作文</span>
       </div>
    )
}
export default Logo;