import React from "react";
import Link from "next/link";
import styles from './styles.module.css'; // components/Footer'daki styles.module.css dosyasını kullan

function Footer() {
    return (
        <footer className={styles.footer}>
            Made With&nbsp;
            <Link href="https://www.linkedin.com/in/kaan-g%C3%BC%C3%A7l%C3%BC-/" target="_blank">
                Kaan Güçlü
            </Link>
        </footer>
    );
}

export default Footer;

