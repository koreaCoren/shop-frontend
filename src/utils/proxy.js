const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://158.247.196.248:9003",
            changeOrigin: true,
        })
    );
};
