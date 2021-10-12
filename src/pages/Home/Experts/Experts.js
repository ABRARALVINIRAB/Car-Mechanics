import React from 'react';
import mechanic1 from "../../../images/mechanics/mechanic-1.jpg"
import mechanic2 from "../../../images/mechanics/mechanic-2.jpg"
import mechanic3 from "../../../images/mechanics/mechanic-3.jpg"
import mechanic4 from "../../../images/mechanics/mechanic-4.jpg"
import mechanic5 from "../../../images/mechanics/mechanic-5.jpg"
import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        {
            img: mechanic1,
            name: 'Andrew Smith',
            expertize: '-Engine Expert-'
        },
        {
            img: mechanic2,
            name: 'John Anderson',
            expertize: '-Polish Expert-'
        },
        {
            img: mechanic3,
            name: 'Zakaria Smith',
            expertize: '-Coloring Expert-'
        },
        {
            img: mechanic4,
            name: 'Sakib Anderson',
            expertize: '-Alrounder Expert-'
        },
    ]
    return (
        <div className="container">
            <h1>Our experts</h1>
            <div className="row">
                {
                    experts.map(expert => <Expert expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;