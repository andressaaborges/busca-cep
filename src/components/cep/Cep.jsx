import { useEffect, useState } from 'react'
import Paragraph from '../paragraph/Paragraph'
import './index.css'

function Cep() {
    const [cep, setCep] = useState([])
    const [valueSubmit, setValueSubmit] = useState([])

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const data = await response.json()
            setCep(data)
        }
        getData()
    }, [valueSubmit])

    const handleSubmit = (e) => {
        e.preventDefault()
        setValueSubmit(cep)
    }

    const handleChange = (e) => {
        setCep(e.target.value)
    }

    const writeForm = () => {
        return (
            <form onSubmit={handleSubmit} className="form">
                <label>
                    CEP:
                    <input type='text' value={cep.cep} onChange={handleChange}></input>
                </label>
                <button type='submit'>Pesquisar CEP</button>
            </form>
        )
    }

    const writeDataCep = () => {
        return (
            <>
                <Paragraph info={'Bairro'} value={cep.bairro} />
                <Paragraph info={'Complemento'} value={cep.complemento} />
                <Paragraph info={'DDD'} value={cep.ddd} />
                <Paragraph info={'Cidade'} value={cep.localidade} />
                <Paragraph info={'Rua'} value={cep.logradouro} />
            </>
        )
    }

    return (
        <>
            <h1>Busca CEP</h1>
            {writeForm()}
            <h2>Dados do CEP: </h2>
            {writeDataCep()}
        </>
    )
}

export default Cep