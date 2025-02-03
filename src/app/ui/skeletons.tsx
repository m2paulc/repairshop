import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function CustomersPageSkeleton() {
	return (
		<div className="max-w-screen h-[1000px] mx-auto w-full">
			<Card className="border-none bg-gray-50 drop-shadow-sm">
				<CardHeader className="pb-4">
					<Skeleton className="h-8 w-48" />
					<div className="w-full flex flex-col items-center py-4 md:justify-between md:flex-row">
						<Skeleton className="h-8 w-60" />
						<Skeleton className="h-8 w-48" />
					</div>
				</CardHeader>
				<CardContent>
					<div className="w-full h-[500px] flex items-center justify-center border border-outline rounded p-4">
						<Loader2 className="w-12 h-12 animate-spin" />
					</div>
				</CardContent>
				<div className="w-full flex justify-end items-center pr-6">
					<Skeleton className="h-8 w-48" />
				</div>
				<div className="w-full flex justify-center items-center py-8">
					<Skeleton className="h-8 w-48" />
				</div>
			</Card>
		</div>
	);
}

export function LaborSettingPageSkeleton() {
	return (
		<div className="max-w-screen h-[1000px] mx-auto w-full">
			<Card className="border-none bg-gray-50 drop-shadow-sm">
				<CardHeader className="pb-4">
					<Skeleton className="h-8 w-48" />
					<div className="w-full flex flex-col justify-start py-4">
						<Skeleton className="h-8 w-48" />
					</div>
				</CardHeader>
				<CardContent>
					<div className="w-full h-[500px] flex items-center justify-center border border-outline rounded p-4">
						<Loader2 className="w-12 h-12 animate-spin" />
					</div>
				</CardContent>
				<div className="w-full flex justify-end items-center pr-6">
					<Skeleton className="h-8 w-48" />
				</div>
				<div className="w-full flex justify-center items-center py-8">
					<Skeleton className="h-8 w-48" />
				</div>
			</Card>
		</div>
	);
}

export function VehiclesPageSkeleton() {
	return (
		<div className="max-w-screen h-[1000px] mx-auto w-full">
			<Card className="bg-slate-100">
				<CardHeader>
					<Skeleton className="h-6 w-48 bg-gray-500" />
					<Skeleton className="h-4 w-72 mt-2 bg-gray-500" />
				</CardHeader>
				<CardContent>
					<div className="flex items-center justify-between mb-4">
						<Skeleton className="w-full h-8 bg-gray-500" />
					</div>
					<div className="h-96 border border-dashed border-gray-300 rounded-md p-4">
						<div className="w-full h-full flex items-center justify-center p-4">
							<Loader2 className="w-12 h-12 animate-spin" />
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

export function InvoicesPageSkeleton() {
	return (
		<div className="max-w-screen h-[1000px] mx-auto w-full">
			<Card className="bg-slate-100">
				<CardHeader>
					<Skeleton className="h-8 w-48 bg-gray-500" />
					<Skeleton className="h-6 w-48 mt-2 bg-gray-500" />
				</CardHeader>
				<CardContent>
					<div className="w-full flex justify-end items-center my-4">
						<Skeleton className="h-8 w-1/4 bg-gray-500" />
					</div>
					<div className="flex items-center justify-between mb-4">
						<Skeleton className="w-3/4 h-8 bg-gray-500" />
						<Skeleton className="w-1/4 h-8 bg-gray-500" />
					</div>
					<div className="h-48 border border-dashed border-gray-300 rounded-md p-4">
						<div className="w-full h-full flex items-center justify-center p-4">
							<Loader2 className="w-12 h-12 animate-spin" />
						</div>
					</div>
					<div className="w-full flex justify-end items-center my-4">
						<Skeleton className="h-6 w-1/4 bg-gray-500" />
					</div>
					<div className="w-full flex justify-center items-center mb-4">
						<Skeleton className="h-6 w-[320px] bg-gray-500" />
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

export function PartsStoreSkeleton() {
	return (
		<div className="max-w-screen h-[1000px] mx-auto w-full">
			<Card className="bg-slate-100">
				<CardHeader>
					<Skeleton className="h-8 w-48 bg-gray-500" />
				</CardHeader>
				<CardContent>
					<div className="w-full flex items-center justify-between mb-4 gap-4">
						<Skeleton className="w-1/2 h-8 bg-gray-500" />
						<Skeleton className="w-1/2 h-8 bg-gray-500" />
					</div>
					<div className="w-full h-[500px] flex items-center justify-center p-4">
						<Loader2 className="w-12 h-12 animate-spin" />
					</div>
					<div className="w-full flex justify-end items-center my-4">
						<Skeleton className="h-8 w-1/4 bg-gray-500" />
					</div>
					<div className="w-full flex justify-center items-center mb-4">
						<Skeleton className="h-8 w-[320px] bg-gray-500" />
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

export function LaborDescriptionSkeleton() {
	return (
		<div className="max-w-screen h-[1000px] mx-auto w-full">
			<Card className="bg-slate-100">
				<CardHeader>
					<Skeleton className="h-8 w-48 bg-gray-500" />
				</CardHeader>
				<CardContent>
					<div className="w-full flex items-center justify-between mb-4 gap-4">
						<Skeleton className="w-1/2 h-8 bg-gray-500" />
						<Skeleton className="w-1/2 h-8 bg-gray-500" />
					</div>
					<div className="w-full h-[500px] flex items-center justify-center p-4">
						<Loader2 className="w-12 h-12 animate-spin" />
					</div>
					<div className="w-full flex justify-end items-center my-4">
						<Skeleton className="h-8 w-1/4 bg-gray-500" />
					</div>
					<div className="w-full flex justify-center items-center mb-4">
						<Skeleton className="h-8 w-[320px] bg-gray-500" />
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
