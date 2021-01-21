import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import {APIKEY, BASEURL} from './constants'

export default function Header(props){
    const {nasaData} = props;
    const [title, setTitle] = useState('')

    return (
        <div className='TitleDiv'>
            <h1>{nasaData.title</h1>
        </div>


    )





}