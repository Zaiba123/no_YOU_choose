import React, { Component } from 'react'

export default class randomizer extends Component {


    generateNumber = () => {
        const min = 1;
        const max = 20;
        let ran = Math.floor(Math.random() * (max - min + 1) + min);
        <h1>${ran}</h1>
        //console.log(Math.floor(Math.random() * (max - min + 1) + min))
    }

}


