import { Outlet } from "react-router-dom";
import { NavbarLayout } from "./NavbarLayout";
import SidebarCustomLayout from "./SidebarCustomLayout";
import { FooterCustomLayout } from "./FooterCustomLayout";

export default function RootLayout() {
    return (
        <div className="flex flex-row">
            <div className="md:basis-1/6 relative hidden lg:block">
                <SidebarCustomLayout />
            </div>
            <div className="md:basis5/6 sm:basis-full bg-[#f4f7fe]">
                <main>
                    <NavbarLayout />
                    <div className="overflow-auto p-5">
                        <Outlet />
                    </div>
                </main>

                <footer className="relative bottom-0 mt-auto">
                    <FooterCustomLayout />
                </footer>
            </div>
        </div>
    );
}
