import React from 'react';
import ResourceModel from '../models/Resource'
import ResourceList from '../models/ResourceList.json'
import ResourceCard from './ResourceCard'
import '../styling/Resource.css'
// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import { CardActions } from '@material-ui/core';
// import { Typography } from '@material-ui/core';


class Resource extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      resources: [],
    
    }
  }

  componentDidMount() {
    let resources = []

    Object.keys(ResourceList).forEach((key) => {
      const resource = ResourceList[key]
      let currResource = new ResourceModel(key, resource.cost, resource.difficulty, resource.image);
      if(this.props.gatherLevel >= currResource.difficulty) {

        resources.push(currResource)
      };
    })
    this.setState({resources: resources})
  }

  render() {
    return(
      <div className="resource-list">
        {this.state.resources.map((item, index) => {
          return(
            <ResourceCard key={item.name + "-mining-" + index}
            imageSource={'/images/' + item.image} 
            itemName={item.name} exp={2}
            value={item.cost} difficulty={item.difficulty} addResource={() => this.props.addToInventory(item)}/>
          )
        })}
      </div>
    )
  }
}

export default Resource;