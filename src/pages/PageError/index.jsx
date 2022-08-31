import { Link } from "react-router-dom";

export default function PageError({error}) {
    return (
        <div>
            <br />
            <br />
            <h1>Ops... Ocorreu um erro:</h1>
            <br />
            <h1> {error}</h1>
            <br />
            <br />
            <Link to="/">
                <button>Voltar para página principal</button>
            </Link>
        </div>
    );
}
