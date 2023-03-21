

const History = ({images, names}) => {
    return (
        <div className="image-container">
                <h2> You have seen so far!</h2>
                {images && images.length > 0 ? (
                    images.map((pic, index) => (
                        <ul className="images">
                            <li className="gallery" key={index}>   
                                <p>A {names[index]}  Dog</p>
                                <img
                                    className="gallery-screenshot"
                                    src={pic}
                                    alt="Undefined screenshot from query"
                                    width="200"
                                /> 
                            </li>   
                        </ul>
                         
                    )
                    
                    )
                ) : (
                    <div>
                    <h3>You haven't selected any picture yet!</h3>
                    </div>
                )}
            </div>
    );
};

export default History;