const { GraphQLString } = require('graphql');
const gadgetGraphQLType = require('./../types/gadgetType');
const Gadget = require('./../../models/gadget');

/*
mutation {
  removeGadget(id: "5c51ae117eb446624aad1049") {
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
  },
  resolve(parent, args) {
    return Gadget.findOneAndDelete(args.id)
      .exec()
      .then((gadget) => gadget.remove())
      .then((deletedGadget) => deletedGadget)
      .catch((err) => console.log(err));
  },
};
