import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css';
import { LOGIC_GATES } from './data/logicGateDefinitions'
import LogicGates from './components/LogicGates'
import Results from './components/Results'
import LogicGateDisplay from './components/LogicGateDisplay'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLogicGate: null,
      result: false,
      activeSubscriptions: [],
      logicGates: LOGIC_GATES,
    }
    this.selectLogicGate = this.selectLogicGate.bind(this)
    this.cancelSubscriptions = this.cancelSubscriptions.bind(this)
    this.createSubscriptions = this.createSubscriptions.bind(this)
  }

  cancelSubscriptions() {
    console.log('===== cancelSubscriptions =====')
  }

  createSubscriptions() {
    console.log('===== createSubscriptions =====')
  }

  selectLogicGate(logicGateId) {
    if (this.state.selectedLogicGate?.id === logicGateId) {
      this.setState({ selectedLogicGate: null, result: false })
    } else {
      const logicGate = this.state.logicGates.find((gate) => gate.id === logicGateId)
      this.setState({ selectedLogicGate: logicGate })
    }
  }

  render() {
    const { logicGates, selectedLogicGate, result } = this.state
    return (
      <div className="game">
        <h1>Observable Logic Gates</h1>
        <table width="100%">
          <tbody>
            <tr>
              <td width="15%">
                <LogicGates
                  logicGates={logicGates}
                  selectedLogicGateId={selectedLogicGate?.id}
                  selectLogicGate={(id) => this.selectLogicGate(id)}
                />
              </td>
              <td width="10px"></td>
              <td>
                <LogicGateDisplay logicGate={selectedLogicGate}/>
              </td>
              <td width="10px"></td>
              <td width="10%">
                <Results result={result}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

// ========================================

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
