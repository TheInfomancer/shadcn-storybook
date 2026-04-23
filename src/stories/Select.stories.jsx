import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

export default {
  title: 'Atoms/Select',
  component: Select,
  parameters: { layout: 'centered' },
};

export const Default = {
  render: () => (
    <Select>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="opt1">Option 1</SelectItem>
        <SelectItem value="opt2">Option 2</SelectItem>
        <SelectItem value="opt3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithLabel = {
  name: 'With Label',
  render: () => (
    <div className="w-56 space-y-2">
      <Label>Timezone</Label>
      <Select defaultValue="utc">
        <SelectTrigger>
          <SelectValue placeholder="Select timezone" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="utc">UTC</SelectItem>
          <SelectItem value="est">Eastern (EST)</SelectItem>
          <SelectItem value="cst">Central (CST)</SelectItem>
          <SelectItem value="mst">Mountain (MST)</SelectItem>
          <SelectItem value="pst">Pacific (PST)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const Sizes = {
  name: 'Multiple Selects',
  render: () => (
    <div className="space-y-4 w-56">
      {[
        { label: 'Font size',  items: ['12px', '14px', '16px', '18px'], defaultValue: '16px' },
        { label: 'Font weight', items: ['Regular', 'Medium', 'Bold'],    defaultValue: 'Regular' },
        { label: 'Line height', items: ['1', '1.25', '1.5', '1.75', '2'], defaultValue: '1.5' },
      ].map(({ label, items, defaultValue }) => (
        <div key={label} className="space-y-1.5">
          <Label>{label}</Label>
          <Select defaultValue={defaultValue}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {items.map((item) => (
                <SelectItem key={item} value={item}>{item}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}
    </div>
  ),
};
