import { on, showUI } from "@create-figma-plugin/utilities";
import { convertValueToTailwind } from "./convertValueToTailwind";
import { updateGapOnServer } from "./updateCodeOnServer";

function getSelectedComponentSetDefaultVariant(): ComponentNode | null {
  const selection = figma.currentPage.selection;
  if (selection.length !== 1) {
    const message =
      selection.length === 0
        ? "Please select a component set."
        : "Please select only one component set.";
    figma.notify(message, { timeout: 3000, error: true });
    return null;
  }
  const componentSet = selection[0];
  if (componentSet.type !== "COMPONENT_SET") {
    figma.notify("Please select a component set node.", { error: true });
    return null;
  }
  return componentSet.defaultVariant;
}

export default async function () {
  on("SYNC", async function (data) {
    const defaultComponent = getSelectedComponentSetDefaultVariant();
    if (defaultComponent) {
      console.log(
        `The spacing in default variant: ${defaultComponent.itemSpacing}`
      );
      const twSpacing = convertValueToTailwind(
        "gap",
        defaultComponent.itemSpacing
      );
      await updateGapOnServer(twSpacing);
    }
  });
  showUI({
    height: 137,
    width: 240,
  });
}
