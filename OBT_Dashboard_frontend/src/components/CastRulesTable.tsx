import React from 'react';
import { Container, Table } from 'react-bootstrap';

type CastRulesTableProps = {
  colNames: string[],
  lines: string[][],
}


class CastRulesTable extends React.Component<CastRulesTableProps> {
  constructor(props: CastRulesTableProps) {
    super(props);
  }

  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            {this.props.colNames.map((colName, i) => <th key={i}>{colName}</th>)}
          </tr>
        </thead>
        <tbody>
          {this.props.lines.map(
            (line, i) => <tr key={i}>{line.map(
              (col, j) => <td key={j}>{col}</td>
            )}</tr>
          )}
        </tbody>
      </Table>)
  }
}

export default CastRulesTable;