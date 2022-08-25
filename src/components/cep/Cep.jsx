import { useEffect, useState } from 'react'

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

    function writeForm() {
        return (
            <form onSubmit={handleSubmit}>
                <label>
                    CEP:
                    <input type='text' value={cep.value} onChange={handleChange}></input>
                </label>
                <button type='submit'>Pesquisar CEP</button>
            </form>
        )
    }

    return (
        <>
            {writeForm()}
            <h2>Dados do CEP: </h2>
            <p>Bairro: <strong>{cep.bairro}</strong></p>
            <p>Complemento: <strong>{cep.complemento}</strong></p>
            <p>DDD: <strong>{cep.ddd}</strong></p>
            <p>Cidade: <strong>{cep.localidade}</strong></p>
            <p>Rua: <strong>{cep.logradouro}</strong></p>
        </>
    )
}

export default Cep