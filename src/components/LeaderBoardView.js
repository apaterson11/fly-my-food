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
                        <tr className="title"><h3>Scottish City Average -</h3></tr>
                        
                            {       
                                ScottishCities.map((user, rank) => {
                                    return (
                                    
                                        <tr >
                                            
                                            
                                            <td><b>{rank+1}.{user.name}</b></td>
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
                        <tr className="title"><h3>UK City Average -</h3></tr>
                            {       
                                UkCities.map((user, rank) => {
                                    return (

                                        
                                        
                                        <tr >
                                            
                                            
                                            <td><b>{rank+1}.{user.name}</b></td>
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



    
    

    



    
 
