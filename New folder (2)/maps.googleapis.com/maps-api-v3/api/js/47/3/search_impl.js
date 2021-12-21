google.maps.__gjsload__('search_impl', function(_) {
    var tab = function(a) {
            _.F(this, a, 4)
        },
        vab = function(a) {
            uab || (uab = {
                O: "sssM",
                Z: ["ss"]
            });
            var b = uab;
            return _.Lh.g(a.vb(), b)
        },
        wab = function(a, b) {
            a.H[0] = b
        },
        xab = function(a, b) {
            a.H[2] = b
        },
        X$ = function(a) {
            _.F(this, a, 3)
        },
        yab = function() {
            var a = _.gj,
                b = _.ri;
            this.h = _.pe;
            this.g = _.ek(_.xq, a, _.Yq + "/maps/api/js/LayersService.GetFeature", b)
        },
        Bab = function(a, b, c) {
            var d = _.Zz(new yab);
            c.Cp = (0, _.Na)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.CBa(c, _.TG(b));
            var e = [];
            e.push(_.L.addListener(c, "click", (0, _.Na)(zab, null, a)));
            _.$a(["mouseover",
                "mouseout", "mousemove"
            ], function(f) {
                e.push(_.L.addListener(c, f, (0, _.Na)(Aab, null, a, f)))
            });
            e.push(_.L.addListener(a, "clickable_changed", function() {
                a.g.clickable = 0 != a.get("clickable")
            }));
            a.h = e
        },
        zab = function(a, b, c, d, e) {
            var f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.ok(e, 1) ? new _.af(_.be(e.getLocation(), 0), _.be(e.getLocation(), 1)) : null;
                f.fields = {};
                for (var g = 0, h = _.ie(e, 2); g < h; ++g) {
                    var k = new _.ZG(_.he(e, 2, g));
                    f.fields[k.getKey()] = _.I(k, 1)
                }
            }
            _.L.trigger(a, "click", b, c, d, f)
        },
        Aab =
        function(a, b, c, d, e, f, g) {
            var h = null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.L.trigger(a, b, c, d, e, h, g)
        },
        Cab = function() {},
        uab;
    _.D(tab, _.E);
    tab.prototype.getParameter = function(a) {
        return new _.ZG(_.he(this, 3, a))
    };
    _.D(X$, _.E);
    X$.prototype.getStatus = function() {
        return _.ae(this, 0, -1)
    };
    X$.prototype.getLocation = function() {
        return new _.lm(this.H[1])
    };
    yab.prototype.load = function(a, b) {
        function c(g) {
            g = new X$(g);
            b(g)
        }
        var d = new tab;
        wab(d, a.layerId.split("|")[0]);
        d.H[1] = a.g;
        xab(d, _.je(_.re(this.h)));
        for (var e in a.parameters) {
            var f = new _.ZG(_.ge(d, 3));
            f.H[0] = e;
            f.H[1] = a.parameters[e]
        }
        a = vab(d);
        this.g(a, c, c);
        return a
    };
    yab.prototype.cancel = function() {
        throw Error("Not implemented");
    };
    Cab.prototype.ft = function(a) {
        if (_.sh[15]) {
            var b = a.Sd,
                c = a.Sd = a.getMap();
            b && a.g && (a.i ? (b = b.__gm.g, b.set(b.get().yf(a.g))) : a.g && _.YBa(a.g, b) && (_.$a(a.h || [], _.L.removeListener), a.h = null));
            if (c) {
                var d = a.get("layerId"),
                    e = a.get("spotlightDescription"),
                    f = a.get("paintExperimentIds"),
                    g = a.get("styler"),
                    h = a.get("mapsApiLayer"),
                    k = a.get("darkLaunch");
                b = new _.ql;
                d = d.split("|");
                b.layerId = d[0];
                for (var l = 1; l < d.length; ++l) {
                    var m = d[l].split(":");
                    b.parameters[m[0]] = m[1]
                }
                e && (b.spotlightDescription = new _.xo(e));
                f && (b.paintExperimentIds =
                    f.slice(0));
                g && (b.styler = new _.tl(g));
                h && (b.mapsApiLayer = new _.vk(h));
                b.darkLaunch = !!k;
                a.g = b;
                a.i = a.get("renderOnBaseMap");
                a.i ? (a = c.__gm.g, a.set(a.get().Zd(b))) : Bab(a, c, b);
                _.tg(c, "Lg")
            }
        }
    };
    _.qf("search_impl", new Cab);
});