import React, {Component} from 'react'
import {getScore} from "../components/MapView"
require("./css/LeaderBoard.css");

export default function LeaderBoardView(props) {

            //Dictionary stores the different player and scores
            // finalScore: MapView.getScore(),
        var ScottishCities = [
                    {
                        name:  'Inverness',
                    },
                    {
                        name:  'Edinburgh',
                    
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
                name:  'Warwick',
            
            },
            {
                name:  'Inverness',
            
            },
            {
                name:  'Brighton',

            
            },

    ]
            
            
            
            return(

                
               <div class="row">
                   <div class="column">
                    <table>
                        <tbody className = "Scotland">
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
                        </table>
                    </div>
                    <div class="column">
                        <table>
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
                </div>
            
            )
            
        
    }



    
    

    



    
 
