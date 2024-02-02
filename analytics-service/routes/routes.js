var appRouter = function (app) {
  app.get("/analytics-service/v1", function (req, res) {
    res.send("Hello. I am microservice #1 -> analytics-service");
  });

  app.get("/analytics-service/v1/subpath", function (req, res) {
    res.send("Hello. I am the subpath of microservice #1 -> analytics-service");
  });
};

module.exports = appRouter;
