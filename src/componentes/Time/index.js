import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria }

    return (
        <section style={css} className="time">
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map( (colaborador, index) => <Colaborador key={index} imagem={colaborador.imagem} nome={colaborador.nome} cargo={colaborador.cargo}/> )}
            </div>
        </section>
    )
}

export default Time
