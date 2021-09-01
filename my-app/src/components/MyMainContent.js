import React from 'react'

function MyMainContent(props) {
    return (
        <>
        <main>
            <div class="container w-8/12 mx-auto my-20 text-white">
            {props.children}
            </div>
        </main>
        </>
    )
}


export default MyMainContent

