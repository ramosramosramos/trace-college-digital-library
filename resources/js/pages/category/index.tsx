
import AppLayout from '@/layouts/app-layout';
import { SharedData, type Category, type BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { PlusIcon } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Categories',
        href: '/categories',
    },
];

export default function Index({ categories }: { categories: { data: Category[] } }) {

    const { isAdmin } = usePage<SharedData>().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Categories" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3 p-2">
                    <div>

                    </div>
                    <div>

                    </div>
                    <div className='flex justify-end items-center'>
                        {isAdmin && <Link href={route('categories.create')} as="button"  className=' rounded-sm p-2 text-white bg-background hover:bg-background/90 cursor-pointer'>
                            <PlusIcon />
                        </Link>}
                    </div>
                </div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh]
                flex-1 rounded-xl border md:min-h-min grid lg:grid-cols-3 gap-10 p-5">
                    {/* {
                        categories.data.map((book) => (
                            <div key={book.id}>
                                <BookCard book={book} />
                            </div>
                        ))
                    } */}
                </div>
            </div>
        </AppLayout>
    );
}
