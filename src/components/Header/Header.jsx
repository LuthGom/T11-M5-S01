import React, { Component } from 'react';

class Header extends Component {
    render() { 
        const headerEstilo = {
            width: '100%',
            height: '100px',
            backgroundImage: 'linear-gradient(red, orange, yellow, green, blue, purple, pink, white, black)',
            color: 'white',
            fontSize: '30px',
            fontWeight: 'bold',
            display: 'flex',
            justifyContent:'center',
            alignItems: 'center'
        }
        return (
            <div>
                <header style={headerEstilo}>Esse é o Header da Atividade da T11 🦈</header>
            </div>
        );
    }
}
 
export default Header;