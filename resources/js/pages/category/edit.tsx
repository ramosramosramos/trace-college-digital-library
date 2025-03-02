import InputError from '@/components/input-error';
import { SelectInput } from '@/components/Inputs/SelectInput';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { Category, type BreadcrumbItem } from '@/types';
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
        title: 'Edit category',
        href: '/categories/create',
    },
];

interface FormEdit {
    name: string;
    image?: any;
    [key: string]: any;
}




export default function Edit({ category }: { category: { data: Category } }) {

    const [images, setImages] = useState<any[]>([]);
    const { data, setData, errors, processing, reset, post } = useForm<FormEdit>({
        name: category.data.name,
        image: undefined,
    });


    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('categories.update',category.data.id), {
            preserveScroll: true,
            onSuccess: () => {
                reset()
                toast.success('The category has been successfully updated.',)
                setTimeout(() => {
                    router.get(route('categories.index'))
                }, 1000);
            }
        })

    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Category create" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3"></div>
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh]
                flex-1 rounded-xl border md:min-h-min grid  gap-10 p-5">
                    <form className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1" onSubmit={submit}>
                        <div className="grid gap-6">
                            {/* Title Field */}
                            <div className="grid gap-2">
                                <Label htmlFor="name">Category name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                />
                                <InputError message={errors.name} />
                            </div>

                            {/* Image Upload */}

                            <div className="grid gap-2">
                                <Label htmlFor="image">Upload category image</Label>
                                <FilePond

                                    files={images.length > 0 ? images :
                                        (category.data?.image ? [{
                                            source: category.data.image, options: {
                                                type: 'local',

                                                // optional stub file information
                                                file: {
                                                    name: category.data.image,
                                                    size: 3001025,
                                                    type: 'image/png',
                                                },

                                                // pass poster property
                                                metadata: {
                                                    poster: category.data.image,
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
                               Save new changes
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
