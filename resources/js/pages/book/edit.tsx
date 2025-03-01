import InputError from '@/components/input-error';
import { SelectInput } from '@/components/Inputs/SelectInput';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, router, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useState } from 'react';
import { toast } from 'sonner';

import { FilePond, registerPlugin } from 'react-filepond'


import 'filepond/dist/filepond.min.css'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFilePoster from 'filepond-plugin-file-poster';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import 'filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css';

// Import the plugin styles
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileValidateType, FilePondPluginFilePoster);



const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Edit book',
        href: '/edit',
    },
];

interface FormEdit {
    title: string;
    author: string;
    category_id: string;
    file?: any;
    image?: any;
    [key: string]: any;
}

interface Category {
    id: string;
    name: string;
}
interface Book {
    id: string;
    category_id: string;
    title: string;
    author: string;
    file: File;
    image: File;
}

export default function Edit({ categories, book }: { categories: Category[], book: { data: Book } }) {


    console.log(book)
    const [images, setImages] = useState<any[]>([]);
    const [files, setFiles] = useState<any[]>([]);
    const { data, setData, errors, processing, reset, post } = useForm<FormEdit>({
        title: book.data?.title || '',
        author: book.data?.author || '',
        category_id: book.data?.category_id || '',
        file:  undefined,
        image: undefined,
    });



    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('books.update',book.data.id), {
            preserveScroll: true,
            onSuccess: () => {
                reset()
                toast.success('The book has been successfully updated.',)
                setTimeout(() => {
                    router.get(route('books.index'))
                }, 1000);
            }
        })

    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Book edit" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3"></div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh]
                flex-1 rounded-xl border md:min-h-min grid  gap-10 p-5">
                    <form className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1" onSubmit={submit}>
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
                                <SelectInput label='Select a category' value={String(data.category_id)} onValueChange={(value) => setData('category_id', value)} items={categories} />
                                <InputError message={errors.category_id} />
                            </div>

                            {/* File Upload (PDF/DOC) */}
                            <div className="grid gap-2">
                                <Label htmlFor="file">Upload PDF/DOC</Label>

                                <FilePond
                                    files={files.length > 0 ? files :
                                        (book.data?.file ? [{
                                            source: book.data.file, options: {
                                                type: 'local',

                                                // optional stub file information
                                                file: {
                                                    name: book.data.file,
                                                    size: 3001025,

                                                },

                                                // pass poster property
                                                metadata: {
                                                    poster: book.data.file,
                                                },
                                            }
                                        }] : [])}
                                    onupdatefiles={(files) => {
                                        setFiles(files); // Update FilePond UI
                                        if (files.length > 0) {
                                            setData('file', files[0].file); // Store actual file in `data.file`
                                        } else {
                                            setData('file', undefined);
                                        }
                                    }}
                                    allowMultiple={false}
                                    maxFiles={1}
                                    name="file"
                                    acceptedFileTypes={['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel']}
                                    allowFileTypeValidation={true}
                                    labelFileTypeNotAllowed="Only  files (PDF, DOC, DOCS) are allowed"
                                    labelIdle='Drag & Drop your pdf ,doc ,docx or <span class="filepond--label-action">Browse</span>'
                                />
                                <InputError message={errors.file} />
                            </div>

                            {/* Image Upload */}

                            <div className="grid gap-2">
                                <Label htmlFor="image">Upload book cover</Label>
                                <FilePond
                                    files={images.length > 0 ? images :
                                        (book.data?.image ? [{
                                            source: book.data.image, options: {
                                                type: 'local',

                                                // optional stub file information
                                                file: {
                                                    name: book.data.image,
                                                    size: 3001025,
                                                    type: 'image/png',
                                                },

                                                // pass poster property
                                                metadata: {
                                                    poster: book.data.image,
                                                },
                                            }
                                        }] : [])}

                                    onupdatefiles={(images) => {
                                        setImages(images); // Update FilePond UI
                                        if (images.length > 0) {
                                            setData('image', images[0].file); // Store actual file in `data.image`
                                        } else {
                                            setData('image', undefined);
                                        }
                                    }}
                                    allowMultiple={false}
                                    maxFiles={1}

                                    name="image"
                                    acceptedFileTypes={['image/png', 'image/jpeg', 'image/jpg', 'image/webp']}
                                    allowFileTypeValidation={true}
                                    labelFileTypeNotAllowed="Only image files (PNG, JPG, WEBP) are allowed"
                                    labelIdle='Drag & Drop your image or <span class="filepond--label-action">Browse</span>'
                                />
                                <InputError message={errors.image} />

                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="mt-4 w-[max-content] bg-background hover:bg-background/90 cursor-pointer"
                                tabIndex={4}
                                disabled={processing}
                            >
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                              Save changes
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
