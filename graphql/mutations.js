const { GraphQLObjectType, GraphQLString } = require('graphql');
const gadgetGraphQLType = require('./gadgetType');
const Gadget = require('./../models/gadget');

/*
mutation {
  addGadget(name: "MacBook Pro", release_date: "January 10, 2006", by_company: "Apple", price: "2199") {
  name,
  release_date,
  by_company,
  price
  }
}
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

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addGadget: {
      type: gadgetGraphQLType,
      args: {
        name: { type: GraphQLString },
        release_date: { type: GraphQLString },
        by_company: { type: GraphQLString },
        price: { type: GraphQLString },
      },
      resolve(parent, args) {
        const newGadget = new Gadget({
          name: args.name,
          release_date: args.release_date,
          by_company: args.by_company,
          price: args.price,
        });

        return newGadget.save();
      },
    },
    updateGadget: {
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
    },
    removeGadget: {
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
    },
  },
});

module.exports = Mutation;
