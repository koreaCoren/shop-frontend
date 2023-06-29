const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/backend",
        createProxyMiddleware({
            target: "http://lifehim.com",
            changeOrigin: true,
        })
    );
};
