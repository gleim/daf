import { agent } from './setup'

async function main() {
  const message = await agent.handleMessage({
    save: true,
    raw:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NkstUiJ9.eyJpYXQiOjE1ODg2NzY3MzksInZwIjp7IkBjb250ZXh0IjpbImh0dHBzOi8vd3d3LnczLm9yZy8yMDE4L2NyZWRlbnRpYWxzL3YxIl0sInR5cGUiOlsiVmVyaWZpYWJsZVByZXNlbnRhdGlvbiJdLCJ2ZXJpZmlhYmxlQ3JlZGVudGlhbCI6WyJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpGVXpJMU5rc3RVaUo5LmV5SnBZWFFpT2pFMU9ESTJNVGsyTnpZc0luTjFZaUk2SW1ScFpEcGxkR2h5T25KcGJtdGxZbms2TUhnell6TTFOMkpoTkRVNE9UTXpZVEU1WXpGa1pqRmpOMlkyWWpRM00ySXpNekF5WW1KaVpUWXhJaXdpZG1NaU9uc2lRR052Ym5SbGVIUWlPbHNpYUhSMGNITTZMeTkzZDNjdWR6TXViM0puTHpJd01UZ3ZZM0psWkdWdWRHbGhiSE12ZGpFaVhTd2lkSGx3WlNJNld5SldaWEpwWm1saFlteGxRM0psWkdWdWRHbGhiQ0pkTENKamNtVmtaVzUwYVdGc1UzVmlhbVZqZENJNmV5SnVZVzFsSWpvaVFXeHBZMlVpZlgwc0ltbHpjeUk2SW1ScFpEcGxkR2h5T25KcGJtdGxZbms2TUhnell6TTFOMkpoTkRVNE9UTXpZVEU1WXpGa1pqRmpOMlkyWWpRM00ySXpNekF5WW1KaVpUWXhJbjAuSUdGMUxGT2M0X1BjR1ZlcTdZdzdPR3o0R2o3eFhaSzZwOGJQOUNTRUlYejdtTkZQTTB2MG51ZXZUWjQ3YTBJOFhnTGZDRk5rVXJJSXNjakg4TUZ4X3dFIl19LCJ0YWciOiJ0YWcxMjMiLCJhdWQiOlsiZGlkOmV4YW1wbGU6MzQ1NiIsImRpZDp3ZWI6dXBvcnQubWUiXSwiaXNzIjoiZGlkOmV0aHI6cmlua2VieToweGIwOWI2NjAyNmJhNTkwOWE3Y2ZlOTliNzY4NzU0MzFkMmI4ZDUxOTAifQ.4SWpp8siCBHP47KrOT_28IJIQPZLCWO9VS0Ir-VVYOGUAVj7vHtXLxl3Y6lLAxYeNqWrRPCAVkDArBFCNRjYUgA',
  })
  console.dir(message, { depth: 10 })

  const msgCount = await agent.dataStoreORMGetMessagesCount({})
  const vpCount = await agent.dataStoreORMGetVerifiablePresentationsCount({})
  const vcCount = await agent.dataStoreORMGetVerifiableCredentialsCount({})

  console.log({msgCount, vpCount, vcCount})

  const vcs = await agent.dataStoreORMGetVerifiableCredentials({})
  console.dir({vcs}, { depth: 10 })

  const vps = await agent.dataStoreORMGetVerifiablePresentations({})
  console.dir({vps}, { depth: 10 })

}

main().catch(console.log)
