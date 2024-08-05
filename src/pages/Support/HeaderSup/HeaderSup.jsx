import './style.css';
import { Link } from 'react-router-dom';
import { FiPhoneCall, FiUser } from 'react-icons/fi';
import { MdOutlineHomeRepairService } from "react-icons/md";
import { ImExit } from "react-icons/im";

export default function HeaderSup() {
    return (
        <div>
            <div className="sidebar">
                <div></div>
                <Link to="/chamados">
                    <FiPhoneCall color="#fff" size={24} />
                    Chamados
                </Link>
                <Link to="/setor">
                    <MdOutlineHomeRepairService color="#fff" size={24} />
                    Setor
                </Link>
                <Link to="/perfil">
                    <FiUser color="#fff" size={24} />
                    Perfil
                </Link>
                <Link to="/home">
                    <ImExit color="#fff" size={24} />
                    Sair
                </Link>
            </div>
        </div>
    );
}