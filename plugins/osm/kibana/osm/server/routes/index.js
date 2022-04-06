"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defineRoutes = defineRoutes;

function defineRoutes(router) {
  router.get({
    path: '/api/osm/example',
    validate: false
  }, async (context, request, response) => {
    return response.ok({
      body: {
        time: new Date().toISOString()
      }
    });
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbImRlZmluZVJvdXRlcyIsInJvdXRlciIsImdldCIsInBhdGgiLCJ2YWxpZGF0ZSIsImNvbnRleHQiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJvayIsImJvZHkiLCJ0aW1lIiwiRGF0ZSIsInRvSVNPU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRU8sU0FBU0EsWUFBVCxDQUFzQkMsTUFBdEIsRUFBdUM7QUFDNUNBLEVBQUFBLE1BQU0sQ0FBQ0MsR0FBUCxDQUNFO0FBQ0VDLElBQUFBLElBQUksRUFBRSxrQkFEUjtBQUVFQyxJQUFBQSxRQUFRLEVBQUU7QUFGWixHQURGLEVBS0UsT0FBT0MsT0FBUCxFQUFnQkMsT0FBaEIsRUFBeUJDLFFBQXpCLEtBQXNDO0FBQ3BDLFdBQU9BLFFBQVEsQ0FBQ0MsRUFBVCxDQUFZO0FBQ2pCQyxNQUFBQSxJQUFJLEVBQUU7QUFDSkMsUUFBQUEsSUFBSSxFQUFFLElBQUlDLElBQUosR0FBV0MsV0FBWDtBQURGO0FBRFcsS0FBWixDQUFQO0FBS0QsR0FYSDtBQWFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJvdXRlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NyYy9jb3JlL3NlcnZlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVSb3V0ZXMocm91dGVyOiBJUm91dGVyKSB7XG4gIHJvdXRlci5nZXQoXG4gICAge1xuICAgICAgcGF0aDogJy9hcGkvb3NtL2V4YW1wbGUnLFxuICAgICAgdmFsaWRhdGU6IGZhbHNlLFxuICAgIH0sXG4gICAgYXN5bmMgKGNvbnRleHQsIHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XG4gICAgICByZXR1cm4gcmVzcG9uc2Uub2soe1xuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgdGltZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICApO1xufVxuIl19