import { ModCallback } from "isaac-typescript-definitions";
import { ISCFeature, upgradeMod } from "isaacscript-common";
import { activeOnUse } from "./reprex";

const MOD_NAME = "reprex";
const modVanilla = RegisterMod(MOD_NAME, 1);
const features = [ISCFeature.RUN_NEXT_ROOM] as const;
export const mod = upgradeMod(modVanilla, features);

export function main(): void {
  mod.AddCallback(
    ModCallback.PRE_USE_ITEM,
    activeOnUse,
    Isaac.GetItemIdByName("The D6"),
  );
}
