import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Labor Description",
  description: "Labor Description Page",
};

export default function LaborDescriptionPage() {
  return (
    <>
      <Card className="w-full border-none bg-gray-100 drop-shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl">Labor Description</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-4">
          <p>Labor Description listing goes here</p>
        </CardContent>
      </Card>
    </>
  );
}
