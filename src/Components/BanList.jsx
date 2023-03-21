

const BanList = ({banAttributes, banHeights, banWeights, banLifeSpans, onRemove}) => {
  
    return (
        <div className="banlist" id="hello">
            <h2>Ban List</h2>
            <p>Select an attribute in your listing to ban it</p>
            {banAttributes && banAttributes.length > 0 ? (
                    banAttributes.map((att, index) => (

                        <button className="attribute" key={index} onClick={onRemove}  >{att}</button>
                            
                    )
                    
                    )
                ) : (
                    <div>
                    </div>
                )}

            {banHeights && banHeights.length > 0 ? (
                    banHeights.map((att, index) => (

                        <button className="attribute" key={index} onClick={onRemove}  >{att}</button>
                            
                    )
                    
                    )
                ) : (
                    <div>
                    </div>
                )}

            {banWeights && banWeights.length > 0 ? (
                    banWeights.map((att, index) => (

                        <button className="attribute" key={index} onClick={onRemove}  >{att}</button>
                            
                    )
                    
                    )
                ) : (
                    <div>
                    </div>
                )}

            {banLifeSpans && banLifeSpans.length > 0 ? (
                    banLifeSpans.map((att, index) => (

                        <button className="attribute" key={index} onClick={onRemove}  >{att}</button>
                            
                    )
                    
                    )
                ) : (
                    <div>
                    </div>
                )}
            
        </div>
    )
}

export default BanList;