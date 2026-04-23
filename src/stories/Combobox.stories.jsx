import { useState } from 'react';
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxEmpty,
  ComboboxSeparator,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
} from '@/components/ui/combobox';

const frameworks = [
  { value: 'next',      label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt',      label: 'Nuxt.js' },
  { value: 'remix',     label: 'Remix' },
  { value: 'astro',     label: 'Astro' },
  { value: 'vite',      label: 'Vite' },
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
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Combobox value={value} onValueChange={setValue} className="w-64">
        <ComboboxInput placeholder="Select framework..." />
        <ComboboxContent>
          <ComboboxEmpty>No framework found.</ComboboxEmpty>
          <ComboboxList>
            {frameworks.map(({ value, label }) => (
              <ComboboxItem key={value} value={value}>{label}</ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    );
  },
};

export const WithGroups = {
  name: 'With Groups',
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Combobox value={value} onValueChange={setValue} className="w-64">
        <ComboboxInput placeholder="Select language..." />
        <ComboboxContent>
          <ComboboxEmpty>No language found.</ComboboxEmpty>
          <ComboboxList>
            {languages.map(({ group, items }, i) => (
              <>
                <ComboboxGroup key={group}>
                  <ComboboxLabel>{group}</ComboboxLabel>
                  {items.map((item) => (
                    <ComboboxItem key={item} value={item.toLowerCase()}>{item}</ComboboxItem>
                  ))}
                </ComboboxGroup>
                {i < languages.length - 1 && <ComboboxSeparator key={`sep-${group}`} />}
              </>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    );
  },
};

export const WithClear = {
  name: 'With Clear Button',
  render: () => {
    const [value, setValue] = useState('next');
    return (
      <Combobox value={value} onValueChange={setValue} className="w-64">
        <ComboboxInput placeholder="Select framework..." showClear />
        <ComboboxContent>
          <ComboboxEmpty>No framework found.</ComboboxEmpty>
          <ComboboxList>
            {frameworks.map(({ value, label }) => (
              <ComboboxItem key={value} value={value}>{label}</ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    );
  },
};

export const MultiSelect = {
  name: 'Multi-Select (Chips)',
  render: () => {
    const [values, setValues] = useState(['react', 'typescript']);
    return (
      <Combobox
        value={values}
        onValueChange={setValues}
        multiple
        className="w-72"
      >
        <ComboboxChips>
          {values.map((v) => {
            const item = languages.flatMap(g => g.items).find(i => i.toLowerCase() === v);
            return item ? <ComboboxChip key={v} value={v}>{item}</ComboboxChip> : null;
          })}
          <ComboboxChipsInput placeholder="Add language..." />
        </ComboboxChips>
        <ComboboxContent>
          <ComboboxEmpty>No language found.</ComboboxEmpty>
          <ComboboxList>
            {languages.map(({ group, items }) => (
              <ComboboxGroup key={group}>
                <ComboboxLabel>{group}</ComboboxLabel>
                {items.map((item) => (
                  <ComboboxItem key={item} value={item.toLowerCase()}>{item}</ComboboxItem>
                ))}
              </ComboboxGroup>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    );
  },
};
