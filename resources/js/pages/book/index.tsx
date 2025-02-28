import { BookCard } from '@/components/Cards/BookCard';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type Book, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Books',
        href: '/books',
    },
];

export default function Index({books }:{books:{data:Book[]}}) {

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Books" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">

                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh]
                flex-1 rounded-xl border md:min-h-min grid lg:grid-cols-3 gap-10 p-5">
                   {
                    books.data.map((book)=>(
                        <div key={book.id}>
                            <BookCard book={book}/>
                        </div>
                    ))
                   }
                </div>
            </div>
        </AppLayout>
    );
}
