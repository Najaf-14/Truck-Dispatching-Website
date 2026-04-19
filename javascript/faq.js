document.querySelectorAll(".faq-question").forEach((q) => {
  q.addEventListener("click", () => {
    const item = q.parentElement;
    const isOpen = item.classList.contains("open");
    document
      .querySelectorAll(".faq-item")
      .forEach((i) => i.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });
});
