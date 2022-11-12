import React from "react";

export default function History(props) {
    console.log("here");
    const ret = [];
    for (let i = props.pageNum * 10; i < (props.pageNum + 1) * 10 && i < props.catFacts.length; i++) {
        ret[i] = <p 
        onClick={e => {
            const copy = [...props.catFacts];
            copy[i].isFavorite = !copy[i].isFavorite;
            props.setCatFacts(copy);}}
        style={{background: props.catFacts[i].isFavorite ? 'yellow' : 'white'}}>
        {props.catFacts[i].fact}</p>;
    }
    return ret;
}