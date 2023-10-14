import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select value={props.valor} onChange={aoDigitado} required={props.obrigatorio}>
                <option value="">Selecione o Time</option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa