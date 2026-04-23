import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowUpDownIcon, MoreHorizontalIcon, SearchIcon } from 'lucide-react';

const data = [
  { id: '1', name: 'Alice Johnson',  email: 'alice@example.com',  role: 'Admin',   status: 'Active'   },
  { id: '2', name: 'Bob Smith',      email: 'bob@example.com',    role: 'User',    status: 'Active'   },
  { id: '3', name: 'Carol Williams', email: 'carol@example.com',  role: 'User',    status: 'Inactive' },
  { id: '4', name: 'David Brown',    email: 'david@example.com',  role: 'Editor',  status: 'Active'   },
  { id: '5', name: 'Eve Davis',      email: 'eve@example.com',    role: 'User',    status: 'Pending'  },
  { id: '6', name: 'Frank Miller',   email: 'frank@example.com',  role: 'Admin',   status: 'Active'   },
  { id: '7', name: 'Grace Wilson',   email: 'grace@example.com',  role: 'Editor',  status: 'Inactive' },
];

const statusVariant = { Active: 'default', Inactive: 'secondary', Pending: 'outline' };

export default {
  title: 'Organisms/Data Table',
  parameters: { layout: 'padded' },
};

export const Default = {
  render: () => {
    const [filter, setFilter] = useState('');
    const [sortField, setSortField] = useState(null);
    const [sortDir, setSortDir] = useState('asc');
    const [selected, setSelected] = useState([]);

    const toggleSort = (field) => {
      if (sortField === field) setSortDir((d) => d === 'asc' ? 'desc' : 'asc');
      else { setSortField(field); setSortDir('asc'); }
    };

    const filtered = data
      .filter((row) => row.name.toLowerCase().includes(filter.toLowerCase()) || row.email.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => {
        if (!sortField) return 0;
        const cmp = a[sortField] < b[sortField] ? -1 : a[sortField] > b[sortField] ? 1 : 0;
        return sortDir === 'asc' ? cmp : -cmp;
      });

    const allSelected = selected.length === filtered.length;
    const toggleAll = () => setSelected(allSelected ? [] : filtered.map((r) => r.id));
    const toggleOne = (id) => setSelected((s) => s.includes(id) ? s.filter((x) => x !== id) : [...s, id]);

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="relative flex-1 max-w-sm">
            <SearchIcon className="absolute left-2.5 top-2 size-4 text-muted-foreground" />
            <Input className="pl-8" placeholder="Filter by name or email..." value={filter} onChange={(e) => setFilter(e.target.value)} />
          </div>
          {selected.length > 0 && (
            <Button variant="destructive" size="sm">{selected.length} selected · Delete</Button>
          )}
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-10">
                  <Checkbox checked={allSelected} onCheckedChange={toggleAll} />
                </TableHead>
                {[
                  { key: 'name',  label: 'Name' },
                  { key: 'email', label: 'Email' },
                  { key: 'role',  label: 'Role' },
                  { key: 'status', label: 'Status' },
                ].map(({ key, label }) => (
                  <TableHead key={key}>
                    <Button variant="ghost" size="sm" className="-ml-2 gap-1" onClick={() => toggleSort(key)}>
                      {label} <ArrowUpDownIcon className="size-3" />
                    </Button>
                  </TableHead>
                ))}
                <TableHead className="w-10" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length ? filtered.map(({ id, name, email, role, status }) => (
                <TableRow key={id} data-state={selected.includes(id) ? 'selected' : undefined}>
                  <TableCell><Checkbox checked={selected.includes(id)} onCheckedChange={() => toggleOne(id)} /></TableCell>
                  <TableCell className="font-medium">{name}</TableCell>
                  <TableCell className="text-muted-foreground">{email}</TableCell>
                  <TableCell>{role}</TableCell>
                  <TableCell><Badge variant={statusVariant[status]}>{status}</Badge></TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="size-8"><MoreHorizontalIcon className="size-4" /></Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>View profile</DropdownMenuItem>
                        <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              )) : (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">No results.</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{selected.length} of {filtered.length} row(s) selected.</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm" disabled>Next</Button>
          </div>
        </div>
      </div>
    );
  },
};
