import { useState } from 'react';
import { ImCancelCircle } from "react-icons/im";
import { Link, useNavigate, useParams } from 'react-router-dom';


const CadastrarUsuario = () => {

    //Hook- useParams - serve para receber paramentros como por ex. codigo  na rota
    //do Router
    let id = useParams();
    //Hooke - useState- Manipula o estado da variavel - cadastrar
    const [usuarios, setUsuarios] = useState({
        id,
        usuario: '',
        senha: ''
    });

    //Hook-useNavigate- redireciona para outro componente
    const navigate = useNavigate();

    //criando a função handleChange
    //... spreed( junta o que estava cadastrado com o que for cadastrado novo)
    //evento target- captura o que foi digitado em um campo input pelo seu name

    const handleChange = (e) => {
        setUsuarios({ ...usuarios, [e.target.name]: e.target.value })

        //criando a funcao handleSubmit
        const handleSubmit = (e) => {
            //previne qualquer acao
            e.previneDefault();

            fetch(`http://localhost:5000/usuarios/${id ? id : ``}`, {
                method: 'Post'

            })
        }
    }






    return (
        <section className="usuario">

            <form onSubmit={'usuarios'}>
                <h1>Cadastrar Usuário</h1>
                <input
                    type="text"
                    name="usuario"
                    placeholder="Digite seu Usuário"
                    value={usuarios.usuario}
                    /*O onChange é utilizado em situções que é necessario reagir a cada alteração do input */
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="senha"
                    placeholder="Digite sua senha"
                    value={usuarios.senha}
                    onChange={handleChange}
                />

                <button type="submit">Cadastrar</button>
                <Link to="/listarUsuario">
                    <ImCancelCircle />
                </Link>



            </form>
        </section>
    )
}
export default CadastrarUsuario