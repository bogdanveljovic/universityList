import React,{useState,useEffect} from "react";
import University from "./University";

const Universities = ({universities}) =>  {

    return(
        <div>
            {universities.map((uni) => {
                return(
                    <University key={uni.id} uni = {uni} />
                )
            })}
        </div>
    )

}

export default Universities;
