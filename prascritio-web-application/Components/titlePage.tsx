export default function TitlePage(props: { title: String }) {
    return (
        <nav className="navbar bg-secondary border rounded-end">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1 text-white">{props.title}</span>
            </div>
        </nav>
    )
}