
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
 type Book = {
    id: number;
    title: string;  // Remove `| undefined`
    author?: string;
    image?: string;
    file?: string;

};


export function BookCard({ book }:{book:Book} ) {
  return (
    <Card className={''}>
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
        <a  href={String(book.file)} target="_blank"  className="w-full cursor-pointer rounded-sm text-center p-1 transition-all ease-in-out
         border-[2px] border-background bg-white text-background hover:bg-background hover:text-white">
          Read Now
        </a>
      </CardFooter>
    </Card>
  )
}
