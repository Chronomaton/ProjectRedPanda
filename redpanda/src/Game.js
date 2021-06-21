import Header from './sections/Header';
import React from 'react';
import Fleet from './components/Fleet';
import Resource from "./components/Resource"
import Inventory from "./components/Inventory"


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
                <Header />
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
