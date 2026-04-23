import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from '@/components/ui/button-group';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlignLeftIcon, AlignCenterIcon, AlignRightIcon, BoldIcon, ItalicIcon, UnderlineIcon, ChevronDownIcon } from 'lucide-react';

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

export const WithSeparator = {
  name: 'With Separator',
  render: () => (
    <ButtonGroup>
      <Button variant="outline"><BoldIcon /></Button>
      <Button variant="outline"><ItalicIcon /></Button>
      <Button variant="outline"><UnderlineIcon /></Button>
      <ButtonGroupSeparator />
      <Button variant="outline"><AlignLeftIcon /></Button>
      <Button variant="outline"><AlignCenterIcon /></Button>
      <Button variant="outline"><AlignRightIcon /></Button>
    </ButtonGroup>
  ),
};

export const WithTextAddon = {
  name: 'With Text Addon',
  render: () => (
    <div className="space-y-3">
      <ButtonGroup>
        <ButtonGroupText>https://</ButtonGroupText>
        <Button variant="outline" className="flex-1 min-w-[200px] justify-start font-normal text-muted-foreground">
          your-domain.com
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">$</Button>
        <Button variant="outline" className="min-w-[120px] justify-start font-normal">0.00</Button>
        <ButtonGroupText>USD</ButtonGroupText>
      </ButtonGroup>
    </div>
  ),
};

export const WithSelect = {
  name: 'With Select',
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Send</Button>
      <Select defaultValue="now">
        <SelectTrigger className="w-auto gap-1">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="now">Now</SelectItem>
          <SelectItem value="later">Schedule</SelectItem>
        </SelectContent>
      </Select>
    </ButtonGroup>
  ),
};
