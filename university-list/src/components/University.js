import React, {useState,useEffect} from "react";

const University = ({uni}) => {
    const {id,name,desc,img} = uni;

    return (
        <section>
            <h2>{name}</h2>
            <img src={img} alt={name} />
            <p>{desc}</p>
        </section>
    )
}

export default University