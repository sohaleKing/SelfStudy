const homeowner = require("../controllers/hatchways.controller.js");
const request = require("supertest");
let server;

//ping
describe("Route 1", () => {
  beforeEach(() => {
    server = require("../../index");
  });
  afterEach(() => {
    server.close();
  });

  describe("ping", () => {
    it("ping the api", async () => {
      const res = await request(server).get("/api/ping").send();
      expect(res.statusCode).toEqual(200);
    });
  });
});

//posts
describe("Route 2", () => {
  beforeEach(() => {
    server = require("../../index");
  });
  afterEach(() => {
    server.close();
  });

  describe("posts", () => {
    it("tag is required", async () => {
      const res = await request(server).get("/api/posts");

      expect(res.statusCode).toEqual(400);
    });
    it("acceptable tags", async () => {
      const res = await request(server).get("/api/posts?tags=tech");
      expect(res.statusCode).toEqual(200);
    });
    it("acceptable multip tags", async () => {
      const res = await request(server).get(
        "/api/posts?tags=tech,culture,history,startups,health,design"
      );
      expect(res.statusCode).toEqual(200);
    });
    it("sort by likes - acceptables sort parameter", async () => {
      const res = await request(server).get(
        "/api/posts?tags=tech,design&sortBy=likes"
      );
      expect(res.statusCode).toEqual(200);
    });
    it("sort by ids - acceptables sort parameter", async () => {
      const res = await request(server).get(
        "/api/posts?tags=tech,culture&sortBy=id"
      );
      expect(res.statusCode).toEqual(200);
    });
    it("sort by reads - acceptables sort parameter", async () => {
      const res = await request(server).get(
        "/api/posts?tags=tech&sortBy=reads"
      );
      expect(res.statusCode).toEqual(200);
    });
    it("sort by popularity - acceptables sort parameter", async () => {
      const res = await request(server).get(
        "/api/posts?tags=tech,health&sortBy=popularity"
      );
      expect(res.statusCode).toEqual(200);
    });
    it("sort by name - NOT acceptables sort parameter", async () => {
      const res = await request(server).get(
        "/api/posts?tags=tech,health&sortBy=name"
      );
      expect(res.statusCode).toEqual(400);
    });
    it("sort descending - acceptables direction parameter", async () => {
      const res = await request(server).get(
        "/api/posts?tags=tech&direction=asc"
      );
      expect(res.statusCode).toEqual(200);
    });
    it("sort asending - acceptables direction parameter", async () => {
      const res = await request(server).get(
        "/api/posts?tags=tech&direction=asc"
      );
      expect(res.statusCode).toEqual(200);
    });
    it("sort binary - NOT acceptables direction parameter", async () => {
      const res = await request(server).get(
        "/api/posts?tags=tech&direction=binary"
      );
      expect(res.statusCode).toEqual(400);
    });
  });
});
