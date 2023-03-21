
const APIForm = ({imageURL, name, weight, height, life_span, breedGroup, onSubmit, onBreed, onHeight, onWeight, onLifeSpan}) => {

    return (
        <dev className="container">
           
            <div className='whole-page'>
                <h2>{name}</h2>
                <div className="buttons">
                    <button className="attribute" onClick={onBreed}>{breedGroup}</button>
                    <button className="attribute" onClick={onWeight}>{weight} lb</button>
                    <button className="attribute" onClick={onHeight}>{height} inch</button>
                    <button className="attribute" onClick={onLifeSpan}>{life_span}</button>
                </div>
                
                <img src={imageURL} alt="" />
                <div>
                    <button type="submit" className="discoverButton" onClick={onSubmit}>
                            Discover!
                    </button>
                </div>
            </div>
        </dev>
    );
};

export default APIForm;