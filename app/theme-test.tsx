"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function ThemeTest() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="p-10 flex flex-col gap-4 items-center">
      <h1 className="text-2xl font-bold">Current theme: {theme}</h1>
      <div className="flex gap-4">
        <Button onClick={() => setTheme("light")}>Light</Button>
        <Button onClick={() => setTheme("dark")}>Dark</Button>
        <Button onClick={() => setTheme("system")}>System</Button>
      </div>
    </div>
  )
}
