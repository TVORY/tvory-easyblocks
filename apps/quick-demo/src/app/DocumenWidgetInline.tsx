"use client";

import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { generatePreviewUrl } from "@/utils/generatePreviewUrl";

export type Document = { id: string; rootContainer: string; updatedAt: number };

export const DocumenWidgetInline: React.FC<{
  document?: Document | null;
  onSave: (document: Document) => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}> = ({ document, onSave, onOpenChange, isOpen }) => {
  const router = useRouter();

  const [editorIframeNode, setEditorIframeNode] =
    useState<HTMLIFrameElement | null>(null);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.data.type === "@easyblocks/closed") {
        window.removeEventListener("message", handleMessage);
        router.refresh();
        onOpenChange(false);
      }

      if (event.data.type === "@easyblocks/content-saved") {
        onSave(event.data.document);
      }
    }

    editorIframeNode?.contentWindow?.addEventListener("message", handleMessage);

    return () => {
      editorIframeNode?.contentWindow?.removeEventListener(
        "message",
        handleMessage
      );
    };
  }, [editorIframeNode, router]);

  const rootContainer = document?.rootContainer ?? "content";

  let canvasUrl = `${
    window.location.origin
  }/easyblocks-editor?rootContainer=${rootContainer}&mode=app&source=sales-app&contextParams=${JSON.stringify(
    {
      locale: "en-US",
    }
  )}`;

  if (document) {
    canvasUrl += `&documentId=${document.id}`;
  }

  if (!isOpen) {
    return null;
  }

  return (
    <iframe
      ref={setEditorIframeNode}
      src={canvasUrl}
      className="w-full h-full"
    ></iframe>
  );
};
