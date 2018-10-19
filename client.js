require('seneca')()
  .client()
  .act('role:math,cmd:sum,left:1,right:2',console.log)


  /*
  bblu@zoomway:~/mservice$ node client.js 
null { answer: 3 } { start: 1539917540382,
  end: 1539917540450,
  pattern: '',
  action: 'transport_client_8',
  mi: 'oizw3m3ov2l5',
  tx: 't8ccoabxxc77',
  id: 'oizw3m3ov2l5/t8ccoabxxc77',
  instance: 'ifb6j3zyry6l/1539917540320/25184/3.7.0/-',
  tag: '-',
  seneca: '3.7.0',
  version: '0.1.0',
  gate: undefined,
  fatal: undefined,
  local: undefined,
  closing: undefined,
  timeout: 22222,
  dflt: undefined,
  custom: {},
  plugin: { name: 'client$', tag: '-', fullname: 'client$' },
  prior: undefined,
  parents: [],
  caller: undefined,
  sync: true,
  trace: [ { desc: [Array], trace: [] } ],
  sub: null,
  data: null,
  err: null,
  err_trace: null,
  error: false,
  empty: null }
{"kind":"notice","notice":"hello seneca ifb6j3zyry6l/1539917540320/25184/3.7.0/-","level":"info","seneca":"ifb6j3zyry6l/1539917540320/25184/3.7.0/-","when":1539917540455}
*/