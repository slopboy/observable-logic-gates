import React from 'react'
import './index.css'
import LogicGateDiagram from '../LogicGateDiagram'
import LogicGateTruthTable from '../LogicGateTruthTable'

export default class LogicGateDisplay extends React.Component {
  render() {
    const { logicGate } = this.props

    if (!logicGate) {
      return (<div id="divLogicGateDisplay" className="divLogicGateDisplay"/>)
    }

    const { displayDetails, truthTable } = logicGate

    return (
      <div id="divLogicGateDisplay" className="divLogicGateDisplay">
        <LogicGateDiagram logicGate={logicGate}/>

        <div id="divSelectedLogicGateInformation" className="divSelectedLogicGateInformation">
          <div id="divSelectedLogicGateDisplayName" className="divSelectedLogicGateDisplayName">
            {displayDetails.displayName}
          </div>
          <div id="divSelectedLogicGateFunction" className="divSelectedLogicGateFunction">
            {displayDetails.displayFunction}
          </div>
          <div id="divSelectedLogicGateDescription" className="divSelectedLogicGateDescription">
            {displayDetails.description}
          </div>
        </div>

        <div id="divSelectedLogicGateTruthTable" className="divSelectedLogicGateTruthTable">
          {truthTable &&
          <LogicGateTruthTable truthTable={truthTable} />
          }
        </div>
      </div>
    )
  }
}
