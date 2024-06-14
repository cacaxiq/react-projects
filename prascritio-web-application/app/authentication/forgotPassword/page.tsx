import Link from 'next/link'

export default function ForgotPassword() {
    return (
        <div className="container mx-auto">
            <div className="d-flex flex-column  justify-content-center align-items-center vh-100">
                <div className="card w-50 " >
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="user-login" className="form-label">E-mail</label>
                                <input type="email" className="form-control" id="user-login" aria-describedby="emailHelp" />
                            </div>

                            <div className="mb-3">
                                <button type="submit" className="btn btn-light">Recuperar acesso</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}