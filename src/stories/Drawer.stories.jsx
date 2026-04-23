import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';

export default {
  title: 'Organisms/Drawer',
  component: Drawer,
  parameters: { layout: 'centered' },
};

export const Default = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild><Button variant="outline">Open drawer</Button></DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <p className="text-sm text-muted-foreground">
              This will permanently delete your account and remove all your data from our servers.
              Please consider downloading your data before proceeding.
            </p>
          </div>
          <DrawerFooter>
            <Button variant="destructive">Delete account</Button>
            <DrawerClose asChild><Button variant="outline">Cancel</Button></DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};

export const WithForm = {
  name: 'Mobile Form',
  render: () => (
    <Drawer>
      <DrawerTrigger asChild><Button>Quick add</Button></DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Add new item</DrawerTitle>
            <DrawerDescription>Quickly add an item to your list.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 space-y-3">
            {['Name', 'Category', 'Notes'].map((field) => (
              <div key={field} className="space-y-1">
                <label className="text-sm font-medium">{field}</label>
                <input
                  className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-1 text-sm outline-none"
                  placeholder={`Enter ${field.toLowerCase()}...`}
                />
              </div>
            ))}
          </div>
          <DrawerFooter>
            <Button>Add item</Button>
            <DrawerClose asChild><Button variant="outline">Cancel</Button></DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};
