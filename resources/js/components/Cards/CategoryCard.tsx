
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { BookOpenCheckIcon, EditIcon, MoreVertical, Trash2Icon } from "lucide-react";
import { SidebarMenuSubButton } from "../ui/sidebar";
import { router } from "@inertiajs/react";
import { toast } from "sonner";
import { Category } from "@/types";



export function CategoryCard({ category }: { category: Category }) {


    return (
        <Card className={''}>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <SidebarMenuSubButton className="text-sidebar-accent-foreground data-[state=open]:bg-sidebar-accent group">

                        <MoreVertical className="ml-auto size-4" />
                    </SidebarMenuSubButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className="w- min-w-56 rounded-lg"
                    align="end"

                >

                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem asChild>
                            <button className="cursor-pointer w-full" onClick={(e) => router.get(route('categories.edit',category.id))}>
                              <EditIcon className="text-blue-500"/>   Edit
                            </button>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                        <button className="cursor-pointer w-full" onClick={
                            () =>{
                                router.post(route('categories.destroy',category.id),{},{
                                    preserveScroll:true,
                                    onSuccess:()=>{
                                        toast.success('Book has been successfully deleted.');
                                    }
                                })
                                 }}>
                          <Trash2Icon className="text-red-500"/>    Delete
                        </button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <CardHeader>
                <CardTitle>{category.name}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                    <img src={category.image} alt="" className="object w-full " />
                </div>
                <div>

                </div>
            </CardContent>
            <CardFooter>

            </CardFooter>

        </Card>
    )
}
