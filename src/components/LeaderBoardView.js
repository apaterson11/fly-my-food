import React, {Component} from 'react'
import {getScore} from "../components/MapView"

class LeaderBoardView extends Component {
    constructor(){
        super()

        
        this.state = {
            //Dictionary stores the different player and scores
            // finalScore: MapView.getScore(),
            users:[
                {
                    name:  'John',
                    score: "20"
                
                },
                {
                    name:  'John',
                    score: "10"
                
                },
                {
                    name:  'John',
                    score: "40"
                
                },
                {
                    name:  'John',
                    score: "40"
                
                },
                {
                    name:  'John',
                    score: "30"
                
                },
                {
                    name:  'John',
                    score: "30"
                
                },
            ],
            





            
            
        }
       

        this.getRanking = this.getRanking.bind(this);



        // console.log(typeof(this.state.users));
    }



    getRanking(){
        var sortthis = this.state.users;
        for (var i in sortthis){
            console.log(sortthis[i]["score"]);
            console.log(typeof(sortthis))
        }
        console.log("score = ", this.state.finalScore)

        var sorted = sortthis.sort((a,b) => (a.score>b.score) ? 1: - 1)
        
        return sorted;

    }

    

    



    render(){
        return(
            <div className = "Block">
                <table className="Score Table">
                    <tbody>
                        {
                            this.getRanking().map((user, rank) => {
                                return (
                                    <tr >
                                        <td>{rank+1}</td>
                                        <td>{user.name}</td>
                                        <td><b>{user.score}</b></td> 
                                    </tr>
                                )
                            })

                        }
                        
                    </tbody>
                </table>
            </div>
        )
    }
} 
export default LeaderBoardView;