import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { MenuIcon, ChevronDown, ArrowRight } from "lucide-react";

interface NavItem {
  name: string;
  link: string;
  dropdown?: {
    sections: {
      title?: string;
      items: DropdownItem[];
    }[];
  };
}

interface DropdownItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
}

const NeoBrutalistNavbar: React.FC = () => {
  const [activeDropdownIndex, setActiveDropdownIndex] = useState<number | null>(
    null
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const navItems: NavItem[] = [
    {
      name: "Features",
      link: "/features",
      dropdown: {
        sections: [
          {
            title: "Core Capabilities",
            items: [
              {
                label: "Automation Engine",
                href: "/features/automation",
                description: "Intelligent comment management",
                icon: <ArrowRight size={20} />,
              },
              {
                label: "Analytics Dashboard",
                href: "/features/analytics",
                description: "Real-time performance insights",
                icon: <ArrowRight size={20} />,
              },
            ],
          },
          {
            title: "Advanced Tools",
            items: [
              {
                label: "Smart Targeting",
                href: "/features/targeting",
                description: "Precision audience engagement",
                icon: <ArrowRight size={20} />,
              },
              {
                label: "Content Optimization",
                href: "/features/optimization",
                description: "AI-powered content strategies",
                icon: <ArrowRight size={20} />,
              },
            ],
          },
        ],
      },
    },
    {
      name: "Use Cases",
      link: "/use-cases",
      dropdown: {
        sections: [
          {
            title: "Industry Solutions",
            items: [
              {
                label: "E-commerce",
                href: "/use-cases/ecommerce",
                description: "Social commerce acceleration",
                icon: <ArrowRight size={20} />,
              },
              {
                label: "Personal Branding",
                href: "/use-cases/personal-branding",
                description: "Influencer growth strategies",
                icon: <ArrowRight size={20} />,
              },
            ],
          },
        ],
      },
    },
    {
      name: "Docs",
      link: "/docs",
      dropdown: {
        sections: [
          {
            title: "Developer Resources",
            items: [
              {
                label: "API Documentation",
                href: "/docs/api",
                description: "Comprehensive integration guide",
                icon: <ArrowRight size={20} />,
              },
              {
                label: "SDK References",
                href: "/docs/sdk",
                description: "Detailed programming interfaces",
                icon: <ArrowRight size={20} />,
              },
            ],
          },
        ],
      },
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (activeDropdownIndex !== null) {
        const navItemRect =
          navItemRefs.current[activeDropdownIndex]?.getBoundingClientRect();
        const dropdownRect =
          dropdownRefs.current[activeDropdownIndex]?.getBoundingClientRect();

        if (navItemRect && dropdownRect) {
          const isInNavItem =
            event.clientX >= navItemRect.left &&
            event.clientX <= navItemRect.right &&
            event.clientY >= navItemRect.top &&
            event.clientY <= navItemRect.bottom + 20; // Extend hover area

          const isInDropdown =
            event.clientX >= dropdownRect.left &&
            event.clientX <= dropdownRect.right &&
            event.clientY >= dropdownRect.top - 20 && // Extend hover area
            event.clientY <= dropdownRect.bottom;

          if (!isInNavItem && !isInDropdown) {
            setActiveDropdownIndex(null);
          }
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [activeDropdownIndex]);

  const GenZButton = ({ children, onClick, className }: any) => {
    const [isPressed, setIsPressed] = useState(false);

    return (
      <div
        className={` ${className} relative cursor-pointer select-none border-4 border-black bg-[#FFD700] px-4 py-2 text-sm font-bold uppercase text-black transition-transform duration-100 ease-in-out ${
          isPressed
            ? "translate-y-1 shadow-none"
            : "translate-y-0 shadow-[6px_6px_0px_black]"
        } `}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        onClick={onClick}
      >
        {children}
      </div>
    );
  };

  return (
    <header className="relative flex h-20 w-full items-center justify-between bg-[#F0F0F0] py-5">
      {/* Logo */}
      <div className="pl-5">
        <Link
          href="/"
          className="mr-2 flex justify-center border-4 border-black px-5 py-1 text-2xl font-extrabold text-black sm:px-10 sm:text-3xl"
        >
          PopDm
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden h-[5rem] flex-grow items-center justify-center gap-6 lg:flex">
        {navItems.map((item, index) => (
          <div
            key={index}
            // ref={(el) => (navItemRefs.current[index] = el)}
            className="group relative cursor-pointer"
            onMouseEnter={() =>
              setActiveDropdownIndex(item.dropdown ? index : null)
            }
            onMouseLeave={() => {
              // Add a small delay before closing to prevent accidental close
              setTimeout(() => {
                if (activeDropdownIndex === index) {
                  setActiveDropdownIndex(null);
                }
              }, 100);
            }}
          >
            <div className="flex items-center font-bold text-black transition-colors hover:text-[#FF6B6B]">
              {item.name}
              {item.dropdown && <ChevronDown size={16} className="ml-2" />}
            </div>
            <span className="absolute bottom-[-4px] left-0 h-1 w-0 bg-[#FF6B6B] transition-all duration-300 group-hover:w-full"></span>

            {item.dropdown && activeDropdownIndex === index && (
              <div
                // ref={(el) => (dropdownRefs.current[index] = el)}
                className="animate-dropdown absolute left-0 top-full z-50 mt-6 w-[600px] border-4 border-black bg-white p-6 shadow-2xl"
                style={{
                  boxShadow: "8px 8px 0px black",
                  borderBottom: "8px solid black",
                }}
              >
                <div className="grid grid-cols-2 gap-6">
                  {item.dropdown.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      {section.title && (
                        <h3 className="mb-4 border-b-2 border-black pb-2 text-sm font-bold uppercase tracking-wider text-black/70">
                          {section.title}
                        </h3>
                      )}
                      <div className="space-y-4">
                        {section.items.map((dropdownItem, itemIndex) => (
                          <Link
                            key={itemIndex}
                            href={dropdownItem.href}
                            className="group flex items-center rounded-lg border-2 border-transparent p-3 transition-all hover:border-black hover:bg-[#FF6B6B]/10"
                          >
                            {dropdownItem.icon && (
                              <div className="mr-4 text-black/70 transition-transform group-hover:translate-x-1">
                                {dropdownItem.icon}
                              </div>
                            )}
                            <div>
                              <div className="font-semibold text-black group-hover:text-[#FF6B6B]">
                                {dropdownItem.label}
                              </div>
                              {dropdownItem.description && (
                                <p className="text-sm text-black/60">
                                  {dropdownItem.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Action Buttons */}
      <div className="hidden items-center pr-10 lg:flex">
        <Link href="/auth/login">
          <GenZButton>Sign in</GenZButton>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex w-full justify-end bg-[#F0F0F0] pr-5 lg:hidden">
        <GenZButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <MenuIcon />
        </GenZButton>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute left-0 top-full w-full border-4 border-black bg-white shadow-2xl lg:hidden">
          {/* Mobile menu content remains the same */}
        </div>
      )}
    </header>
  );
};

export default NeoBrutalistNavbar;
