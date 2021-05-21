const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("PROFILE", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to get a list of incidents by ONG", async () => {
    let response = await request(app).post("/ongs").send({
      name: "APAD",
      email: "contato@APAD.com.br",
      whatsapp: "2140028923",
      city: "Campina Grande",
      uf: "PB",
    });

    response = await request(app)
      .get("/profile")
      .set("Authorization", `${response.body.id}`)
      .send();

    expect(response.body).toHaveLength(0);
  });
});
