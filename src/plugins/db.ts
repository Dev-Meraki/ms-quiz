import fp from 'fastify-plugin'
import { fastifyMongodb, FastifyMongodbOptions } from '@fastify/mongodb'

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
export default fp<FastifyMongodbOptions>(async (fastify) => {
  fastify.register(fastifyMongodb, {
    url:'mongodb+srv://prj-dev-meraki-gallery-read:lnnqCFZ5BhodoA8Z@cluster0.l7v9qsp.mongodb.net/?retryWrites=true&w=majority',
    forceClose: true,
    database: 'prj-dev-gallery'
  })
})
