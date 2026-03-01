import React from "react";
import clsx from "clsx";

export interface NavbarLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface NavbarProps {
  logo?: React.ReactNode;
  links?: NavbarLink[];
  rightContent?: React.ReactNode;
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  logo,
  links = [],
  rightContent,
  className,
}) => {
  const baseClasses =
    "flex items-center justify-between h-8 px-2 bg-hd-bg-light dark:bg-hd-dark-bg border-b border-hd-border dark:border-hd-dark-border transition-colors";

  return (
    <header className={clsx(baseClasses, className)}>
      <div className="flex items-center gap-2">
        {logo && <div className="flex-shrink-0">{logo}</div>}
        <nav className="flex items-center h-full">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={clsx(
                "flex items-center h-8 px-2 text-[10px] font-medium transition-colors border-b-2",
                link.active
                  ? "text-hd-focus border-hd-focus"
                  : "text-hd-primary dark:text-hd-dark-text border-transparent hover:text-hd-focus hover:bg-hd-bg-dark dark:hover:bg-hd-dark-bg-alt"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      {rightContent && (
        <div className="flex items-center gap-1">{rightContent}</div>
      )}
    </header>
  );
};
