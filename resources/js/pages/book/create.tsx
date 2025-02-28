import InputError from '@/components/input-error';
import { SelectInput } from '@/components/Inputs/SelectInput';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Books',
        href: '/books',
    },
];

interface FormCreate {
    title: string;
    author: string;
    category_id: string;
    [key: string]: any;
}

interface Category {
    id: string;
    name: string;
}

export default function Create({ categories }: { categories: Category[] }) {
    const { data, setData, errors, processing, reset, post } = useForm<FormCreate>({
        title: '',
        author: '',
        category_id: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        // post('/books', {
        //     preserveScroll: true,
        //     onSuccess: () => reset(),
        // });
        console.log(data);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Books" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3"></div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh]
                flex-1 rounded-xl border md:min-h-min grid lg:grid-cols-3 gap-10 p-5">
                    <form className="flex flex-col gap-6" onSubmit={submit}>
                        <div className="grid gap-6">
                            {/* Title Field */}
                            <div className="grid gap-2">
                                <Label htmlFor="title">Title of the book</Label>
                                <Input
                                    id="title"
                                    type="text"
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="title"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                />
                                <InputError message={errors.title} />
                            </div>

                            {/* Author Field */}
                            <div className="grid gap-2">
                                <Label htmlFor="author">Author</Label>
                                <Input
                                    id="author"
                                    type="text"
                                    tabIndex={2}
                                    autoComplete="author"
                                    value={data.author}
                                    onChange={(e) => setData('author', e.target.value)}
                                />
                                <InputError message={errors.author} />
                            </div>

                            {/* Category Field */}
                            <div className="grid gap-2">
                                <Label htmlFor="category">Category</Label>
                                <SelectInput label='Select a category' value={data.category_id} onValueChange={(value)=>setData('category_id',value)} items={categories}/>
                                <InputError message={errors.category_id} />
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="mt-4 w-full bg-background hover:bg-background/90 cursor-pointer"
                                tabIndex={4}
                                disabled={processing}
                            >
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                Add this new book
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
