import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

export default {
  title: 'Atoms/Label',
  component: Label,
  parameters: { layout: 'centered' },
  argTypes: { children: { control: 'text' } },
  args: { children: 'Label text' },
};

export const Default = {};

export const WithInput = {
  name: 'With Input',
  render: () => (
    <div className="grid gap-1.5 w-64">
      <Label htmlFor="email">Email address</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  ),
};

export const WithCheckbox = {
  name: 'With Checkbox',
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="agree" />
      <Label htmlFor="agree">I agree to the terms and conditions</Label>
    </div>
  ),
};

export const Required = {
  render: () => (
    <div className="grid gap-1.5 w-64">
      <Label htmlFor="name">
        Full name <span className="text-destructive">*</span>
      </Label>
      <Input id="name" placeholder="John Doe" required />
    </div>
  ),
};
