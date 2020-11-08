import React from 'react'
import './index.css'

const InputPin = (props) => {
  const { inputPin } = props
  return (
    <table className=".no-padding-margin" width="100%">
      <tbody>
        <tr>
          <td className="inputPinDisplayName">{inputPin.displayName}</td>
          <td className="inputPinLine">
            <hr className="pinOff"/>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

const OutputPin = (props) => {
  const { outputPin } = props
  return (
    <table className=".no-padding-margin" width="100%">
      <tbody>
        <tr>
          <td className="outputPinLine">
            <hr className="pinOff"/>
          </td>
          <td className="outputPinDisplayName">{outputPin.displayName}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default class LogicGateDiagram extends React.Component {
  render() {
    const { logicGate } = this.props

    if (!logicGate) {
      return
    }

    const inputPins = logicGate.inputPins.map(inputPin => (<InputPin inputPin={inputPin} key={inputPin.id}/>))
    const outputPins = logicGate.outputPins.map(outputPin => (<OutputPin outputPin={outputPin} key={outputPin.id}/>))

    return (
      <table id="logicGateDiagram" className="tblLogicGateDiagram">
        <tbody>
          <tr>
            <td className="logicGateDiagramInputs no-padding-margin" width="50%">{inputPins}</td>
            <td className="logicGateDiagramImage no-padding-margin">
              <div className="chipImage" style={{ backgroundColor: logicGate.displayDetails.colour }} />
            </td>
            <td className="logicGateDiagramOutputs no-padding-margin" width="50%">{outputPins}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
