import { icons } from "@/assets/icons";

const navItems = [
   { label: "Dashboard", icon: icons.homeIcon },
   { label: "Accounting", icon: icons.accountingIcon },
   { label: "Banking", icon: icons.bankingIcon },
   { label: "Reports", icon: icons.reportsIcon },
   { label: "Contacts", icon: icons.contactsIcon },
   { label: "Invoicing", icon: icons.invoiceIcon },
   { label: "Queries", icon: icons.queriesIcon },
];

export const Sidebar = () => {
   return (
      <aside className="bg-primary w-full h-full sticky top-0 overflow-y-auto max-h-screen">
         <div className="h-20 flex items-center justify-center">
            <img
               src={icons.mainLogo}
               alt="Peak Advisory"
               className="inline-block"
            />
         </div>
         <nav>
            <ul>
               {navItems.map((item) => (
                  <NavItem
                     key={item.label}
                     label={item.label}
                     icon={item.icon}
                  />
               ))}
               <div className="mt-32">
                  <NavItem label="Help" icon={icons.queriesIcon} />
               </div>
            </ul>
         </nav>
      </aside>
   );
};

const NavItem = ({ label, icon }: { label: string; icon: string }) => {
   return (
      <li className="p-4 hover:border-l-4 hover:border-white hover:opacity-80 transition ease-in-out delay-200">
         <a href="/" className="flex flex-col items-center gap-1 ">
            <div>
               <img src={icon} alt={`${label} Icon`} className="w-6 h-auto" />
            </div>
            <span className="text-xs text-white">{label}</span>
         </a>
      </li>
   );
};
