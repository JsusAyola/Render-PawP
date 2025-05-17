
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 8827, hash: 'e426b6d12927fc54211918614cf7afd0a983a27d24215f0bbc4071869166a71a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3798, hash: 'fc7c5b0499d9c0496aa62bd6ff38ef7009bfa11d243173187e62452202dd715a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-CAVNB4XF.css': {size: 308722, hash: 'tsFx3kPZgyU', text: () => import('./assets-chunks/styles-CAVNB4XF_css.mjs').then(m => m.default)}
  },
};
