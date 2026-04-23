import { Kbd, KbdGroup } from '@/components/ui/kbd';

export default {
  title: 'Atoms/Kbd',
  component: Kbd,
  parameters: { layout: 'centered' },
  argTypes: { children: { control: 'text' } },
  args: { children: '⌘K' },
};

export const Default = {};

export const Keys = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {['⌘', '⇧', '⌥', '⌃', '↩', '⌫', 'Esc', 'Tab', '↑', '↓', '←', '→'].map((key) => (
        <Kbd key={key}>{key}</Kbd>
      ))}
    </div>
  ),
};

export const Combos = {
  name: 'Key Combinations',
  render: () => (
    <div className="space-y-2 text-sm">
      {[
        { action: 'Save',         keys: ['⌘', 'S'] },
        { action: 'Copy',         keys: ['⌘', 'C'] },
        { action: 'Find',         keys: ['⌘', 'K'] },
        { action: 'Undo',         keys: ['⌘', 'Z'] },
        { action: 'Select All',   keys: ['⌘', 'A'] },
        { action: 'Close tab',    keys: ['⌘', 'W'] },
      ].map(({ action, keys }) => (
        <div key={action} className="flex items-center justify-between gap-8">
          <span className="text-muted-foreground">{action}</span>
          <KbdGroup>
            {keys.map((k) => <Kbd key={k}>{k}</Kbd>)}
          </KbdGroup>
        </div>
      ))}
    </div>
  ),
};
