import React from "react";

export default function Pagination(props) {
    const previous = <button disabled = {props.pageNum - 1 < 0} onClick = {e => {
        props.setPageNum(props.pageNum - 1);
    }}>previous</button>;

    const next = <button disabled = {10 * (props.pageNum + 1) >= props.catFacts.length - 1} onClick = {e => {
        props.setPageNum(props.pageNum + 1);
    }}>next</button>;
    
    return [previous, next];
}