import type React from "react";

interface HTMLPreviewPanelProps {
  content?: string;
  loading: boolean;
  noPreview: boolean;
}

const HTMLPreviewPanel: React.FC<HTMLPreviewPanelProps> = ({
  content,
  loading,
  noPreview,
}) => {
  return (
    <div className="w-full h-full bg-white border border-gray-200 rounded-lg m-10 shadow-sm overflow-hidden">
      <h2 className="p-4 text-lg font-semibold text-emerald-600 border-b border-gray-200">
        HTML Preview
      </h2>
      <div className="p-4 relative min-h-[100px]">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
          </div>
        ) : noPreview ? (
          <p className="text-gray-500">No preview available.</p>
        ) : content ? (
          <div dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          <p className="text-gray-500">No HTML content to preview.</p>
        )}
      </div>
    </div>
  );
};

export default HTMLPreviewPanel;
