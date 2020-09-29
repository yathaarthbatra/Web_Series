import React from 'react';
import App from './App';
function Card(props) {
    return (
      <>
        <div className="cards">
          <div className="card">
            <img src={props.img_src} alt="Picture"></img>
            <div className="card_info">
                        <span className="card_category">{props.card_category}</span>
                        <h3 className="card_title">{props.card_title}</h3>
              <a href={props.link} target="_blank">
                <button>Watch Now</button>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
  export default Card;