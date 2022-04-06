import React from 'react';

function Button({click, nome}) {
    return (  
        <div>
            <button onClick={click}>{nome}</button>
        </div>
    );
}

export default Button;