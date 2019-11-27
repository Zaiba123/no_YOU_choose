import React, { Component } from 'react'

function Randomizer() {

    const min = 1;
    const max = 20;
    return Math.floor(Math.random() * (max - min + 1) + min)

    //console.log(Math.floor(Math.random() * (max - min + 1) + min))

}


export default Randomizer;