import styles from "../styles/porta.module.css";
import PortaModel from "../model/porta";

interface PortaProps {
    porta: PortaModel;
    onChange: (novaPorta: PortaModel) => void;
}

export default function Porta(props) {
    const porta = props.value;
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : "";
    const alternarSelecao = (e) => props.onChange(porta.alternarSelecao());
    const abrir = (e) => {
        e.stopPropagation();
        props.onChange(porta.abrir());
    };

    function renderizarPorta() {
        return (
            <div className={styles.porta}>
                <div className={styles.numero}>{porta.numero}</div>
                <div className={styles.macaneta} onClick={abrir} />
            </div>
        );
    }

    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                {porta.aberta ? false : renderizarPorta()}
            </div>
            <div className={styles.chao}></div>
        </div>
    );
}
