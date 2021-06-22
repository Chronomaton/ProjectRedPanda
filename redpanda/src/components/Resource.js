import React from 'react';
import ResourceModel from '../models/Resource'
import ResourceList from '../models/ResourceList.json'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardActions } from '@material-ui/core';
import { Typography } from '@material-ui/core';


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
      console.log("difficulty : " + currResource.difficulty)
      if(this.props.gatherLevel >= currResource.difficulty) {
        console.log("adding resource : " + currResource.name)

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
            <Card key={item.name + "-mining-" + index}>
              <CardContent>
                <Typography variant="h5" component="h2">{item.name}</Typography>
                <Typography variant="body2" component="p">value: {item.value}</Typography>
                <Typography variant="body2" component="p">difficulty: {item.difficulty}</Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => this.props.addToInventory(item)}>Send Expedition</Button>
              </CardActions>
            </Card>
          )
        })}
      </div>
    )
  }
}

export default Resource;