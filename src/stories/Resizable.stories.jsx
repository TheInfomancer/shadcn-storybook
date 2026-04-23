import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

export default {
  title: 'Organisms/Resizable',
  parameters: { layout: 'centered' },
};

export const Horizontal = {
  render: () => (
    <ResizablePanelGroup
      orientation="horizontal"
      className="rounded-lg border"
      style={{ width: '500px', height: '144px' }}
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="text-sm font-medium">Left panel</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="text-sm font-medium">Right panel</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const Vertical = {
  render: () => (
    <ResizablePanelGroup
      orientation="vertical"
      className="rounded-lg border"
      style={{ width: '400px', height: '300px' }}
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-4">
          <span className="text-sm font-medium">Header</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-4">
          <span className="text-sm font-medium">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const ThreePanels = {
  name: 'Three Panels (IDE Layout)',
  render: () => (
    <ResizablePanelGroup
      orientation="horizontal"
      className="rounded-lg border"
      style={{ width: '640px', height: '420px' }}
    >
      <ResizablePanel defaultSize={20} minSize={12}>
        <div className="flex h-full items-center justify-center p-4">
          <span className="text-xs font-medium text-muted-foreground">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={60}>
        <ResizablePanelGroup orientation="vertical" style={{ height: '100%' }}>
          <ResizablePanel defaultSize={70}>
            <div className="flex h-full items-center justify-center p-4">
              <span className="text-xs font-medium text-muted-foreground">Editor</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={30} minSize={15}>
            <div className="flex h-full items-center justify-center p-4">
              <span className="text-xs font-medium text-muted-foreground">Terminal</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={20} minSize={12}>
        <div className="flex h-full items-center justify-center p-4">
          <span className="text-xs font-medium text-muted-foreground">Outline</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};
