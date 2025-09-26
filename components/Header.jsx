import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  PenBox,
  LayoutDashboard,
  FileText,
  GraduationCap,
  ChevronDown,
  StarsIcon,
  PhoneCall,
  Plus,
  BookOpen,
  Headphones,
  Mic,
  FileTextIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <div className="logo text-white text-2xl font-bold">
            <span className="text-green-700"> &lt; </span>
            <span>IELTS</span>{" "}
            <span className="text-green-700"> Institute  /&gt; </span>
          </div>
        </Link>
        <div className="flex items-center space-x-2 md:space-x-4">
          <Link href="/dashboard">
            <Button
              variant="outline"
              className="hidden md:inline-flex items-center gap-2"
            >
              <LayoutDashboard className="h-4 w-4" />
              IELTS Pro
              
            </Button>

            <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
              <LayoutDashboard className="h-4 w-4" />
            </Button>
          </Link>

          {/* Growth Tools Dropdown */}
          <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button className="flex items-center gap-2">
      <StarsIcon className="h-4 w-4" />
      <span className="hidden md:block">IELTS Tools</span>
      <ChevronDown className="h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>

  <DropdownMenuContent align="end" className="w-48">
    <DropdownMenuItem asChild>
      <Link href="/courses" className="flex items-center gap-2">
        <BookOpen className="h-4 w-4" />
        Courses
      </Link>
    </DropdownMenuItem>

    <DropdownMenuItem asChild>
      <Link href="/practice" className="flex items-center gap-2">
        <Headphones className="h-4 w-4" />
        Practice Tests
      </Link>
    </DropdownMenuItem>

    <DropdownMenuItem asChild>
      <Link href="/speaking" className="flex items-center gap-2">
        <Mic className="h-4 w-4" />
        Speaking Sessions
      </Link>
    </DropdownMenuItem>

    <DropdownMenuItem asChild>
      <Link href="/about" className="flex items-center gap-2">
        <FileTextIcon className="h-4 w-4" />
        About
      </Link>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Header;
