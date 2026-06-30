import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
};

export default function Container(props: Props) {
    const { children, className } = props;

    return (
        <div className={cn("max-w-7xl mx-auto w-full", className)}>
            {children}
        </div>
    );
}