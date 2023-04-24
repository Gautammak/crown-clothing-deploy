import { shallow, mount, render } from "enzyme";
import React from "react";

import { Card } from "./card/card.component";

it("hhi", () => {
  expect(shallow(<Card />).length).toEqual(1);
});
