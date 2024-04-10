import { Badge, CirclePlay, Globe, Home, LibraryBig, LineChart, ListMusic, MicVocal, Music2, Package, Radio, ShoppingCart, User, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SideNavigation = () => {
  return (
    <div className="flex-1">
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      
      <p className='font-semibold text-xl px-3 mt-2'>Discover</p>
      
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:bg-muted"
      >
        <CirclePlay className="h-4 w-4" />
        Listen Now
      </Link>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:bg-muted"
      >
        <Globe className="h-4 w-4"/>
        Browse
       
      </Link>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg  px-3 py-2 text-primary transition-all hover:bg-muted"
      >
        <Radio className="h-4 w-4" />
        Radio
      </Link>

      <h1 className='font-semibold text-xl px-3 mt-5'>Library</h1>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:bg-muted"
      >
        <ListMusic className="h-4 w-4" />
        PlayLists
      </Link>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:bg-muted"
      >
        <Music2 className="h-4 w-4" />
        Songs
      </Link>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:bg-muted"
      >
        <User className="h-4 w-4" />
        Made for you
      </Link>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:bg-muted"
      >
        <MicVocal className="h-4 w-4" />
        Artists
      </Link>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:bg-muted"
      >
        <LibraryBig className="h-4 w-4" />
        Albums
      </Link>
    </nav>
  </div>
  )
}

export default SideNavigation
