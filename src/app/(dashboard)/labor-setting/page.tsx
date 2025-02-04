import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Labor Setting",
  description: "Labor Setting Page",
};

export default function LaborSettingPage() {
  return (
    <>
      <Card className="w-full border-none bg-gray-100 drop-shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl">Labor Setting</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-4">
          <p>Labor Setting listing goes here</p>
        </CardContent>
      </Card>
    </>
  );
}
