import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  HomeIcon, InboxIcon, SearchIcon, SettingsIcon, UsersIcon,
  BarChartIcon, FileTextIcon, FolderIcon, BellIcon, HelpCircleIcon,
  LogOutIcon, ChevronRightIcon,
} from 'lucide-react';
import { useState } from 'react';

export default {
  title: 'Organisms/Sidebar',
  parameters: { layout: 'fullscreen' },
};

// ── Shared nav data ──────────────────────────────────────────────────────────

const NAV_MAIN = [
  {
    label: 'Home',
    icon: HomeIcon,
    items: null,
    active: true,
    badge: null,
  },
  {
    label: 'Inbox',
    icon: InboxIcon,
    items: null,
    active: false,
    badge: '12',
  },
  {
    label: 'Analytics',
    icon: BarChartIcon,
    items: [
      { label: 'Overview' },
      { label: 'Conversions' },
      { label: 'Revenue' },
    ],
    active: false,
    badge: null,
  },
  {
    label: 'Documents',
    icon: FileTextIcon,
    items: [
      { label: 'Drafts' },
      { label: 'Shared' },
      { label: 'Archived' },
    ],
    active: false,
    badge: null,
  },
  {
    label: 'Projects',
    icon: FolderIcon,
    items: null,
    active: false,
    badge: null,
  },
  {
    label: 'Team',
    icon: UsersIcon,
    items: null,
    active: false,
    badge: null,
  },
];

const NAV_SECONDARY = [
  { label: 'Notifications', icon: BellIcon },
  { label: 'Settings',      icon: SettingsIcon },
  { label: 'Help',          icon: HelpCircleIcon },
];

// ── Sidebar content ──────────────────────────────────────────────────────────

function AppSidebarContent() {
  const [expanded, setExpanded] = useState({ Analytics: false, Documents: false });

  return (
    <>
      {/* Header */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">A</div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold text-sm">Acme Inc.</span>
                <span className="text-xs text-sidebar-foreground/60">Workspace</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        {/* Search */}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <SearchIcon />
              <span>Search</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarSeparator />

      {/* Main nav */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV_MAIN.map(({ label, icon: Icon, items, active, badge }) => (
                <SidebarMenuItem key={label}>
                  {items ? (
                    <>
                      <SidebarMenuButton
                        isActive={active}
                        onClick={() => setExpanded(e => ({ ...e, [label]: !e[label] }))}
                        className="justify-between"
                      >
                        <span className="flex items-center gap-2">
                          <Icon />
                          <span>{label}</span>
                        </span>
                        <ChevronRightIcon
                          className={`size-3.5 transition-transform ${expanded[label] ? 'rotate-90' : ''}`}
                        />
                      </SidebarMenuButton>
                      {expanded[label] && (
                        <SidebarMenuSub>
                          {items.map(({ label: sub }) => (
                            <SidebarMenuSubItem key={sub}>
                              <SidebarMenuSubButton>
                                <span>{sub}</span>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      )}
                    </>
                  ) : (
                    <SidebarMenuButton isActive={active}>
                      <Icon />
                      <span>{label}</span>
                      {badge && <SidebarMenuBadge>{badge}</SidebarMenuBadge>}
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Support</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV_SECONDARY.map(({ label, icon: Icon }) => (
                <SidebarMenuItem key={label}>
                  <SidebarMenuButton>
                    <Icon />
                    <span>{label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarSeparator />

      {/* Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <Avatar className="size-8 rounded-lg">
                <AvatarFallback className="rounded-lg bg-sidebar-accent text-sidebar-accent-foreground font-semibold">JD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-0.5 leading-none min-w-0">
                <span className="font-semibold text-sm truncate">Jane Doe</span>
                <span className="text-xs text-sidebar-foreground/60 truncate">jane@acme.com</span>
              </div>
              <LogOutIcon className="ml-auto size-4 text-sidebar-foreground/50" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}

// ── Page content placeholder ─────────────────────────────────────────────────

function PageContent({ title = 'Dashboard' }) {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="-ml-1" />
        <div className="h-4 w-px bg-border" />
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {['Total Revenue', 'Active Users', 'Conversion Rate'].map((label, i) => (
          <div key={label} className="rounded-xl border border-border bg-card p-4 space-y-1">
            <p className="text-xs text-muted-foreground">{label}</p>
            <p className="text-2xl font-bold text-foreground">
              {['$48,295', '12,384', '3.24%'][i]}
            </p>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-border bg-card p-4 h-48 flex items-center justify-center text-muted-foreground text-sm">
        Main content area
      </div>
    </div>
  );
}

// ── Stories ──────────────────────────────────────────────────────────────────

export const Default = {
  name: 'Default (Collapsible)',
  render: () => (
    <SidebarProvider defaultOpen={true}>
      <Sidebar collapsible="icon">
        <AppSidebarContent />
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <PageContent />
      </SidebarInset>
    </SidebarProvider>
  ),
};

export const Collapsed = {
  name: 'Collapsed (Icon Only)',
  render: () => (
    <SidebarProvider defaultOpen={false}>
      <Sidebar collapsible="icon">
        <AppSidebarContent />
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <PageContent title="Collapsed sidebar — expand with the toggle" />
      </SidebarInset>
    </SidebarProvider>
  ),
};

export const FloatingVariant = {
  name: 'Floating Variant',
  render: () => (
    <SidebarProvider>
      <Sidebar variant="floating">
        <AppSidebarContent />
      </Sidebar>
      <SidebarInset>
        <PageContent title="Floating Sidebar" />
      </SidebarInset>
    </SidebarProvider>
  ),
};

export const InsetVariant = {
  name: 'Inset Variant',
  render: () => (
    <SidebarProvider>
      <Sidebar variant="inset">
        <AppSidebarContent />
      </Sidebar>
      <SidebarInset>
        <PageContent title="Inset Sidebar" />
      </SidebarInset>
    </SidebarProvider>
  ),
};

export const RightSide = {
  name: 'Right Side',
  render: () => (
    <SidebarProvider>
      <SidebarInset>
        <PageContent title="Right-Side Sidebar" />
      </SidebarInset>
      <Sidebar side="right" collapsible="icon">
        <AppSidebarContent />
        <SidebarRail />
      </Sidebar>
    </SidebarProvider>
  ),
};
