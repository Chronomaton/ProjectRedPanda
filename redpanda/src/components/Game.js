import React from 'react';
import Fleet from './Fleet';
import Resource from "./Resource"
import Inventory from "./Inventory"


class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inventory: {
                credits: 0,
                resources: {}
            },
            stats: {
                gatherLevel: 1,
                getherExp: 0,
            }
        }

        this.addToInventory = this.addToInventory.bind(this)
    }

    addToInventory(item) {
        this.setState((state) => {
            return {resources: state.inventory.resources[item.name] = {
                value: item.value,
                quantity: state.inventory.resources[item.name] ? state.inventory.resources[item.name].quantity + 1 : 1
            }}
        })
    }

    render(){
        return (
            <div className="Game">
                <h2>If you see this, you are on GAME page</h2>
                <Fleet/>
                <Resource gatherLevel={this.state.stats.gatherLevel} addToInventory={this.addToInventory}/>
                <Inventory inventory={this.state.inventory}/>
            </div>
        );
    }
}

Game.defaultProps = {
    stats: {
        gatherLevel: 1,
        gatherExp: 0,
    }
}

export default Game;
