// Using content.js
document.addEventListener("DOMContentLoaded", function() {
    // Replace or modify elements to match the old interface
    ((twod,k)=>{
        if (window[k])
            return;
        window[k] = true;
        (()=>{
            "use strict";
            function e(e, t) {
                let n, o = !0;
                return "boolean" == typeof e ? (o = e,
                n = t) : n = e,
                wn((e=>{
                    const t = Yt(fn.document);
                    "interactive" == t || "complete" == t ? (n && n(),
                    e()) : vn.addEventListener("DOMContentLoaded", (()=>{
                        n && n(),
                        e()
                    }
                    ), Mt({
                        capture: o,
                        once: !0
                    }))
                }
                ))
            }
            const t = e=>{
                const t = Object.call
                  , n = t.bind(t)
                  , o = Object.assign
                  , s = Object.getOwnPropertyDescriptor
                  , r = e=>o({
                    __proto__: null
                }, e);
                return r({
                    sourceWindow: e,
                    cSO: r,
                    F_c: n,
                    F_a: Object.apply,
                    F_b: Object.bind,
                    F_tS: Function.toString,
                    A_fE: [].forEach,
                    A_so: [].some,
                    A_sh: [].shift,
                    A_j: [].join,
                    A_iO: [].indexOf,
                    A_iA: Array.isArray,
                    O_a: o,
                    O_k: Object.keys,
                    O_v: Object.values,
                    O_dP: Object.defineProperties,
                    O_dPy: Object.defineProperty,
                    O_hOP: Object.hasOwnProperty,
                    O_gOPN: Object.getOwnPropertyNames,
                    O_gOPD: s,
                    O_gOPDs: Object.getOwnPropertyDescriptors,
                    O_gPO: Object.getPrototypeOf,
                    O_tS: {}.toString,
                    J_p: JSON.parse,
                    J_s: JSON.stringify,
                    M_f: Math.floor,
                    M_r: Math.random,
                    M_m: Math.max,
                    M_mi: Math.min,
                    N_tS: (0).toString,
                    N_MSI: Number.MAX_SAFE_INTEGER,
                    P_t: Promise.prototype.then,
                    P_c: Promise.prototype.catch,
                    R_rABS: FileReader.prototype.readAsBinaryString,
                    R_rAT: FileReader.prototype.readAsText,
                    R_r: s(FileReader.prototype, "result").get,
                    R_enq: e.ReadableStreamDefaultController ? e.ReadableStreamDefaultController.prototype.enqueue : null,
                    R_cl: e.ReadableStreamDefaultController ? e.ReadableStreamDefaultController.prototype.close : null,
                    S_fCC: String.fromCharCode,
                    S_sl: "".slice,
                    S_su: "".substr,
                    S_sp_nr: "".split,
                    S_iO: "".indexOf,
                    S_tr: "".trim,
                    S_r_nr: "".replace,
                    S_rA_nr: "".replaceAll,
                    S_cCA: "".charCodeAt,
                    S_tLC: "".toLowerCase,
                    S_tUC: "".toUpperCase,
                    Y_tST: Symbol.toStringTag,
                    USP_tS: URLSearchParams.prototype.toString,
                    D_pFS: DOMParser.prototype.parseFromString,
                    U_cOU: URL.createObjectURL,
                    U_rOU: URL.revokeObjectURL,
                    X_o: XMLHttpRequest.prototype.open,
                    X_pSD: XMLHttpRequest.prototype.DONE,
                    X_pSH: XMLHttpRequest.prototype.HEADERS_RECEIVED,
                    X_pSL: XMLHttpRequest.prototype.LOADING,
                    X_pSO: XMLHttpRequest.prototype.OPENED,
                    X_pSU: XMLHttpRequest.prototype.UNSENT,
                    X_s: XMLHttpRequest.prototype.send,
                    D_n: Date.now,
                    I_tS: e=>"" + e,
                    E_r: Element.prototype.remove,
                    E_s: Element.prototype.setAttribute,
                    E_rA: Element.prototype.removeAttribute,
                    D_cS: s(Document.prototype, "currentScript").get,
                    D_gRS: s(Document.prototype, "readyState").get,
                    D_cE: Document.prototype.createElementNS,
                    D_gEBT: Document.prototype.getElementsByTagName,
                    M_rT: s(MouseEvent.prototype, "relatedTarget").get,
                    C_d: s(CustomEvent.prototype, "detail").get,
                    C_pA: CustomEvent.prototype.AT_TARGET,
                    M_d: MutationObserver.prototype.disconnect,
                    W_aEL: addEventListener,
                    W_rEL: removeEventListener,
                    parseInt,
                    parseFloat,
                    CustomEvent,
                    CompositionEvent,
                    KeyboardEvent,
                    MouseEvent,
                    MutationObserver,
                    console: Object.assign({}, console),
                    Error,
                    Uint8Array,
                    Blob,
                    ReadableStream,
                    Number,
                    String,
                    Proxy,
                    Window,
                    FileReader,
                    DOMParser,
                    XMLHttpRequest,
                    Function,
                    RegExp,
                    Promise,
                    encodeURIComponent,
                    decodeURIComponent,
                    encodeURI,
                    decodeURI,
                    escape,
                    unescape,
                    atob,
                    btoa,
                    setTimeout,
                    clearTimeout,
                    setInterval,
                    clearInterval,
                    postMessage,
                    dispatchEvent,
                    alert,
                    prompt,
                    confirm,
                    close,
                    getElementById: e.Document.prototype.getElementById,
                    createEvent: e.Document.prototype.createEvent,
                    createElement: e.Document.prototype.createElement
                })
            }
              , n = "vault"in twod;
            if (n && void 0 === twod.vault)
                throw "Invalid vault";
            const o = twod.vault = twod.vault || t(twod.unsafeWindow)
              , {cSO: s, F_c: r, F_a: i, F_b: a, F_tS: c, A_fE: d, A_so: l, A_sh: u, A_j: p, A_iO: g, A_iA: m, O_a: f, O_k: _, O_v: h, O_dP: v, O_dPy: w, O_hOP: b, O_gOPN: y, O_gOPD: M, O_gOPDs: E, O_gPO: L, O_tS: S, J_p: O, J_s: I, M_f: x, M_r: R, M_m: j, M_mi: D, N_tS: P, N_MSI: C, P_t: $, P_c: A, R_rABS: T, R_rAT: U, R_r: k, R_enq: B, R_cl: F, S_fCC: X, S_sl: N, S_su: q, S_iO: W, S_sp_nr: H, S_tr: J, S_rA_nr: G, S_cCA: K, S_tLC: z, S_tUC: V, Y_tST: Y, D_pFS: Z, D_cS: Q, D_gRS: ee, D_cE: te, D_gEBT: ne, E_r: oe, E_s: se, E_rA: re, C_pA: ie, M_d: ae, C_d: ce, M_rT: de, U_cOU: le, U_rOU: ue, USP_tS: pe, X_o: ge, X_s: me, X_pSD: fe, X_pSH: _e, X_pSL: he, X_pSO: ve, X_pSU: we, D_n: be, I_tS: ye, W_aEL: Me, W_rEL: Ee, parseInt: Le, parseFloat: Se, console: Oe, encodeURIComponent: Ie, decodeURIComponent: xe, encodeURI: Re, decodeURI: je, escape: De, unescape: Pe, atob: Ce, btoa: $e, postMessage: Ae, dispatchEvent: Te, alert: Ue, prompt: ke, confirm: Be, close: Fe, getElementById: Xe, createEvent: Ne, createElement: qe, CustomEvent: We, CompositionEvent: He, KeyboardEvent: Je, MouseEvent: Ge, MutationObserver: Ke, Uint8Array: ze, FileReader: Ve, DOMParser: Ye, XMLHttpRequest: Ze, Function: Qe, RegExp: et, Promise: tt, Blob: nt, ReadableStream: ot, Number: st, String: rt, Proxy: it, Window: at} = o
              , ct = r
              , dt = i
              , lt = _
              , ut = h
              , pt = f
              , gt = w
              , mt = y
              , ft = M
              , _t = L
              , ht = m
              , vt = R
              , wt = j
              , bt = D
              , yt = (e,t,n)=>ct(dt, e, t, n)
              , Mt = s
              , Et = (e,t,n)=>(gt(e, t, Mt({
                value: n,
                configurable: !0,
                enumerable: !0,
                writable: !0
            })),
            e)
              , Lt = (e,t)=>{
                const n = ft(e, t);
                return n ? Mt(n).value : void 0
            }
              , St = (e,t)=>{
                const n = (e,t,o)=>{
                    const s = ft(e, t)
                      , r = s ? Mt(s) : void 0;
                    let i;
                    return r ? r.enumerable ? r.value : void 0 : --o >= 0 && (i = _t(e)) ? n(i, t, o) : void 0
                }
                ;
                return n(e, t, 5)
            }
              , Ot = e=>{
                const t = (t,...n)=>yt(e, t, n);
                return Et(t, "wrappedJSObject", e),
                t
            }
              , It = ()=>e=>Ot(e)
              , xt = Ot(a)
              , Rt = O
              , jt = It()(l)
              , Dt = It()(u)
              , Pt = (e,t,n)=>{
                const o = e.length;
                let s = t || 0;
                if (s >= o)
                    return [];
                s < 0 && (s = wt(0, o + s));
                let r = void 0 === n ? o : n;
                r < 0 && (r = wt(0, o + r)),
                r > o && (r = o);
                const i = Mt({});
                for (let t = s; t < r; t++)
                    i[t] = Lt(e, t);
                return ut(i)
            }
              , Ct = It()(p)
              , $t = (e,t)=>{
                let n = e.length || 0;
                return Et(e, n, t),
                n++,
                e.length = n
            }
              , At = It()(g)
              , Tt = It()(d)
              , Ut = It()(b)
              , kt = It()(H)
              , Bt = It()(N)
              , Ft = Ot(S)
              , Xt = _t({})
              , Nt = e=>{
                const t = Mt(e)
                  , n = mt(t);
                for (let e = 0; e < n.length; e++) {
                    const o = n[e]
                      , s = t[o];
                    null !== s && "object" == typeof s && _t(s) === Xt && (t[o] = Nt(s))
                }
                return t
            }
              , qt = It()(c)
              , Wt = It()(P)
              , Ht = It()($)
              , Jt = (It()(A),
            It()(T),
            It()(U),
            It()(k),
            B && It()(B),
            F && It()(F),
            X)
              , Gt = It()(q)
              , Kt = It()(W)
              , zt = (It()(J),
            It()(G || function(e, t) {
                return Ct(kt(this, e), t)
            }
            ),
            It()(K))
              , Vt = It()(z)
              , Yt = (It()(V),
            Ot(Z),
            Ot(Q),
            Ot(ee))
              , Zt = Ot(te)
              , Qt = Ot(ne)
              , en = (Ot(oe),
            Ot(se),
            Ot(re),
            Ot(de))
              , tn = Ot(ce)
              , nn = ae ? It()(ae) : ae
              , on = ue
              , sn = (Ot(pe),
            It()(ge),
            It()(me),
            be)
              , rn = We
              , an = Ge
              , cn = ze
              , dn = Ke
              , ln = nt
              , un = function(e, t) {
                return Lt(e, t)
            }
              , pn = Mt({
                addEventListener: !1,
                Array: !0,
                Blob: !0,
                close: !1,
                CustomEvent: !0,
                Date: !0,
                DOMParser: !0,
                Error: !0,
                Event: !0,
                FileReader: !0,
                KeyboardEvent: !0,
                location: !0,
                Math: !0,
                MouseEvent: !0,
                Number: !0,
                Object: !0,
                Promise: !0,
                ReadableStream: !0,
                removeEventListener: !1,
                Uint8Array: !0,
                XMLHttpRequest: !0
            })
              , gn = ((()=>{
                const e = Mt({
                    getElementById: Xe,
                    createEvent: Ne,
                    createElement: qe,
                    dispatchEvent: Te,
                    addEventListener,
                    removeEventListener
                })
                  , t = Mt({});
                Tt(lt(e), (n=>{
                    try {
                        const o = e[n];
                        t[n] = function(...e) {
                            return yt(o, fn.document, e)
                        }
                    } catch (e) {
                        t[n] = ((e,t)=>{
                            if (hn.error(`Tampermonkey sandbox preparation ${t ? "(" + t + ") " : ""}failed. This usually is caused by a third-party extension.`, e),
                            t)
                                return ()=>{}
                        }
                        )(e, `document.${n}`)
                    }
                }
                ))
            }
            )(),
            Mt({
                top: !0,
                location: !0
            }))
              , mn = twod
              , {unsafeWindow: fn, unsafeThis: _n} = mn;
            twod.bridges = twod.bridges || Mt({});
            const hn = twod.console = twod.console || Mt({})
              , vn = Mt({
                addEventListener: xt(Me, fn),
                removeEventListener: xt(Ee, fn)
            });
            Tt(lt(gn), (async e=>{
                if (!vn[e])
                    try {
                        const t = fn[e];
                        if (null == t)
                            return;
                        vn[e] = t
                    } catch (e) {}
            }
            )),
            Tt(lt(pn), (async e=>{
                if (!vn[e])
                    try {
                        let t = Lt(fn, e);
                        if (void 0 === t && (_n === fn || void 0 === (t = Lt(_n, e))))
                            return;
                        const n = pn[e];
                        vn[e] = !1 === n && "function" == typeof t ? xt(t, _n) : t
                    } catch (e) {}
            }
            ));
            const wn = e=>{
                let t, n = [], o = !1;
                e((e=>{
                    if (!o) {
                        if (n.length) {
                            const t = n;
                            n = [],
                            Tt(t, (t=>t(e)))
                        } else
                            t = e;
                        o = !0
                    }
                }
                ));
                const s = Mt({
                    then: e=>(o ? e(t) : $t(n, e),
                    s)
                });
                return s
            }
              , bn = ()=>Wt(sn() + 19831206 * vt() + 1, 36)
              , yn = (()=>{
                const {console: e, bridges: t} = twod
                  , n = Mt({});
                let o;
                const s = (t,o,s,i)=>{
                    let a, c = [], d = [], l = [], u = [];
                    const p = ()=>{
                        d = [],
                        l = [],
                        u = [],
                        _(),
                        y = null,
                        delete n[o]
                    }
                      , g = e=>{
                        t.send("port.message", Mt({
                            response_id: o,
                            value: e
                        }))
                    }
                      , m = e=>{
                        i && "messageId"in e && $t(c, e),
                        g(e)
                    }
                      , f = (e,t=!0)=>{
                        a = e,
                        t && g(e)
                    }
                      , _ = ()=>{
                        a = void 0
                    }
                      , h = Mt({
                        addListener: e=>{
                            $t(d, e)
                        }
                    })
                      , v = Mt({
                        addListener: e=>{
                            $t(l, e)
                        }
                    })
                      , w = Mt({
                        addListener: e=>{
                            $t(u, e)
                        }
                    })
                      , b = ()=>{
                        p(),
                        t.send("port.message", Mt({
                            response_id: o,
                            disconnect: !0
                        }))
                    }
                    ;
                    let y = Mt(s ? {
                        postMessage: m,
                        connectMessage: f,
                        stopReconnecting: _,
                        onMessage: h,
                        onDisconnect: v,
                        onReconnect: w,
                        disconnect: b
                    } : {
                        postMessage: m,
                        onMessage: h,
                        onDisconnect: v,
                        disconnect: b
                    });
                    return n[o] = Mt({
                        message: t=>{
                            if (i && (e=>"ack"in e)(t)) {
                                const {messageId: n} = t;
                                (t=>{
                                    if (!t)
                                        return void e.warn("PortMessaging: no message id in ack message");
                                    if (a && a.messageId === t)
                                        return;
                                    let n = -1;
                                    jt(c, ((e,o)=>e.messageId === t && (n = o,
                                    !0))),
                                    -1 !== n ? (Tt(Pt(c, 0, n), (t=>e.warn(`PortMessaging: message ${t.messageId} was not ack'ed!`, t))),
                                    c = Pt(c, n + 1)) : e.warn(`PortMessaging: no one is waiting for ${t}`)
                                }
                                )(n)
                            }
                            d && Tt(d, (e=>e(t)))
                        }
                        ,
                        disconnect: ()=>{
                            if (a && s)
                                return r(s, o),
                                f(a),
                                i && Tt(c, (e=>g(e))),
                                void (u && Tt(u, (e=>e())));
                            l && Tt(l, (e=>e())),
                            p()
                        }
                    }),
                    y
                }
                  , r = (e,n)=>{
                    t.first.send("port.message", Mt({
                        response_id: n,
                        connect: !0,
                        destination: e
                    }))
                }
                ;
                return Mt({
                    message: (t,r)=>{
                        let i;
                        if (t.connect) {
                            if (!t.destination || !t.response_id)
                                throw "invalid message";
                            o && o(t.destination, s(r, t.response_id))
                        } else {
                            if (!t.response_id)
                                throw "invalid message";
                            if (!(i = n[t.response_id]))
                                return void e.warn("ports: unknown id", t.response_id, t);
                            t.disconnect ? i.disconnect() : i.message(t.value)
                        }
                    }
                    ,
                    connect: function(e, n, o) {
                        const i = bn();
                        return r(e, i),
                        s(t.first, i, n ? e : void 0, o)
                    },
                    onConnect: Mt({
                        addListener: e=>{
                            o = e
                        }
                    })
                })
            }
            )()
              , {setInterval: Mn, setTimeout: En, clearInterval: Ln, clearTimeout: Sn, console: On, cloneInto: In, exportFunction: xn, createObjectIn: Rn} = fn
              , jn = Object.assign({}, On)
              , Dn = Mn.bind(fn)
              , Pn = En.bind(fn)
              , Cn = Ln.bind(fn)
              , $n = (Sn.bind(fn),
            _n == fn.top)
              , {arrayBuffer: An, blob: Tn} = fn.Response.prototype
              , {arrayBuffer: Un} = fn.Blob.prototype
              , {then: kn} = fn.Promise.prototype
              , {fetch: Bn, location: Fn, document: Xn, Response: Nn} = fn
              , qn = Ot(An)
              , Wn = Ot(Tn)
              , Hn = Ot(Un)
              , Jn = In
              , Gn = Mt({
                encode: e=>Pe(Ie(e)),
                decode: e=>xe(De(e))
            })
              , Kn = (Mt({
                encode: e=>{
                    let t = "";
                    for (let n = 0; n < e.length; n++)
                        t += Jt(255 & zt(e, n));
                    return $e(t)
                }
                ,
                decode: e=>Ce(e)
            }),
            (e,t)=>{
                const n = (e,t)=>e << t | e >>> 32 - t
                  , o = (e,t)=>{
                    const n = 2147483648 & e
                      , o = 2147483648 & t
                      , s = 1073741824 & e
                      , r = 1073741824 & t
                      , i = (1073741823 & e) + (1073741823 & t);
                    return s & r ? 2147483648 ^ i ^ n ^ o : s | r ? 1073741824 & i ? 3221225472 ^ i ^ n ^ o : 1073741824 ^ i ^ n ^ o : i ^ n ^ o
                }
                  , s = (e,t,s,r,i,a,c)=>(e = o(e, o(o(((e,t,n)=>e & t | ~e & n)(t, s, r), i), c)),
                o(n(e, a), t))
                  , r = (e,t,s,r,i,a,c)=>(e = o(e, o(o(((e,t,n)=>e & n | t & ~n)(t, s, r), i), c)),
                o(n(e, a), t))
                  , i = (e,t,s,r,i,a,c)=>(e = o(e, o(o(((e,t,n)=>e ^ t ^ n)(t, s, r), i), c)),
                o(n(e, a), t))
                  , a = (e,t,s,r,i,a,c)=>(e = o(e, o(o(((e,t,n)=>t ^ (e | ~n))(t, s, r), i), c)),
                o(n(e, a), t))
                  , c = e=>{
                    let t, n, o = "", s = "";
                    for (n = 0; n <= 3; n++)
                        t = e >>> 8 * n & 255,
                        s = "0" + Wt(t, 16),
                        o += Gt(s, s.length - 2, 2);
                    return o
                }
                ;
                let d, l, u, p, g, m, f, _;
                t && "utf-8" == Vt(t) && (e = Gn.encode(e));
                const h = (e=>{
                    let t;
                    const n = e.length
                      , o = n + 8
                      , s = 16 * ((o - o % 64) / 64 + 1)
                      , r = [];
                    for (let e = 0; e <= s - 1; e++)
                        $t(r, 0);
                    let i = 0
                      , a = 0;
                    for (; a < n; )
                        t = (a - a % 4) / 4,
                        i = a % 4 * 8,
                        r[t] = r[t] | zt(e, a) << i,
                        a++;
                    return t = (a - a % 4) / 4,
                    i = a % 4 * 8,
                    r[t] = r[t] | 128 << i,
                    r[s - 2] = n << 3,
                    r[s - 1] = n >>> 29,
                    r
                }
                )(e);
                g = 1732584193,
                m = 4023233417,
                f = 2562383102,
                _ = 271733878;
                for (let e = 0; e < h.length; e += 16)
                    d = g,
                    l = m,
                    u = f,
                    p = _,
                    g = s(g, m, f, _, h[e + 0], 7, 3614090360),
                    _ = s(_, g, m, f, h[e + 1], 12, 3905402710),
                    f = s(f, _, g, m, h[e + 2], 17, 606105819),
                    m = s(m, f, _, g, h[e + 3], 22, 3250441966),
                    g = s(g, m, f, _, h[e + 4], 7, 4118548399),
                    _ = s(_, g, m, f, h[e + 5], 12, 1200080426),
                    f = s(f, _, g, m, h[e + 6], 17, 2821735955),
                    m = s(m, f, _, g, h[e + 7], 22, 4249261313),
                    g = s(g, m, f, _, h[e + 8], 7, 1770035416),
                    _ = s(_, g, m, f, h[e + 9], 12, 2336552879),
                    f = s(f, _, g, m, h[e + 10], 17, 4294925233),
                    m = s(m, f, _, g, h[e + 11], 22, 2304563134),
                    g = s(g, m, f, _, h[e + 12], 7, 1804603682),
                    _ = s(_, g, m, f, h[e + 13], 12, 4254626195),
                    f = s(f, _, g, m, h[e + 14], 17, 2792965006),
                    m = s(m, f, _, g, h[e + 15], 22, 1236535329),
                    g = r(g, m, f, _, h[e + 1], 5, 4129170786),
                    _ = r(_, g, m, f, h[e + 6], 9, 3225465664),
                    f = r(f, _, g, m, h[e + 11], 14, 643717713),
                    m = r(m, f, _, g, h[e + 0], 20, 3921069994),
                    g = r(g, m, f, _, h[e + 5], 5, 3593408605),
                    _ = r(_, g, m, f, h[e + 10], 9, 38016083),
                    f = r(f, _, g, m, h[e + 15], 14, 3634488961),
                    m = r(m, f, _, g, h[e + 4], 20, 3889429448),
                    g = r(g, m, f, _, h[e + 9], 5, 568446438),
                    _ = r(_, g, m, f, h[e + 14], 9, 3275163606),
                    f = r(f, _, g, m, h[e + 3], 14, 4107603335),
                    m = r(m, f, _, g, h[e + 8], 20, 1163531501),
                    g = r(g, m, f, _, h[e + 13], 5, 2850285829),
                    _ = r(_, g, m, f, h[e + 2], 9, 4243563512),
                    f = r(f, _, g, m, h[e + 7], 14, 1735328473),
                    m = r(m, f, _, g, h[e + 12], 20, 2368359562),
                    g = i(g, m, f, _, h[e + 5], 4, 4294588738),
                    _ = i(_, g, m, f, h[e + 8], 11, 2272392833),
                    f = i(f, _, g, m, h[e + 11], 16, 1839030562),
                    m = i(m, f, _, g, h[e + 14], 23, 4259657740),
                    g = i(g, m, f, _, h[e + 1], 4, 2763975236),
                    _ = i(_, g, m, f, h[e + 4], 11, 1272893353),
                    f = i(f, _, g, m, h[e + 7], 16, 4139469664),
                    m = i(m, f, _, g, h[e + 10], 23, 3200236656),
                    g = i(g, m, f, _, h[e + 13], 4, 681279174),
                    _ = i(_, g, m, f, h[e + 0], 11, 3936430074),
                    f = i(f, _, g, m, h[e + 3], 16, 3572445317),
                    m = i(m, f, _, g, h[e + 6], 23, 76029189),
                    g = i(g, m, f, _, h[e + 9], 4, 3654602809),
                    _ = i(_, g, m, f, h[e + 12], 11, 3873151461),
                    f = i(f, _, g, m, h[e + 15], 16, 530742520),
                    m = i(m, f, _, g, h[e + 2], 23, 3299628645),
                    g = a(g, m, f, _, h[e + 0], 6, 4096336452),
                    _ = a(_, g, m, f, h[e + 7], 10, 1126891415),
                    f = a(f, _, g, m, h[e + 14], 15, 2878612391),
                    m = a(m, f, _, g, h[e + 5], 21, 4237533241),
                    g = a(g, m, f, _, h[e + 12], 6, 1700485571),
                    _ = a(_, g, m, f, h[e + 3], 10, 2399980690),
                    f = a(f, _, g, m, h[e + 10], 15, 4293915773),
                    m = a(m, f, _, g, h[e + 1], 21, 2240044497),
                    g = a(g, m, f, _, h[e + 8], 6, 1873313359),
                    _ = a(_, g, m, f, h[e + 15], 10, 4264355552),
                    f = a(f, _, g, m, h[e + 6], 15, 2734768916),
                    m = a(m, f, _, g, h[e + 13], 21, 1309151649),
                    g = a(g, m, f, _, h[e + 4], 6, 4149444226),
                    _ = a(_, g, m, f, h[e + 11], 10, 3174756917),
                    f = a(f, _, g, m, h[e + 2], 15, 718787259),
                    m = a(m, f, _, g, h[e + 9], 21, 3951481745),
                    g = o(g, d),
                    m = o(m, l),
                    f = o(f, u),
                    _ = o(_, p);
                const v = c(g) + c(m) + c(f) + c(_);
                return Vt(v)
            }
            )
              , zn = (e,t)=>{
                const n = Zt(fn.document, "http://www.w3.org/1999/xhtml", e);
                return "string" == typeof t ? n.append(t) : t && Tt(lt(t), (e=>{
                    "textContent" == e ? n.textContent = t[e] : n.setAttribute(e, t[e])
                }
                )),
                n
            }
              , Vn = t=>{
                const n = fn.document;
                if (n.body || "text/xml" == n.contentType)
                    t();
                else {
                    let n = !1;
                    const o = new dn((()=>{
                        n = !0,
                        Vn(t),
                        (nn || (e=>e.disconnect()))(o)
                    }
                    ));
                    o.observe(fn.document, Mt({
                        childList: !0
                    })),
                    e((()=>{
                        n || ((nn || (e=>e.disconnect()))(o),
                        t())
                    }
                    ))
                }
            }
              , Yn = t=>{
                e((()=>{
                    Pn((()=>t()), 1)
                }
                ))
            }
            ;
            let Zn, Qn;
            const eo = Fn.host
              , to = e=>{
                "n:" == Gt(e, 0, 2) ? Zn = Gt(e, 2) : e && (Qn = Gt(e, 2))
            }
              , no = ()=>Zn || (Qn ? (Zn = Kn(`${eo}#${Qn}`),
            Zn) : void 0)
              , oo = e=>void 0 !== Lt(e, "objUrl")
              , so = e=>void 0 !== Lt(e, "blob")
              , ro = e=>void 0 !== Lt(e, "dataUri")
              , io = e=>void 0 !== e.binary
              , ao = ["chrome"]
              , co = globalThis
              , {chrome: lo, browser: uo} = co;
            let po, go, mo, fo;
            mo = ()=>{
                if (void 0 !== po)
                    return po;
                try {
                    const e = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
                    e && (po = parseInt(e[2]))
                } catch (e) {}
                return po
            }
            ,
            fo = ()=>{
                if (void 0 !== go)
                    return go;
                try {
                    go = -1 != navigator.userAgent.search(/Android|Mobile/)
                } catch (e) {}
                return go
            }
            ;
            const _o = (mo(),
            !1)
              , ho = ["chrome-extension:"];
            [].concat(["chrome"]);
            const vo = (()=>{
                const e = {
                    getInternalPathRegexp: function(e, t) {
                        const n = new RegExp("(\\" + ["/", ".", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\"].join("|\\") + ")","g")
                          , o = ho[0] + "//" + vo.id + "/";
                        return new RegExp(o.replace(n, "\\$1") + "([a-zA-Z" + (e ? "\\/" : "") + "]*)" + (t || "").replace(n, "\\$1"))
                    },
                    getInternalPageRegexp: function() {
                        return vo.getInternalPathRegexp(!1, ".html")
                    },
                    getPlatformInfo: e=>lo.runtime.getPlatformInfo(e),
                    getBrowserInfo: e=>{
                        e({
                            name: "Chrome",
                            version: `${mo()}`,
                            vendor: "unknown"
                        })
                    }
                };
                return Object.defineProperty(e, "lastError", {
                    get: ()=>lo.runtime.lastError,
                    enumerable: !0
                }),
                Object.defineProperty(e, "id", {
                    get: ()=>lo.runtime.id,
                    enumerable: !0
                }),
                Object.defineProperty(e, "short_id", {
                    get: ()=>e.id.replace(/[^0-9a-zA-Z]/g, "").substr(0, 4),
                    enumerable: !0
                }),
                e
            }
            )()
              , wo = (()=>{
                let e;
                return Object.defineProperties({}, {
                    inIncognitoContext: {
                        get: ()=>(void 0 === e && (e = lo.extension.inIncognitoContext),
                        e),
                        set: t=>{
                            e = t
                        }
                        ,
                        enumerable: !0
                    },
                    ...Object.getOwnPropertyDescriptors({
                        getURL: function(e) {
                            return lo.runtime.getURL(e)
                        },
                        sendMessage: (e,t)=>lo.runtime.sendMessage(e, t),
                        onMessage: {
                            addListener: e=>lo.runtime.onMessage.addListener(e)
                        },
                        connect: e=>lo.runtime.connect({
                            name: e
                        })
                    })
                })
            }
            )()
              , bo = lo.userScripts && lo.userScripts.onBeforeScript ? {
                supported: !0,
                onBeforeScript: {
                    addListener: e=>lo.userScripts.onBeforeScript.addListener(e)
                }
            } : {
                supported: !1
            }
              , yo = ({sendPrefix: e, listenPrefix: t, send: n, onMessage: o})=>{
                if (void 0 === n || void 0 === o)
                    throw "invalid args";
                let s, r, i = 1;
                const a = Mt({})
                  , c = Mt({})
                  , d = e=>{
                    e && (s = e)
                }
                  , l = e=>{
                    const t = ++i;
                    return c[i] = e,
                    t
                }
                ;
                o(((o,i)=>o == `${t}_${s}` ? (t=>{
                    const {m: o, r: i, a: d, n: l} = t;
                    if (a[o] && (Tt(a[o], (e=>e(d))),
                    delete a[o]),
                    "message.response" == o) {
                        if (null == i)
                            throw "Invalid Message";
                        ((e,t)=>{
                            let n;
                            e && (n = c[e]) && (n(t),
                            delete c[e])
                        }
                        )(i, d)
                    } else if (r) {
                        const t = i ? t=>{
                            n(`${e}_${s}`, Mt({
                                m: "message.response",
                                a: t,
                                r: i
                            }))
                        }
                        : ()=>{}
                        ;
                        r(Mt({
                            method: o,
                            args: d,
                            node: l
                        }), t)
                    }
                }
                )(i) : null));
                const u = Mt({
                    init: async e=>{
                        s ? d() : d(e)
                    }
                    ,
                    refresh: ()=>null,
                    switchId: e=>{
                        s && u.cleanup(),
                        d(e)
                    }
                    ,
                    send: (t,o,r,i)=>wn((a=>{
                        let c, d;
                        "function" != typeof r && null !== r ? (c = r,
                        d = i) : d = r,
                        n(`${e}_${s}`, Mt({
                            m: t,
                            a: o,
                            r: d ? l(d) : null,
                            n: c
                        })),
                        a()
                    }
                    )),
                    sendToId: (t,o,s)=>{
                        n(`${e}_${t}`, Mt({
                            m: o,
                            a: s,
                            r: null
                        }))
                    }
                    ,
                    once: (e,t)=>{
                        a[e] || (a[e] = []),
                        $t(a[e], t)
                    }
                    ,
                    setMessageListener: e=>{
                        r = e
                    }
                    ,
                    cleanup: ()=>null
                });
                return u
            }
              , Mo = bo
              , Eo = bo.supported && !fn.pagejs;
            let Lo;
            const So = (e,t)=>{
                try {
                    Lo(e),
                    t && t()
                } catch (e) {
                    t && t(e.message || e)
                }
            }
              , Oo = "u" + bn()
              , {bridges: Io} = twod;
            let xo = [];
            const Ro = e=>{
                Mo.onBeforeScript.addListener((o=>{
                    const s = (e,n)=>{
                        Tt(t, (t=>t(e, n)))
                    }
                      , r = e=>$t(n, Mt({
                        listener: e,
                        clone: o.export
                    }));
                    gt(o.global, "pagejs", Mt({
                        set: o.export((t=>{
                            delete o.global.pagejs;
                            const n = o.metadata
                              , {modes: i, nonce: a} = n;
                            if (a && to(a),
                            Tt(xo, (e=>e(t, n))),
                            xo = [],
                            i.js) {
                                const n = Mt({
                                    unsafeWindow: o.global,
                                    unsafeThis: o.global.window,
                                    pageWindow: void 0,
                                    contextId: Oo,
                                    fSend: s,
                                    fOnMessage: r,
                                    cloneInto: void 0,
                                    exportFunction: void 0
                                });
                                t(o.export(n)),
                                Io.js.sendToId(Oo, "commid", Mt({
                                    id: e
                                }))
                            }
                        }
                        )),
                        configurable: !0
                    })),
                    Lo = o.global.eval
                }
                ));
                const t = []
                  , n = []
                  , o = (e,t)=>{
                    Tt(n, (({listener: n, clone: o})=>n(e, o(t))))
                }
                  , s = e=>$t(t, e);
                return Mt({
                    createBridge: ()=>{
                        const t = yo(Mt({
                            sendPrefix: "2S",
                            listenPrefix: "2U",
                            cloneInto: Jn,
                            send: o,
                            onMessage: s
                        }));
                        return t.init(e),
                        t
                    }
                })
            }
            ;
            let jo;
            const {console: Do} = twod
              , Po = e=>(e.details && e.details.url,
            wn((async t=>{
                t(e)
            }
            )))
              , Co = e=>{
                const t = wo.connect(e);
                if (!vo.lastError)
                    return t
            }
              , $o = Mt({
                setInterval: e=>{
                    let t;
                    e.onMessage.addListener((n=>{
                        "setInterval" == n.method && (t = Dn(e.postMessage, n.t))
                    }
                    )),
                    e.onDisconnect.addListener((()=>{
                        t && Cn(t),
                        t = null
                    }
                    ))
                }
                ,
                registerMenuCommand: e=>{
                    const t = Co("registerMenuCommand");
                    t ? (t.onMessage.addListener((t=>{
                        if ("ack"in t)
                            e.postMessage(t);
                        else {
                            const {method: n, event: o} = t;
                            e.postMessage(Mt({
                                method: n,
                                event: o
                            }))
                        }
                    }
                    )),
                    t.onDisconnect.addListener((()=>{
                        e.disconnect()
                    }
                    )),
                    e.onMessage.addListener((e=>{
                        const {messageId: n, name: o, uuid: s, accessKey: r, autoClose: i, title: a, id: c, createdAt: d} = e
                          , l = Ct([c, jo, s], "#");
                        t.postMessage(Mt({
                            messageId: n,
                            method: "registerMenuCommand",
                            name: o,
                            title: a,
                            uuid: s,
                            menuId: l,
                            createdAt: d,
                            accessKey: r,
                            autoClose: i
                        }))
                    }
                    )),
                    e.onDisconnect.addListener((()=>{
                        t.disconnect()
                    }
                    ))) : Pn((()=>e.disconnect()), 1)
                }
                ,
                notification: e=>{
                    const t = Co("notification");
                    t ? (t.onMessage.addListener((t=>{
                        e.postMessage(t)
                    }
                    )),
                    t.onDisconnect.addListener((()=>{
                        e.disconnect()
                    }
                    )),
                    e.onMessage.addListener((e=>{
                        t.postMessage(e)
                    }
                    )),
                    e.onDisconnect.addListener((()=>{
                        t.disconnect()
                    }
                    ))) : Pn((()=>e.disconnect()), 1)
                }
                ,
                openInTab: e=>{
                    const t = Co("openInTab");
                    t ? (t.onMessage.addListener((t=>{
                        e.postMessage(t)
                    }
                    )),
                    t.onDisconnect.addListener((()=>{
                        e.disconnect()
                    }
                    )),
                    e.onMessage.addListener((e=>{
                        const {messageId: n} = e;
                        if ("method"in e) {
                            const {method: o} = e;
                            if ("openInTab" == o)
                                if ("url"in e) {
                                    let o = e.url;
                                    const {active: s, loadInBackground: r, insert: i, incognito: a, setParent: c} = "boolean" == typeof e.options || void 0 === e.options ? Mt({
                                        loadInBackground: e.options
                                    }) : e.options
                                      , d = void 0 === s ? void 0 !== r && !r : s
                                      , l = void 0 === i || i;
                                    o && "//" == Gt(o, 0, 2) && (o = Fn.protocol + o),
                                    t.postMessage(Mt({
                                        messageId: n,
                                        method: "openInTab",
                                        details: Mt({
                                            url: o,
                                            options: Mt({
                                                active: !!d,
                                                insert: !!l,
                                                incognito: !!a,
                                                setParent: !a && !!c
                                            })
                                        }),
                                        uuid: e.uuid
                                    }))
                                } else
                                    t.postMessage(e);
                            else
                                Do.warn(`content: unknown method ${o}`)
                        } else
                            "name"in e ? t.postMessage(Mt({
                                messageId: n,
                                name: e.name
                            })) : "focus"in e ? t.postMessage(Mt({
                                messageId: n,
                                focus: !0
                            })) : "close"in e && t.postMessage(Mt({
                                messageId: n,
                                close: !0
                            }))
                    }
                    )),
                    e.onDisconnect.addListener((()=>{
                        t.disconnect()
                    }
                    ))) : Pn((()=>e.disconnect()), 1)
                }
                ,
                download: e=>{
                    let t;
                    const n = Co("download");
                    n ? (n.onMessage.addListener((t=>{
                        e.postMessage(t)
                    }
                    )),
                    n.onDisconnect.addListener((()=>{
                        e.disconnect(),
                        t = !0
                    }
                    )),
                    e.onMessage.addListener((e=>{
                        "cancel"in e ? (t = !0,
                        n.postMessage(Mt({
                            cancel: !0,
                            id: jo,
                            uuid: e.uuid
                        }))) : "details"in e ? Po(e).then((e=>{
                            if (t)
                                return;
                            let {url: o, ...s} = e.details;
                            n.postMessage(Mt({
                                messageId: e.messageId,
                                method: "download",
                                details: Mt({
                                    ...s,
                                    from: Mt({
                                        url: o
                                    })
                                }),
                                id: jo,
                                uuid: e.uuid,
                                location: Fn.href
                            }))
                        }
                        )) : n.postMessage(Mt({
                            messageId: e.messageId,
                            method: "download",
                            uuid: e.uuid,
                            id: e.id
                        }))
                    }
                    )),
                    e.onDisconnect.addListener((()=>{
                        n.disconnect()
                    }
                    ))) : Pn((()=>e.disconnect()), 1)
                }
                ,
                webRequest: e=>{
                    const t = Co("webRequest");
                    t ? (t.onMessage.addListener((t=>{
                        e.postMessage(t)
                    }
                    )),
                    t.onDisconnect.addListener((()=>{
                        e.disconnect()
                    }
                    )),
                    e.onMessage.addListener((e=>{
                        const {messageId: n, rules: o, uuid: s} = e;
                        t.postMessage(Mt({
                            messageId: n,
                            method: "webRequest",
                            rules: o,
                            uuid: s
                        }))
                    }
                    )),
                    e.onDisconnect.addListener((()=>{
                        t.disconnect()
                    }
                    ))) : Pn((()=>e.disconnect()), 1)
                }
                ,
                xhr: e=>{
                    let t, n;
                    const o = []
                      , s = async e=>{
                        if (e && $t(o, e),
                        n)
                            await n,
                            s();
                        else {
                            const e = Dt(o);
                            e && e()
                        }
                    }
                      , r = Co("xhr");
                    r ? (r.onMessage.addListener((t=>{
                        "ack"in t ? e.postMessage(t) : s((()=>{
                            const {onpartial: o, data: s, ...r} = t;
                            let i;
                            if (o && s) {
                                const {tfd: t} = s;
                                if (t) {
                                    const s = (e=>e && (so(e) || oo(e) || ro(e) || io(e)) ? (e=>{
                                        let t, n, o, s, r;
                                        if (oo(e))
                                            t = e.objUrl.url;
                                        else if (so(e))
                                            n = e.blob;
                                        else if (ro(e))
                                            o = e.dataUri;
                                        else {
                                            if (!io(e))
                                                throw "incompatible TransferableData";
                                            s = e.binary,
                                            r = e.type
                                        }
                                        return Mt({
                                            toBlob: ()=>wn((e=>{
                                                if (n)
                                                    e(n);
                                                else if (t)
                                                    try {
                                                        Ht(Bn(t), (t=>{
                                                            Ht(Wn(t), (t=>{
                                                                e(t)
                                                            }
                                                            ))
                                                        }
                                                        ))
                                                    } catch (t) {
                                                        e(void 0)
                                                    }
                                                else if (o)
                                                    e((e=>{
                                                        let t;
                                                        const n = kt(e, ",")
                                                          , o = un(n, 0)
                                                          , s = un(n, 1);
                                                        t = -1 != Kt(o, "base64") ? Ce(s) : Pe(s);
                                                        const r = un(kt(o, ":"), 1)
                                                          , i = un(kt(r, ";"), 0);
                                                        return new ln([t],Mt({
                                                            type: i
                                                        }))
                                                    }
                                                    )(o));
                                                else {
                                                    if (!s)
                                                        throw "incompatible Transferable";
                                                    {
                                                        const t = (e=>{
                                                            const t = new cn(e.length);
                                                            for (let n = 0; n < e.length; n++)
                                                                t[n] = zt(e, n);
                                                            return t.buffer
                                                        }
                                                        )(s);
                                                        e(new ln([t],r ? Mt({
                                                            type: r
                                                        }) : void 0))
                                                    }
                                                }
                                            }
                                            )),
                                            dispose: ()=>{
                                                t && on(t),
                                                t = n = o = s = void 0
                                            }
                                        })
                                    }
                                    )(e) : void 0)(t);
                                    if (!s)
                                        return;
                                    return void (n = wn((async t=>{
                                        const a = ()=>{
                                            n = null,
                                            t(),
                                            s && s.dispose()
                                        }
                                        ;
                                        try {
                                            const t = await s.toBlob();
                                            if (!t)
                                                return void a();
                                            const n = t.type;
                                            let c;
                                            if (c = "arrayBuffer"in t ? await Hn(t) : await qn(new Nn(t)),
                                            !c)
                                                return void a();
                                            i = Mt({
                                                nada: Mt({
                                                    buffer: c,
                                                    type: n
                                                })
                                            }),
                                            e.postMessage(Mt({
                                                ...r,
                                                onpartial: o,
                                                data: i
                                            })),
                                            a()
                                        } catch (e) {
                                            Do.warn(e),
                                            a()
                                        }
                                    }
                                    )))
                                }
                                i = s
                            } else
                                i = s;
                            e.postMessage(Mt({
                                ...r,
                                onpartial: o,
                                data: i
                            }))
                        }
                        ))
                    }
                    )),
                    r.onDisconnect.addListener((()=>{
                        s((async()=>{
                            e.disconnect(),
                            t = !0
                        }
                        ))
                    }
                    )),
                    e.onMessage.addListener((e=>{
                        Po(e).then((e=>{
                            t || (e.location = Fn.href,
                            r.postMessage(e))
                        }
                        ))
                    }
                    )),
                    e.onDisconnect.addListener((()=>{
                        r.disconnect()
                    }
                    ))) : Pn((()=>e.disconnect()), 1)
                }
                ,
                onurlchange: e=>{
                    const t = Co("onurlchange");
                    if (!t)
                        return void Pn((()=>e.disconnect()), 1);
                    let n = ()=>{
                        e.postMessage(Mt({
                            url: Fn.href
                        }))
                    }
                    ;
                    const o = ()=>{
                        n && (vn.removeEventListener("hashchange", n),
                        n = null)
                    }
                    ;
                    vn.addEventListener("hashchange", n),
                    t.onMessage.addListener((t=>{
                        e.postMessage(t)
                    }
                    )),
                    t.onDisconnect.addListener((()=>{
                        e.disconnect(),
                        o()
                    }
                    )),
                    e.onMessage.addListener((e=>{
                        t.postMessage(e)
                    }
                    )),
                    e.onDisconnect.addListener((()=>{
                        t.disconnect(),
                        o()
                    }
                    ))
                }
                ,
                values: e=>{
                    const t = Co("values");
                    t ? (t.onMessage.addListener((t=>{
                        e.postMessage(t)
                    }
                    )),
                    t.onDisconnect.addListener((()=>{
                        e.disconnect()
                    }
                    )),
                    e.onMessage.addListener((e=>{
                        t.postMessage(e)
                    }
                    )),
                    e.onDisconnect.addListener((()=>{
                        t.disconnect()
                    }
                    ))) : Pn((()=>e.disconnect()), 1)
                }
                ,
                backgroundControl: e=>{
                    const t = Co("backgroundControl");
                    t ? (t.onMessage.addListener((t=>{
                        e.postMessage(t)
                    }
                    )),
                    t.onDisconnect.addListener((()=>{
                        e.disconnect()
                    }
                    )),
                    e.onMessage.addListener((e=>{
                        t.postMessage(e)
                    }
                    )),
                    e.onDisconnect.addListener((()=>{
                        t.disconnect()
                    }
                    ))) : Pn((()=>e.disconnect()), 1)
                }
                ,
                keepAlive: e=>{
                    const t = Co("keepAlive");
                    t ? (t.onMessage.addListener((t=>{
                        e.postMessage(t)
                    }
                    )),
                    t.onDisconnect.addListener((()=>{
                        e.disconnect()
                    }
                    )),
                    e.onMessage.addListener((e=>{
                        t.postMessage(e)
                    }
                    )),
                    e.onDisconnect.addListener((()=>{
                        t.disconnect()
                    }
                    ))) : Pn((()=>e.disconnect()), 1)
                }
            })
              , Ao = Mt({
                setTimeout: ({args: e, cb: t})=>{
                    Pn(t, e.t)
                }
                ,
                setClipboard: ({args: e, cb: t})=>{
                    const {content: n, info: o, uuid: s} = e;
                    let r, i;
                    "object" == typeof o ? (o.type && (r = o.type),
                    o.mimetype && (i = o.mimetype)) : "string" == typeof o && (r = o);
                    const a = i || ("html" == r ? "text/html" : "text/plain");
                    _o ? wo.sendMessage(Mt({
                        method: "clipboard",
                        mimetype: a,
                        content: n,
                        uuid: s
                    }), (()=>t())) : (fn.document.addEventListener("copy", (e=>{
                        e.stopImmediatePropagation(),
                        e.preventDefault(),
                        e.clipboardData && e.clipboardData.setData(a, n)
                    }
                    ), Mt({
                        capture: !0,
                        once: !0
                    })),
                    fn.document.execCommand("copy"),
                    t())
                }
                ,
                closeTab: ({args: {uuid: e}, cb: t})=>{
                    wo.sendMessage(Mt({
                        method: "closeTab",
                        uuid: e,
                        id: jo
                    }), (e=>{
                        e && e.error && Do.warn(e.error),
                        t(e)
                    }
                    ))
                }
                ,
                focusTab: ({args: {uuid: e}, cb: t})=>{
                    wo.sendMessage(Mt({
                        method: "focusTab",
                        uuid: e,
                        id: jo
                    }), (e=>{
                        e && e.error && Do.warn(e.error),
                        t(e)
                    }
                    ))
                }
                ,
                addElement: async({args: t, node: n, cb: o})=>{
                    try {
                        const s = zn(t.tag, Mt({
                            ...t.properties || Mt({}),
                            ...t.id ? Mt({
                                id: t.id
                            }) : Mt({})
                        }));
                        let r, i;
                        if ("script" === t.tag && (r = no()) && s.setAttribute("nonce", r),
                        n)
                            i = n;
                        else {
                            const t = fn.document;
                            if (i = t.head || t.body || t.documentElement,
                            !i) {
                                const t = fn.document;
                                i = await wn((n=>e((()=>n(t.head || t.body)))))
                            }
                        }
                        i.appendChild(s),
                        r && s.removeAttribute("nonce"),
                        o()
                    } catch (e) {
                        Do.warn("content: error adding script", e)
                    }
                }
                ,
                tabs: ({args: e, cb: t})=>{
                    e.method = "tabs",
                    wo.sendMessage(e, (e=>e && t(e.data)))
                }
                ,
                cookie: ({args: e, cb: t})=>{
                    e.method = "cookie",
                    wo.sendMessage(e, (e=>e && t(e.data)))
                }
            })
              , To = Mt({
                init: ()=>{
                    jo = twod.contextId
                }
                ,
                processMessage: ({method: e, args: t, node: n},o)=>{
                    let s;
                    if (s = Ao[e])
                        return s(Mt({
                            args: t,
                            node: n,
                            cb: o
                        }));
                    o()
                }
                ,
                processConnect: (e,t)=>{
                    let n;
                    if (n = $o[e])
                        return n(t)
                }
            })
              , Uo = ["GM_info", "GM.info"]
              , ko = ["unsafeWindow", ...Uo]
              , Bo = e=>e.replace(new RegExp("[\"']","g"), "\\$1");
            let Fo = !1;
            const Xo = (e,t,n,o,s)=>{
                const {console: r} = twod;
                Fo = Fo || e.logLevel >= 60;
                const {version: i, injectMode: a, inIncognitoContext: c, isFirstPartyIsolation: d, downloadMode: l, relaxedCsp: u, userAgent: p, container: g, logLevel: m} = e
                  , f = Mt({
                    version: i,
                    injectMode: a,
                    inIncognitoContext: c,
                    isFirstPartyIsolation: d,
                    downloadMode: l,
                    relaxedCsp: u,
                    container: g
                });
                Tt(t, (async t=>{
                    const {script: i, storage: a} = t
                      , {name: c, uuid: d, options: {run_at: l}} = i
                      , {requires: u, ...g} = i
                      , _ = u.length
                      , h = !i.options.unwrap
                      , v = Mt({
                        ...f,
                        userAgent: p,
                        logLevel: m,
                        sandboxMode: s
                    });
                    let w, b;
                    const y = ((e,t)=>{
                        const {measure_scripts: n, top_level_await: o, enforce_strict_mode: s} = e
                          , {source_url: r, script: i, code: a} = t
                          , {name: c, grant: d} = i
                          , {requires: l} = i
                          , u = !i.options.unwrap
                          , p = l.map((e=>e.textContent || "")).join("\n");
                        if (u) {
                            let e = "";
                            const t = ["define", "module", "exports"]
                              , l = t.map((()=>"undefined"))
                              , u = -1 !== i.grant.indexOf("none");
                            let g;
                            return g = u ? Uo : d.concat(ko),
                            g.forEach((e=>{
                                const n = e.split(".")[0];
                                "window" !== n && -1 === t.indexOf(n) && (t.push(n),
                                l.push(`p.${n}`))
                            }
                            )),
                            [`with (${u ? "this.s" : "this"}) {`, "(async (u, { p, r, s }) => {", "try {", n ? `console.time("${e = `SCRIPT RUN TIME[${Bo(c)}]`}");\n` : "", "r(u, s, [", l.join(","), "]);", n ? `console.timeEnd("${e}");\n` : "", "} catch (e) {", "if (e.message && e.stack) {", "console.error(\"ERROR: Execution of script '", Bo(c), "' failed! \" + e.message);", "console.log(e.stack);", "} else {", "console.error(e);", "}", "}", "})", "(", (o ? "async " : "") + "function(", t.join(","), ") {", s ? '"use strict";\n' : "\n", p, a, "\n", `}, ${u ? "this" : "seed"})`, "}", "\n", r ? `//# sourceURL=${r}\n` : ""].join("")
                        }
                        return [p, a, "\n", r ? `//# sourceURL=${r}\n` : ""].join("")
                    }
                    )(e, t);
                    return h ? (w = ()=>{
                        Fo && r.debug(`env: inject "${c}" now`);
                        const e = `__f__${bn()}`
                          , t = Mt({
                            storage: a,
                            script: g
                        })
                          , s = `window["${e}"] = function(){${y}}`;
                        let i = !0;
                        o.once(`scriptack-${e}`, (()=>{
                            Fo && !i && r.log(`env: execution of "${c}" was delayed`),
                            n(s, (e=>{
                                e && r.error(`Uncaught SyntaxError: ${e}`)
                            }
                            ))
                        }
                        )),
                        o.send("script", Mt({
                            id: e,
                            unwrap: !1,
                            bundle: t,
                            flags: v
                        })),
                        i = !1
                    }
                    ,
                    b = "context-menu" == l || "document-start" == l ? void 0 : ()=>{
                        Fo && r.debug(`env: run "${c}" now  (${_} requires)`),
                        o.send("run", Mt({
                            uuid: d
                        }))
                    }
                    ) : b = ()=>{
                        Fo && r.debug(`env: inject @unwrap "${c}" now`),
                        n(y, (e=>{
                            e && r.error(`Uncaught SyntaxError: ${e}`)
                        }
                        ))
                    }
                    ,
                    No(c, l, w, b, Fo)
                }
                ))
            }
              , No = (t,n,o,s,r)=>{
                const {console: i} = twod;
                let a;
                "document-start" == n ? (r && i.debug(`env: run "${t}" ASAP -> document-start`),
                a = e=>e()) : "document-body" == n ? (r && i.debug(`env: schedule "${t}" for document-body`),
                a = Vn) : "context-menu" == n ? r && i.debug(`env: run "${t}" ASAP -> context-menu`) : "document-end" == n ? (r && i.debug(`env: schedule "${t}" for document-end`),
                a = t=>e(!1, t)) : (r && i.debug(`env: schedule "${t}" for document-idle`),
                a = Yn),
                o && o(),
                s && a && a((()=>{
                    s()
                }
                ))
            }
              , qo = (e,t)=>{
                let n, o;
                try {
                    o = (0,
                    eval)(e)
                } catch (e) {
                    n = e.message || e
                }
                return t && t(n),
                o
            }
              , Wo = function(e, t, n, o, s) {
                let r;
                const i = no()
                  , a = zn("script");
                i && a.setAttribute("nonce", i);
                try {
                    a.textContent = t,
                    e.appendChild(a)
                } catch (e) {
                    r = e.message || e
                }
                if (i && a.removeAttribute("nonce"),
                !s) {
                    const e = a.parentNode;
                    e && e.removeChild(a)
                }
                return o && o(r),
                !r
            }
              , Ho = (e,t)=>{
                try {
                    Wo(Xn.head || Xn.body || Xn.documentElement || Xn, e, 0, t)
                } catch (e) {
                    t && t(e.message || e)
                }
            }
            ;
            let Jo = !1;
            const Go = location.pathname + location.search
              , Ko = "TM_" + vo.short_id + window.btoa(Go.length + Go).substr(0, 255).replace(/[#=/]/g, "_")
              , zo = ()=>{
                let e, t, n, o;
                try {
                    o = document.cookie.split(";")
                } catch (e) {
                    return
                }
                for (e = 0; e < o.length; e++)
                    if (t = o[e].substr(0, o[e].indexOf("=")),
                    n = o[e].substr(o[e].indexOf("=") + 1),
                    t = t.replace(/^\s+|\s+$/g, ""),
                    0 === t.indexOf(Ko)) {
                        document.cookie = t + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                        const e = xe(n);
                        if (0 !== e.indexOf("blob:"))
                            continue;
                        let o;
                        try {
                            if (0 !== (new URL(e).origin + "/").indexOf(wo.getURL("/")))
                                continue;
                            if (o = new XMLHttpRequest,
                            o.open("GET", e, !1),
                            o.send(null),
                            200 === o.status || 0 === o.status)
                                return JSON.parse(o.responseText)
                        } catch (e) {
                            console.warn("content: unable to decode " + (o && o.responseText || "unknown"))
                        }
                    }
            }
            ;
            let Vo = !1;
            const Yo = (t,n,o)=>{
                const {contextId: s, bridges: r, console: i} = twod;
                let a;
                wn((e=>{
                    const o = t=>{
                        let n = 1;
                        const o = ()=>{
                            Jo && i.log('content: send "prepare" message'),
                            wo.sendMessage({
                                method: "prepare",
                                id: s,
                                topframe: $n,
                                url: window.location.href
                            }, (s=>{
                                if (!Vo) {
                                    if (!s)
                                        return Jo && i.log("content: _early_ execution, connection to bg failed -> retry!"),
                                        window.setTimeout(o, n),
                                        void (n = bt(2 * n, 3e3));
                                    Vo = !0,
                                    s.nonce && to(s.nonce),
                                    lt(s.contexters).length || lt(s.scripts).length || s.external_connect ? (t && t(s),
                                    e({
                                        info: s,
                                        type: "complete" == Yt(fn.document) ? "late" : "normal"
                                    })) : e({
                                        info: s
                                    })
                                }
                            }
                            ))
                        }
                        ;
                        !function(e) {
                            const t = ()=>"prerender" !== document.webkitVisibilityState
                              , n = ()=>{
                                t() && (document.removeEventListener("webkitvisibilitychange", n, !1),
                                e())
                            }
                            ;
                            t() ? e() : document.addEventListener("webkitvisibilitychange", n, !1)
                        }(o)
                    }
                      , r = ()=>{
                        let r;
                        if (Jo && i.log("content: Started (" + s + ", " + window.location.origin + window.location.pathname + ")", _n.tm_info),
                        (r = _n.tm_info) || (r = zo())) {
                            delete _n.tm_info,
                            r.nonce && to(r.nonce);
                            const {contexters: o, scripts: i, external_connect: c} = r;
                            if (lt(o).length || lt(i).length || c) {
                                if (r.contexters.raw || r.scripts.raw)
                                    if (t.raw)
                                        void 0 === a && (a = t.raw());
                                    else if (!n)
                                        throw "raw inject missing";
                                e({
                                    info: r,
                                    type: "sync"
                                })
                            } else
                                e({
                                    info: r
                                });
                            {
                                let e;
                                wo.sendMessage({
                                    method: "prepare",
                                    id: s,
                                    topframe: $n,
                                    url: window.location.href,
                                    scripts: e,
                                    cleanup: !0
                                }, (()=>null))
                            }
                        } else
                            n ? o((({scripts: e, contexters: n})=>{
                                t.raw && void 0 === a && (e.raw || n.raw) && (a = t.raw())
                            }
                            )) : (t.raw && void 0 === a && (a = t.raw()),
                            o())
                    }
                    ;
                    n ? window.setTimeout((()=>r()), 1) : r()
                }
                )).then((({info: a, type: c})=>{
                    const {external_connect: d} = a;
                    if (d && (async()=>{
                        await null,
                        r.first.send("external.connect")
                    }
                    )(),
                    c) {
                        Jo = Jo || a.logLevel >= 60;
                        const {scripts: d} = a;
                        if (d.raw) {
                            let e;
                            n && !t.raw && (e = !0),
                            e && (t.js ? (d.js = (d.js || []).concat(d.raw || []),
                            delete d.raw) : t.dom && (d.dom = (d.dom || []).concat(d.raw || []),
                            delete d.raw))
                        }
                        if (d.js) {
                            if (!t.js)
                                throw "js inject missing";
                            t.js()
                        }
                        if (d.dom) {
                            if (!t.dom)
                                throw "dom inject missing";
                            t.dom()
                        }
                        e(!1, (()=>{
                            Jo && i.log("content: DOMContentLoaded"),
                            Tt(lt(r), (e=>r[e].send("DOMContentLoaded")))
                        }
                        )),
                        l = ()=>{
                            Jo && i.log("content: load"),
                            Tt(lt(r), (e=>r[e].send("load")))
                        }
                        ,
                        "complete" == Yt(fn.document) ? l() : vn.addEventListener("load", (()=>l()), Mt({
                            capture: !0,
                            once: !0
                        }));
                        const u = (d.dom || []).length + (d.js || []).length + (d.raw || []).length;
                        Jo && i.log("content: " + (c || "normal") + " start event processing for " + s + " (" + u + " to run)"),
                        Zo(a, "sync" === c),
                        !$n && u && window.addEventListener("unload", (()=>{
                            wo.sendMessage({
                                method: "unLoad",
                                id: s,
                                topframe: !1,
                                url: window.location.href
                            }, (()=>null))
                        }
                        ), !1),
                        o()
                    } else
                        o();
                    var l
                }
                ))
            }
              , Zo = e=>{
                const {bridges: t} = twod
                  , {scripts: n, ...o} = e;
                n.js && Xo(o, n.js, So, t.js, "js"),
                n.dom && (Tt(ao, (e=>_n[e] = void 0)),
                Xo(o, n.dom, qo, t.dom, "dom")),
                n.raw && Xo(o, n.raw, Ho, t.raw, "raw")
            }
            ;
            let Qo;
            (async()=>{
                const {unsafeWindow: e, bridges: o} = twod
                  , {location: s, document: r} = e
                  , i = r instanceof XMLDocument;
                if (!Mt({
                    "http:": !0,
                    "https:": !0,
                    "file:": !0
                })[e.location.protocol])
                    return;
                const a = twod.contextId ? twod.contextId : twod.contextId = bn();
                let c;
                const d = Mt({});
                pt(twod.console, jn),
                wn((t=>{
                    if (Eo) {
                        const {createBridge: e} = Ro(a);
                        $t(xo, ((n,s)=>{
                            Qo = c = n;
                            const {modes: r} = s;
                            r.js && (o.js = e(),
                            d.js = ()=>!1,
                            i && (r.raw = !1)),
                            t(s)
                        }
                        ))
                    } else
                        wn((t=>{
                            Qo = c = e.pagejs,
                            delete e.pagejs,
                            Qo ? t() : (()=>{
                                let e = n=>{
                                    delete fn.pagejs,
                                    e = void 0,
                                    (e=>{
                                        if (!e)
                                            throw "Error: pagejs missing. Please see http://tmnk.net/faq#Q208 for more information.";
                                        Qo = c = e,
                                        t()
                                    }
                                    )(n)
                                }
                                ;
                                gt(fn, "pagejs", Mt({
                                    set: e,
                                    configurable: !0
                                })),
                                Pn((()=>{
                                    e && e()
                                }
                                ), 1)
                            }
                            )()
                        }
                        )).then((()=>{
                            t(Mt({
                                modes: Mt({
                                    js: !1,
                                    raw: !0,
                                    dom: !0
                                })
                            }))
                        }
                        ))
                }
                )).then((({modes: {dom: r, raw: l}, answer: u})=>{
                    var p;
                    if (u && (p = u).scripts && p.contexters && (_n.tm_info = u),
                    r) {
                        const e = Eo ? qo(`() => ${c};`)() : c
                          , {createBridge: t, inject: n} = ((e,t)=>{
                            const n = (e,t)=>{
                                Tt(s, (n=>n(e, t)))
                            }
                              , o = e=>$t(r, Mt({
                                listener: e,
                                clone: e=>e
                            }))
                              , s = []
                              , r = []
                              , i = (e,t)=>{
                                Tt(r, (({listener: n, clone: o})=>n(e, o(t))))
                            }
                              , a = e=>$t(s, e)
                              , c = "c" + bn();
                            let d;
                            return Mt({
                                createBridge: ()=>(d = yo(Mt({
                                    sendPrefix: "2S",
                                    listenPrefix: "2U",
                                    send: i,
                                    onMessage: a
                                })),
                                d.init(e),
                                d),
                                inject: ()=>(t(Mt({
                                    unsafeWindow: fn,
                                    unsafeThis: _n,
                                    pageWindow: void 0,
                                    contextId: c,
                                    fSend: n,
                                    fOnMessage: o
                                })),
                                d.sendToId(c, "commid", Mt({
                                    id: e
                                })),
                                !0)
                            })
                        }
                        )(a, e);
                        d.dom = n,
                        o.dom = t()
                    }
                    if (l) {
                        const {createBridge: e, inject: s} = ((e,o)=>{
                            let s;
                            return Mt({
                                createBridge: ()=>(s = (({sendPrefix: e, listenPrefix: t, cloneInto: o})=>{
                                    const s = e=>o ? o(e, fn.document) : e
                                      , r = Mt({});
                                    let i, a, c = 1;
                                    const d = Mt({});
                                    let l = !1
                                      , u = [];
                                    const p = ()=>{
                                        v = fn.document.documentElement,
                                        l = !1;
                                        const e = u;
                                        u = [],
                                        Tt(e, (e=>{
                                            l || b() ? $t(u, e) : e()
                                        }
                                        ))
                                    }
                                    ;
                                    let g;
                                    const m = e=>{
                                        const t = ++c;
                                        return d[c] = e,
                                        t
                                    }
                                      , f = (e,t)=>{
                                        const {m: n, a: o, r, n: i} = t
                                          , {m: a, c} = ((e,t,n)=>{
                                            let o, r;
                                            return n ? (r = new an(e,Mt({
                                                relatedTarget: n
                                            })),
                                            o = new rn(e,Mt({
                                                detail: s(t)
                                            }))) : o = new rn(e,Mt({
                                                detail: s(t)
                                            })),
                                            Mt({
                                                m: r,
                                                c: o
                                            })
                                        }
                                        )(e, Mt({
                                            m: n,
                                            a: o,
                                            r
                                        }), i);
                                        a && yt(Te, fn, [a]),
                                        yt(Te, fn, [c])
                                    }
                                      , _ = t=>{
                                        const n = (e=>{
                                            if ("MouseEvent" === (e=>{
                                                const t = kt(Ft(e), " ");
                                                return Bt(Ct(Pt(t, 1), " "), 0, -1)
                                            }
                                            )(e)) {
                                                const t = en(e);
                                                if (!t)
                                                    throw "Invalid MouseEvent";
                                                return void (g = t)
                                            }
                                            const t = Nt(tn(e));
                                            return g && (t.n = g,
                                            g = void 0),
                                            t
                                        }
                                        )(t);
                                        if (!n)
                                            return;
                                        const {m: o, r: s, a: c, n: l} = n;
                                        if (r[o] && (Tt(r[o], (e=>e(c))),
                                        delete r[o]),
                                        "unlock" == o)
                                            f(`${e}_${a}`, Mt({
                                                m: "unlocked",
                                                a: void 0,
                                                r: null
                                            })),
                                            p();
                                        else if ("unlocked" == o)
                                            p();
                                        else if ("message.response" == o) {
                                            if (null == s)
                                                throw "Invalid Message";
                                            ((e,t)=>{
                                                let n;
                                                e && (n = d[e]) && (n(t),
                                                delete d[e])
                                            }
                                            )(s, c)
                                        } else if (i) {
                                            const t = s ? t=>{
                                                f(`${e}_${a}`, Mt({
                                                    m: "message.response",
                                                    a: t,
                                                    r: s
                                                }))
                                            }
                                            : ()=>{}
                                            ;
                                            i(Mt({
                                                method: o,
                                                args: c,
                                                node: l
                                            }), t)
                                        }
                                    }
                                      , h = e=>{
                                        e && (a = e),
                                        a && vn.addEventListener(`${t}_${a}`, _, !0)
                                    }
                                    ;
                                    let v, w;
                                    const b = ()=>{
                                        if ((()=>{
                                            const e = fn.document.documentElement;
                                            return v || (v = e),
                                            v !== e
                                        }
                                        )()) {
                                            if (w) {
                                                const e = w;
                                                w = void 0,
                                                e(fn.document)
                                            }
                                            return !0
                                        }
                                    }
                                      , y = Mt({
                                        init: async(t,o)=>{
                                            a ? h() : h(t),
                                            (e=>(v = fn.document.documentElement,
                                            wn((async t=>{
                                                if (w = t,
                                                n && !e && (await null,
                                                b()))
                                                    return;
                                                const o = new dn((()=>{
                                                    b() && o.disconnect()
                                                }
                                                ));
                                                o.observe(fn.document, Mt({
                                                    childList: !0
                                                }))
                                            }
                                            ))))(o).then((()=>{
                                                l = !0,
                                                y.refresh(),
                                                f(`${e}_${a}`, Mt({
                                                    m: "unlock",
                                                    a: void 0,
                                                    r: null
                                                }))
                                            }
                                            ))
                                        }
                                        ,
                                        refresh: ()=>{
                                            const e = a;
                                            e && (y.cleanup(),
                                            y.init(e, !0))
                                        }
                                        ,
                                        switchId: e=>{
                                            a && y.cleanup(),
                                            h(e)
                                        }
                                        ,
                                        send: (t,n,o,s)=>wn((r=>{
                                            let i, c;
                                            "function" != typeof o && null !== o ? (i = o,
                                            c = s) : c = o,
                                            b();
                                            const d = ()=>{
                                                f(`${e}_${a}`, Mt({
                                                    m: t,
                                                    a: n,
                                                    r: c ? m(c) : null,
                                                    n: i
                                                })),
                                                r()
                                            }
                                            ;
                                            l ? $t(u, d) : d()
                                        }
                                        )),
                                        sendToId: (t,n,o)=>{
                                            f(`${e}_${t}`, Mt({
                                                m: n,
                                                a: o,
                                                r: null
                                            }))
                                        }
                                        ,
                                        setMessageListener: e=>{
                                            i = e
                                        }
                                        ,
                                        once: (e,t)=>{
                                            r[e] || (r[e] = []),
                                            $t(r[e], t)
                                        }
                                        ,
                                        cleanup: ()=>{
                                            a && (vn.removeEventListener(`${t}_${a}`, _, !0),
                                            a = void 0)
                                        }
                                    });
                                    return y
                                }
                                )(Mt({
                                    sendPrefix: "2P",
                                    listenPrefix: "2C",
                                    cloneInto: Jn
                                })),
                                s),
                                inject: ()=>{
                                    s.init(e);
                                    let n = !1;
                                    const r = bn()
                                      , i = "(" + qt(((e,t)=>{
                                        const n = window
                                          , o = t(n)
                                          , s = n.parent
                                          , {O_dPy: r, cSO: i} = o;
                                        r(s, e, i({
                                            value: o,
                                            enumerable: !1,
                                            writable: !1,
                                            configurable: !0
                                        }))
                                    }
                                    )) + ')("' + r + '", ' + qt(t) + ")";
                                    return s.once("ack", (()=>{
                                        n = !0
                                    }
                                    )),
                                    (t=>{
                                        ((e,t)=>{
                                            const n = un(Qt(fn.document, "*"), 0) || fn.document
                                              , o = zn("div")
                                              , s = o.attachShadow(Mt({
                                                mode: "closed"
                                            }));
                                            s.appendChild(zn("style", ":host { display: none }"));
                                            const r = zn("iframe", Mt({
                                                sandbox: "allow-scripts allow-same-origin",
                                                style: "display: none",
                                                src: "javascript:void 0"
                                            }));
                                            let i = ()=>{
                                                if (null === i)
                                                    return;
                                                i = null;
                                                let n = !1;
                                                try {
                                                    const t = r.contentDocument
                                                      , o = r.contentWindow;
                                                    t && o && (n = Wo(un(t.getElementsByTagName("*"), 0), e))
                                                } catch (e) {}
                                                t(o, n),
                                                r.remove(),
                                                o.remove()
                                            }
                                            ;
                                            r.addEventListener("load", i, Mt({
                                                once: !0,
                                                capture: !0
                                            })),
                                            s.appendChild(r),
                                            n.appendChild(o),
                                            i && i()
                                        }
                                        )(t, ((t,n)=>{
                                            Wo(t, `(${o})({ unsafeWindow: typeof globalThis === "undefined" ? window : globalThis, unsafeThis: window, vault: ${n ? `window["${r}"]` : "null"}, contextId: "${r}", __proto__: null });delete window["${r}"]\n`, 0, (()=>{
                                                s.sendToId(r, "commid", Mt({
                                                    id: e
                                                }))
                                            }
                                            ), !0)
                                        }
                                        ))
                                    }
                                    )(i),
                                    n
                                }
                            })
                        }
                        )(a, c);
                        d.raw = s,
                        o.raw = e()
                    }
                    o.first = o.js || o.raw || o.dom,
                    wo.onMessage.addListener(((t,n,r)=>{
                        "executeScript" == t.method ? (t.url && 0 !== Kt(s.href, t.url) || void 0 !== t.topframe && t.topframe != $n || Zo(t.info, !1),
                        r(Mt({}))) : $n && ("loadUrl" == t.method ? (e.location = t.url,
                        r(Mt({}))) : "reload" == t.method ? (s.reload(),
                        r(Mt({}))) : "setForeignAttr" == t.method ? (o.first.send(t.method, t),
                        r(Mt({}))) : jn.log("content: unknown method " + (e=>{
                            const t = (e,n)=>{
                                let o;
                                if (null === e)
                                    o = "null";
                                else {
                                    const i = typeof e;
                                    if ("object" === i) {
                                        if (n) {
                                            if (-1 != At(n, e))
                                                throw "Converting circular structure to JSON";
                                            Et(n, n.length, e)
                                        } else
                                            n = [e];
                                        if (ht(e)) {
                                            let i = "";
                                            for (let o = 0; o < e.length; o++) {
                                                let a;
                                                a = Ut(e, o) ? Ut(s = e, r = o) ? s[r] : void 0 : St(e, o);
                                                const c = t(a, n);
                                                i += `${o ? "," : ""}${void 0 === c ? "null" : c}`
                                            }
                                            o = `[${i}]`
                                        } else {
                                            let s = "";
                                            Tt(lt(e), (o=>{
                                                const r = t(e[o], n);
                                                void 0 !== r && (s += `${s ? "," : ""}${I(o)}: ${r}`)
                                            }
                                            )),
                                            o = `{${s}}`
                                        }
                                        n.length -= 1
                                    } else {
                                        if ("bigint" === i)
                                            throw "Do not know how to serialize a BigInt";
                                        o = I(e)
                                    }
                                }
                                var s, r;
                                return o
                            }
                            ;
                            return t(e)
                        }
                        )(t)))
                    }
                    )),
                    yn.onConnect.addListener(((e,t)=>{
                        To.processConnect(e, t)
                    }
                    )),
                    To.init(),
                    Tt(lt(o), (e=>{
                        if ("first" == e)
                            return;
                        const t = o[e];
                        t.setMessageListener(((n,o)=>{
                            const {method: s, args: r} = n;
                            if ("port.message" == s)
                                yn.message(r, t);
                            else if ("csp" == s) {
                                let t;
                                t = "raw" == e ? Ho : "dom" == e ? qo : So,
                                t(r.src, (e=>{
                                    e && jn.error(`Uncaught Error: ${e}`)
                                }
                                ))
                            } else if ("external.message" == s)
                                wo.sendMessage(Mt({
                                    method: "externalMessage",
                                    request: r
                                }), (e=>{
                                    o(e)
                                }
                                ));
                            else if ("console" == s) {
                                const e = r
                                  , t = un(e, 0)
                                  , n = un(e, 1)
                                  , o = jn[t] || jn.log;
                                o && yt(o, jn, ((e,...t)=>{
                                    let n = e.length;
                                    const o = Mt(e);
                                    for (let e = 0; e < t.length; e++) {
                                        const s = t[e]
                                          , r = ht(s) ? s : [s];
                                        for (let e = 0; e < r.length; e++)
                                            o[n + e] = Lt(r, e);
                                        n += r.length
                                    }
                                    return ut(o)
                                }
                                )(["injected:"], (e=>{
                                    const t = [];
                                    return Tt(e, (e=>{
                                        $t(t, (e=>"string" == typeof e ? Rt(e) : e)(e))
                                    }
                                    )),
                                    t
                                }
                                )(n)))
                            } else
                                To.processMessage(n, o)
                        }
                        ))
                    }
                    )),
                    Yo(d, i, (()=>Qo = void 0)),
                    (async()=>{
                        const {contextId: e} = twod
                          , {location: t, document: n} = fn;
                        n.addEventListener("mouseenter", (()=>{
                            wo.sendMessage(Mt({
                                method: "contextmenu",
                                url: t.href,
                                id: e
                            }), (()=>{}
                            ))
                        }
                        ), !1)
                    }
                    )()
                }
                ))
            }
            )()
        }
        )();
    }
    )({
        __proto__: null,
        unsafeWindow: typeof globalThis === "undefined" ? window : globalThis,
        unsafeThis: window,
    }, "tm_4s8b1k")
}
    