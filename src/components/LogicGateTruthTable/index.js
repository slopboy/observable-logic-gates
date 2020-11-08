import React from 'react'
import './index.css'

export default class LogicGateTruthTable extends React.Component {
  render() {
    const { truthTable } = this.props
    const { columns, values } = truthTable
    return (
      <table id="tblLogicGateTruthTable" className="tblLogicGateTruthTable">
        <thead>
          <tr>
            {columns.map((columnName, index) => (<td className="truthTableHeader" key={index}>{columnName}</td>))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="100"><hr/></td>
          </tr>
          {values.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((col, colIndex) => (
                <td className="truthTableValue" key={rowIndex + '_' + colIndex}>{col}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}
