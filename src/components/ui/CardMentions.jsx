import "../../styles/components/CardMentions.css";

function CardMentions({ title, text, articles = [], cardId }) {
  return (
    <div className="card-mentions">
      {title && <h2 className="card-mentions-title">{title}</h2>}
      {text && <p className="card-mentions-text">{text}</p>}
      {articles.length > 0 && (
        <div className="accordion" id={`accordion-${cardId}`}>
          {articles.map((article, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${cardId}-${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse-${cardId}-${index}`}
                >
                  {article.title}
                </button>
              </h2>
              <div
                id={`collapse-${cardId}-${index}`}
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">{article.content}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CardMentions;
