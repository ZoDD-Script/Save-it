import Card from "@/components/Card";
import Sort from "@/components/Sort";
import { getFiles } from "@/lib/actions/file.actions";
import { getFileTypesParams } from "@/lib/utils";
import { FileType, SearchParamProps } from "@/types";
import { Models } from "node-appwrite";
import React from "react";

const Page = async ({ searchParams, params }: SearchParamProps) => {
  const type = ((await params)?.type as string) || "";
  const searchText = ((await searchParams)?.query as string) || "";
  const sort = ((await searchParams)?.sort as string) || "";

  const types = getFileTypesParams(type) as FileType[];
  const files = await getFiles({ types, searchText, sort });

  function getReadableFileSize(totalBytes: number): string {
    const units = ["B", "KB", "MB", "GB", "TB"];
    let i = 0;
    while (totalBytes >= 1024 && i < units.length - 1) {
      totalBytes /= 1024;
      i++;
    }
    return `${totalBytes.toFixed(2)}${units[i]}`;
  }

  function sumFileSizes(files: { documents: { size: number }[] }) {
    const totalBytes = files.documents.reduce((sum, doc) => sum + doc.size, 0);
    return getReadableFileSize(totalBytes);
  }

  return (
    <div className="page-container">
      <section className="w-full">
        <h1 className="h1 capitalize">{type}</h1>

        <div className="total-size-section">
          <p className="body-1">
            Total:
            <span className="h5"> {sumFileSizes(files) || "0B"}</span>
          </p>

          <div className="sort-container">
            <p className="body-1 hidden text-light-200 sm:block">Sort By:</p>

            <Sort />
          </div>
        </div>
      </section>

      {/* Render files */}
      {files.total > 0 ? (
        <section className="file-list">
          {files.documents.map((file: Models.Document) => (
            <Card key={file.$id} file={file} />
          ))}
        </section>
      ) : (
        <p className="empty-list">No files found</p>
      )}
    </div>
  );
};

export default Page;
