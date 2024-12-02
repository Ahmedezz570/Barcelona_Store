import React from 'react';
import './NewCollection.css';
import Item from '../Item/Item';
import New_Collections from '../Barcelona_Assets/new_collections';
const NewCollection = () => {
  return (
    <div className='newcollections'>
        <h2>NEW COLLECTIONS</h2>
        <hr />
        <div className='collections'>
        {New_Collections.map((item , i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  );
}

export default NewCollection;