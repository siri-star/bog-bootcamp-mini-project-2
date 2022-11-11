import React from "react";

export default function History(props) {
    const ret = [];
    for (let i = props.pageNum * 10 + 1; i < (props.pageNum + 1) * 10 && i < props.catFacts.length; i++) {
        ret[i] = <p>{props.catFacts[i].fact}</p>;
    }
    return ret;
}