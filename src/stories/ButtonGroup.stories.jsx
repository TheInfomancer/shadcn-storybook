import { ButtonGroup, ButtonGroupItem } from '@/components/ui/button-group';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlignLeftIcon, AlignCenterIcon, AlignRightIcon, BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react';

export default {
  title: 'Molecules/Button Group',
  component: ButtonGroup,
  parameters: { layout: 'centered' },
};

export const Default = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Previous</Button>
      <Button variant="outline">Today</Button>
      <Button variant="outline">Next</Button>
    </ButtonGroup>
  ),
};

export const IconGroup = {
  name: 'Icon Buttons',
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="icon"><AlignLeftIcon /></Button>
      <Button variant="outline" size="icon"><AlignCenterIcon /></Button>
      <Button variant="outline" size="icon"><AlignRightIcon /></Button>
    </ButtonGroup>
  ),
};

export const Vertical = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
  ),
};
