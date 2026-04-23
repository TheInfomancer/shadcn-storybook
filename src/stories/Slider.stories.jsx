import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

export default {
  title: 'Atoms/Slider',
  component: Slider,
  parameters: { layout: 'centered' },
};

export const Default = {
  render: () => <div className="w-64"><Slider defaultValue={[50]} /></div>,
};

export const Range = {
  name: 'Range Slider',
  render: () => <div className="w-64"><Slider defaultValue={[25, 75]} /></div>,
};

export const Steps = {
  render: () => <div className="w-64"><Slider defaultValue={[50]} step={10} /></div>,
};

export const Interactive = {
  name: 'With Value Display',
  render: () => {
    const [value, setValue] = useState([40]);
    return (
      <div className="w-64 space-y-3">
        <div className="flex justify-between">
          <Label>Volume</Label>
          <span className="text-sm font-medium">{value[0]}%</span>
        </div>
        <Slider value={value} onValueChange={setValue} max={100} step={1} />
      </div>
    );
  },
};

export const AllVariants = {
  name: 'Common Uses',
  render: () => (
    <div className="w-64 space-y-6">
      {[
        { label: 'Volume', value: [70], max: 100 },
        { label: 'Brightness', value: [45], max: 100 },
        { label: 'Price range', value: [20, 80], max: 100 },
      ].map(({ label, value, max }) => (
        <div key={label} className="space-y-2">
          <Label>{label}</Label>
          <Slider defaultValue={value} max={max} />
        </div>
      ))}
    </div>
  ),
};
