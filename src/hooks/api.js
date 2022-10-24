import { writable } from 'svelte/store';
export let dictstring;
console.log("VALUE"+dictstring)
export const getApi = async () => {
    let req = new XMLHttpRequest();
    // req.open("PUT", "https://api.jsonbin.io/v3/b/632ae49de13e6063dcafd1cb", true);
    // req.setRequestHeader("Content-Type", "application/json");
    // req.setRequestHeader("X-Master-Key", "$2b$10$Gzyo7xOixRvq4Yes0N2WkO1Q5w9EFl8PRl9jS4psOfjkJ53MktDkK");
    // req.send()
}