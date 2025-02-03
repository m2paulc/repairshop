import { format, subDays } from "date-fns";

export const capitalize = (str: string): string => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const formatName = (name: string): string => {
	// Remove any non-alphabetic characters from the input string
	name = name.replace(/[^a-zA-Z\s]/g, "");

	// Split the name into an array of words
	const words = name.trim().split(/\s+/);

	// Format each word by capitalizing the first letter and lowercasing the rest
	const formattedWords = words.map((word) => {
		if (word.length === 0) {
			return "";
		}
		return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
	});

	// Join the formatted words back into a single string
	const formattedName = formattedWords.join(" ");

	return formattedName;
};

export const formatCurrency = (amount: number) => {
	return (amount / 100).toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	});
};

export const convertAmountToCents = (amount: number) => {
	return Math.round(amount * 100);
};

export const convertAmountFromCents = (amount: number) => {
	return (Number(amount) / 100).toLocaleString("en-US");
};

export const formatDatetoLocal = (date: Date) => {
	return date.toLocaleDateString("en-US");
};

export const formatDatetoLocalString = (date: Date) => {
	return date.toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	});
};

export const notEmpty = (value?: string | null) =>
	value !== "" && value !== null && value !== undefined;

export const calculatePercentageChange = (
	current: number,
	previous: number
) => {
	if (previous === 0) {
		return previous === current ? 0 : 100;
	}

	return ((current - previous) / previous) * 100;
};

type Period = {
	from: string | Date | undefined;
	to: string | Date | undefined;
};

export const formatDateRange = (period?: Period) => {
	const defaultTo = new Date();
	const defaultFrom = subDays(defaultTo, 30);

	if (!period?.from) {
		return `${format(defaultFrom, "PPP")} - ${format(defaultTo, "PPP")}`;
	}

	if (period.to) {
		return `${format(period.from, "PPP")} - ${format(period.to, "PPP")}`;
	}

	return format(period.from, "PPP");
};

export const generatePagination = (currentPage: number, totalPages: number) => {
	// if total number of pages is 7 or less
	// display all pages without ellipsis
	if (totalPages <= 7) {
		return Array.from({ length: totalPages }, (_, i) => i + 1);
	}

	// if the current page is amonth the first 3 pages
	// show the first 3, an ellipis, and the last 2 pages.
	if (currentPage <= 3) {
		return [1, 2, 3, "...", totalPages - 1, totalPages];
	}

	// if the current page is among the last 3 pages,
	// show the first 2, an ellipsis, and the last 3 pages.
	if (currentPage >= totalPages - 2) {
		return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
	}

	// If the current page is somewhere in the middle,
	// show the first page, an ellipsis, the current page and its neighbors,
	// another ellipsis, and the last page.
	return [
		1,
		"...",
		currentPage - 1,
		currentPage,
		currentPage + 1,
		"...",
		totalPages,
	];
};
