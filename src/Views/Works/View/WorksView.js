import React from 'react'

export default function WorksView() {
    return (
        <div className='works-container'>
            <h1 className='works-title'>Works</h1>
            <div className="works-grid">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (

                        <img key={index} className="works-grid-item" src={`https://picsum.photos/200/300?random=${index}`} alt="works" />

                    ))

                }
            </div>
        </div>
    )
}
