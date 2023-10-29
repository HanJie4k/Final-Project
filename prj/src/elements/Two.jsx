import React from 'react'
import Chat from './Chat.js'

function Two() {
    return (
        <>
            <body>
                <main className='allChat'>
                    <h1 className='mainHeader'>Chat</h1>
                    <h4 className='p'>Last messages:</h4>
                    <div className='chat'>
                        <Chat />
                    </div>
                </main>
            </body>
        </>
    );
}
export default Two