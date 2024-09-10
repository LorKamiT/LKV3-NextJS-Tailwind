export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "LKV3 NextJS",
  description: "Pre By LK",
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Segunda pagina",
      href: "/segundapagina",
    },
  ],
  navMenuItems: [
    {
      label: "Profile Hamburguesa",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
  ],
  links: {
    discord: "https://discord.gg/QbZ9UUpc6W",
    twitter: "https://x.com/LorKami2",
    github: "https://github.com/LorKami",
  },
};
