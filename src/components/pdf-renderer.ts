import * as pdfjsLib from 'pdfjs-dist';

// Worker を public 配下のURLで直接指定
pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdfjs/pdf.worker.js';

export function renderPDF(containerId: string, pdfUrl: string) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const loadingTask = pdfjsLib.getDocument({ url: pdfUrl });

  loadingTask.promise.then(pdf => {
    pdf.getPage(1).then(page => {
      const viewport = page.getViewport({ scale: 1.5 });

      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d")!;
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      container.appendChild(canvas);

      const renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      page.render(renderContext);
    });
  });
}
