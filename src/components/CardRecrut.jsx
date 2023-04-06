import React from 'react';
import "../stylerec.css"

function CardRecrut(props) {
    return (
        <div class="a">
        <a href="#">{props.text}</a>
        <p>{props.desc}</p>
    </div>
    );
}

export default CardRecrut ;
