import { FieldSet, FieldLegend, FieldGroup, FieldRow, FieldLabel, FieldDescription, FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export default {
  title: 'Molecules/Field',
  parameters: { layout: 'centered' },
};

export const Default = {
  render: () => (
    <div className="w-80 space-y-4">
      <FieldGroup>
        <FieldLabel htmlFor="name">Full name</FieldLabel>
        <Input id="name" placeholder="John Doe" />
        <FieldDescription>This is your public display name.</FieldDescription>
      </FieldGroup>
      <FieldGroup>
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input id="email" type="email" placeholder="john@example.com" />
      </FieldGroup>
    </div>
  ),
};

export const WithError = {
  name: 'With Validation Error',
  render: () => (
    <div className="w-80">
      <FieldGroup>
        <FieldLabel htmlFor="err-email">Email</FieldLabel>
        <Input id="err-email" type="email" defaultValue="invalid-email" aria-invalid />
        <FieldError>Please enter a valid email address.</FieldError>
      </FieldGroup>
    </div>
  ),
};

export const CheckboxGroup = {
  name: 'Checkbox FieldSet',
  render: () => (
    <FieldSet className="w-72">
      <FieldLegend>Notifications</FieldLegend>
      <FieldDescription>Choose what you want to be notified about.</FieldDescription>
      {['Comments', 'Mentions', 'New followers', 'Direct messages'].map((item) => (
        <div key={item} className="flex items-center gap-2">
          <Checkbox id={item} />
          <Label htmlFor={item}>{item}</Label>
        </div>
      ))}
    </FieldSet>
  ),
};
