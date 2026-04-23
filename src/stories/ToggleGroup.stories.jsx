import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { AlignLeftIcon, AlignCenterIcon, AlignRightIcon, AlignJustifyIcon, BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react';

export default {
  title: 'Atoms/Toggle Group',
  component: ToggleGroup,
  parameters: { layout: 'centered' },
};

export const Default = {
  render: () => (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left"    aria-label="Left"><AlignLeftIcon /></ToggleGroupItem>
      <ToggleGroupItem value="center"  aria-label="Center"><AlignCenterIcon /></ToggleGroupItem>
      <ToggleGroupItem value="right"   aria-label="Right"><AlignRightIcon /></ToggleGroupItem>
      <ToggleGroupItem value="justify" aria-label="Justify"><AlignJustifyIcon /></ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Multiple = {
  name: 'Multiple Selection',
  render: () => (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold"      aria-label="Bold"><BoldIcon /></ToggleGroupItem>
      <ToggleGroupItem value="italic"    aria-label="Italic"><ItalicIcon /></ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline"><UnderlineIcon /></ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const WithText = {
  name: 'With Text Labels',
  render: () => (
    <ToggleGroup type="single" defaultValue="monthly" variant="outline">
      <ToggleGroupItem value="monthly">Monthly</ToggleGroupItem>
      <ToggleGroupItem value="yearly">Yearly</ToggleGroupItem>
    </ToggleGroup>
  ),
};
