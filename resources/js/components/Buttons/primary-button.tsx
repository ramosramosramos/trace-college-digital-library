import { Button } from "@headlessui/react";
import { LoaderCircle } from "lucide-react";


import { cn } from "@/lib/utils";
export default function PrimaryButton({
    className,
    children,
    ...props
}: React.ComponentProps<typeof Button>) {

    return (
        <Button {...props} className={cn("mt-4 w-full bg-background hover:bg-background/90 cursor-pointer",className)} >
            {children}
        </Button>
    );
}
