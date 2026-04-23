import * as React from "react"
import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext({
  size: "default",
  variant: "default",
  spacing: 0,
  orientation: "horizontal",
})

function ToggleGroup({
  className,
  variant,
  size,
  spacing = 0,
  orientation = "horizontal",
  children,
  ...props
}) {
  return (
    <ToggleGroupPrimitive
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-spacing={spacing}
      data-orientation={orientation}
      style={{
        "--gap": spacing,
        gap: "calc(var(--spacing) * var(--gap))",
      }}
      className={cn(
        "group/toggle-group flex w-fit flex-row items-center rounded-lg data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch",
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size, spacing, orientation }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive>
  )
}

function ToggleGroupItem({
  className,
  variant,
  size,
  ...props
}) {
  const context = React.useContext(ToggleGroupContext)
  return (
    <TogglePrimitive
      data-slot="toggle-group-item"
      className={cn(
        toggleVariants({
          variant: context.variant ?? variant,
          size: context.size ?? size,
        }),
        // Flatten corners so only the outermost edges of the group are rounded
        "rounded-none first:rounded-l-lg last:rounded-r-lg focus-visible:z-10",
        // Vertical layout adjustments
        "group-data-[orientation=vertical]/toggle-group:first:rounded-l-none group-data-[orientation=vertical]/toggle-group:first:rounded-t-lg group-data-[orientation=vertical]/toggle-group:last:rounded-r-none group-data-[orientation=vertical]/toggle-group:last:rounded-b-lg group-data-[orientation=vertical]/toggle-group:w-full",
        className
      )}
      {...props}
    />
  )
}

export { ToggleGroup, ToggleGroupItem }