import React, {Component} from 'react'
import {getScore} from "../components/MapView"

export default function LeaderBoardView(props) {

            //Dictionary stores the different player and scores
            // finalScore: MapView.getScore(),
        var ScottishCities = [
                    {
                        name:  'Inverness',
                    },
                    {
                        name:  'Edingburgh',
                    
                    },
                    {
                        name:  'Glasgow',
                    
                    },
                    {
                        name:  'Dundee',

                    
                    },
                    {
                        name:  'Aberdeen',
   
                    
                    },
            ]
            
            
        


        var UkCities = [
            {
                name:  'Manchester',
            },
            {
                name:  'Cornwall',
            
            },
            {
                name:  'Warreck',
            
            },
            {
                name:  'Inverness',
            
            },
            {
                name:  'Brighton',

            
            },

    ]
            
            
            
            return(
                <div className = "Block">
                    <table className="Score Table">
                        <tbody className = "Scottish">
                            {       
                                ScottishCities.map((user, rank) => {
                                    return (

                                        <tr >
                                            <td>{rank+1}</td>
                                            <td>{user.name}</td>
                                        </tr>

                                    )
                                })
    
                            }
                            
                        </tbody>
                        <tbody className = "UK">
                            {       
                                UkCities.map((user, rank) => {
                                    return (

                                        <tr >
                                            <td>{rank+1}</td>
                                            <td>{user.name}</td>
                                        </tr>

                                    )
                                })
    
                            }
                            
                        </tbody>
                    </table>
                </div>
            )
            
        
    }



    
    

    



    
 
