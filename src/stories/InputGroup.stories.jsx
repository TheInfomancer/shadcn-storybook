import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupButton } from '@/components/ui/input-group';
import { Button } from '@/components/ui/button';
import { SearchIcon, AtSignIcon, DollarSignIcon, CopyIcon } from 'lucide-react';

export default {
  title: 'Molecules/Input Group',
  parameters: { layout: 'centered' },
};

export const WithIcon = {
  name: 'With Icon Addon',
  render: () => (
    <InputGroup className="w-72">
      <InputGroupAddon align="inline-start"><SearchIcon /></InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
    </InputGroup>
  ),
};

export const WithPrefix = {
  name: 'With Text Prefix',
  render: () => (
    <div className="space-y-3 w-72">
      <InputGroup>
        <InputGroupAddon align="inline-start"><AtSignIcon /></InputGroupAddon>
        <InputGroupInput placeholder="username" />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon align="inline-start"><DollarSignIcon /></InputGroupAddon>
        <InputGroupInput type="number" placeholder="0.00" />
        <InputGroupAddon align="inline-end">USD</InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const WithButton = {
  name: 'With Button',
  render: () => (
    <InputGroup className="w-72">
      <InputGroupInput defaultValue="https://shadcn.com/components" readOnly />
      <InputGroupButton>
        <Button size="sm" variant="ghost"><CopyIcon className="size-3.5" /></Button>
      </InputGroupButton>
    </InputGroup>
  ),
};
