import React, {useContext, useState} from "react";
import './MainRightTopCard.css';
import {ThemeContext} from "../App"; // Ensure this is imported

function MainRightTopCard() {
  const [showMore, setShowMore] = useState(false);

  const handleViewMore = () => {
    setShowMore(!showMore);
  };

  const {theme} = useContext(ThemeContext)

  return (
    <div className={`topCard ${theme}`}>
      <div className="topCard_name">
        <h2>Statistics</h2>
        <a href="#" onClick={handleViewMore}>
          {showMore ? "View Less" : "View More"}
        </a>
      </div>

      <div className="earning fromTop">
        <p>
          Projects Uploaded <span>185</span>
        </p>

        <p>
          Projects Canceled <span>25</span>
        </p>
        <p>
          Profile Views <span>70</span>
        </p>

        <p>
          Total Exp earned <span>300 exp</span>
        </p>

        {showMore && (
          <div className="extraStats">
            <p>
              Projects Completed <span>160</span>
            </p>
            <p>
              Projects In Progress <span>20</span>
            </p>
            <p>
              Average Project Rating <span>4.5</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainRightTopCard;

