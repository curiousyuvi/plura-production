"use client";

import { db } from "@/lib/db";
import { getDomainContent } from "@/lib/queries";
import EditorProvider from "@/providers/editor/editor-provider";
import { notFound } from "next/navigation";
import React, { useEffect, useState } from "react";
import FunnelEditorNavigation from "./website-builder/editor/[funnelPageId]/_components/funnel-editor-navigation";
import FunnelEditor from "./website-builder/editor/[funnelPageId]/_components/funnel-editor";

const Page = ({ params }: { params: { domain: string } }) => {
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    console.log("content in storage", localStorage.getItem("website-content"));
    setContent(localStorage.getItem("website-content"));
  }, []);

  return (
    <EditorProvider
      subaccountId={"sfdfdf"}
      pageDetails={{
        id: "dfd4r",
        name: "Test",
        pathName: "/test",
        createdAt: new Date(),
        updatedAt: new Date(),
        visits: 1,
        content,
        order: 1,
        previewImage: null,
        funnelId: "sfdfdf",
      }}
      funnelId={"sfdfdf"}
    >
      <FunnelEditor funnelPageId={"sfdfdf"} liveMode={true} />
    </EditorProvider>
  );
};

export default Page;
