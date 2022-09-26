"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var react_router_dom_1 = require("react-router-dom");
require("./App.css");
var CustomNavBar_1 = require("./components/CustomNavBar");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (<react_bootstrap_1.Container fluid className="m-0 p-0 bg-light w-100 h-100">
        <CustomNavBar_1["default"] />
        <react_bootstrap_1.Container className="mt-1">
          <react_bootstrap_1.Container fluid>
            <react_router_dom_1.Outlet />
          </react_bootstrap_1.Container>
        </react_bootstrap_1.Container>
      </react_bootstrap_1.Container>);
    };
    return App;
}(react_1["default"].Component));
exports["default"] = App;
