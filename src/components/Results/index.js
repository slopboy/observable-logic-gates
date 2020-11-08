import React from 'react'
import './index.css'

export default class Results extends React.Component {
  render() {
    const { result } = this.props
    return (
      <div id="divResults" className="divResults">

        { result === true &&
        <div className="lightBulbOn"/>
        }

        { result === false &&
        <div className="lightBulbOff"/>
        }
      </div>
    )
  }
}
