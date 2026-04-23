import { Combobox, ComboboxAnchor, ComboboxContent, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxLabel, ComboboxTrigger, ComboboxValue } from '@/components/ui/combobox';
import { InputGroup, InputGroupInput } from '@/components/ui/input-group';
import { useState } from 'react';

const frameworks = [
  { value: 'next',    label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt',    label: 'Nuxt.js' },
  { value: 'remix',   label: 'Remix' },
  { value: 'astro',   label: 'Astro' },
];

const languages = [
  { group: 'Frontend', items: ['TypeScript', 'JavaScript', 'React', 'Vue', 'Svelte'] },
  { group: 'Backend',  items: ['Node.js', 'Python', 'Go', 'Rust', 'Java'] },
];

export default {
  title: 'Organisms/Combobox',
  parameters: { layout: 'centered' },
};

export const Default = {
  render: () => (
    <Combobox className="w-64">
      <ComboboxAnchor>
        <InputGroup>
          <InputGroupInput asChild>
            <ComboboxInput placeholder="Select framework..." />
          </InputGroupInput>
          <ComboboxTrigger />
        </InputGroup>
      </ComboboxAnchor>
      <ComboboxContent>
        <ComboboxEmpty>No framework found.</ComboboxEmpty>
        {frameworks.map(({ value, label }) => (
          <ComboboxItem key={value} value={value}>{label}</ComboboxItem>
        ))}
      </ComboboxContent>
    </Combobox>
  ),
};

export const WithGroups = {
  name: 'With Groups',
  render: () => (
    <Combobox className="w-64">
      <ComboboxAnchor>
        <InputGroup>
          <InputGroupInput asChild>
            <ComboboxInput placeholder="Select language..." />
          </InputGroupInput>
          <ComboboxTrigger />
        </InputGroup>
      </ComboboxAnchor>
      <ComboboxContent>
        <ComboboxEmpty>No language found.</ComboboxEmpty>
        {languages.map(({ group, items }) => (
          <ComboboxGroup key={group}>
            <ComboboxLabel>{group}</ComboboxLabel>
            {items.map((item) => (
              <ComboboxItem key={item} value={item.toLowerCase()}>{item}</ComboboxItem>
            ))}
          </ComboboxGroup>
        ))}
      </ComboboxContent>
    </Combobox>
  ),
};
