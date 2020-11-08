import React from 'react'
import ReactDOM from 'react-dom'
import { fromEvent, merge } from 'rxjs'
import { map, distinctUntilChanged } from 'rxjs/operators'

import './css/index.css';
import { LOGIC_GATES } from './data/logicGateDefinitions'
import LogicGates from './components/LogicGates'
import Results from './components/Results'
import LogicGateDisplay from './components/LogicGateDisplay'

class Main extends React.Component {

  subscriptions = [];
  keyDowns$ = fromEvent(document, 'keydown').pipe(
    map(e => ({ code: e.keyCode, value: true })),
  )
  keyUps$ = fromEvent(document, 'keyup').pipe(
    map(e => ({ code: e.keyCode, value: false })),
  )
  keyPresses$ = merge(this.keyUps$, this.keyDowns$).pipe(
    distinctUntilChanged((prev, curr) => prev.code === curr.code && prev.value === curr.value),
  )

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
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }

  createSubscriptions() {
    console.log('===== createSubscriptions =====')

    this.subscriptions.push(this.keyPresses$.subscribe(val => console.log(val)))

    console.log('===== subscriptions created =====')
  }

  selectLogicGate(logicGateId) {
    this.cancelSubscriptions()
    if (this.state.selectedLogicGate?.id === logicGateId) {
      this.setState({ selectedLogicGate: null, result: false })
    } else {
      const logicGate = this.state.logicGates.find((gate) => gate.id === logicGateId)
      this.setState({ selectedLogicGate: logicGate }, this.createSubscriptions)
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
