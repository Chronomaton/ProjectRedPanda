import Header from './sections/Header';
import MainContent from './sections/MainContent';
import React from 'react';
//import Fleet from './components/Fleet';
import Resource from "./components/Resource"
import Inventory from "./components/Inventory"
import "./styling/Game.css"

import ContentView from './models/ContentView';

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            credits: 0,
            resources: {},
            gatherLevel: 8,
            getherExp: 0,
            view: ContentView.MAP,
        }
        this.addToInventory = this.addToInventory.bind(this);
        this.changeView = this.changeView.bind(this);
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

    changeView(newView) {
        this.setState({
            view: newView
        }, 
        () => console.log(this.state.view));
    }

    render(){
        return (
            <div className="Game">
                <Header onChange={this.changeView}/>
                <MainContent view={this.state.view} />
                <div className="horizontal-flex">
                    <div className="column-flex" style={{flexGrow: "1"}}>
                        <Resource gatherLevel={this.state.gatherLevel} addToInventory={this.addToInventory}/>
                        <Inventory resources={this.state.resources}/>
                    </div>
                    <div className="column-flex" style={{flexGrow: "3"}}>
                        
                        <h2>Planet Name</h2>
                        <span className="temp-planet"></span>
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
