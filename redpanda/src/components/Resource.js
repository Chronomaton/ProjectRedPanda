import React from 'react';
import ResourceModel from '../models/Resource'
import ResourceList from '../models/ResourceList.json'
import Button from '@material-ui/core/Button';



class Resource extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: [],
    
    }
  }

  componentDidMount() {
    let resources = []

    Object.keys(ResourceList).forEach((key) => {
      let currResource = new ResourceModel(key, ResourceList[key].cost, ResourceList[key].difficulty);
      if(this.props.gatherLevel >= currResource.difficulty) {
        resources.push(currResource)
      };
    })
    this.setState({resources: resources})
  }

  render() {
    return(
      <div>
        {this.state.resources.map((item, index) => {
          return(
            <div key={item.name + "-mining-" + index}>
              <li>{item.name}</li>
              <li>Value: {item.cost}</li>
              <li>difficulty: {item.difficulty}</li>
              <Button onClick={() => this.props.addToInventory(item)}> Mine </Button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Resource;