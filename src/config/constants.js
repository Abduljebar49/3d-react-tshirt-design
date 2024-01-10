import { swatch, fileIcon, ai, logoShirt, stylishShirt } from "../assets";
import { artIcon, textIcon, uploadIcon } from "../assets/indexIcon";
import {
  ClearLogo,
  RedoLogo,
  SideLogo,
  UndoLogo,
  ZoomLogo,
} from "../assets/indexlogo";

export const DesignOptions = [
  {
    icon: uploadIcon,
    title: "Upload Image",
  },
  {
    icon: textIcon,
    title: "Add Text",
  },
  {
    icon: artIcon,
    title: "Add Art",
  },

]

export const DesignLeftLogo = [
  {
    title: "Undo",
    icon: UndoLogo,
  },
  {
    title: "Redo",
    icon: RedoLogo,
  },
  {
    title: "Zoom",
    icon: ZoomLogo,
  },
  {
    title: "Clear",
    icon: ClearLogo,
  },
  {
    title: "Side",
    icon: SideLogo,
  },
];

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    icon: ai,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
