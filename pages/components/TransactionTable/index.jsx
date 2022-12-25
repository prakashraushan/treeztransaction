import { Table } from 'rsuite';
const { Column, HeaderCell, Cell } = Table;

export default function TransactionTable({transactions}) {
  return (
    <Table
    autoHeight
    data={transactions}
    >
    <Column flexGrow={1}>
      <HeaderCell>DATE</HeaderCell>
      <Cell dataKey="date" />
    </Column>

    <Column flexGrow={1}>
      <HeaderCell>GROSS AMOUNT</HeaderCell>
      <Cell dataKey="grossAmount" />
    </Column>

    <Column flexGrow={1}>
      <HeaderCell>STATUS</HeaderCell>
      <Cell dataKey="status" />
    </Column>

    <Column flexGrow={1}>
      <HeaderCell>CUSTOMER</HeaderCell>
      <Cell dataKey="user" />
    </Column>

    <Column flexGrow={1}>
      <HeaderCell>SWIFTER ID</HeaderCell>
      <Cell dataKey="userId" />
    </Column>

    <Column flexGrow={1}>
      <HeaderCell>EXTERNAL ID</HeaderCell>
      <Cell dataKey="externalId" />
    </Column>

    <Column flexGrow={1}>
      <HeaderCell>SOURCE</HeaderCell>
      <Cell dataKey="source" />
    </Column>
  </Table>
  )
}
