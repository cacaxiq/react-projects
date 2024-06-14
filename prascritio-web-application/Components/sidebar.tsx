import Link from "next/link";

export default function Sidebar(props: { activePage: String }) {

    var profile = props.activePage === 'profile' ? 'nav-link active' : 'nav-link text-white';
    var medical = props.activePage === 'medical' ? 'nav-link active' : 'nav-link text-white';
    var doctors = props.activePage === 'doctors' ? 'nav-link active' : 'nav-link text-white';
    var files = props.activePage === 'files' ? 'nav-link active' : 'nav-link text-white';

    return (
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-secondary">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Prascritio</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <Link href="/profile/personalProfile" className={profile} aria-current="page">
                            <i className="bi bi-person-lines-fill"></i>
                            <span className="mx-3 d-none d-sm-inline">Profile</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/profile/medicalInformations" className={medical} aria-current="page">
                            <i className="bi bi-clipboard2-pulse-fill"></i>
                            <span className="mx-3 d-none d-sm-inline">Dados Médicos</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#" className={doctors} aria-current="page">
                            <i className="bi bi-bandaid-fill"></i>
                            <span className="mx-3 d-none d-sm-inline">Profissionais de Saúde</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#" className={files} aria-current="page">
                            <i className="bi bi-card-image"></i>
                            <span className="mx-3 d-none d-sm-inline">Files</span>
                        </Link>
                    </li>
                </ul>
                <hr />
                <div className="dropdown pb-4">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                        <span className="d-none d-sm-inline mx-1">loser</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}