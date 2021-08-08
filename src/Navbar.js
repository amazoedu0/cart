import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src="https://image.flaticon.com/icons/png/512/1170/1170678.png" alt="cart-icon"/>
                    <span>Navbar</span>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default Navbar;