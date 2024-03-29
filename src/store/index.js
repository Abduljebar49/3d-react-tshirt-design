import { proxy } from "valtio";

const state = proxy({
  intro: false,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
  rotating:false,
  tshirt:"./images/shirt.png"
});

export default state;
