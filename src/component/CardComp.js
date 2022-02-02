import React from 'react';
import '../styles/CardComp.css'


class CardComp extends React.Component {
  
 render(){
    const {text,header,img,toStyle} = this.props

    return (
        <article className={`Card-Stat ${toStyle}`}>
            <aside className='Card-Stat-img'>
                <img src={img} alt={header} />
            </aside>
            <h4 className='Card-stat-text'>
                {header}
            </h4>
            <p className='Card-stat-desc'>
            {text}   
            </p>
        </article>
          );
 }
}


export default CardComp;
