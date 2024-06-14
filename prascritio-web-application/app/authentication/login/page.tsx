'use client'

import Link from "next/link";
import { authenticate } from '@/app/lib/actions'
import { useFormState, useFormStatus } from 'react-dom'

export default function Login() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)


  return (
    <div className="container mx-auto">
      <div className="d-flex flex-column  justify-content-center align-items-center vh-100">
        <img src="https://placehold.co/200x100.png" className="img-fluid mb-5" alt="..." />
        <div className="card w-50 " >
          <div className="card-body">
            <form action={dispatch}>

              <div>{errorMessage && <p>{errorMessage}</p>}</div>
              <div className="mb-3">
                <label htmlFor="user-login" className="form-label">Usuário</label>
                <input type="email" className="form-control" id="user-login" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="user-password" className="form-label">Senha</label>
                <input type="password" className="form-control" id="user-password" />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="user-check" />
                <label className="form-check-label" htmlFor="user-check">Permanecer logado</label>
              </div>
              <div className="mb-3">
                //<Link href="/" className="btn btn-light">Entrar</Link>
                <LoginButton />
              </div>
              <div >
                <Link className="pr-3" href="/authentication/register">
                  Registrar
                </Link>
              </div>
              <div >
                <Link href="/authentication/forgotPassword">
                  Recuperar acesso
                </Link></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoginButton() {
  const { pending } = useFormStatus()

  const handleClick = (event: { preventDefault: () => void; }) => {
    if (pending) {
      event.preventDefault()
    }
  }

  return (
    <button aria-disabled={pending} type="submit" onClick={handleClick}>
      Entrar
    </button>
  )
}