import React from 'react';
import '../styling/Map.css';
import Sidebar, { Sides } from '../sections/Sidebar';

class Map extends React.Component {
    render() {
        return (
            <div className='map'>
                <Sidebar side={Sides.LEFT}>
                    <h2>Test left column</h2>
                </Sidebar>
                <div>
                    <h2>Main map stuff go here :)</h2>
                </div>
                <Sidebar side={Sides.RIGHT}>
                    <h2>Right column here if necessary</h2>
                </Sidebar>
            </div>
        );
    }
}

export default Map;