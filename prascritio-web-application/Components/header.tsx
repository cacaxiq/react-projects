import Link from "next/link";

export default function Footer() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Prascritio App</a>
                <div className="d-flex">
                    <Link href="/authentication/register" type="button" className="btn btn-info me-2">Novo Usuário</Link>
                    <Link href="/authentication/login" type="button" className="btn btn-light me-2">Entrar</Link>

                </div>
            </div>
        </nav>

    )
}