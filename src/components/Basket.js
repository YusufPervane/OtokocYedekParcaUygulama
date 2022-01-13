import React from 'react';

export default function Basket(props){
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.18;
    const totalPrice = itemsPrice + taxPrice ;
    return (
    <aside className="block col-1">
        <h2>Sepet</h2>
        <div>{cartItems.length === 0 && <div>Sepette Bir Şey Yok</div>}</div>
        {cartItems.map((item) => (
            <div key={item.id} className="row">
                <div className="col-2">{item.name}</div>
                <div className="col-2">
                    <button onClick={() => onAdd(item)} className="add">
                        +
                    </button>
                    <button onClick={() => onRemove(item)} className="remove">
                        -
                    </button>
                </div>
                <div className="col-2 text-right">
                    {item.qty} x ${item.price}
                </div>
            </div>
        ))}
        {cartItems.length !== 0 &&(
            <>
                <hr></hr>
                <div className="row">
                    <div className= "col-2">Ürünlerin Tutarı</div>
                    <div className="col-1 text-right">${itemsPrice}</div>
                </div>
                <div className="row">
                    <div className= "col-2">KDV</div>
                    <div className="col-1 text-right">${taxPrice}</div>
                </div>
                
                <div className="row">
                    <div className= "col-2"><strong>Toplam Tutar</strong></div>
                    <div className="col-1 text-right"><strong>${totalPrice}</strong></div>
                </div>
            
            
            </>
        )}
    </aside>
    );
}