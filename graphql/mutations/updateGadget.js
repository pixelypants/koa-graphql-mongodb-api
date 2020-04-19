const { GraphQLString } = require('graphql');
const gadgetGraphQLType = require('./../types/gadgetType');
const Gadget = require('./../../models/gadget');

/*
mutation {
  updateGadget(
    id: "5c51a8f59121525ff44c41b2", name: "Macbook Pro",
    release_date: "January 10, 2006", by_company: "Apple",
    price: "8888") {
    id
    name
    release_date
    by_company
    price
  }
}
*/
module.exports = {
  type: gadgetGraphQLType,
  args: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    release_date: { type: GraphQLString },
    by_company: { type: GraphQLString },
    price: { type: GraphQLString },
  },
  resolve(parent, args) {
    return Gadget.findById(args.id)
      .then((gadget) => {
        gadget.name = args.name;
        gadget.release_date = args.release_date;
        gadget.by_company = args.by_company;
        gadget.price = args.price;

        return gadget.save();
      })
      .then((updatedGadget) => updatedGadget)
      .catch((err) => console.log(err));
  },
};
