import { useMemo, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
	Command,
	CommandEmpty,
	CommandList,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

interface Props {
	value: string;
	onChange: (value: string) => void;
	optionsArray: { id?: string; label: string; value: string }[];
}

export function ComboboxTextarea({ value, onChange, optionsArray }: Props) {
	const [open, setOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");

	const filteredDescriptions = useMemo(() => {
		return optionsArray.filter((description) =>
			description.label.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}, [searchTerm, optionsArray]);

	return (
		<div className="flex flex-col justify-center space-y-2 p-2">
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						role="combobox"
						aria-expanded={open}
						className="w-[240px] justify-between text-[14px]"
					>
						{"Select labor description"}
						<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-75" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-full p-0 text-[12px]">
					<Command>
						<CommandInput
							placeholder="Search labor description..."
							onValueChange={setSearchTerm}
						/>
						<CommandEmpty>No labor description found.</CommandEmpty>
						<CommandList>
							<CommandGroup>
								{filteredDescriptions.map((description) => (
									<CommandItem
										key={description.id}
										value={description.value}
										onSelect={(currentValue) => {
											onChange(currentValue === value ? "" : currentValue);
											setOpen(false);
											setSearchTerm("");
										}}
									>
										<Check
											className={cn(
												"mr-2 h-4 w-4",
												value === description.value
													? "opacity-100"
													: "opacity-0"
											)}
										/>
										{description.label}
									</CommandItem>
								))}
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
			<Textarea
				placeholder="Custom labor description..."
				className="w-[240px] resize-none text-[12px]"
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
}
