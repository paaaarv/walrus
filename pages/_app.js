"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@mantine/core/styles.css");
var head_1 = require("next/head");
var core_1 = require("@mantine/core");
var theme_1 = require("../theme");
function App(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (<core_1.MantineProvider theme={theme_1.theme}>
      <head_1.default>
        <title>Mantine Template</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"/>
        <link rel="shortcut icon" href="/favicon.svg"/>
      </head_1.default>
      <Component {...pageProps}/>
    </core_1.MantineProvider>);
}
exports.default = App;
