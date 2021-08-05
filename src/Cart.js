import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 999,
                    initPrice:999,
                    title: 'Mobile Phone',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 180,
                    initPrice:180,
                    title: 'Gold Leaf',
                    qty: 1,
                    img: '',
                    id: 2
                },

                {
                    price: 40,
                    initPrice:40,
                    title: 'Cool Lip',
                    qty: 1,
                    img: '',
                    id: 3
                },
                {
                    price: 70,
                    initPrice:70,
                    title: 'Sting',
                    qty: 1,
                    img: '',
                    id: 4
                },

                {
                    price: 5,
                    initPrice:5,
                    title: 'Bombai Supari',
                    qty: 1,
                    img: '',
                    id: 5
                }
            ]
        }
    }

    handleIncreaseQuantity = (product) => {
        console.log('Increase quantity of Product',product);
        const {products} = this.state;
        const index =products.indexOf(product);
        if(products[index].qty===0){products[index].price= products[index].initPrice;}
        else{products[index].price=products[index].price+(products[index].price/products[index].qty);}
        products[index].qty +=1;
        this.setState({
            products: products
        })
    }

    handleDecreaseQuantity = (product) => {
        console.log('Decrease quantity of Product',product);
        const {products} = this.state;
        const index =products.indexOf(product);
        if(products[index].qty===0){products[index].price= products[index].initPrice;return;}
        products[index].price=products[index].price-(products[index].price/products[index].qty);
        products[index].qty -=1;
        this.setState({
            products: products
        })
    }

    handleDeleteItem= (id) => {
        // console.log('Delete Item',products);
        const {products} = this.state;
        const items = products.filter((item)=>item.id!==id);
        this.setState({
            products: items
        })
    }

    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    return (
                        <CartItem
                            product={product}
                            key={product.id} 
                            onIncreaseQuantity={this.handleIncreaseQuantity}
                            onDecreaseQuantity={this.handleDecreaseQuantity}
                            onDeleteItem={this.handleDeleteItem}
                        />
                    )
                })}
            </div>
        );
    }

}

export default Cart;