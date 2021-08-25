import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Row, Col } from 'antd';


function ZHistory(props) {
    const [History, SetHistory] = useState(null)

    useEffect(() => {
        Axios.get(`http://localhost:5000/accounts`)
            .then(response => {
                SetHistory(response.data.split("nl"));
                // console.log(response.data.split("nl").length, "and den some")
                // // console.log(response.data)
            })

    }, [])
    // const sortedHistory = ()=>{
    //     History.map(()=>)
    // }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Hello Admin!!!</h1>
            <p>All User Activities</p>
            <div style={{ marginLeft: "100px", marginRight: "100px" }}>
                <table>
                    <thead>
                        Log of all activities
                    </thead>
                    <tbody>


                        {
                            History === null || History === "" ?
                                (<tr> {"Nothing, no history"}</tr>)
                                :

                                History.map((content, i) => (

                                    <tr>{content}  </tr>


                                ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ZHistory
