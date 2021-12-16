import React from "react";
import people from "./people";

function GenTable() {
    return peoples.map(people)=>{
        const { id,name: rname } = people;
        return(
            <tr>
                <td>{id}</td>
                <td>{rname}</td>
            </tr>
        );
    });
}

function GenTable() {
    const students = [
        { id: 1, name: "Nueng" },
        { id: 2, name: "Ma" },
    ];

    return (
    <>
        <table>
            <tbody>{GenTable(studens)}</tbody>
        </table>
    </>
    )

}

    
