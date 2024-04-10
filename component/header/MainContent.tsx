import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Music from "../music/Music";
import Podcasts from "../podcasts/Podcasts";
import SideNavigation from "../sidenav/SideNavigation";

const MainContent = () => {
  return (
    <div >
      <ResizablePanelGroup
        direction="horizontal"
        className="rounded-lg border"
      >
        <ResizablePanel className="hidden md:block" defaultSize={20}>
          <div className="h-full p-1">
            <SideNavigation/>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel  defaultSize={80} className="p-5 min-h-[calc(100vh-45px)]">
          <Tabs defaultValue="music" className="w-full">
            <div className="flex justify-between">
            <TabsList className="grid w-[250px] grid-cols-2">
              <TabsTrigger value="music">Music</TabsTrigger>
              <TabsTrigger value="podcast">Podcasts</TabsTrigger>
            </TabsList>
            <Button>Add Music</Button>
            </div>
          
            <TabsContent value="music">
              <Music />
            </TabsContent>
            <TabsContent value="podcast">
              <Podcasts />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default MainContent;
