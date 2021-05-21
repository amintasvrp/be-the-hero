const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("INCIDENT", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create an incident by ONG", async () => {
    let response = await request(app).post("/ongs").send({
      name: "Projeto Tamar",
      email: "contato@tamar.com.br",
      whatsapp: "2140028924",
      city: "Fernando de Noronha",
      uf: "PE",
    });

    const ongId = `${response.body.id}`;

    response = await request(app)
      .post("/incidents")
      .send({
        title: "Salve as Tortuguitas",
        description: "Diga NÃO ao canudo",
        value: 1200,
      })
      .set("Authorization", ongId);

    expect(response.body).toHaveProperty("id");
  });
});
