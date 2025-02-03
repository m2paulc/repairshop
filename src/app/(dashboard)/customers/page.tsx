import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers",
  description: "Customers Page",
};

export default function CustomersPage() {
  return (
    <>
      <Card className="w-full border-none bg-gray-100 drop-shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl">Customers</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-4">
          <p>Customer listing goes here</p>
        </CardContent>
      </Card>
    </>
  );
}
