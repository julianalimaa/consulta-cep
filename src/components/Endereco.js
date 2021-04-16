import './Endereco.css'
import { useState } from 'react'
import CampoTextoCustomizado from './CampoTextoCustomizado'

const Endereco = () => {    
    const [mensagemErrorCep, setMensagemErrorCep] = useState('')
    const [cep, setCep] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [localidade, setLocalidade] = useState('')
    const [uf, setUf] = useState('')

    const manipularOnBlurCep = async (ev) => {
       
        try {
            const urlApi = `https://viacep.com.br/ws/${cep}/json/`
            const resultadoApi = await fetch(urlApi)
            const json = await resultadoApi.json()
        
            if (json.erro) {
            throw new Error()
            }

            setLogradouro(json.logradouro)
            setComplemento(json.complemento)
            setBairro(json.bairro)
            setLocalidade(json.localidade)
            setUf(json.uf)
            setMensagemErrorCep('')

        } catch (error) {
            setMensagemErrorCep('Cep inexistente / inválido')
            setLogradouro('')
            setComplemento('')
            setBairro('')
            setLocalidade('')
            setUf('')
        }
    }

    return (  
        <div className="campoEndereco">
           <CampoTextoCustomizado error mensagemErro={mensagemErrorCep} manipuladorOnChange={setCep} manipuladorOnBlur={manipularOnBlurCep} label="CEP"/> 
           <CampoTextoCustomizado valor={logradouro} label="Logradouro"/> 
           <CampoTextoCustomizado valor={complemento} label="Complemento"/> 
           <CampoTextoCustomizado valor={bairro} label="Bairro"/> 
           <CampoTextoCustomizado valor={localidade} label="Localidade"/> 
           <CampoTextoCustomizado valor={uf} label="UF"/> 
        </div>   
    )
}

export default Endereco