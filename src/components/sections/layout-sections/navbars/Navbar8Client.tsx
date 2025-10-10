"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

type ImageProps = {
  url?: string
  src: string
  alt?: string
}

type SubMenuLink = {
  url: string
  image?: ImageProps
  title: string
  description?: string
}

type LinkGroup = {
  title: string
  subMenuLinks: SubMenuLink[]
}

type RightLinkGroup = LinkGroup

type MegaMenuProps = {
  linkGroups: LinkGroup[]
  rightLinkGroup: RightLinkGroup
}

type NavLink = {
  url: string
  title: string
  megaMenu?: MegaMenuProps
}

type ButtonProps = {
  title: string
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
}

type Props = {
  logo: ImageProps
  navLinks: NavLink[]
  buttons: ButtonProps[]
}

export type Navbar8ClientProps = Props

export const Navbar8Client = ({ logo, navLinks, buttons }: Navbar8ClientProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <section className="relative z-[999] flex min-h-16 w-full items-center border-b border-border bg-background px-[5%] md:min-h-18">
      <div className="mx-auto flex size-full max-w-full items-center justify-between">
        <a href={logo.url}>
          <img src={logo.src || "/placeholder.svg"} alt={logo.alt} />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:ml-6 lg:flex lg:flex-1 lg:items-center lg:justify-between">
          <div className="flex flex-row items-center">
            {navLinks.map((navLink, index) =>
              navLink.megaMenu ? (
                <SubMenu key={index} megaMenu={navLink.megaMenu} title={navLink.title} />
              ) : (
                <a
                  key={index}
                  href={navLink.url}
                  className="relative block px-4 py-6 text-base transition-colors hover:text-primary"
                >
                  {navLink.title}
                </a>
              ),
            )}
          </div>
          <div className="flex items-center gap-4">
            {buttons.map((button, index) => (
              <Button key={index} variant={button.variant} size={button.size}>
                {button.title}
              </Button>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="-mr-2 flex size-12 cursor-pointer items-center justify-center lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 right-0 top-full w-full overflow-hidden transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? "max-h-[100dvh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="block h-auto overflow-auto border-b border-border bg-background px-[5%] pb-8 pt-4">
          <div className="flex flex-col">
            {navLinks.map((navLink, index) =>
              navLink.megaMenu ? (
                <SubMenuMobile key={index} megaMenu={navLink.megaMenu} title={navLink.title} />
              ) : (
                <a key={index} href={navLink.url} className="block py-3 text-base">
                  {navLink.title}
                </a>
              ),
            )}
            <div className="mt-6 flex flex-col gap-4">
              {buttons.map((button, index) => (
                <Button key={index} variant={button.variant} size={button.size}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const SubMenu = ({
  title,
  megaMenu,
}: {
  title: string
  megaMenu: MegaMenuProps
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <button
        className="flex items-center gap-2 px-4 py-6 text-base transition-colors hover:text-primary"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>{title}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`fixed left-0 right-0 top-[var(--navbar-height,4rem)] w-screen overflow-hidden border-b border-border bg-background transition-all duration-200 ${
          isDropdownOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex size-full max-w-full items-start justify-between px-[5%]">
          <div className="flex w-full flex-row">
            <div className="grid flex-1 grid-cols-1 gap-x-8 gap-y-6 py-8 md:grid-cols-3 lg:gap-y-0 lg:pr-8">
              {megaMenu.linkGroups.map((linkGroup, index) => (
                <div key={index} className="flex flex-col gap-y-4">
                  <h4 className="text-sm font-semibold leading-[1.3]">{linkGroup.title}</h4>
                  {linkGroup.subMenuLinks.map((subMenuLink, subIndex) => (
                    <a
                      key={subIndex}
                      href={subMenuLink.url}
                      className="grid auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2 transition-colors hover:text-primary"
                    >
                      {subMenuLink.image && (
                        <div className="flex size-6 flex-col items-center justify-center">
                          <img
                            src={subMenuLink.image.src || "/placeholder.svg"}
                            alt={subMenuLink.image.alt}
                            className="shrink-0"
                          />
                        </div>
                      )}
                      <div className="flex flex-col items-start justify-center">
                        <h5 className="font-semibold">{subMenuLink.title}</h5>
                        {subMenuLink.description && (
                          <p className="hidden text-sm text-muted-foreground md:block">{subMenuLink.description}</p>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              ))}
            </div>
            <div className="relative mb-0 flex w-full max-w-[14rem] bg-secondary p-6 md:py-8 md:pl-8">
              <div className="relative z-10 grid w-full auto-rows-max grid-cols-1 gap-4">
                <div className="flex flex-col items-start">
                  <h4 className="text-sm font-semibold leading-[1.3]">{megaMenu.rightLinkGroup.title}</h4>
                </div>
                {megaMenu.rightLinkGroup.subMenuLinks.map((subMenuLink, index) => (
                  <a key={index} href={subMenuLink.url} className="text-sm transition-colors hover:text-primary">
                    {subMenuLink.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SubMenuMobile = ({
  title,
  megaMenu,
}: {
  title: string
  megaMenu: MegaMenuProps
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div>
      <button
        className="flex w-full items-center justify-between py-3 text-base"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>{title}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isDropdownOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex w-full flex-col py-4">
          {megaMenu.linkGroups.map((linkGroup, index) => (
            <div key={index} className="mb-6 flex flex-col gap-y-2">
              <h4 className="text-sm font-semibold leading-[1.4]">{linkGroup.title}</h4>
              {linkGroup.subMenuLinks.map((subMenuLink, subIndex) => (
                <a
                  key={subIndex}
                  href={subMenuLink.url}
                  className="grid auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                >
                  {subMenuLink.image && (
                    <div className="flex size-6 flex-col items-center justify-center">
                      <img
                        src={subMenuLink.image.src || "/placeholder.svg"}
                        alt={subMenuLink.image.alt}
                        className="shrink-0"
                      />
                    </div>
                  )}
                  <div className="flex flex-col items-start justify-center">
                    <h5 className="font-semibold">{subMenuLink.title}</h5>
                    {subMenuLink.description && (
                      <p className="text-sm text-muted-foreground">{subMenuLink.description}</p>
                    )}
                  </div>
                </a>
              ))}
            </div>
          ))}
          <div className="mb-4 flex flex-col gap-4 border-t border-border pt-4">
            <h4 className="text-sm font-semibold leading-[1.4]">{megaMenu.rightLinkGroup.title}</h4>
            {megaMenu.rightLinkGroup.subMenuLinks.map((subMenuLink, index) => (
              <a key={index} href={subMenuLink.url} className="text-sm">
                {subMenuLink.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const Navbar8Defaults: Props = {
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Logo image",
  },
  navLinks: [
    { title: "Link One", url: "#" },
    { title: "Link Two", url: "#" },
    { title: "Link Three", url: "#" },
    {
      title: "Link Four",
      url: "#",
      megaMenu: {
        linkGroups: [
          {
            title: "Page group one",
            subMenuLinks: [
              {
                url: "#",
                image: {
                  src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
                  alt: "Icon 1",
                },
                title: "Page One",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
                  alt: "Icon 2",
                },
                title: "Page Two",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
                  alt: "Icon 3",
                },
                title: "Page Three",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
                  alt: "Icon 4",
                },
                title: "Page Four",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
            ],
          },
          {
            title: "Page group two",
            subMenuLinks: [
              {
                url: "#",
                image: {
                  src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
                  alt: "Icon 5",
                },
                title: "Page Five",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
                  alt: "Icon 6",
                },
                title: "Page Six",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
                  alt: "Icon 7",
                },
                title: "Page Seven",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
                  alt: "Icon 8",
                },
                title: "Page Eight",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
            ],
          },
          {
            title: "Page group three",
            subMenuLinks: [
              {
                url: "#",
                image: {
                  src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
                  alt: "Icon 9",
                },
                title: "Page Nine",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
                  alt: "Icon 10",
                },
                title: "Page Ten",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
                  alt: "Icon 11",
                },
                title: "Page Eleven",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
                  alt: "Icon 12",
                },
                title: "Page Twelve",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
            ],
          },
        ],
        rightLinkGroup: {
          title: "Page group four",
          subMenuLinks: [
            {
              url: "#",
              title: "Link one",
            },
            {
              url: "#",
              title: "Link two",
            },
            {
              url: "#",
              title: "Link three",
            },
            {
              url: "#",
              title: "Link four",
            },
            {
              url: "#",
              title: "Link five",
            },
          ],
        },
      },
    },
  ],
  buttons: [
    {
      title: "Button",
      variant: "secondary",
      size: "sm",
    },
    {
      title: "Button",
      variant: "default",
      size: "sm",
    },
  ],
}
