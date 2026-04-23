import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from '@/components/ui/command';
import { Button } from '@/components/ui/button';
import { CalendarIcon, FileIcon, SettingsIcon, SmileIcon, UserIcon, CreditCardIcon } from 'lucide-react';
import { useState } from 'react';

export default {
  title: 'Organisms/Command',
  parameters: { layout: 'centered' },
};

export const Inline = {
  name: 'Inline Command',
  render: () => (
    <Command className="rounded-lg border shadow-md w-80">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem><CalendarIcon />Calendar</CommandItem>
          <CommandItem><SmileIcon />Search Emoji</CommandItem>
          <CommandItem><UserIcon />Profile</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem><UserIcon />Profile<CommandShortcut>⌘P</CommandShortcut></CommandItem>
          <CommandItem><CreditCardIcon />Billing<CommandShortcut>⌘B</CommandShortcut></CommandItem>
          <CommandItem><SettingsIcon />Settings<CommandShortcut>⌘S</CommandShortcut></CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const Dialog = {
  name: 'Command Palette (⌘K)',
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="outline" onClick={() => setOpen(true)} className="gap-2 text-muted-foreground">
          <span>Search commands...</span>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
            <span>⌘</span>K
          </kbd>
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Pages">
              <CommandItem onSelect={() => setOpen(false)}><FileIcon />Dashboard</CommandItem>
              <CommandItem onSelect={() => setOpen(false)}><FileIcon />Analytics</CommandItem>
              <CommandItem onSelect={() => setOpen(false)}><FileIcon />Reports</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Actions">
              <CommandItem onSelect={() => setOpen(false)}><UserIcon />New User</CommandItem>
              <CommandItem onSelect={() => setOpen(false)}><SettingsIcon />Settings<CommandShortcut>⌘S</CommandShortcut></CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    );
  },
};
