import { render } from "@testing-library/react";
import * as React from "react";
import { Container } from "react-pixi-fiber";
import * as PIXI from "pixi.js";

import "canvas";

test("columns", () => {
  render(<Container />);
});
