import './style.css';
import Card from '../Card/Card';
import imgAgenda from '../../assets/agenda.png';
import imgAlmox from '../../assets/atacado.png';
import imgRh from '../../assets/recursos-humanos.png';
import imgTransp from '../../assets/transporte.png';
import imgSup from '../../assets/suporte-tecnico.png';
import { Link } from 'react-router-dom';

export default function MainPanel() {
    return (

        <div className="section-container-card">
            <Link to="/agenda">
                <Card title="AGENDA"  imgCard={imgAgenda} />
            </Link>
            <Link to="/aloxarife">
                <Card title="ALMOXARIFADO" imgCard={imgAlmox} />
            </Link>
            <Link to="/gestaorh">
                <Card title="GESTÃO RH" imgCard={imgRh} />
            </Link>
            <Link to="/transporte">
                <Card title="TRANSPORTE" imgCard={imgTransp} />
            </Link>
            <Link to="/support">
                <Card title="SUPORTE" imgCard={imgSup} />
            </Link>
        </div>

    );
}