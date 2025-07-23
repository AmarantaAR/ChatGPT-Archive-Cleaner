# 🧹 ChatGPT Archive Cleaner Bookmarklet

A simple JavaScript bookmarklet that automatically deletes all **archived chats** from [chat.openai.com](https://chat.openai.com) in one click. No extensions, no setup — just one tiny script and done.

---

## 🚀 Features

- Deletes all archived chats **automatically**, one by one
- Bypasses repetitive manual clicks
- Fully client-side (runs in your browser only)
- Lightweight and safe — no backend or dependencies

---

## 📦 Installation

### 1. Create a new bookmark in your browser

- Name: `🧹 Delete ChatGPT Archived`
- URL: Paste the following **all in one line**:

```javascript
javascript:(async()=>{const delay=ms=>new Promise(r=>setTimeout(r,ms));const btns=[...document.querySelectorAll('button[aria-label="Delete conversation"]')];for(const b of btns){b.click();await delay(400);const c=document.querySelector('[data-testid="delete-conversation-confirm-button"]');if(c){c.click();await delay(800);}}alert("✅ Chats archivados procesados");})();
