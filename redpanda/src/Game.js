import Header from './sections/Header';
import React from 'react';
//import Fleet from './components/Fleet';
import Resource from "./components/Resource"
import Inventory from "./components/Inventory"
import "./Game.css"


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
            let itemObject = Object.defineProperty({}, item.name, {
                enumerable:  true,
                value: {
                    cost: item.cost,
                    quantity: state.inventory.resources[item.name] ? state.inventory.resources[item.name].quantity + 1 : 1
                },
            })

            let newState = {
                inventory: {
                    resources: itemObject
                }
            }
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
                <div className="column-flex">
                    <Header />
                    <h2>Planet Name</h2>
                    <span className="temp-planet"></span>
                    {/* <Fleet/> */}
                    <div className="lower-ribbon-flex">
                        <Resource gatherLevel={this.state.stats.gatherLevel} addToInventory={this.addToInventory}/>
                        <Inventory inventory={this.state.inventory}/>
                    </div>
                </div>
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
