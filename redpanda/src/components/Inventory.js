import React from 'react'

class Inventory extends React.Component {
  renderElement() {
    const resources = Object.assign({}, this.props.inventory.resources)
    let resourceList = []
    if(Object.keys(resources).length > 0) {
      Object.keys(resources).forEach((item, index) => {
        resourceList.push(<div key={item + "-inventory-" + index}>{item} : {resources[item].quantity}</div>)
      });
    }
    return resourceList
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