import React from 'react'
import './index.css'

const LogicGate = (props) => {
  const { logicGate, selectLogicGate } = props
  return (
    <div className="divLogicGate" onClick={() => selectLogicGate(logicGate.id)}>
      <div className="divLogicGateName">${logicGate.name}</div>
    </div>
  )
}

export default class LogicGates extends React.Component {
  render() {
    const { logicGates, selectLogicGate } = this.props
    return (
      <div id="divLogicGates" className="divLogicGates">
        {logicGates.map(gate => (<LogicGate logicGate={gate} key={gate.id} selectLogicGate={selectLogicGate}/>))}
      </div>
    )
  }
}
