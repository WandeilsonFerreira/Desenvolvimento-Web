
function(t) {
  if (!(t = t || e.event)) return;
  const n = this || t.target || e,
    o = n[H[t.type].false];
  if (o)
    if (1 === o.length) _(o[0], n, t);
    else {
      const e = o.slice();
      for (let o = 0; o < e.length && (!t || !0 !== t[B]); o++) _(e[o], n, t)
    }
}
 