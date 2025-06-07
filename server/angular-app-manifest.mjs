
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3956, hash: '2e49642fd270087b78cddb42875fc62201185995440a6b53702607783e1a8b00', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3387, hash: '231e2d6bdfb756c68d3842b473be1cfbe30214c5d83acef5242a4e750cde5865', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14925, hash: '8869d042ef20a97f40ddcc3162ca8fb1c859d2cf9a1a23defe7fed171a36c63f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-JGX4B2HB.css': {size: 73701, hash: 'Gx2aouZVGDY', text: () => import('./assets-chunks/styles-JGX4B2HB_css.mjs').then(m => m.default)}
  },
};
