import React from "react";

export default function History({catFacts}) {
    return catFacts.map(catFact => <p>{catFact.fact}</p>)
}