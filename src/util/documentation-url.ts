import { HomeAssistant } from "../types";

export const documentationUrl = (hass: HomeAssistant, path: string) => {
  // IoB Help Link:
  return `https://www.iobroker.net/#${
    hass!.language ? hass!.language.split("-")[0] || "en" : "en"
  }/adapters/adapterref/iobroker.lovelace/README.md`;
};
