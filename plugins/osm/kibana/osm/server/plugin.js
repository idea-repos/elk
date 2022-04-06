"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OsmPlugin = void 0;

var _routes = require("./routes");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class OsmPlugin {
  constructor(initializerContext) {
    _defineProperty(this, "logger", void 0);

    this.logger = initializerContext.logger.get();
  }

  setup(core) {
    this.logger.debug('osm: Setup');
    const router = core.http.createRouter(); // Register server side APIs

    (0, _routes.defineRoutes)(router);
    return {};
  }

  start(core) {
    this.logger.debug('osm: Started');
    return {};
  }

  stop() {}

}

exports.OsmPlugin = OsmPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbi50cyJdLCJuYW1lcyI6WyJPc21QbHVnaW4iLCJjb25zdHJ1Y3RvciIsImluaXRpYWxpemVyQ29udGV4dCIsImxvZ2dlciIsImdldCIsInNldHVwIiwiY29yZSIsImRlYnVnIiwicm91dGVyIiwiaHR0cCIsImNyZWF0ZVJvdXRlciIsInN0YXJ0Iiwic3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVNBOzs7O0FBRU8sTUFBTUEsU0FBTixDQUFrRTtBQUd2RUMsRUFBQUEsV0FBVyxDQUFDQyxrQkFBRCxFQUErQztBQUFBOztBQUN4RCxTQUFLQyxNQUFMLEdBQWNELGtCQUFrQixDQUFDQyxNQUFuQixDQUEwQkMsR0FBMUIsRUFBZDtBQUNEOztBQUVNQyxFQUFBQSxLQUFQLENBQWFDLElBQWIsRUFBOEI7QUFDNUIsU0FBS0gsTUFBTCxDQUFZSSxLQUFaLENBQWtCLFlBQWxCO0FBQ0EsVUFBTUMsTUFBTSxHQUFHRixJQUFJLENBQUNHLElBQUwsQ0FBVUMsWUFBVixFQUFmLENBRjRCLENBSTVCOztBQUNBLDhCQUFhRixNQUFiO0FBRUEsV0FBTyxFQUFQO0FBQ0Q7O0FBRU1HLEVBQUFBLEtBQVAsQ0FBYUwsSUFBYixFQUE4QjtBQUM1QixTQUFLSCxNQUFMLENBQVlJLEtBQVosQ0FBa0IsY0FBbEI7QUFDQSxXQUFPLEVBQVA7QUFDRDs7QUFFTUssRUFBQUEsSUFBUCxHQUFjLENBQUU7O0FBdEJ1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFBsdWdpbkluaXRpYWxpemVyQ29udGV4dCxcbiAgQ29yZVNldHVwLFxuICBDb3JlU3RhcnQsXG4gIFBsdWdpbixcbiAgTG9nZ2VyLFxufSBmcm9tICcuLi8uLi8uLi9zcmMvY29yZS9zZXJ2ZXInO1xuXG5pbXBvcnQgeyBPc21QbHVnaW5TZXR1cCwgT3NtUGx1Z2luU3RhcnQgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGRlZmluZVJvdXRlcyB9IGZyb20gJy4vcm91dGVzJztcblxuZXhwb3J0IGNsYXNzIE9zbVBsdWdpbiBpbXBsZW1lbnRzIFBsdWdpbjxPc21QbHVnaW5TZXR1cCwgT3NtUGx1Z2luU3RhcnQ+IHtcbiAgcHJpdmF0ZSByZWFkb25seSBsb2dnZXI6IExvZ2dlcjtcblxuICBjb25zdHJ1Y3Rvcihpbml0aWFsaXplckNvbnRleHQ6IFBsdWdpbkluaXRpYWxpemVyQ29udGV4dCkge1xuICAgIHRoaXMubG9nZ2VyID0gaW5pdGlhbGl6ZXJDb250ZXh0LmxvZ2dlci5nZXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXR1cChjb3JlOiBDb3JlU2V0dXApIHtcbiAgICB0aGlzLmxvZ2dlci5kZWJ1Zygnb3NtOiBTZXR1cCcpO1xuICAgIGNvbnN0IHJvdXRlciA9IGNvcmUuaHR0cC5jcmVhdGVSb3V0ZXIoKTtcblxuICAgIC8vIFJlZ2lzdGVyIHNlcnZlciBzaWRlIEFQSXNcbiAgICBkZWZpbmVSb3V0ZXMocm91dGVyKTtcblxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHB1YmxpYyBzdGFydChjb3JlOiBDb3JlU3RhcnQpIHtcbiAgICB0aGlzLmxvZ2dlci5kZWJ1Zygnb3NtOiBTdGFydGVkJyk7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgcHVibGljIHN0b3AoKSB7fVxufVxuIl19