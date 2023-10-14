import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.colaboradores.length > 0) ?
        <section style={css} className="time">
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map( (colaborador, index) => <Colaborador key={index} corFundo={props.corPrimaria} imagem={colaborador.imagem} nome={colaborador.nome} cargo={colaborador.cargo}/> )}
            </div>
        </section> : ''
    )
}

export default Time
