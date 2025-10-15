import SpeedIcon from "@mui/icons-material/Speed";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export type headerNavItemsType = {
  title: string;
  route: string;
  keywords?: string[];
  otherOptions: {
    isActive: boolean;
    data: { title: string; route: string; isLive: boolean }[];
  } | null;
  isVisible: boolean;
  icons?: any;
  isActive?: boolean;
  sectionId?: string;
}[];

export type footerNavItemsTypes = {
  title: string;
  otherOptions: {
    title: string;
    route: string;
    isPriority: boolean;
  }[];
}[];

export const headerNavItems: headerNavItemsType = [
  {
    title: "Home",
    route: "/",
    keywords: ["/"],
    otherOptions: null,
    isVisible: true,
    sectionId: "home",
  },

  {
    title: "Our Mission",
    route: "/properties",
    keywords: [""],
    otherOptions: null,
    isVisible: true,
    sectionId: "our-mission",
  },
  {
    title: "What We Do",
    route: "/developers",
    keywords: [""],
    otherOptions: null,
    isVisible: true,
    sectionId: "what-we-do",
  },
  {
    title: "Contact Us",
    route: "/mortgage-banks",
    keywords: [""],
    otherOptions: null,
    isVisible: true,
    sectionId: "contact-us",
  },
];

export const footerNavItems: footerNavItemsTypes = [
  {
    title: "Legal",
    otherOptions: [
      {
        title: "Privacy Policy",
        route: "/privacy-policy",
        isPriority: false,
      },
      {
        title: "Terms & Conditions",
        route: "/terms-and-conditions",
        isPriority: false,
      },
    ],
  },

  {
    title: "Contact Us",
    otherOptions: [
      {
        title: "info@strathmore.com",
        route: "/",
        isPriority: false,
      },

      {
        title: "Phone",
        route: "/",
        isPriority: true,
      },
    ],
  },
];

export const sideNavItems: headerNavItemsType = [
  {
    title: "DASHBOARD",
    route: "/dashboard",
    keywords: ["dashboard"],
    otherOptions: null,
    isVisible: true,
    icons: <SpeedIcon />,
  },

  {
    title: "PROPERTIES",
    route: "/properties",
    keywords: ["properties"],
    otherOptions: null,
    isVisible: true,
    icons: <CottageOutlinedIcon />,
  },

  {
    title: "APPLICATIONS",
    route: "/applications",
    keywords: ["applications"],
    otherOptions: null,
    isVisible: true,
    icons: <EditNoteOutlinedIcon />,
  },
  {
    title: "APPLICATION REVIEW",
    route: "/application-review",
    keywords: ["application-review"],
    otherOptions: null,
    isVisible: true,
    icons: <FindInPageOutlinedIcon />,
  },
  {
    title: "VIEWING REQUESTS",
    route: "/viewing-requests",
    keywords: ["viewing-requests"],
    otherOptions: null,
    isVisible: true,
    icons: <RemoveRedEyeOutlinedIcon />,
  },
  {
    title: "PROSPECTS",
    route: "/prospects",
    keywords: ["prospects"],
    otherOptions: null,
    isVisible: true,
    icons: <MapsHomeWorkOutlinedIcon />,
  },
  {
    title: "DEVELOPERS",
    route: "/developers",
    keywords: ["developers"],
    otherOptions: null,
    isVisible: true,
    icons: <EngineeringOutlinedIcon />,
  },
  {
    title: "PLANS",
    route: "/plans",
    keywords: ["plans"],
    otherOptions: null,
    isVisible: true,
    icons: <DescriptionOutlinedIcon />,
  },
  {
    title: "MORTGAGES",
    route: "/mortgages",
    keywords: ["mortgages"],
    otherOptions: null,
    isVisible: true,
    icons: <FolderCopyOutlinedIcon />,
  },
  {
    title: "TRANSACTIONS & EARNINGS",
    route: "/transactions-and-earnings/summary",
    keywords: [
      "transactions-and-earnings",
      "transactions-and-earnings/summary",
    ],
    otherOptions: null,
    isVisible: true,
    icons: <CurrencyExchangeOutlinedIcon />,
  },
  {
    title: "DEBT RECOVERY",
    route: "/debt-revovery",
    keywords: ["debt-revovery"],
    otherOptions: null,
    isVisible: true,
    icons: <HistoryOutlinedIcon />,
  },
  {
    title: "ACCOUNT & SETTINGS",
    route: "/account-and-settings",
    keywords: ["account-and-settings"],
    otherOptions: {
      isActive: false,
      data: [{ title: "Company", route: "/company", isLive: true }],
    },
    isVisible: true,
    icons: <PersonOutlineOutlinedIcon />,
  },
];
