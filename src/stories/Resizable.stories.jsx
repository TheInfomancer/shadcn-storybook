import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

export default {
  title: 'Organisms/Resizable',
  parameters: { layout: 'centered' },
};

export const Horizontal = {
  render: () => (
    <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-36 items-center justify-center p-6">
          <span className="text-sm font-medium">Left panel</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-36 items-center justify-center p-6">
          <span className="text-sm font-medium">Right panel</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const Vertical = {
  render: () => (
    <ResizablePanelGroup direction="vertical" className="max-h-[300px] max-w-md rounded-lg border">
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
    <ResizablePanelGroup direction="horizontal" className="max-w-xl rounded-lg border min-h-48">
      <ResizablePanel defaultSize={20} minSize={15}>
        <div className="flex h-full items-center justify-center p-4">
          <span className="text-xs font-medium text-muted-foreground">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={60}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={70}>
            <div className="flex h-full items-center justify-center p-4">
              <span className="text-xs font-medium text-muted-foreground">Editor</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={30}>
            <div className="flex h-full items-center justify-center p-4">
              <span className="text-xs font-medium text-muted-foreground">Terminal</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={20} minSize={15}>
        <div className="flex h-full items-center justify-center p-4">
          <span className="text-xs font-medium text-muted-foreground">Outline</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};
