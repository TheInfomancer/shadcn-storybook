import { Progress } from '@/components/ui/progress';
import { useState, useEffect } from 'react';

export default {
  title: 'Atoms/Progress',
  component: Progress,
  parameters: { layout: 'centered' },
  argTypes: { value: { control: { type: 'range', min: 0, max: 100 } } },
  args: { value: 60 },
};

export const Default = {
  render: (args) => <div className="w-80"><Progress {...args} /></div>,
};

export const States = {
  render: () => (
    <div className="w-80 space-y-4">
      {[
        { label: 'Profile',   value: 80 },
        { label: 'Storage',   value: 45 },
        { label: 'Downloads', value: 100 },
        { label: 'Upload',    value: 12 },
      ].map(({ label, value }) => (
        <div key={label} className="space-y-1.5">
          <div className="flex justify-between text-sm">
            <span>{label}</span>
            <span className="text-muted-foreground">{value}%</span>
          </div>
          <Progress value={value} />
        </div>
      ))}
    </div>
  ),
};

export const Animated = {
  name: 'Animated Loading',
  render: () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((p) => (p >= 100 ? 0 : p + 2));
      }, 50);
      return () => clearInterval(timer);
    }, []);
    return (
      <div className="w-80 space-y-2">
        <div className="flex justify-between text-sm">
          <span>Uploading file...</span>
          <span className="text-muted-foreground">{progress}%</span>
        </div>
        <Progress value={progress} />
      </div>
    );
  },
};
