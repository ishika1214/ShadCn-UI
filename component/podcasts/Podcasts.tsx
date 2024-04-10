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
import React from "react";

const Podcasts = () => {
  return (
    <div>
      <Card className="text-center h-[500px] items-center flex justify-center ">
        <CardContent>
          <CardTitle className="p-1">No episodes added</CardTitle>
          <CardDescription className="p-1">
            You have not added any podcasts. Add one below.
          </CardDescription>
          <Button className="m-1">Add PodCasts</Button>
        </CardContent>

        
      </Card>
    </div>
  );
};

export default Podcasts;
