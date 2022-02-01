const homeowner = require("../controllers/owner.controller.js");
const request = require("supertest");
const app = require("../../server");

//Create single
describe("Post Endpoints", (done) => {
  it("should create a new Owner", async () => {
    const res = await request(app)
      .post("/api/homeowner")
      .send({
        root: {
          name: "Soheyl",
          address: "36 av du medoc candiac",
          dob: "1983-06-12",
        },
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("address"); //address is the obligatory field
  });
});

//Read single (ID)
describe("Get Endpoints", () => {
  it("get owner by ID", async () => {
    const res = await request(app)
      .get("/api/homeowner/61f642dd523256a8f73049c8")
      .send();
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("address");
  });
});

//retrive many base on a parameter
describe("Get Endpoints", () => {
  it("get all Owners", async () => {
    const res = await request(app).get("/api/homeowner?address=candiac").send();
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(expect.anything());
  });
});

//Update single
describe("Put Endpoints", () => {
  it("Update an owner information", async () => {
    const res = await request(app)
      .put("/api/homeowner/61f642dd523256a8f73049c8")
      .send({
        name: "Soheyl22",
        address: "22 av du medoc candiac",
        dob: "1922-02-22",
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(expect.anything()); //can not be empty data while updating
  });
});

//delete single
describe("Delete Endpoints", () => {
  it("delete an owner information", async () => {
    const res = await request(app)
      .delete("/api/homeowner/61f642dd523256a8f73049c8")
      .send();
    expect(res.statusCode).toEqual(200);
  });
});

//delete multiple ID
describe("Delete Endpoints", () => {
  it("delete ,multiple owner information", async () => {
    const res = await request(app)
      .delete("/api/homeowner")
      .send({
        ids: [
          "61f5f8c286190f38f18ea8c3",
          "61f5f90a5eef439b8bcc10e4",
          "61f61d50a140735b5d36a772",
        ],
      });
    expect(res.statusCode).toEqual(200);
  });
});
