import { activeOnUse } from "./reprex";
const MOD_NAME = "reprex";
export const mod = upgradeMod(modVanilla);
const modVanilla = RegisterMod(MOD_NAME, 1);

export function main(): void {
  mod.AddCallback(
    ModCallback.PRE_USE_ITEM,
    activeOnUse,
    Isaac.GetItemIdByName("The D6")
  );
}
