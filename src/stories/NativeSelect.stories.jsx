import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Label } from '@/components/ui/label';

export default {
  title: 'Atoms/Native Select',
  component: NativeSelect,
  parameters: { layout: 'centered' },
};

export const Default = {
  render: () => (
    <NativeSelect>
      <NativeSelectOption value="">Select an option</NativeSelectOption>
      <NativeSelectOption value="opt1">Option 1</NativeSelectOption>
      <NativeSelectOption value="opt2">Option 2</NativeSelectOption>
      <NativeSelectOption value="opt3">Option 3</NativeSelectOption>
    </NativeSelect>
  ),
};

export const WithLabel = {
  name: 'With Label',
  render: () => (
    <div className="space-y-1.5">
      <Label>Country</Label>
      <NativeSelect defaultValue="us">
        <NativeSelectOption value="us">United States</NativeSelectOption>
        <NativeSelectOption value="uk">United Kingdom</NativeSelectOption>
        <NativeSelectOption value="ca">Canada</NativeSelectOption>
        <NativeSelectOption value="au">Australia</NativeSelectOption>
        <NativeSelectOption value="de">Germany</NativeSelectOption>
      </NativeSelect>
    </div>
  ),
};

export const Sizes = {
  render: () => (
    <div className="flex items-center gap-3">
      <NativeSelect size="sm">
        <NativeSelectOption>Small</NativeSelectOption>
      </NativeSelect>
      <NativeSelect size="default">
        <NativeSelectOption>Default</NativeSelectOption>
      </NativeSelect>
    </div>
  ),
};
