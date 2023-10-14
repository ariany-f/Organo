import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    return (
        (props.colaboradores.length > 0) ?
        <section className="time" style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map( (colaborador, index) => <Colaborador key={index} corFundo={props.corPrimaria} imagem={colaborador.imagem} nome={colaborador.nome} cargo={colaborador.cargo}/> )}
            </div>
        </section> : ''
    )
}

export default Time
