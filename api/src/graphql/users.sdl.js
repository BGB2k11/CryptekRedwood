export const schema = gql`
  type User {
    id: String!
    email: String!
    password: String
  }

  type Query {
    users: [User!]! @requireAuth(roles: ["Cryptek - Admin"])
    user(id: String!): User @requireAuth(roles: ["Cryptek - Admin"])
  }

  input CreateUserInput {
    email: String!
    password: String
  }

  input UpdateUserInput {
    email: String
    password: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
