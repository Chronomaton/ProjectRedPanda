import React from 'react'

class Inventory extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      resources: this.props.inventory.resources
    }
  }

  renderElement() {
    const resources = Object.assign({}, this.state.resources)
    let resourceList = []
    if(Object.keys(resources).length > 0) {
      Object.keys(resources).forEach((item, index) => {
        resourceList.push(<div key={item + "-inventory-" + index}>{item} : {resources[item].quantity}</div>)
      });
    }
    return resourceList
  }

  componentDidMount() {
    
  }

  render() {
    return(
      <div>
          {this.renderElement()}
      </div>
    )
  }
}


export default Inventory;