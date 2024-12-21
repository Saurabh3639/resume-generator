import React from "react";

export default function PhaseNavigation({
  onNext,
  onBack,
  nextDisabled = false,
  backDisabled = false,
  showSaveButton = false,
}) {
  return (
    <div className="py-4 flex items-center justify-end gap-6">
      {/* Back button */}
      <button
        className={`underline text-sm font-normal ${
          backDisabled ? "text-gray-400 cursor-not-allowed" : ""
        }`}
        onClick={onBack}
        disabled={backDisabled}
      >
        Back
      </button>

      {showSaveButton ? (
        <>
          {/* Save & Download button */}
          <button
            className={`px-5 py-1 bg-primary text-base font-medium text-white rounded-lg`}
            // onClick={}
          >
            Save & Download
          </button>
        </>
      ) : (
        <>
          {/* Next button */}
          <button
            className={`px-5 py-1 bg-primary text-base font-medium text-white rounded-lg ${
              nextDisabled ? "bg-gray-400 cursor-not-allowed" : ""
            }`}
            onClick={onNext}
            disabled={nextDisabled}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
}
