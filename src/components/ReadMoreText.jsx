import { useState } from "react";

export default function ReadMoreText({ text, maxLength }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text) {
    return null;
  }

  const textParagraphs = text.split("\n\n").filter((p) => p.trim());
  console.log(textParagraphs);

  const isLong = text.length > maxLength;

  return (
    <>
      <div className="position-relative">
        <div className={`biography ${isExpanded ? "expanded" : ""}`}>
          {textParagraphs.map((paragraph, index) => (
            <p key={index} className="fw-light">
              {paragraph}
            </p>
          ))}
        </div>

        {!isExpanded && isLong && <div className="readmore-fade rounded" />}

        {isLong && (
          <button
            className="btn btn-link p-0 text-decoration-none position-absolute fw-bold bottom-0 end-0 mb-0"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Daha Az Göster" : "Daha Fazla Oku"}
          </button>
        )}
      </div>
    </>
  );
}
