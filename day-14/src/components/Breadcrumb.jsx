import { ChevronRight, HomeIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPageTitle }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link
            to={"/"}
            className="inline-flex gap-x-2 items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <HomeIcon />
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight />
            <p className="text-sm">{currentPageTitle}</p>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
