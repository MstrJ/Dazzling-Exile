import DazzlingSidebar from "@/src/components/Sidebar/dazzlingSidebar";
import { Divider } from "@nextui-org/react";

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="size-true fr pt-4 gap-4">
      <div className="basis-1/4 pt-6 ">
        <DazzlingSidebar />
      </div>
      <Divider orientation="vertical" className="h-[88vh]" />
      <div className="basis-3/4 pt-2">{children}</div>
    </div>
  );
}
