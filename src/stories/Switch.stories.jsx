import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default {
  title: 'Atoms/Switch',
  component: Switch,
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
    <div className="flex items-center gap-3">
      <Switch id="airplane" />
      <Label htmlFor="airplane">Airplane mode</Label>
    </div>
  ),
};

export const Group = {
  name: 'Settings Group',
  render: () => (
    <div className="space-y-4 w-64">
      {[
        { id: 'airplane',  label: 'Airplane Mode', defaultChecked: false },
        { id: 'wifi',      label: 'Wi-Fi',          defaultChecked: true  },
        { id: 'bluetooth', label: 'Bluetooth',      defaultChecked: true  },
        { id: 'disabled',  label: 'Disabled',       defaultChecked: false, disabled: true },
      ].map(({ id, label, defaultChecked, disabled }) => (
        <div key={id} className="flex items-center justify-between">
          <Label htmlFor={id} className={disabled ? 'opacity-50' : ''}>{label}</Label>
          <Switch id={id} defaultChecked={defaultChecked} disabled={disabled} />
        </div>
      ))}
    </div>
  ),
};
