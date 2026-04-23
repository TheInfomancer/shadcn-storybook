import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const invoices = [
  { id: 'INV001', status: 'Paid',    method: 'Credit Card', amount: '$250.00' },
  { id: 'INV002', status: 'Pending', method: 'PayPal',       amount: '$150.00' },
  { id: 'INV003', status: 'Unpaid',  method: 'Bank Transfer', amount: '$350.00' },
  { id: 'INV004', status: 'Paid',    method: 'Credit Card', amount: '$450.00' },
  { id: 'INV005', status: 'Paid',    method: 'PayPal',       amount: '$550.00' },
];

const statusVariant = { Paid: 'default', Pending: 'secondary', Unpaid: 'destructive' };

export default {
  title: 'Molecules/Table',
  component: Table,
  parameters: { layout: 'centered' },
};

export const Default = {
  render: () => (
    <Table className="w-[500px]">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map(({ id, status, method, amount }) => (
          <TableRow key={id}>
            <TableCell className="font-medium">{id}</TableCell>
            <TableCell><Badge variant={statusVariant[status]}>{status}</Badge></TableCell>
            <TableCell>{method}</TableCell>
            <TableCell className="text-right">{amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$1,750.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};
