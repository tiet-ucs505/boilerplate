function main() {
  const sel = '#myCanvas'
  canvasSetup(sel)
  const {canvas, ctx, bb} = getCanvas(sel)

  console.log({canvas, ctx, bb})
}
