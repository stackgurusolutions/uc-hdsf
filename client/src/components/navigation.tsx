import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isCommitteeDropdownOpen, setIsCommitteeDropdownOpen] =
    useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/authors", label: "Call for Papers" },
    { path: "/#speakers", label: "Speakers", isHash: true },
    // { path: "/contact", label: "Contact" },
  ];

  // ONLY organizing committee for now
  const committeeItems = [
    {
      path: "/orgnizingcommittee",
      label: "Organizing Committee",
    },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-[#DDD6CE]">

      <div className="container mx-auto px-4">

        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <div className="flex items-center space-x-4">

            <Link href="/">
                <img
                  src="/logo1.png"
                  alt="UC-HDFS 2026 Logo"
                  className="h-14 w-auto cursor-pointer"
                />
              </Link>

            {/*
            <div className="hidden md:block text-sm text-gray-600">
              Nov 4-5, 2025 | Manipal University Jaipur
            </div>
            */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-4 items-center">

           {navItems.map((item) => {
                  const isSpeakerLink = item.path === "/#speakers";

                  return isSpeakerLink ? (
                    <button
                      key={item.path}
                      onClick={() => {
                        // If already on home page
                        const section = document.getElementById("speakers");

                        if (section) {
                          section.scrollIntoView({
                            behavior: "smooth",
                          });
                        } else {
                          // If on another page like /authors
                          window.location.href = "/#speakers";
                        }
                      }}
                    >
                      <Button
                        variant="ghost"
                        className="transition-all duration-200 font-medium rounded-md text-gray-700 hover:text-primary"
                      >
                        {item.label}
                      </Button>
                    </button>
                  ) : (
                    <Link key={item.path} href={item.path}>
                      <Button
                        variant={location === item.path ? "default" : "ghost"}
                        className={`
                          transition-all duration-200 font-medium rounded-md
                          ${
                            location === item.path
                              ? "text-white"
                              : "text-gray-700 hover:text-primary"
                          }
                        `}
                      >
                        {item.label}
                      </Button>
                    </Link>
                  );
                })}

            {/* Conference Committee Dropdown */}
            <div className="relative">

              <Button
                variant={
                  location === "/orgnizingcommittee"
                    ? "default"
                    : "ghost"
                }
                className={`
                  transition-all duration-200
                  font-medium
                  flex items-center space-x-1
                  rounded-md
                  ${location === "/orgnizingcommittee"
                    ? "text-white"
                    : "text-gray-700 hover:text-primary"
                  }
                `}
                onClick={() =>
                  setIsCommitteeDropdownOpen(
                    !isCommitteeDropdownOpen
                  )
                }
              >
                <span>Conference Committee</span>

                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${isCommitteeDropdownOpen ? "rotate-180" : ""
                    }`}
                />
              </Button>

              {isCommitteeDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-[#DDD6CE] rounded-lg shadow-xl z-50 overflow-hidden">

                  {committeeItems.map((item) => (
                    <Link key={item.path} href={item.path}>

                      <Button
                        variant="ghost"
                        className={`
                          w-full justify-start text-left
                          px-4 py-3 rounded-none
                          ${location === item.path
                            ? "bg-primary text-white hover:bg-primary"
                            : "text-gray-700 hover:text-primary hover:bg-gray-50"
                          }
                        `}
                        onClick={() =>
                          setIsCommitteeDropdownOpen(false)
                        }
                      >
                        {item.label}
                      </Button>

                    </Link>
                  ))}

                </div>
              )}
            </div>

            {/* Register */}
            <Link href="/registration">

              <Button className="bg-primary text-white hover:bg-primary/90 transition-all duration-200 rounded-md">
                Register
              </Button>

            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (

          <div className="lg:hidden pb-5 border-t border-[#EEEAE5] pt-4">

            <div className="flex flex-col space-y-3">

              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>

                  <Button
                    variant={
                      location === item.path
                        ? "default"
                        : "ghost"
                    }
                    className={`
                      w-full justify-start text-left
                      font-medium rounded-md
                      ${location === item.path
                        ? "text-white"
                        : "text-gray-700 hover:text-primary"
                      }
                    `}
                    onClick={() =>
                      setIsMobileMenuOpen(false)
                    }
                  >
                    {item.label}
                  </Button>

                </Link>
              ))}

              {/* Conference Committee Mobile */}
              <div>

                <Button
                  variant={
                    location === "/orgnizingcommittee"
                      ? "default"
                      : "ghost"
                  }
                  className={`
                    w-full justify-between
                    font-medium rounded-md
                    ${location === "/orgnizingcommittee"
                      ? "text-white"
                      : "text-gray-700 hover:text-primary"
                    }
                  `}
                  onClick={() =>
                    setIsCommitteeDropdownOpen(
                      !isCommitteeDropdownOpen
                    )
                  }
                >
                  <span>Conference Committee</span>

                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${isCommitteeDropdownOpen
                        ? "rotate-180"
                        : ""
                      }`}
                  />
                </Button>

                {isCommitteeDropdownOpen && (

                  <div className="ml-4 mt-2 space-y-2">

                    {committeeItems.map((item) => (
                      <Link key={item.path} href={item.path}>

                        <Button
                          variant="ghost"
                          className={`
                            w-full justify-start text-sm rounded-md
                            ${location === item.path
                              ? "bg-primary text-white hover:bg-primary"
                              : "text-gray-600 hover:text-primary"
                            }
                          `}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsCommitteeDropdownOpen(false);
                          }}
                        >
                          {item.label}
                        </Button>

                      </Link>
                    ))}

                  </div>
                )}

              </div>

              {/* Register Mobile */}
              <Link href="/registration">

                <Button
                  className="bg-primary text-white hover:bg-primary/90 transition-all duration-200 w-fit rounded-md"
                  onClick={() =>
                    setIsMobileMenuOpen(false)
                  }
                >
                  Register
                </Button>

              </Link>

            </div>

          </div>
        )}

      </div>

    </nav>
  );
}