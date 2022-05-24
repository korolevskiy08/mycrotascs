import React from "react";

type NewComponentsType = {
    topCars: Array<TopCarsType>
}

type TopCarsType = {
    manufacturer: string,
    model: string
}

export const NewComponents = (props: NewComponentsType) => {
    return (
        <div>
            {props.topCars.map((el, index) => {
                return (
                    <table>
                        <tr key={index}>
                            <td>{el.manufacturer}</td>
                            <td>{el.model}</td>
                        </tr>
                    </table>
                )
            })}
        </div>
    )
}