import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

const components = [
  { title: 'Alert Dialog',  href: '#', description: 'A modal dialog for critical confirmations.' },
  { title: 'Hover Card',    href: '#', description: 'Preview content on hover without navigation.' },
  { title: 'Progress',      href: '#', description: 'Show task completion with a progress bar.' },
  { title: 'Scroll Area',   href: '#', description: 'A scrollable container with custom scrollbars.' },
  { title: 'Tabs',          href: '#', description: 'Organize content into switchable tab panels.' },
  { title: 'Tooltip',       href: '#', description: 'Show contextual info on hover.' },
];

export default {
  title: 'Organisms/Navigation Menu',
  parameters: { layout: 'centered' },
};

export const Default = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a href="#" className="flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {[
                { title: 'Installation', desc: 'How to install dependencies and structure your app.' },
                { title: 'Typography',   desc: 'Styles for headings, paragraphs, lists…and more.' },
              ].map(({ title, desc }) => (
                <li key={title}>
                  <NavigationMenuLink asChild>
                    <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">{title}</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{desc}</p>
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map(({ title, href, description }) => (
                <li key={title}>
                  <NavigationMenuLink asChild>
                    <a href={href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">{title}</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{description}</p>
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};
