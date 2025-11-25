export interface NavItem {
    label: string;
    href?: string;
    children?: NavItem[];
    isMega?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "University",
        children: [
            { label: "About Us", href: "/about" },
            { label: "Administration", href: "/admin" },
            { label: "History", href: "/history" },
            { label: "Campus Life", href: "/campus" },
        ],
    },
    {
        label: "Academics",
        children: [
            { label: "Departments", href: "/departments" },
            { label: "Centers", href: "/centers" },
            { label: "Courses", href: "/courses" },
            { label: "Academic Calendar", href: "/calendar" },
        ],
    },
    {
        label: "Portals",
        isMega: true,
        children: [
            { label: "Student Portal", href: "/student-portal" },
            { label: "Faculty Portal", href: "/faculty-portal" },
            { label: "Admission Module", href: "/admissions" },
            { label: "Examination System", href: "/examination" },
            { label: "GUCDOE Website", href: "/gucdoe" },
            { label: "MMTC Website", href: "/mmtc" },
            { label: "GU Journals Portal", href: "/journals" },
        ],
    },
    {
        label: "Notices & Events",
        children: [
            { label: "All Notices", href: "/notices" },
            { label: "Events", href: "/events" },
            { label: "Tenders", href: "/tenders" },
        ],
    },
    {
        label: "Research",
        href: "/research",
    },
    {
        label: "Contact",
        href: "/contact",
    },
];
