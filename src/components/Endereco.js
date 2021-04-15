import { TextField } from "@material-ui/core"
import './Endereco.css'
import { useState } from 'react'

const CampoTextoCustomizado = ({label, manipuladorOnChange}) => {

    return (
        <div className="encapsuladorCampoTexto">
            <TextField onChange={(event)=> manipuladorOnChange(event.target.value)} label={label} variant="filled" className="campoTexto" />
        </div> 
    )
}

const Endereco = () => {
    
    const [cep, setCep] = useState('')

    return (  
        <div className="campoEndereco">
           <CampoTextoCustomizado manipuladorOnChange={setCep} label="CEP"/> 
           <CampoTextoCustomizado label="Logradouro"/> 
           <CampoTextoCustomizado label="Complemento"/> 
           <CampoTextoCustomizado label="Bairro"/> 
           <CampoTextoCustomizado label="Localidade"/> 
           <CampoTextoCustomizado label="UF"/> 
        </div>   
    )
}

export default Endereco