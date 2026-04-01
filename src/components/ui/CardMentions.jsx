import { useState } from "react";
import "../../styles/components/CardMentions.css";

function CardMentions({ title, text, articles = [], cardId }) {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex(prev => (prev === index ? null : index));
  }

  return (
    <div className="card-mentions">
      {title && <h2 className="card-mentions-title">{title}</h2>}
      {text && <p className="card-mentions-text">{text}</p>}
      {articles.length > 0 && (
        <div className="accordion" id={`accordion-${cardId}`}>
          {articles.map((article, index) => {
            const isOpen = openIndex === index;
            return (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button${isOpen ? "" : " collapsed"}`}
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggle(index)}
                  >
                    {article.title}
                  </button>
                </h2>
                <div className={`accordion-collapse collapse${isOpen ? " show" : ""}`}>
                  <div className="accordion-body">{article.content}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CardMentions;
