import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  argTypes: {
    defaultChecked: { control: 'boolean' },
    disabled:       { control: 'boolean' },
  },
  args: { defaultChecked: false, disabled: false },
};

export const Default  = {};
export const Checked  = { args: { defaultChecked: true } };
export const Disabled = { args: { disabled: true } };

export const WithLabel = {
  name: 'With Label',
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const Group = {
  name: 'Group',
  render: () => (
    <div className="space-y-3">
      {[
        { id: 'terms', label: 'Accept terms and conditions', defaultChecked: false },
        { id: 'news',  label: 'Subscribe to newsletter',    defaultChecked: true  },
        { id: 'notif', label: 'Enable notifications',       defaultChecked: false },
      ].map(({ id, label, defaultChecked }) => (
        <div key={id} className="flex items-center gap-2">
          <Checkbox id={id} defaultChecked={defaultChecked} />
          <Label htmlFor={id}>{label}</Label>
        </div>
      ))}
      <div className="flex items-center gap-2 opacity-50">
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled">Disabled option</Label>
      </div>
    </div>
  ),
};
