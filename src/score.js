import React, { useEffect, useState } from "react";
import {map} from 'lodash'
import axios from 'axios';
import './score.css';


export default function Score() {
    <h1>Voila liste des scores</h1>

    const [datas, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios ("https://animalfinderapi.herokuapp.com/score");

            setData(res.data);
            console.log(res.data) ;
        }
        fetchData();
    }, [])
 
    return (
        <div className="score">
            <React.Fragment>
                {
                    map(datas, (data) =>
                        map(data, (score) =>
                            <p>{score.username} : {score.score}</p>
                        ))
                }
            </React.Fragment>
        </div>
    )
}