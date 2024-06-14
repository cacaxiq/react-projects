import Link from "next/link";

export default function Register() {
    return (
      <div className="container mx-auto">
        <div className="d-flex flex-column  justify-content-center align-items-center vh-100">
          <img src="https://placehold.co/200x100.png" className="img-fluid mb-5" alt="..." />
          <div className="card w-50 " >
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="user-login" className="form-label">E-mail</label>
                  <input type="email" className="form-control" id="user-login" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="user-login" className="form-label">Usuário</label>
                  <input type="email" className="form-control" id="user-login" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="user-password" className="form-label">Senha</label>
                  <input type="password" className="form-control" id="user-password" />
                </div>
                <div className="mb-3">
                  <label htmlFor="user-password" className="form-label">Repetir Senha</label>
                  <input type="password" className="form-control" id="user-password" />
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-light">Criar novo usuário</button>
                </div>
                <div >
                  <Link className="pr-3" href="/authentication/login">
                    Já tem acesso? Entrar
                  </Link>
                </div>     
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }