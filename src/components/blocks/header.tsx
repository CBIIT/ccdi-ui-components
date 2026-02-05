'use client';

import React, { useState, useRef, useEffect } from 'react';
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
// import { Icon } from "@/components/ui/icon"
import { Search } from '@/components/ui/search';

interface NavItem {
  id: string;
  label: string;
  href?: string;
  hasSubmenu?: boolean;
  submenu?: NavItem[];
}

interface USWDSNavbarProps {
  logo?: React.ReactNode;
  navItems: NavItem[];
  className?: string;
}

const uswdsNavItems = [
  {
    id: 'home',
    label: 'Home',
    href: '/'
  },
  {
    id: 'index-studies',
    label: 'Index of NCI Studies',
    href: '/studies'
  },
  {
    id: 'data-guidance',
    label: 'Data Sharing Guidance',
    hasSubmenu: true,
    submenu: [
      { id: 'guidance-nci-expectations', label: 'NCI Expectations for Genomic Data Sharing (GDS Policy)', href: '/guidance/gds-policy' },
      { id: 'guidance-nih-policy', label: 'NIH Data Sharing Guidance', href: '/guidance/nih-policy' },
      { id: 'guidance-dms-plan', label: 'How to Write a Data Management and Sharing (DMS) Plan', href: '/guidance/dms-plan' },
      { id: 'guidance-compliance', label: 'Compliance Requirements', href: '/guidance/compliance' },
    ]
  },
  {
    id: 'data-processes',
    label: 'Data Sharing Processes',
    hasSubmenu: true,
    submenu: [
      { id: 'processes-submission', label: 'Data Submission Process', href: '/processes/submission' },
      { id: 'processes-review', label: 'Review and Approval', href: '/processes/review' },
      { id: 'processes-timeline', label: 'Timeline and Deadlines', href: '/processes/timeline' },
    ]
  },
  {
    id: 'data-tools',
    label: 'Data Tools & Resources',
    href: '/tools'
  },
  {
    id: 'news',
    label: 'News',
    hasSubmenu: true,
    submenu: [
      { id: 'news-announcements', label: 'Announcements', href: '/news/announcements' },
      { id: 'news-updates', label: 'Updates', href: '/news/updates' },
      { id: 'news-events', label: 'Events', href: '/news/events' },
    ]
  },
  {
    id: 'about',
    label: 'About',
    hasSubmenu: true,
    submenu: [
      { id: 'about-overview', label: 'Overview', href: '/about' },
      { id: 'about-team', label: 'Team', href: '/about/team' },
      { id: 'about-contact', label: 'Contact', href: '/about/contact' },
    ]
  }
];

export default function USWDSNavbar({ logo, navItems, className }: USWDSNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSecondaryMenu, setActiveSecondaryMenu] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const navButtonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const navItemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Handle responsive behavior
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);


  // Handle dropdown clicks
  const handleDropdownClick = (itemId: string) => {
    if (isMobile) {
      setActiveSecondaryMenu(activeSecondaryMenu === itemId ? null : itemId);
    } else {
      // If clicking the same item that's already open, close it. Otherwise, open the new one.
      if (activeDropdown === itemId) {
        setActiveDropdown(null);
      } else {
        setActiveDropdown(itemId);
      }
    }
  };

  // Handle outside clicks for dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isMobile) {
        const target = event.target as HTMLElement;
        
        // Don't close if clicking on a navigation button
        const isNavButton = Object.values(navButtonRefs.current).some(ref => 
          ref && ref.contains(target)
        );
        if (isNavButton) {
          return;
        }
        
        // Don't close if clicking inside the dropdown
        const isInsideDropdown = Object.values(dropdownRefs.current).some(ref => 
          ref && ref.contains(target)
        );
        if (isInsideDropdown) {
          return;
        }
        
        // Close dropdown if clicking outside
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile]);

  // Handle mobile menu outside clicks
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
        setActiveSecondaryMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const renderDesktopNavItem = (item: NavItem) => {
    const hasSubmenu = item.hasSubmenu && item.submenu && item.submenu.length > 0;
    const isActive = activeDropdown === item.id;

    return (
      <div key={item.id} ref={el => { navItemRefs.current[item.id] = el; }} className="relative">
        {hasSubmenu ? (
          <button
            ref={el => { navButtonRefs.current[item.id] = el; }}
            onClick={(e) => {
              e.stopPropagation();
              handleDropdownClick(item.id);
            }}
            className={cn(
              "flex items-center px-5 py-3 text-base font-semibold whitespace-nowrap focus:outline focus:outline-4 focus:outline-blue-40",
              isActive 
                ? "bg-[#1f4671] text-white" 
                : "text-[#585c65] hover:text-gray-900"
            )}
          >
            <span>{item.label}</span>
            <svg
              className={cn(
                "ml-2 h-4 w-4",
                isActive && "rotate-180"
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        ) : (
          <a
            href={item.href}
            className="block px-5 py-3 text-base font-semibold whitespace-nowrap text-[#585c65] hover:text-gray-900 focus:outline focus:outline-4 focus:outline-blue-40"
          >
            {item.label}
          </a>
        )}

        {/* Desktop Dropdown - Figma Style */}
        {hasSubmenu && isActive && (
          <div
            ref={el => { 
              dropdownRefs.current[item.id] = el;
              if (el && navContainerRef.current && navItemRefs.current[item.id]) {
                const navItemRect = navItemRefs.current[item.id]!.getBoundingClientRect();
                const navContainerRect = navContainerRef.current.getBoundingClientRect();
                el.style.left = `${navContainerRect.left - navItemRect.left}px`;
                el.style.right = `${navItemRect.right - navContainerRect.right}px`;
                el.style.width = `${navContainerRef.current.offsetWidth}px`;
              }
            }}
            className="fixed left-0 right-0 z-50 bg-[#1f4671] shadow-lg"
          >
            <div className="mx-auto flex gap-[123px] px-8 py-9 ">
              <div className="flex flex-col gap-8">
                <h3 className="text-white text-xl font-semibold">
                  {item.label}
                </h3>
              </div>
              <div className="flex flex-col gap-5">
                {item.submenu?.slice(0, 3).map(subItem => (
                  <a
                    key={subItem.id}
                    href={subItem.href}
                    onClick={() => setActiveDropdown(null)}
                    className="text-white text-xl font-semibold hover:underline"
                  >
                    {subItem.label}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-5">
                {item.submenu?.slice(3, 6).map(subItem => (
                  <a
                    key={subItem.id}
                    href={subItem.href}
                    onClick={() => setActiveDropdown(null)}
                    className="text-white text-xl font-semibold hover:underline"
                  >
                    {subItem.label}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-5">
                {item.submenu?.slice(6).map(subItem => (
                  <a
                    key={subItem.id}
                    href={subItem.href}
                    onClick={() => setActiveDropdown(null)}
                    className="text-white text-xl font-semibold hover:underline"
                  >
                    {subItem.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderMobileNavItem = (item: NavItem, isSecondary = false) => {
    const hasSubmenu = item.hasSubmenu && item.submenu && item.submenu.length > 0;
    const isActive = isSecondary ? activeSecondaryMenu === item.id : false;

    if (isSecondary) {
      return (
        <div key={item.id} className="border-t border-gray-10">
          <button
            onClick={() => hasSubmenu && handleDropdownClick(item.id)}
            className={cn(
              "text-left group relative flex items-center justify-between w-full py-3 pl-4 leading-none hover:bg-gray-5 focus:z-10 focus:outline focus:outline-4 focus:outline-blue-40 gap-3",
              hasSubmenu && "flex items-center justify-between"
            )}
          >
            <span className="text-[#3d4551] group-hover:text-blue-60">
              {item.label}
            </span>
            {hasSubmenu && (
              <svg
                className={cn(
                  "ml-2 h-4 w-4",
                  isActive && "rotate-180"
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </button>
          {hasSubmenu && isActive && (
            <ul>
              {item.submenu?.map(subItem => (
                <li key={subItem.id} className="border-t border-gray-10">
                  <a
                    href={subItem.href}
                    onClick={() => {
                      setActiveSecondaryMenu(null);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block py-2 pl-8 pr-4 text-[#3d4551] hover:text-blue-60 hover:bg-gray-5 focus:outline focus:outline-4 focus:outline-blue-40"
                  >
                    {subItem.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    }

    return (
      <div key={item.id} className="border-t border-gray-10">
        <button
          onClick={() => hasSubmenu && handleDropdownClick(item.id)}
          className={cn(
            "text-left group relative flex items-center justify-between w-full py-3 pl-4 leading-none hover:bg-gray-5 focus:z-10 focus:outline focus:outline-4 focus:outline-blue-40 gap-3",
            hasSubmenu && "flex items-center justify-between"
          )}
        >
          <span className="text-[#3d4551] group-hover:text-blue-60">
            {item.label}
          </span>
          {hasSubmenu && (
            <svg
              className={cn(
                "ml-2 h-4 w-4",
                isActive && "rotate-180"
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </button>
        {hasSubmenu && isActive && (
          <ul>
            {item.submenu?.map(subItem => (
              <li key={subItem.id} className="border-t border-gray-10">
                <a
                  href={subItem.href}
                  className="block py-2 pl-8 pr-4 text-[#3d4551] hover:text-blue-60 hover:bg-gray-5 focus:outline focus:outline-4 focus:outline-blue-40"
                >
                  {subItem.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div ref={navbarRef} className={cn("bg-white", className)}>

      {/* Main Header - Figma Layout */}
      <div className="max-w-[1400px] mx-auto px-8 py-8 pb-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          {logo || (
            <img src="https://www.cancer.gov/profiles/custom/cgov_site/themes/custom/cgov/static/images/design-elements/logos/nci-logo-full.svg" alt="Data Sharing Hub" className="h-12 w-auto" />
          )}
        </div>

        {/* Search Bar - Using USWDS Search Component */}
        <div className="w-80">
          <Search
            label="Search Data Sharing Hub"
            buttonText="Search"
            onSearch={(value) => console.log("Search:", value)}
          />
        </div>
      </div>

      {/* Navigation - Figma Colors and Layout */}
      <div ref={navContainerRef} className="max-w-[1400px] mx-auto px-8 relative">
        <div className="flex items-center h-12 ">
          {/* Desktop Navigation */}
          <div className="hidden -mx-4 lg:flex lg:items-center lg:space-x-0">
            {navItems.map(item => renderDesktopNavItem(item))}
          </div>

          {/* Mobile menu button - Using USWDS Button */}
          <div className="flex items-center lg:hidden">
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-[#1f4671] hover:bg-[#0f2a4a] text-white px-4 py-2 rounded font-bold text-lg"
            >
              Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay - Figma Style */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-gray-400/20" onClick={() => setIsMobileMenuOpen(false)} />
          <div ref={mobileMenuRef} className="absolute left-0 top-0 h-full w-80 bg-white shadow-xl">
            <div className="p-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[#007bbd] text-lg font-semibold">Main Menu</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-700 focus:outline focus:outline-4 focus:outline-blue-40"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-0">
                {navItems.map(item => renderMobileNavItem(item, true))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
