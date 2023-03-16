const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://158.247.196.248:9003",
            // target: "http://192.168.0.100",
            changeOrigin: true,
        })
    );
};
