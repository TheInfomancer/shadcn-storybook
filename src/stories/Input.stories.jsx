import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default {
  title: 'Atoms/Input',
  component: Input,
  parameters: { layout: 'centered' },
  argTypes: {
    type: { control: 'select', options: ['text', 'email', 'password', 'number', 'search'] },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: { placeholder: 'Type something...', disabled: false, type: 'text' },
};

export const Default  = {};
export const Disabled = { args: { disabled: true, placeholder: 'Disabled input' } };
export const Password = { args: { type: 'password', placeholder: 'Enter password' } };
export const Search   = { args: { type: 'search', placeholder: 'Search...' } };

export const WithLabel = {
  name: 'With Label',
  render: () => (
    <div className="grid w-72 gap-1.5">
      <Label htmlFor="email">Email address</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
      <p className="text-xs text-muted-foreground">We'll never share your email.</p>
    </div>
  ),
};

export const Form = {
  name: 'Login Form',
  render: () => (
    <div className="w-80 space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="login-email">Email</Label>
        <Input id="login-email" type="email" placeholder="you@example.com" />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="login-pw">Password</Label>
        <Input id="login-pw" type="password" placeholder="••••••••" />
      </div>
      <Button className="w-full">Sign in</Button>
    </div>
  ),
};

export const TextareaStory = {
  name: 'Textarea',
  render: () => (
    <div className="grid w-72 gap-1.5">
      <Label htmlFor="msg">Message</Label>
      <Textarea id="msg" placeholder="Type your message here..." rows={4} />
    </div>
  ),
};
