import React from 'react';
import { Link } from 'react-router-dom';

const CardItem=({packages})=> {
    console.log(packages);
  return (
    <> 
    {packages.map((packages) => (
      <li className='cards__item'>
      
        <Link className='cards__item__link' to="./crawler">
          <figure className='cards__item__pic-wrap' data-category={packages.label}>
            <img
              className='cards__item__img'
              alt='Travel'
              src={packages.img_url}
            />
          </figure>
          <div className='cards__item__info'>
            <h6 className="cards__item__text">{packages.title}</h6>
            <h5 className='cards__item__text'>{packages.duration}</h5>
            <h5 className='cards__item__text'>{packages.location}</h5>
            <h5 className='cards__item__text'>{packages.price}</h5>
            <a URL={packages.page_url}>Link</a>
          </div>
        </Link>
      </li>
    ))}
    </>
  );
}

export default CardItem;
