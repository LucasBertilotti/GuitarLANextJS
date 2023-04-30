import Image  from "next/image";
import Layout from "../components/layout";
import styles from "../styles/nosotros.module.css";

const Nostros = () => {
    return(
        <>
            <Layout 
                title={"Nosotros"}
                description={"Sobre nosotros, GuitarLA, tienda de música"}
            >
                <main className="contenedor">
                    <h2 className="heading">Nosotros</h2>
                    <div className={styles.contenido}>
                        <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" />
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi massa leo, mollis sit amet facilisis faucibus, consequat ac velit. Etiam ut convallis arcu. Phasellus semper purus et neque posuere, porta sagittis leo finibus. Integer ut magna leo. Ut mollis turpis nec mi sodales sagittis. Nunc tempus sagittis interdum. Aliquam erat volutpat. Nam magna nisi, lobortis et rutrum sit amet.</p>
                           <p>Etiam varius dui a ante feugiat pulvinar. Praesent ut suscipit quam. Sed eleifend velit vel placerat posuere. Phasellus vitae urna id elit iaculis accumsan. Aliquam eget nibh consequat, cursus eros id, bibendum ante. Praesent odio ipsum, hendrerit sit amet dolor sit amet, luctus rhoncus mauris. Praesent semper gravida nisi quis rhoncus.</p>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    );
}

export default Nostros;