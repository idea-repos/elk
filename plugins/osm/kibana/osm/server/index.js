"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plugin = plugin;
Object.defineProperty(exports, "OsmPluginSetup", {
  enumerable: true,
  get: function () {
    return _types.OsmPluginSetup;
  }
});
Object.defineProperty(exports, "OsmPluginStart", {
  enumerable: true,
  get: function () {
    return _types.OsmPluginStart;
  }
});

var _plugin = require("./plugin");

var _types = require("./types");

//  This exports static code and TypeScript types,
//  as well as, Kibana Platform `plugin()` initializer.
function plugin(initializerContext) {
  return new _plugin.OsmPlugin(initializerContext);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbInBsdWdpbiIsImluaXRpYWxpemVyQ29udGV4dCIsIk9zbVBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQVNBOztBQVBBO0FBQ0E7QUFFTyxTQUFTQSxNQUFULENBQWdCQyxrQkFBaEIsRUFBOEQ7QUFDbkUsU0FBTyxJQUFJQyxpQkFBSixDQUFjRCxrQkFBZCxDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbHVnaW5Jbml0aWFsaXplckNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9zcmMvY29yZS9zZXJ2ZXInO1xuaW1wb3J0IHsgT3NtUGx1Z2luIH0gZnJvbSAnLi9wbHVnaW4nO1xuXG4vLyAgVGhpcyBleHBvcnRzIHN0YXRpYyBjb2RlIGFuZCBUeXBlU2NyaXB0IHR5cGVzLFxuLy8gIGFzIHdlbGwgYXMsIEtpYmFuYSBQbGF0Zm9ybSBgcGx1Z2luKClgIGluaXRpYWxpemVyLlxuXG5leHBvcnQgZnVuY3Rpb24gcGx1Z2luKGluaXRpYWxpemVyQ29udGV4dDogUGx1Z2luSW5pdGlhbGl6ZXJDb250ZXh0KSB7XG4gIHJldHVybiBuZXcgT3NtUGx1Z2luKGluaXRpYWxpemVyQ29udGV4dCk7XG59XG5cbmV4cG9ydCB7IE9zbVBsdWdpblNldHVwLCBPc21QbHVnaW5TdGFydCB9IGZyb20gJy4vdHlwZXMnO1xuIl19