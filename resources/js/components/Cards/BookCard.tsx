
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
type Book = {
    id: string;
    title: string;  // Remove `| undefined`
    author?: string;
    image?: string;
    file?: string;
    is_featured:boolean;

};


export function BookCard({ book }: { book: Book }) {

    console.log(book.title)
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
                            <button className="cursor-pointer w-full" onClick={(e) => router.get(route('books.edit',book.id))}>
                              <EditIcon className="text-blue-500"/>   Edit
                            </button>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                        <button className="cursor-pointer w-full" onClick={
                            () =>{
                                router.post(route('books.destroy',book.id),{},{
                                    preserveScroll:true,
                                    onSuccess:()=>{
                                        toast.success('Book has been successfully deleted.');
                                    }
                                })
                                 }}>
                          <Trash2Icon className="text-red-500"/>    Delete
                        </button>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                        <button className="cursor-pointer w-full" onClick={
                            () =>{
                                router.post(route('books.toggleFeatured',book.id),{},{
                                    preserveScroll:true,
                                    onSuccess:()=>{
                                        toast.success('Succesfully updated.');
                                    }
                                })
                                 }}>
                       {book.is_featured? 'Remove from featured collection':'Add to  featured collection'}
                        </button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <CardHeader>
                <CardTitle>{book.title}</CardTitle>
                <CardDescription>{book.author}</CardDescription>
                <CardDescription className="text-red-500">{book.is_featured? 'Added in featured collection':''}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                    <img src={book.image} alt="" className="object w-full " />
                </div>
                <div>

                </div>
            </CardContent>
            <CardFooter>
                <a href={String(book.file)} target="_blank" className="w-full flex gap-4 justify-center items-center cursor-pointer rounded-sm text-center p-1 transition-all ease-in-out
         border-[2px] border-background bg-white text-background hover:bg-background hover:text-white">
                  <BookOpenCheckIcon/>  Read Now
                </a>
            </CardFooter>

        </Card>
    )
}
