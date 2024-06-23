import { DetectedObject } from "@tensorflow-models/coco-ssd";

type Context2D = CanvasRenderingContext2D;

export const renderPredictions = (predictions: DetectedObject[], ctx: Context2D): void => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // Fonts
  const font = "16px sans-serif";
  ctx.font = font;
  ctx.textBaseline = "top";

  predictions.forEach((prediction) => {
    const [x, y, width, height] = prediction.bbox;

    // bounding box
    ctx.strokeStyle = "#FF0000";
    ctx.lineWidth = 4;
    ctx.strokeRect(x, y, width, height);

    // fill the color
    ctx.fillStyle = `rgba(255, 0, 0, 0.2)`;
    ctx.fillRect(x, y, width, height);

    // Draw the label background.
    ctx.fillStyle = "rgba(255, 0, 0, .45)";
    const textWidth = ctx.measureText(prediction.class).width;
    const textHeight = parseInt(font, 10); // base 10
    ctx.fillRect(x, y, textWidth + 84, textHeight + 4);

    ctx.fillStyle = "#ffffff";
    ctx.fillText(`${prediction.class} detected`, x, y);
  });
};
