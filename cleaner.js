(async function deleteArchivedChats() {
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const deleteButtons = Array.from(
    document.querySelectorAll('button[aria-label="Delete conversation"]')
  );

  if (!deleteButtons.length) {
    console.log("No delete buttons found. Are you in the Archive tab?");
    return;
  }

  for (const btn of deleteButtons) {
    btn.click();
    await delay(400);

    const confirmBtn = document.querySelector('[data-testid="delete-conversation-confirm-button"]');

    if (confirmBtn) {
      confirmBtn.click();
      await delay(800); 
    } else {
      console.warn("❌ Confirm button not found. Skipping.");
    }
  }

  console.log("✅ All archived chats processed.");
})();
