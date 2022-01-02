import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({ packages }) => {
  console.log(packages);
  return (
    <>
      {packages.map((packages) => (
        <li className="cards__item">
          <a
            className="cards_item_link"
            href={packages.page_url}
            target="_blank"
          >
            <figure
              className="cards_item_pic-wrap"
              data-category={packages.label}
            >
              <img
                className="cards_item_img"
                alt="Travel"
                src={packages.img_url}
              />
            </figure>
            <div className="cards_item_info">
              <h6 className="cards_item_text">{packages.title}</h6>
              <h5 className="cards_item_text">{packages.duration}</h5>
              <h5 className="cards_item_text">{packages.organizer}</h5>
              <h5 className="cards_item_text">{packages.price}</h5>
            </div>
          </a>
        </li>
      ))}
    </>
  );
};

export default CardItem;
