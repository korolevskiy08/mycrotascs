import React from "react";

type FilterType = 'All' | 'RUBLS' | 'Dollars'

type moneyType = {
    banknots: string,
    value: number,
    number: string
}
type FilterComponentsType = {
    filteredMoney: Array<moneyType>,
    callBack: (a: FilterType) => void
}

export let FilterComponent = (props: FilterComponentsType) => {
    return (
        <div>

            <ul>
                {props.filteredMoney.map((el, index) => {
                    return (
                        <li key={index}>
                            <span>{el.banknots}</span>
                            <span>{el.value}</span>
                            <span>{el.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => props.callBack('All')}>All</button>
            <button onClick={() => props.callBack('RUBLS')}>Rubles</button>
            <button onClick={() => props.callBack('Dollars')}>Dollars</button>
        </div>
    )
}