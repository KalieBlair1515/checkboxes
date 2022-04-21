const checkboxes = document.querySelectorAll<HTMLInputElement>(
  ".inbox input[type=checkbox]"
);
console.log(checkboxes);

let lastChecked: any;

function handlecheck(e: KeyboardEvent) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) inBetween = !inBetween;
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handlecheck)
);
