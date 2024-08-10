import PortaModel from "@/model/porta"
import style from "../styles/Porta.module.css"

interface PortaProps {
    value: PortaModel
    onchange: (novaPorta : PortaModel) => void
}

export default function Porta(props: PortaProps) {
    const porta = props.value
    const selecionada: string = porta.selecionada ? style.selecionada : ''

    const alternarSelecao = e => props.onchange(porta.alternarSelecao())

    return (
        <div className={style.area} onClick={alternarSelecao}>
            <div className={`${style.estrutura} ${selecionada}`}>
                <div className={style.porta}>
                    <div className={style.numero}>{porta.numero}</div>
                    <div className={style.macaneta}></div>
                </div>
            </div>
            <div className={style.chao}></div>
        </div>
    )
}