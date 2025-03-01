
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { ChevronsUpDownIcon, MoreVertical } from "lucide-react";
import { SidebarMenuSubButton } from "../ui/sidebar";
import { Link, router } from "@inertiajs/react";
import { useMobileNavigation } from "@/hooks/use-mobile-navigation";
type Book = {
    id: string;
    title: string;  // Remove `| undefined`
    author?: string;
    image?: string;
    file?: string;

};


export function BookCard({ book }: { book: Book }) {
    const cleanup = useMobileNavigation();
    console.log(book.title)
    return (
        <Card className={''}>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <SidebarMenuSubButton className="text-sidebar-accent-foreground data-[state=open]:bg-sidebar-accent group">
                        {/* <UserInfo user={auth.user} /> */}
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
                            <button className="cursor-pointer w-full" onClick={(e) => router.get(route('books.edit',book.id))}>
                                Edit
                            </button>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                        <button className="cursor-pointer w-full" onClick={(e) => console.log('clicke')}>
                            Delete
                        </button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <CardHeader>
                <CardTitle>{book.title}</CardTitle>
                <CardDescription>{book.author}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                    <img src={book.image} alt="" className="object w-full " />
                </div>
                <div>

                </div>
            </CardContent>
            <CardFooter>
                <a href={String(book.file)} target="_blank" className="w-full cursor-pointer rounded-sm text-center p-1 transition-all ease-in-out
         border-[2px] border-background bg-white text-background hover:bg-background hover:text-white">
                    Read Now
                </a>
            </CardFooter>

        </Card>
    )
}
