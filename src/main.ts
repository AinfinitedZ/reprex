import { CollectibleType, ModCallback } from "isaac-typescript-definitions";
import {
  ISCFeature,
  addCollectible,
  removeCollectible,
  upgradeMod,
} from "isaacscript-common";

const MOD_NAME = "reprex";
const modVanilla = RegisterMod(MOD_NAME, 1);
const features = [ISCFeature.RUN_NEXT_ROOM] as const;
export const mod = upgradeMod(modVanilla, features);

export function main(): void {
  mod.AddCallback(
    ModCallback.PRE_USE_ITEM,
    () => {
      addCollectible(Isaac.GetPlayer(), CollectibleType.SEVEN_SEALS);

      mod.runNextRoom(() => {
        removeCollectible(Isaac.GetPlayer(), CollectibleType.SEVEN_SEALS);
      });

      return true;
    },
    Isaac.GetItemIdByName("The D6"),
  );
}
