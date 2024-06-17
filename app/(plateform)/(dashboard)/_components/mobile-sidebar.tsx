"use client"

import { Button } from "@/components/ui/button";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";


export const MobileSidebar = () => {

    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);

    const onOpen = useMobileSidebar((state) => state.onOpen);
    const onClose = useMobileSidebar((state) => state.onClose);
    const isOpen = useMobileSidebar((state) => state.isOpen);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    useEffect(() => {
        onClose();
    }, [pathname, onClose])

    if (!isMounted) return null;

    return (<div>
        <Button onClick={onOpen} variant="ghost" size="sm" className="block md:hidden mr-2">
            <Menu className="h-4 W-4" />
        </Button>

        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent
                side="left"
                className="p-2 pt-10"
            >
                <Sidebar
                    storageKey="t-mobile-sidebar-state"
                />
            </SheetContent>

        </Sheet>
    </div>)
}

export default MobileSidebar;