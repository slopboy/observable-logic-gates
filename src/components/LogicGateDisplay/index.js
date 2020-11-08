import React from 'react'
import './index.css'
import LogicGateDiagram from '../LogicGateDiagram'

export default class LogicGateDisplay extends React.Component {
  render() {
    const { logicGate } = this.props

    if (!logicGate) {
      return (<div id="divLogicGateDisplay" className="divLogicGateDisplay"/>)
    }

    const { displayDetails } = logicGate

    return (
      <div id="divLogicGateDisplay" className="divLogicGateDisplay">
        <div id="divSelectedLogicGateDisplayName" className="divSelectedLogicGateDisplayName">
          {displayDetails.displayName}
        </div>
        <div id="divSelectedLogicGateDiagram" className="divSelectedLogicGateDiagram">
          <LogicGateDiagram logicGate={logicGate}/>
        </div>
        <div id="divSelectedLogicGateDescription" className="divSelectedLogicGateDescription">
          {displayDetails.description}
        </div>
      </div>
    )
  }
}
