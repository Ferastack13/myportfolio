/** Opens the default mail client reliably (works after async handlers). */
export function openMailto(href: string) {
  const anchor = document.createElement("a");
  anchor.href = href;
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
