"use client";

import { useState } from "react";
import { format, subDays } from "date-fns";
import { DateRange } from "react-day-picker";
import qs from "query-string";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formatDateRange } from "@/app/lib/utils";
import { ChevronDown } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
	PopoverClose,
} from "@/components/ui/popover";

export const DateFilter = () => {
	const router = useRouter();
	const pathname = usePathname();
	const params = useSearchParams();
	const from = params.get("from") || "";
	const to = params.get("to") || "";

	const defaultTo = new Date();
	const defaultFrom = subDays(defaultTo, 30);
	const paramState = {
		from: from ? new Date(from) : defaultFrom,
		to: to ? new Date(to) : defaultTo,
	};

	const [date, setDate] = useState<DateRange | undefined>(paramState);

	const pushToUrl = (dateRange: DateRange | undefined) => {
		const query = {
			from: format(dateRange?.from || defaultFrom, "MM-dd-yyyy"),
			to: format(dateRange?.to || defaultTo, "MM-dd-yyyy"),
		};
		const url = qs.stringifyUrl(
			{
				url: pathname,
				query,
			},
			{ skipEmptyString: true, skipNull: true }
		);

		router.push(url);
	};

	const onReset = () => {
		setDate(undefined);
		pushToUrl(undefined);
	};

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					size="sm"
					variant="outline"
					disabled={false}
					className="w-full lg:w-auto h-9 rounded-md px-3 font-normal bg-sky-500 hover:bg-sky-600 hover:text-white border-none focus:ring-offset-0 focus:ring-transparent outline-none text-white focus:bg-sky-700 transition"
				>
					<span>{formatDateRange(paramState)}</span>
					<ChevronDown className="ml-2 size-4 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-full lg:w-auto p-0" align="start">
				<Calendar
					initialFocus
					disabled={false}
					mode="range"
					defaultMonth={date?.from}
					selected={date}
					onSelect={setDate}
					numberOfMonths={2}
				/>
				<div className="w-full p-4 flex items-center gap-x-2">
					<PopoverClose asChild>
						<Button
							onClick={onReset}
							disabled={!date?.from || !date?.to}
							variant="outline"
							className="w-full"
						>
							Reset
						</Button>
					</PopoverClose>
					<PopoverClose asChild>
						<Button
							onClick={() => pushToUrl(date)}
							disabled={!date?.from || !date?.to}
							variant="blue"
							className="w-full"
						>
							Apply
						</Button>
					</PopoverClose>
				</div>
			</PopoverContent>
		</Popover>
	);
};
