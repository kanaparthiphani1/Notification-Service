const { Ticket } = require("../models");
const CRUDRepo = require("./crud-repository");

class TicketRepository extends CRUDRepo {
  constructor() {
    super(Ticket);
  }

  async getPendingTickets() {
    const response = await Ticket.findAll({
      where: {
        status: "PENDING",
      },
    });

    return response;
  }
}

module.exports = TicketRepository;
