import React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Imagepic from "../../public/Images/Image1.jpg";

export interface Artwork {
  artist: string;
  art: string;
}

export const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://media.istockphoto.com/id/1142649448/photo/gen-z-girl-enjoying-disco-music.jpg?s=2048x2048&w=is&k=20&c=wZkvvQOT9UY7do-kf4mSO1J9xQX46NJrLJ9lrxdofA0=",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2VyfGVufDB8fDB8fHww",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1505282722405-413748d3de7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1608319917470-9d9179430f8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1524650359799-842906ca1c06?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    artist: "Vladimir Malyavko",
    art: "https://plus.unsplash.com/premium_photo-1681182425863-b44293a645d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1636662254874-2e4832027ceb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
  },


  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1608319917470-9d9179430f8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1505282722405-413748d3de7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNpbmdlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const Music = () => {
  return (
    <div >
      <div >
        <p className="text-xl font-bold mt-4">Listen Now</p>
        <p className="mb-4 text-slate-500">Top picks for you. Updated daily.</p>
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
      {works.map((artwork) => (
        <figure key={artwork.artist} className="shrink-0">
          <div className="overflow-hidden rounded-md cursor-pointer transform transition-transform duration-300 hover:scale-105">
            <Image
              src={artwork.art}
              alt={`Photo by ${artwork.artist}`}
              className="aspect-[3/4] h-fit w-fit object-cover"
              width={150}
              height={200}
            />
          </div>
          <figcaption className="pt-2 text-xs text-muted-foreground">
            Photo by{' '}
            <span className="font-semibold text-foreground">
              {artwork.artist}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <div>
        <p className="text-xl font-bold mt-6">Made for You</p>
        <p className="mb-4 text-slate-500">
          Your personal playlists. Updated daily.
        </p>
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            {works.map((artwork) => (
              <figure key={artwork.artist} className="shrink-0">
                <div className="overflow-hidden rounded-md cursor-pointer transform transition-transform duration-300 hover:scale-105">
                  <Image
                    src={artwork.art}
                    alt={`Photo by ${artwork.artist}`}
                    className="aspect-[1/1] h-fit w-fit object-cover" // Added classes to set width and height to 200px
                    width={125}
                    height={125}
                  />
                </div>
                <figcaption className="pt-2 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {artwork.artist}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default Music;
