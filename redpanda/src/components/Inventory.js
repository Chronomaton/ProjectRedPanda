import React from 'react'

class Inventory extends React.Component {
  renderElement() {

    let resources = this.props.resources
    let resourceList = []

    if(Object.keys(resources).length > 0) {
      Object.keys(resources).forEach((item, index) => {
        resourceList.push(<div key={item + "-inventory-" + index}>{item} : {resources[item].amount}</div>)
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