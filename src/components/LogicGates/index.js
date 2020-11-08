import React from 'react'
import './index.css'

const LogicGate = (props) => {
  const { logicGate, selectLogicGate, selectedLogicGateId } = props
  const className = (logicGate.id === selectedLogicGateId) ? 'divLogicGateSelected' : 'divLogicGate'
  return (
    <div className={className} onClick={() => selectLogicGate(logicGate.id)}>
      <div className="divLogicGateName">{logicGate.name}</div>
    </div>
  )
}

export default class LogicGates extends React.Component {
  render() {
    const { logicGates, selectLogicGate, selectedLogicGateId } = this.props
    return (
      <div id="divLogicGates" className="divLogicGates">
        {logicGates.map(gate => (
          <LogicGate
            key={gate.id}
            logicGate={gate}
            selectedLogicGateId={selectedLogicGateId}
            selectLogicGate={selectLogicGate}
          />
        ))}
      </div>
    )
  }
}
