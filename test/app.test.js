const { expect } = require("chai");
const request = require("supertest");

const app = require("../app");

// gets json response
describe("GET /", () => {
  it("responds with json", done => {
    request(app)
      .get("/api/v1/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        if (err) return done(err);
        done();
      });
  });
});
