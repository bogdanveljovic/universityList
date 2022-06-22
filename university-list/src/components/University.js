import React, {useState,useEffect} from "react";


const University = ({uni, deletedCard}) => {
    const [moreText, setMoreText] = useState(true);
    const {id,name,desc,img} = uni;

    return (
        <section>
            <h2>{name}</h2>
            <img src={img} alt={name} />
            <p>
                {moreText ? desc : `${desc.substring(0,152)} ` + `...`}
                <button onClick={() => {moreText ? setMoreText(false) : setMoreText(true) }} > {moreText ? "Show less" : "Show more"}</button>
            </p>
            <button onClick={() => {deletedCard (id)}}> Delete </button>
        </section>
    )
}

export default University