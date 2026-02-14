import { BookOpen, Code2, Home, Moon, Sun } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Übersicht", url: "/", icon: Home },
  { title: "Beispiele", url: "/examples", icon: Code2 },
  { title: "Erklärungen", url: "/explanations", icon: BookOpen },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const { isDark, toggleTheme } = useTheme();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r border-border/50 bg-gradient-to-b from-card to-card/80">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary font-bold">
            {!isCollapsed && "📚 C-Lernplattform"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      end
                      className="hover:bg-secondary/50 transition-all duration-300"
                      activeClassName="bg-primary/10 text-primary font-semibold border-l-4 border-primary"
                    >
                      <item.icon className="w-5 h-5" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="w-full"
              title={isDark ? "Light Mode" : "Dark Mode"}
            >
              {isDark ? (
                <Sun className="w-4 h-4 mr-2" />
              ) : (
                <Moon className="w-4 h-4 mr-2" />
              )}
              {!isCollapsed && (isDark ? "Light Mode" : "Dark Mode")}
            </Button>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
