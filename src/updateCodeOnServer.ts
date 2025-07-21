export async function updateGapOnServer(newGapClass: string): Promise<void> {
  const serverUrl = "https://tidyframework.com/api/update-gap";

  try {
    const response = await fetch(serverUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newGapClass: newGapClass }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.details || result.error || "Unknown server error");
    }

    figma.notify(`✅ Component updated successfully!`);
    console.log("Server response:", result);
  } catch (error) {
    console.error("Failed to update component:", error);
    figma.notify(`❌ Error: Could not connect to the update server.`, {
      error: true,
    });
  }
}
