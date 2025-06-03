import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-slate-800 p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Controle de Gastos</h1>
            <nav>
                <ul className="flex gap-4">
                    <li>
                        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;