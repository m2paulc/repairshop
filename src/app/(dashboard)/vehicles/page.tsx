import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vehicles",
  description: "Vehicles Page",
};

export default function VehiclesPage() {
  return (
    <>
      <Card className="w-full border-none bg-gray-100 drop-shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl">Vehicles</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-4">
          <p>Vehicles listing goes here</p>
        </CardContent>
      </Card>
    </>
  );
}
