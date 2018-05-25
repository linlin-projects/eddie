import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Colors from "./Colors";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

storiesOf("Styles", module)
    .addDecorator(withKnobs)
    .add("Colors", () => <Colors />);
