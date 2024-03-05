async function r(e){const t=await fetch(e);if(!t.ok)throw new Error(`Network response not OK! ${t.status} ${t.statusText}`);return t.text()}export{r as f};
