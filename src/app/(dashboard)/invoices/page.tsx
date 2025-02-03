import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invoices",
  description: "Invoices Page",
};

export default function InvoicesPage() {
  return (
    <>
      <Card className="w-full border-none bg-gray-100 drop-shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl">Invoices</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-4">
          <p>Invoices listing goes here</p>
        </CardContent>
      </Card>
    </>
  );
}
