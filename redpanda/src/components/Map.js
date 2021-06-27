import React from 'react';
import '../styling/Map.css';
import LeftColumn from '../sections/LeftColumn';

class Map extends React.Component {
    render() {
        return (
            <div className='map'>
                <LeftColumn>
                    {/* <h2>Test sidebar</h2> */}
                </LeftColumn>
                {/* <h2>Outside of left sidebar</h2> */}
            </div>
        );
    }
}

export default Map;