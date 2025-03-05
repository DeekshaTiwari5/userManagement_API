const request = require("supertest");
const app = require("../server");

describe("User API", () => {
  it("should get all users", async () => {
    const res = await request(app).get("/users");
    expect(res.status).toBe(200);
  });

  it("should create a new user", async () => {
    const res = await request(app).post("/users").send({
      name: "John Doe",
      email: "john@example.com",
    });
    expect(res.status).toBe(201);
  });
});
