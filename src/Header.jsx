import React from 'react';

export function Header() {
  const index_title = "To Do List";
  return (
    <section className="title-section">
      <div className="word">
        {index_title.split('').map((char, index) => (
          <span key={index} className="char">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </section>
  );
}
