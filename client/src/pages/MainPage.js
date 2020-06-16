import React from 'react'

export const MainPage = () => {

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Моя библиотека любимых песен</h1>
                <div className="card" style = {{width:'400px'}}>
                    <div className="card-image " style={{width: '400px', height:'400px'}}>
                        <img src="https://upload.wikimedia.org/wikipedia/ru/1/1b/UNO_%28%D0%BF%D0%B5%D1%81%D0%BD%D1%8F%29.jpg" />
                            <span className="card-title" style={{fontSize: '40px'}}>UNO</span>
                    </div>
                    <div className="card-content black-text">
                        <span className="card-title "style={{fontWeight: 'bold'}}>Little Big</span>

                    </div>
                </div>
                <div className="card " style = {{width:'400px'}}>
                    <div className="card-image " style={{width: '400px', height:'400px'}}>
                        <img src="https://upload.wikimedia.org/wikipedia/ru/3/33/%D0%A8%D0%B0%D0%BA%D0%B8%D1%80%D0%B0_-_Waka_Waka_%28This_Time_for_Africa%29_%282010%29_%28%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0%29.jpg" />
                        <span className="card-title" style={{fontSize: '40px', color: 'black', fontWeight: 'bold'}}>Africa</span>
                    </div>
                    <div className="card-content black-text">
                        <span className="card-title "style={{fontWeight: 'bold'}}>Shakira</span>

                    </div>
                </div>
                <div className="card" style = {{width:'400px'}}>
                    <div className="card-image " style={{width: '400px', height:'400px'}}>
                        <img src="https://note-store.ru/upload/iblock/93d/Metallica-_-Seek-and-Destroy.jpg" />
                        <span className="card-title" style={{fontSize: '40px'}}>Seek and Destroy</span>
                    </div>
                    <div className="card-content black-text">
                        <span className="card-title "style={{fontWeight: 'bold'}}>Metallica</span>

                    </div>
                </div>
            </div>
        </div>
    )
}