"use client";
import { useState } from "react";
import { Menu, X, Info, Cog, Briefcase, PenTool } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Info", href: "/info", icon: Info },
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "Services", href: "/services", icon: PenTool },
  { name: "Settings", href: "/settings", icon: Cog },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f9f3e7]">
      {/* Desktop Sidebar */}
      <nav className="fixed left-0 top-0 z-40 hidden h-screen w-16 flex-col items-center justify-between border-r border-gray-200 bg-[#8B4B4B] py-4 lg:flex">
        <div className="flex flex-col items-center space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-lg p-2 text-white hover:bg-[#a05f5f] transition-colors duration-200"
            >
              <item.icon className="h-6 w-6" />
              <span className="sr-only">{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-[#8B4B4B] lg:hidden">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="text-white text-xl font-semibold">
                Logo
              </Link>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-[#a05f5f] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center rounded-md px-3 py-2 text-base font-medium text-white hover:bg-[#a05f5f]"
                >
                  <item.icon className="mr-3 h-6 w-6" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
