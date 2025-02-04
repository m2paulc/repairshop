import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parts Store",
  description: "Parts Store Page",
};

export default function PartsStorePage() {
  return (
    <>
      <Card className="w-full border-none bg-gray-100 drop-shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl">Parts Store</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-4">
          <p>Part Store listing goes here</p>
        </CardContent>
      </Card>
    </>
  );
}
