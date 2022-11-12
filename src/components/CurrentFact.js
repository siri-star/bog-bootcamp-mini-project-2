import React from "react";

export default function CurrentFact(props) {

    async function getCatFact() {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        props.setCatFacts([{fact: data.fact, isFavorite: false}, ...props.catFacts]);
    }
    const fact = <h1>{props.catFacts[0].fact}</h1>
    const button = <button onClick={e => getCatFact()}>new cat fact :D</button>

    return [fact, button];
}