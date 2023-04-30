import Link from "next/link";
import styles from "../styles/footer.module.css";

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.contenido}`}>
            <nav className={styles.navegacion}>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/tienda"}>Tienda</Link>
                    <Link href={"/nosotros"}>Nosotros</Link>
                    <Link href={"/blog"}>Blog</Link>
                </nav>
                <p className={styles.copyright}>© {new Date().getFullYear()} | Lucas Bertilotti | Todos los derechos reservados</p>
            </div>
        </footer>
    );
}

export default Footer;