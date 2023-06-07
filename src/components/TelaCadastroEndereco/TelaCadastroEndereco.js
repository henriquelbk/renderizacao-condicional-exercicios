import { useState } from "react"

function TelaCadastroEndereco(props) {

    const mostrarTelaEndereco = () => {
        props.mudarTela("TelaCadastroEndereco")
    }

    const cadastroEndereco = (event) => {
        if (event.target.endereco.value && event.target.numeroResidencial.value && event.target.complemento.value && event.target.telefone.value) {
            console.log([event.target.endereco.value, event.target.numeroResidencial.value, event.target.complemento.value, event.target.telefone.value])

        } else {
            alert("Preencha os dados de cadastro do endereco")
        }


        event.preventDefault()
    }

    const [endereco, setEndereco] = useState("")
    const [numeroResidencial, setNumeroResidencial] = useState("")
    const [complemento, setComplemento] = useState("")
    const [telefone, setTelefone] = useState("")

    return (

        <form onSubmit={cadastroEndereco}>

            <input type={"text"} placeholder={"Endereço"} id={"endereco"} />
            <input type={"Number"} placeholder={"Número da residência"} id={"numeroResidencial"}/>
            <input type={"Number"} placeholder={"Complemento"} id={"complemento"}/>
            <input type={"tel"} placeholder={"Telefone"} id={"telefone"}/>
            <button type={"submit"} onClick={mostrarTelaEndereco}>Confirmar</button>

        </form>

    );
}

export default TelaCadastroEndereco;