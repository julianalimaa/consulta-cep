import { TextField } from "@material-ui/core"
const CampoTextoCustomizado = ({valor, label, mensagemErro, manipuladorOnChange, manipuladorOnBlur}) => {

    return (
        <div className="encapsuladorCampoTexto">
            <TextField 
                value={valor}
                onBlur={manipuladorOnBlur}
                onChange={(event)=> 
                    manipuladorOnChange && manipuladorOnChange(event.target.value)} 
                label={label} 
                variant="filled" 
                className="campoTexto"
                error={mensagemErro}
                helperText={mensagemErro}
                />
        </div> 
    )
}

export default CampoTextoCustomizado