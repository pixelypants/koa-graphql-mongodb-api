const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = graphql;

const GadgetType = new GraphQLObjectType({
  name: 'Gadget',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLNonNull(GraphQLString) },
    release_date: { type: GraphQLNonNull(GraphQLString) },
    by_company: { type: GraphQLNonNull(GraphQLString) },
    price: { type: GraphQLNonNull(GraphQLString) }
  })
});

module.exports = GadgetType;
