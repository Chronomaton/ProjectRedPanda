import React from 'react'

const cardTitleStyle = {
  color: '#000',
  background: '#C19F6D',
  fontSize: '24px',
  fontWeight: '600',
  padding: '4px 40px',
  borderRadius: '8px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  fontFamily: 'Raleway , sans-serif',
  textTransform: 'capitalize',
}

const cardContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '1em',

}

const cardStatsStyle = {
  position: 'relative',
  background: '#989898',
  width: '312px',
  height: '132px',
  borderRadius: '6px',
}

const loaderFlowStyle = {
  position: 'absolute',
  background: '#FFDC23',
  bottom: '0px',
  width: '312px',
  borderRadius: '6px',
  zIndex: '1',
}

const statBackgroundStyle = {
  position: 'absolute',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  margin: 'auto',
  left: '0',
  right: '0',

  background: '#313131',
  width: '80%',
  height: '100%',
  zIndex: '2',
}


const statPanelStyle = {
  height: '10px',
  width: '100%',
  bottom: '0px',
}

const statTextStyle = {
  color: '#ffffff',
  marginTop: '7px',
  fontFamily: 'Open Sans',

}

const cardMiningButtonStyle = {
  color: '#424242',
  fontWeight: '700',
  fontFamily: 'Raleway , sans-serif',
  fontSize: '18px',
  width: '272px',
  height: '50px',
  borderRadius: '12px',
  border: 'none',
  margin: '20px 0px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  cursor: 'pointer'
}

const imgStyle = {
  width: '140px',
  marginBottom: '-20px'
}

class ResourceCard extends React.PureComponent {

  constructor(props){
    super(props)
    this.state = {
      mining: false,
      buttonText: "Start Mining",
      mineProgress: 0
    }

    this.toggleMining = this.toggleMining.bind(this)
    this.mine = this.mine.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.mining === false) {
      this.mine()
    }
  }

  toggleMining() {
    this.setState((state) => {
      console.log('mining')
      return({
        mining: !state.mining,
        buttonText: state.mining ? "Start Mining" : "Stop Mining"
      })
    })
  }

  mine() {
    setTimeout(() => {
      if(this.state.mining) {
        this.setState((state) => {
          if (state.mineProgress >= 1000) {
            this.props.addResource()
            return({
              mineProgress: 0
            })
          } else {
            return({
              mineProgress: state.mineProgress + 10
            })
          }

        })
        this.mine()
      }
    }, 10)
  }

  render() {
    const statBorder1 = {
      background: '#F4D979',
      ...statPanelStyle
    }
    const statBorder2 = {
      background: '#EC7D4E',
      ...statPanelStyle
    }
    const statBorder3 = {
      background: '#EC4EDC',
      ...statPanelStyle
    }

    const miningButtonOn = {
        background: '#EC4E4E',
      ...cardMiningButtonStyle
    }
    const miningButtonOff = {
      background: '#5AEC4E',
      ...cardMiningButtonStyle
    }

    const loaderFlowState = {
      height: (this.state.mineProgress / 10) + "%",
      ...loaderFlowStyle
    }

    return (
      <div className="card" style={cardContainerStyle}>
        <div className="card-title" style={cardTitleStyle}>
          {this.props.itemName}
        </div>

        <img className="card-image" src={this.props.imageSource} style={imgStyle} alt="ContentImage" />

        <div className="card-stats" style={cardStatsStyle}>
          <div className="loader-flow" style={loaderFlowState} />
          <div className="stat-background" style={statBackgroundStyle}>

            <div className="stat-text" style={statTextStyle}> Value: {this.props.value} </div>
            <div className="stat-panel" style={statBorder1} />

            <div className="stat-text" style={statTextStyle}> Difficulty: {this.props.difficulty} </div>
            <div className="stat-panel" style={statBorder2} />

            <div className="stat-text" style={statTextStyle}> Experience: {this.props.exp} </div>
            <div className="stat-panel" style={statBorder3} />
          </div>
        </div>

        <button className="card-mining-button" style={this.state.mining ? miningButtonOn : miningButtonOff}
        onClick={() => this.toggleMining()}> {this.state.buttonText} </button>
      </div>
    )
  }
}

export default ResourceCard