"use client"

import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";

export function SlideInput() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`group bg-zinc-50 p-3 px-4 rounded-full flex h-fit transition-all items-center hover:gap-2 ${isOpen ? "gap-2": ""}`}>
      <RiSearchLine />
      <input 
        type="text" 
        className={` group-hover:w-36 w-0 transition-all text-sm leading-none bg-transparent outline-none ${isOpen ? "w-36": ""}`} 
        placeholder="Quick Search"
        onFocus={() => setIsOpen(!isOpen)} 
        onBlur={() => setIsOpen(!isOpen)} 
      />
      <span className={`group-hover:w-6 group-hover:opacity-100 ${isOpen ? "w-6 opacity-100": ""} w-0 opacity-0 transition-all text-slate-400`}>⌘K</span>
    </div>
  )
}