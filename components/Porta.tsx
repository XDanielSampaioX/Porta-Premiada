import PortaModel from "@/model/porta"
import style from "../styles/Porta.module.css"

interface PortaProps {
    porta: PortaModel
}

export default function Porta(props: PortaProps) {
    const {porta} = props
    const selecionada: string = porta.selecionada ? style.selecionada : ''

    return (
        <div className={style.area}>
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