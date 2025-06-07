
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/ouerghi01/Ai_Comp_Angualr',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ouerghi01/Ai_Comp_Angualr"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3999, hash: '784a489ccf5f46b834feaf509ac5e05a3520ea003b2e8079050cfd0a37010ff3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3430, hash: '5e227b71b01054f3fcf1f4b8c89e636c9e8327cf434aeecbaf6ad0bf5fcf1ecc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14968, hash: '7dc1e16ee6c220df9b4b1708e334bbb3929b9843e325eab34b3573b7026f5ea6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JGX4B2HB.css': {size: 73701, hash: 'Gx2aouZVGDY', text: () => import('./assets-chunks/styles-JGX4B2HB_css.mjs').then(m => m.default)}
  },
};
