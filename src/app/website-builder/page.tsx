import { db } from "@/lib/db";
import EditorProvider from "@/providers/editor/editor-provider";
import { redirect } from "next/navigation";
import React from "react";
import FunnelEditorNavigation from "./editor/[funnelPageId]/_components/funnel-editor-navigation";
import FunnelEditorSidebar from "./editor/[funnelPageId]/_components/funnel-editor-sidebar";
import FunnelEditor from "./editor/[funnelPageId]/_components/funnel-editor";

type Props = {
  params: {
    subaccountId: string;
    funnelId: string;
    funnelPageId: string;
  };
};

const Page = async ({ params }: Props) => {
  const funnelPageDetails = {
    id: "dfd4r",
    name: "Test",
    pathName: "/test",
    createdAt: new Date(),
    updatedAt: new Date(),
    visits: 1,
    content: null,
    order: 1,
    previewImage: null,
    funnelId: "sfdfdf",
  };
  if (!funnelPageDetails) {
    return redirect(
      `/subaccount/${params.subaccountId}/funnels/${params.funnelId}`
    );
  }

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-[20] bg-background overflow-hidden">
      <EditorProvider
        subaccountId={params.subaccountId}
        funnelId={params.funnelId}
        pageDetails={funnelPageDetails}
      >
        <FunnelEditorNavigation
          funnelId={params.funnelId}
          funnelPageDetails={funnelPageDetails}
          subaccountId={params.subaccountId}
        />
        <div className="h-full flex justify-center">
          <FunnelEditor funnelPageId={params.funnelPageId} />
        </div>

        <FunnelEditorSidebar subaccountId={params.subaccountId} />
      </EditorProvider>
    </div>
  );
};

export default Page;
