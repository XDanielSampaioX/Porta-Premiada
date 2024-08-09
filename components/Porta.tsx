import style from "../styles/Porta.module.css"

export default function Porta(props: any) {
const selecionada : string = props.selecionada ? style.selecionada : ''

    return (
        <div className={style.area}>
            <div className={`${style.estrutura} ${selecionada}`}>
                <div className={style.porta}>
                    <div className={style.numero}>3</div>
                    <div className={style.macaneta}></div>
                </div>
            </div>
            <div className={style.chao}></div>
        </div>
    )
}