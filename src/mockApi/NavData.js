const NavData = [
  {
    page: "TechStackPage",
    htmlText: "Tech Stacks",
    link: "/",
    newTab: false,
    order:1,
  },
  {
    page: "CompLibraryPage",
    htmlText: "Component Library",
    link: "/component-library",
    newTab: false,
    order:1,
  },
  {
    page: "ProjectStructurePage",
    htmlText: "Project Structure",
    link: "/project-structure",
    newTab: false,
    order:1,
  },
  {
    page: "UtilityListingsPage",
    htmlText: "Utilities",
    link: "/utilities",
    newTab: false,
    order:1,
  },
  {
    page: "TestNavPage",
    htmlText: "TestNav",
    link: "/testNav",
    newTab: false,
    order:1,
    subMenu: [
      {
        page: "FormEx",
        htmlText: "FormEx",
        link: "/form",
        newTab: false,
        order:2,
      },
      {
        page: "Subnav2",
        htmlText: "Subnav2",
        link: "/2",
        newTab: false,
        order:2,
        subMenu: [
          {
            page: "NestedNav",
            htmlText: "NestedNav",
            link: "/3",
            newTab: false,
            order:3,
          },
        ],
      },
    ],
  },
];

export default NavData;
