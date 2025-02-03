import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminPage() {
  return (
    <>
      <Card className="w-full border-none bg-gray-100 drop-shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl">Admin</CardTitle>
        </CardHeader>
      </Card>
    </>
  );
}
