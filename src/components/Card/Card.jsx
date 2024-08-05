import './style.css';

export default function Card(props) {
    return (
        <div className="container-card">
            <p>{props.title}</p>
            <img src={props.imgCard} alt={props.title} />
        </div>
    );
}