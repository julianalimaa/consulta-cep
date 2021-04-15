import { TextField } from "@material-ui/core"
import './Endereco.css'

const CampoTextoCustomizado = ({label}) => {
    return (
        <div className="encapsuladorCampoTexto">
            <TextField label={label} variant="filled" className="campoTexto" />
        </div>
        
    )
}

const Endereco = () => {

    return (
        <div className="campoEndereco">
           <CampoTextoCustomizado label="CEP"/> 
           <CampoTextoCustomizado label="Logradouro"/> 
           <CampoTextoCustomizado label="Complemento"/> 
           <CampoTextoCustomizado label="Bairro"/> 
           <CampoTextoCustomizado label="Localidade"/> 
           <CampoTextoCustomizado label="UF"/> 
        </div>
        
    )
}

export default Endereco