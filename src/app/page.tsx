"use client";

import styles from "../styles/formulario.module.css";
import Card from "../components/Card";
import Link from "next/link";
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";

export default function Formulario() {
    const [quantidadeDePortas, setQuantidadeDePortas] = useState(3);
    const [comPresente, setComPresente] = useState(1);

    return (
        <div className={styles.formulario}>
            <div>
                <Card bgcolor="#c5323c">
                    <h1>Mounty Hall</h1>
                </Card>
                <Card>
                    <EntradaNumerica
                        text="Quantidade de portas"
                        value={quantidadeDePortas}
                        onChange={(novaQuantidade) =>
                            setQuantidadeDePortas(novaQuantidade)
                        }
                    />
                </Card>
            </div>
            <div>
                <Card>
                    <EntradaNumerica
                        text="Porta com presente?"
                        value={comPresente}
                        onChange={(novaPortaComPresente) =>
                            setComPresente(novaPortaComPresente)
                        }
                    />
                </Card>
                <Card bgcolor="#3d684d">
                    <Link href={`/jogo/${quantidadeDePortas}/${comPresente}`}>
                        <h2 className={styles.link}>Iniciar</h2>
                    </Link>
                </Card>
            </div>
        </div>
    );
}
