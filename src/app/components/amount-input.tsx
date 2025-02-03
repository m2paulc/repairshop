import CurrencyInput from "react-currency-input-field";
import { Info } from "lucide-react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
	value: string;
	onChange: (value: string | undefined) => void;
	placeholder?: string;
	disabled?: boolean;
	desc: string;
};

export const AmountInput = ({
	value,
	onChange,
	placeholder,
	disabled,
	desc,
}: Props) => {
	return (
		<div className="relative">
			<TooltipProvider>
				<Tooltip delayDuration={100}>
					<TooltipTrigger asChild>
						<Info className="size-5 absolute top-[11px] left-2 flex items-center justify-center transition" />
					</TooltipTrigger>
					<TooltipContent>{desc}</TooltipContent>
				</Tooltip>
			</TooltipProvider>
			<CurrencyInput
				prefix="$"
				className="pl-10 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
				placeholder={placeholder}
				value={value}
				decimalsLimit={2}
				decimalScale={2}
				onValueChange={onChange}
				disabled={disabled}
			/>
		</div>
	);
};
