import styles from './FooterCenter.module.scss';

function FooterCenter() {
    return (
        <div className={styles.footerCenter}>
            <ul>
                <li>
                    <a href='/'>About Us</a>
                </li>
                <li>
                    <a href='/'>Contact</a>
                </li>
                <li>
                    <a href='/'>Blog</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href='/'>Careers</a>
                </li>
                <li>
                    <a href='/'>Support</a>
                </li>
                <li>
                    <a href='/'>Privacy Policy</a>
                </li>
            </ul>
        </div>
    )
};

export default FooterCenter;