import './ResultCard.css';

type Props = {
    title: string;
    description: string;
}

const ResultCard = ({ title, description }: Props) => {

    return (
        <div className="result-container">
            <h6 className="result-title">{title}</h6>
            <p className="result-description">{description}</p>
        </div>
    );
}

export default ResultCard;