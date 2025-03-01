import { Link } from "@inertiajs/react";

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface Meta {
    links: PaginationLink[];
}

interface Items {
    data: any[]; // This allows your `items` to have data, assuming it's an array of books
    meta?: Meta; // Make `meta` optional to avoid the TypeScript error
}

export function DefaultPaginator({ items }: { items: Items }) {
    if (!items?.meta?.links) return null;

    return (
        <div className="flex gap-2 mt-4">
            {items.meta.links.map((link, index) => (
                <Link as="button" preserveScroll
                    key={index}
                    href={link.url || "#"}
                    className={`px-3 py-1 border cursor-pointer rounded ${link.active ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
                        }`}
                    dangerouslySetInnerHTML={{ __html: link.label }} // Handling HTML entities
                />
            ))}
        </div>
    );
}
