

/* eslint-disable @typescript-eslint/no-explicit-any */

let pdfjsLib: any = null;

export async function loadPdfJs(): Promise<any> {
    if (pdfjsLib) return pdfjsLib;
    // @ts-expect-error - pdfjs-dist/build/pdf.mjs is not a module
    return import("pdfjs-dist/build/pdf.mjs").then((lib) => {
        // Set the worker source to use local file
        lib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
        pdfjsLib = lib;
        return lib;
    });


}