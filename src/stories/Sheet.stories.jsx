import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default {
  title: 'Organisms/Sheet',
  component: Sheet,
  parameters: { layout: 'centered' },
};

export const Default = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild><Button variant="outline">Open sheet</Button></SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {[
            { id: 'name',  label: 'Name',     value: 'John Doe' },
            { id: 'email', label: 'Email',    value: 'john@example.com' },
            { id: 'role',  label: 'Role',     value: 'Designer' },
          ].map(({ id, label, value }) => (
            <div key={id} className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={id} className="text-right">{label}</Label>
              <Input id={id} defaultValue={value} className="col-span-3" />
            </div>
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild><Button type="submit">Save changes</Button></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const Sides = {
  name: 'All Sides',
  render: () => (
    <div className="flex flex-wrap gap-2">
      {['top', 'right', 'bottom', 'left'].map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline" className="capitalize">{side}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Sheet from {side}</SheetTitle>
              <SheetDescription>This sheet slides in from the {side}.</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  ),
};
