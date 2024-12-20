"use client";

import styles from "../../../../styles/jogo.module.css";
import { useState, useEffect } from "react";
import Porta from "../../../../components/Porta";
import PortaModel from "../../../../model/porta";
import { atualizarPortas, criarPortas } from "../../../../functions/portas";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Jogo() {
    const { portas, temPresente } = useParams();
    const [portasState, setPortas] = useState([]);
    const [valido, setValido] = useState(false);

    useEffect(() => {
        const portasNum = +portas;
        const temPresenteNum = +temPresente;

        const qtdPortasValidas = portasNum >= 3 && portasNum <= 50;
        const temPresenteValido =
            temPresenteNum >= 1 && temPresenteNum <= portasNum;

        setValido(qtdPortasValidas && temPresenteValido);
    }, [portas, temPresente]);

    useEffect(() => {
        if (portas && temPresente) {
            const portasNum = +portas;
            const temPresenteNum = +temPresente;
            setPortas(criarPortas(portasNum, temPresenteNum));
        }
    }, [portas, temPresente]);

    function renderizarPortas() {
        return portasState.map((porta) => {
            return (
                <Porta
                    key={porta.numero}
                    value={porta}
                    onChange={(novaPorta: PortaModel) =>
                        setPortas(atualizarPortas(portasState, novaPorta))
                    }
                />
            );
        });
    }

    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>{valido ? renderizarPortas(): <h1>Valores inválidos</h1>}</div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    );
}
