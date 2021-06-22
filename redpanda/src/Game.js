import Header from './sections/Header';
import React from 'react';
//import Fleet from './components/Fleet';
import Resource from "./components/Resource"
import Inventory from "./components/Inventory"
import "./Game.css"
import { ButtonGroup, Button } from '@material-ui/core';

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            credits: 0,
            resources: {},
            gatherLevel: 8,
            getherExp: 0,
        }

        this.addToInventory = this.addToInventory.bind(this)
    }

    addToInventory(item) {
        this.setState((state) => {
            let newState = state.resources

            newState[item.name] = item
            newState[item.name].amount += 1
            return newState
        })
    }
    
    addGatherExp(exp) {
        this.setState((state) => {
            return {}
        })
    }

    render(){
        return (
            <div className="Game">
                <Header />
                <div class="horizontal-flex">
                    <div class="column-flex" style={{flexGrow: "1"}}>
                        <Resource gatherLevel={this.state.gatherLevel} addToInventory={this.addToInventory}/>
                        <Inventory resources={this.state.resources}/>
                    </div>
                    <div class="column-flex" style={{flexGrow: "3"}}>
                        
                        <h2>Planet Name</h2>
                        <span class="temp-planet"></span>
                        {/* <Fleet/> */}
                    </div>
                </div>
            </div>
        );
    }
}

Game.defaultProps = {
    stats: {
        gatherLevel: 16,
        gatherExp: 0,
    }
}

export default Game;
