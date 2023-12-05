import { CollectibleType } from "isaac-typescript-definitions";
import { addCollectible, removeCollectible } from "isaacscript-common";
import { mod } from "./main";

export function activeOnUse() {
  addCollectible(Isaac.GetPlayer(), CollectibleType.SEVEN_SEALS);

  mod.runNextRoom(() => {
    removeCollectible(Isaac.GetPlayer(), CollectibleType.SEVEN_SEALS);
  });

  return true;
}
