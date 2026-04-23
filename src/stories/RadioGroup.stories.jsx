import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export default {
  title: 'Atoms/Radio Group',
  component: RadioGroup,
  parameters: { layout: 'centered' },
};

export const Default = {
  render: () => (
    <RadioGroup defaultValue="option-2">
      {['Option One', 'Option Two', 'Option Three'].map((label, i) => (
        <div key={i} className="flex items-center gap-2">
          <RadioGroupItem value={`option-${i + 1}`} id={`opt-${i + 1}`} />
          <Label htmlFor={`opt-${i + 1}`}>{label}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
};

export const Plans = {
  name: 'Subscription Plans',
  render: () => (
    <RadioGroup defaultValue="pro" className="gap-3">
      {[
        { value: 'free',  label: 'Free',       desc: 'Up to 3 projects, 2GB storage' },
        { value: 'pro',   label: 'Pro — $12/mo', desc: 'Unlimited projects, 50GB storage' },
        { value: 'team',  label: 'Team — $49/mo', desc: 'Everything in Pro + team features' },
      ].map(({ value, label, desc }) => (
        <div key={value} className="flex items-start gap-3 rounded-lg border p-3 cursor-pointer has-[input:checked]:border-primary has-[input:checked]:bg-primary/5">
          <RadioGroupItem value={value} id={value} className="mt-0.5" />
          <div>
            <Label htmlFor={value} className="font-medium cursor-pointer">{label}</Label>
            <p className="text-xs text-muted-foreground">{desc}</p>
          </div>
        </div>
      ))}
    </RadioGroup>
  ),
};

export const Horizontal = {
  name: 'Horizontal Layout',
  render: () => (
    <RadioGroup defaultValue="card" className="flex gap-6">
      {['Card', 'PayPal', 'Apple Pay'].map((method) => (
        <div key={method} className="flex items-center gap-2">
          <RadioGroupItem value={method.toLowerCase().replace(' ', '-')} id={method} />
          <Label htmlFor={method}>{method}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
};
