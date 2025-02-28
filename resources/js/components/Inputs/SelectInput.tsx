import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface Item {
    id: string | number;
    name: string;
}

interface SelectInputProps {
    items: Item[];
    label: string;
    onValueChange:(value: any) => void;
    value:string;

}

export function SelectInput({ items = [], label = "Select item",onValueChange ,value}: SelectInputProps) {
    return (
        <Select defaultValue={value} value={value} onValueChange={onValueChange}>
            <SelectTrigger className="w-[max-content]">
                <SelectValue placeholder={label} />
            </SelectTrigger>
            <SelectContent className="w-full">
                <SelectGroup>
                    {
                        items.map((item) => (
                            <SelectItem key={item.id} value={String(item.id)}>{item.name}</SelectItem>
                        ))
                    }

                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
