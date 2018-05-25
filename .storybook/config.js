import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";

setOptions({
    name: "Eddie UI",
    url: "https://github.com/linlin-projects/eddie"
});

function loadStories() {
    require("../stories");
    // You can require as many stories as you need.
}

configure(loadStories, module);
