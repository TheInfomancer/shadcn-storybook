import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default {
  title: 'Atoms/Textarea',
  component: Textarea,
  parameters: { layout: 'centered' },
  argTypes: {
    placeholder: { control: 'text' },
    disabled:    { control: 'boolean' },
    rows:        { control: 'number' },
  },
  args: { placeholder: 'Type your message here...', disabled: false, rows: 4 },
};

export const Default  = {};
export const Disabled = { args: { disabled: true, placeholder: 'Disabled textarea' } };

export const WithLabel = {
  name: 'With Label',
  render: () => (
    <div className="grid w-80 gap-1.5">
      <Label htmlFor="msg">Your message</Label>
      <Textarea id="msg" placeholder="Type your message here..." rows={4} />
      <p className="text-xs text-muted-foreground">Max 500 characters.</p>
    </div>
  ),
};

export const WithButton = {
  name: 'With Submit Button',
  render: () => (
    <div className="grid w-80 gap-2">
      <Label htmlFor="bio">Bio</Label>
      <Textarea id="bio" placeholder="Tell us about yourself..." rows={5} />
      <Button className="w-full">Save bio</Button>
    </div>
  ),
};
