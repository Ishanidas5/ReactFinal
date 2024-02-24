import React from "react";
import { Link } from "react-router-dom";

const PracticeSection = () => {
  return (
    <div>
      <h2>Practice Section Topics</h2>
      <ul>
        <p>
          <li>
            <Link to="/pracsec/aptitude">Aptitude</Link>
          </li>
        </p>
        <li>
          <Link to="/pracsec/compre">Comprehension</Link>
        </li>
        {/* Add more topics with their respective links */}
      </ul>
    </div>
  );
};

export default PracticeSection;
