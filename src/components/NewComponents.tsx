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
            <table>
                {props.topCars.map((el, index) => {
                    return (
                        <tbody key={index}>
                        <tr>
                            <td>{el.manufacturer}</td>
                            <td>{el.model}</td>
                        </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    )
}