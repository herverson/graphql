const resolvers = require ('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const usersAtributos = `
  id: ID
  nome: String!
  email: String!
  password: String!
`

const typeDefs = `
  type User {
    ${usersAtributos}
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  input UserInput {
    ${usersAtributos}
  }

  type Mutation {
    createUser(input: UserInput): User
  }
`

module.exports = makeExecutableSchema({ typeDefs , resolvers })