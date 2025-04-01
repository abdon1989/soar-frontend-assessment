import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { useSidebar } from "../context/SidebarContext";
import { SettingButton } from "../components/common/SettingButton";
import NotificationDropdown from "../components/header/NotificationDropdown";
import UserDropdown from "../components/header/UserDropdown";

type HeaderName = {
  name: string;
  path?: string;
};

const headerNames: HeaderName[] = [ 
  {
    name: "Overview",
    path: "/"
  },
  {
    name: "Setting",
    path: "/settings"
  },
]

const AppHeader: React.FC = () => {
  const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);

  const { isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar();

  const location = useLocation();

  const headerName = headerNames.find(header => header.path === location.pathname)?.name || 'Overview';

  const handleToggle = () => {
    if (window.innerWidth >= 1024) {
      toggleSidebar();
    } else {
      toggleMobileSidebar();
    }
  };

  const toggleApplicationMenu = () => {
    setApplicationMenuOpen(!isApplicationMenuOpen);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  return (
    <header className="sticky top-0 flex w-full bg-white border-gray-200 z-99999 lg:border-b">
      <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
        <div className="flex items-center justify-between w-full gap-2 px-3 py-3 dark:border-gray-800 sm:gap-4 lg:justify-normal lg:border-b lg:border-gray-200 lg:border-b-0 lg:px-0 lg:py-4 ">
          <button
            className="block w-10 h-10 text-gray-500 lg:hidden dark:text-gray-400"
            onClick={handleToggle}
            aria-label="Toggle Sidebar"
          >
            {isMobileOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.21967 7.28131C5.92678 6.98841 5.92678 6.51354 6.21967 6.22065C6.51256 5.92775 6.98744 5.92775 7.28033 6.22065L11.999 10.9393L16.7176 6.22078C17.0105 5.92789 17.4854 5.92788 17.7782 6.22078C18.0711 6.51367 18.0711 6.98855 17.7782 7.28144L13.0597 12L17.7782 16.7186C18.0711 17.0115 18.0711 17.4863 17.7782 17.7792C17.4854 18.0721 17.0105 18.0721 16.7176 17.7792L11.999 13.0607L7.28033 17.7794C6.98744 18.0722 6.51256 18.0722 6.21967 17.7794C5.92678 17.4865 5.92678 17.0116 6.21967 16.7187L10.9384 12L6.21967 7.28131Z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.583252 1C0.583252 0.585788 0.919038 0.25 1.33325 0.25H14.6666C15.0808 0.25 15.4166 0.585786 15.4166 1C15.4166 1.41421 15.0808 1.75 14.6666 1.75L1.33325 1.75C0.919038 1.75 0.583252 1.41422 0.583252 1ZM0.583252 11C0.583252 10.5858 0.919038 10.25 1.33325 10.25L14.6666 10.25C15.0808 10.25 15.4166 10.5858 15.4166 11C15.4166 11.4142 15.0808 11.75 14.6666 11.75L1.33325 11.75C0.919038 11.75 0.583252 11.4142 0.583252 11ZM1.33325 5.25C0.919038 5.25 0.583252 5.58579 0.583252 6C0.583252 6.41421 0.919038 6.75 1.33325 6.75L7.99992 6.75C8.41413 6.75 8.74992 6.41421 8.74992 6C8.74992 5.58579 8.41413 5.25 7.99992 5.25L1.33325 5.25Z"
                  fill="currentColor"
                />
              </svg>
            )}
            {/* Cross Icon */}
          </button>

          <h2 className="text-2xl font-semibold">{headerName}</h2>

          <div className="flex lg:hidden">
            <UserDropdown />
          </div>
        </div>
        <div
          className="flex items-center justify-between w-full gap-3 px-5 pt-0 pb-4 lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:py-4 lg:gap-6 lg:shadow-none"
        >
          <div className="w-full lg:flex lg:justify-end">
            <form>
              <div className="relative">
                <span className="absolute -translate-y-1/2 pointer-events-none left-4 top-1/2">
                  <svg
                    className="fill-gray-500"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.4271 18.0366L14.9271 13.5366C16.0305 12.1291 16.6667 10.3714 16.6667 8.5C16.6667 3.80558 12.8611 0 8.16667 0C3.47225 0 -0.333333 3.80558 -0.333333 8.5C-0.333333 13.1944 3.47225 17 8.16667 17C10.0381 17 11.7958 16.3638 13.2033 15.2604L17.7033 19.7604C17.8962 19.9533 18.1501 20.05 18.4041 20.05C18.658 20.05 18.9119 19.9533 19.1048 19.7604C19.4906 19.3746 19.4906 18.7411 19.1048 18.3553L19.4271 18.0366ZM8.16667 15.5C4.14921 15.5 0.833333 12.1841 0.833333 8.16667C0.833333 4.14921 4.14921 0.833333 8.16667 0.833333C12.1841 0.833333 15.5 4.14921 15.5 8.16667C15.5 12.1841 12.1841 15.5 8.16667 15.5Z"
                      fill=""
                    />
                  </svg>
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search for something"
                  className="h-11 w-full rounded-full bg-gray-100 py-2.5 pl-12 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10"
                />
              </div>
            </form>
          </div>

          <div className="hidden lg:flex items-center gap-3 lg:gap-6">
            <SettingButton />
            {/* <!-- Notification Menu Area --> */}
            <NotificationDropdown />
            {/* <!-- User Area --> */}
            <UserDropdown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
