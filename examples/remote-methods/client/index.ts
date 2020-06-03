import { Agent } from 'daf-core'
import { DafGraphQL } from './daf-graphql'
import { DafGrpc } from './daf-grpc'
import { DafRest } from './daf-rest'
import { IAgent, IAgentIdentityManager } from 'daf-core'
import { IAgentResolve } from 'daf-resolver'

export type ConfiguredAgent = IAgent & IAgentIdentityManager & IAgentResolve

const agent: ConfiguredAgent = new Agent({
  plugins: [
    new DafGraphQL({
      url: 'http://localhost:3000',
      apiKey: 'example-token',
      methods: [
        'resolve',
        'getIdentityProviders',
        'getIdentities',
        'getIdentity',
        'createIdentity',
        'deleteIdentity',
      ],
    }),
    new DafGrpc({
      url: 'http://localhost:3001',
      methods: [
        // 'signCredentialJwt',
      ],
    }),
    new DafRest({
      url: 'http://localhost:3002',
      methods: [
        // 'handleMessage',
      ],
    }),
  ],
})

async function main() {
  const providers = await agent.getIdentityProviders()
  console.log({ providers })

  const newIdentity = await agent.createIdentity({ identityProviderType: 'rinkeby-ethr-did' })
  console.log({ newIdentity })

  const identities = await agent.getIdentities()
  console.log({ identities })

  const identity = await agent.getIdentity({ did: identities[0].did })
  console.log({ identity })

  const doc = await agent.resolve({ did: 'did:ethr:rinkeby:0x79292ba5a516f04c3de11e8f06642c7bec16c490' })
  console.log(doc)
}

main().catch(console.log)