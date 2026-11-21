// Turn pages with the arrow keys, like an e-reader.
// Uses the rel="prev" / rel="next" links already on the page.
document.addEventListener("keydown", (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
  const tag = (event.target.tagName || "").toLowerCase();
  if (tag === "input" || tag === "textarea") return;

  const rel = { ArrowLeft: "prev", ArrowRight: "next" }[event.key];
  if (!rel) return;
  const link = document.querySelector(`a[rel="${rel}"]`);
  if (link) link.click();
});

// Keep every word of the cover title on screen. The CSS sets a size that suits
// short words; if a long word would overflow on a narrow screen, shrink the title.
function fitCoverTitle() {
  const title = document.querySelector(".cover__title");
  if (!title) return;
  title.style.fontSize = "";
  const widest = Math.max(...[...title.children].map((span) => span.scrollWidth));
  if (widest > title.clientWidth) {
    const size = parseFloat(getComputedStyle(title).fontSize);
    title.style.fontSize = `${Math.floor(size * title.clientWidth / widest)}px`;
  }
}
document.fonts.ready.then(fitCoverTitle);
window.addEventListener("resize", fitCoverTitle);

// Weight tool: sliders that change a CSS variable live, e.g. --text-weight.
// Changes last only while the page is open; copy the line shown into book.css to keep them.
document.querySelectorAll("[data-weight-tool]").forEach((tool) => {
  const code = tool.querySelector("code");
  const update = () => {
    const lines = [];
    tool.querySelectorAll("input[data-var]").forEach((input) => {
      document.documentElement.style.setProperty(input.dataset.var, input.value);
      const out = input.closest("label").querySelector("output");
      if (out) out.textContent = input.value;
      lines.push(`${input.dataset.var}: ${input.value};`);
    });
    if (code) code.textContent = lines.join("  ");
  };
  tool.addEventListener("input", update);
  update();
});
