(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"backgroundColorRatios":[0],"defaultVRPointer":"gaze","minHeight":20,"id":"rootPlayer","data":{"displayTooltipInTouchScreens":true,"history":{},"initialScale":0.5,"surfaceSelectionHotspotMode":"hotspotEnabled","name":"Player18403","defaultLocale":"ru","locales":{"ru":"locale/ru.txt"},"textToSpeechConfig":{"pitch":1,"rate":1,"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"speechOnQuizQuestion":false}},"propagateClick":false,"minWidth":20,"scrollBarColor":"#000000","backgroundColor":["#000000"],"scrollBarMargin":2,"watermark":false,"vrPolyfillScale":0.96,"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_F5A2D2AF_E492_7D4C_41EA_F1E1DE7BAB4A_mobile_playlist]); this.syncPlaylists([this.ThumbnailList_F5A2D2AF_E492_7D4C_41EA_F1E1DE7BAB4A_mobile_playlist,this.mainPlayList])","class":"Player","left":447.5,"hash": "6171bec3bbe81e6524d87de7489ed1de16e99a38623262d0f4d1d82a72bd7559", "definitions": [{"iconURL":"skin/IconButton_7B436E8B_6188_832C_41C6_0739489BE4BF.png","minHeight":1,"id":"IconButton_7B436E8B_6188_832C_41C6_0739489BE4BF_mobile","minWidth":1,"verticalAlign":"middle","propagateClick":false,"data":{"name":"\u0431\u043b\u0438\u0436\u0435"},"horizontalAlign":"center","transparencyActive":true,"class":"IconButton","width":25,"backgroundOpacity":0,"height":25},{"hfov":360,"hfovMax":130,"thumbnailUrl":"media/panorama_CA9FE24B_D326_3E51_41B6_633A759F0E68_t.jpg","label":trans('panorama_CA9FE24B_D326_3E51_41B6_633A759F0E68.label'),"cardboardMenu":"this.Menu_4F4AC447_4548_75D5_41BC_1A567C547CB0","class":"Panorama","id":"panorama_CA9FE24B_D326_3E51_41B6_633A759F0E68","adjacentPanoramas":[{"data":{"overlayID":"overlay_51EC3805_7389_C823_41B4_C65AF5E847E1"},"class":"AdjacentPanorama","yaw":-179.03,"distance":24.96,"select":"this.overlay_51EC3805_7389_C823_41B4_C65AF5E847E1.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_CAB50EE2_D326_6653_41DD_34B1425C54B0","backwardYaw":16.04},{"data":{"overlayID":"overlay_C207A751_D32A_2671_41C8_D1CED3827DFE"},"class":"AdjacentPanorama","yaw":2.38,"distance":24.67,"select":"this.overlay_C207A751_D32A_2671_41C8_D1CED3827DFE.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_CAB70804_D326_29D7_41D2_BDD2AC39BAA2","backwardYaw":0.42}],"vfov":180,"data":{"label":"1"},"overlays":["this.overlay_51EC3805_7389_C823_41B4_C65AF5E847E1","this.overlay_C207A751_D32A_2671_41C8_D1CED3827DFE"],"frames":[{"cube":{"class":"ImageResource","levels":[{"colCount":54,"class":"TiledImageResourceLevel","width":27648,"url":"media/panorama_CA9FE24B_D326_3E51_41B6_633A759F0E68_0/{face}/0/{row}_{column}.jpg","height":4608,"tags":"ondemand","rowCount":9},{"colCount":30,"class":"TiledImageResourceLevel","width":15360,"url":"media/panorama_CA9FE24B_D326_3E51_41B6_633A759F0E68_0/{face}/1/{row}_{column}.jpg","height":2560,"tags":"ondemand","rowCount":5},{"colCount":18,"class":"TiledImageResourceLevel","width":9216,"url":"media/panorama_CA9FE24B_D326_3E51_41B6_633A759F0E68_0/{face}/2/{row}_{column}.jpg","height":1536,"tags":"ondemand","rowCount":3},{"colCount":12,"class":"TiledImageResourceLevel","width":6144,"url":"media/panorama_CA9FE24B_D326_3E51_41B6_633A759F0E68_0/{face}/3/{row}_{column}.jpg","height":1024,"tags":"ondemand","rowCount":2},{"colCount":6,"class":"TiledImageResourceLevel","width":3072,"url":"media/panorama_CA9FE24B_D326_3E51_41B6_633A759F0E68_0/{face}/4/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"rowCount":1}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_CA9FE24B_D326_3E51_41B6_633A759F0E68_t.jpg"}]},{"minHeight":1,"id":"Image_791C96B5_6D5C_9DEB_41D3_A45DCA34CDF5_mobile","minWidth":1,"verticalAlign":"middle","propagateClick":false,"data":{"name":"Image11314"},"horizontalAlign":"center","right":4.89,"url":trans('Image_791C96B5_6D5C_9DEB_41D3_A45DCA34CDF5_mobile.url'),"class":"Image","bottom":1.5,"width":60,"backgroundOpacity":0,"height":30,"scaleMode":"fit_inside","visible":false,"cursor":"hand"},{"class":"PanoramaCamera","initialPosition":{"pitch":-0.65,"class":"PanoramaCameraPosition","hfov":115,"yaw":16.86},"id":"panorama_CAB50EE2_D326_6653_41DD_34B1425C54B0_camera","enterPointingToHorizon":true},{"backgroundColorRatios":[1],"minHeight":1,"id":"Container_72F51EB0_6DA5_8DE9_41D9_8FFA57FEA011_mobile","scrollBarWidth":5,"minWidth":1,"verticalAlign":"middle","propagateClick":false,"left":0,"scrollBarColor":"#000000","backgroundColor":["#CC0000"],"scrollBarMargin":0,"overflow":"hidden","horizontalAlign":"center","scrollBarOpacity":0,"class":"Container","data":{"name":"Container16271"},"bottom":0,"width":40,"backgroundOpacity":0.95,"height":40,"children":["this.Image_4D814365_6DA7_9B6B_41C9_F0948222EC93_mobile"],"layout":"horizontal","gap":4,"cursor":"hand"},{"minHeight":1,"id":"Container_7B625D2A_6188_816C_41AE_DCFD6A81FF65_mobile","scrollBarWidth":5,"minWidth":1,"verticalAlign":"middle","left":0,"scrollBarColor":"#000000","right":0,"scrollBarMargin":1,"horizontalAlign":"center","overflow":"hidden","scrollBarOpacity":0,"class":"Container","data":{"name":"\u043a\u043d\u043e\u043f\u043a\u0438 \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438"},"bottom":0,"backgroundOpacity":0,"height":40,"children":["this.IconButton_7B1378A5_618B_8F67_41BF_0EF686E02086_mobile","this.IconButton_78FBA8EE_6189_80E5_4177_A05F0D7CC7B4_mobile","this.IconButton_78EBFC83_6188_8723_41C1_589BA6DE7DE7_mobile","this.IconButton_78F17661_6188_831F_41C5_D05323306B82_mobile","this.IconButton_7B436E8B_6188_832C_41C6_0739489BE4BF_mobile","this.IconButton_78F6A9BF_6189_8163_41D0_BB865E015852_mobile","this.IconButton_7A221EAE_61B8_8364_41BE_A1A122EC1529_mobile"],"layout":"horizontal","gap":4},{"items":[{"class":"PanoramaPlayListItem","camera":"this.panorama_CA9FE24B_D326_3E51_41B6_633A759F0E68_camera","media":"this.panorama_CA9FE24B_D326_3E51_41B6_633A759F0E68","player":"this.MainViewer_mobilePanoramaPlayer"},{"class":"PanoramaPlayListItem","camera":"this.panorama_CAB50EE2_D326_6653_41DD_34B1425C54B0_camera","media":"this.panorama_CAB50EE2_D326_6653_41DD_34B1425C54B0","player":"this.MainViewer_mobilePanoramaPlayer"},{"class":"PanoramaPlayListItem","camera":"this.panorama_CAB70804_D326_29D7_41D2_BDD2AC39BAA2_camera","media":"this.panorama_CAB70804_D326_29D7_41D2_BDD2AC39BAA2","player":"this.MainViewer_mobilePanoramaPlayer"}],"class":"PlayList","id":"ThumbnailList_F5A2D2AF_E492_7D4C_41EA_F1E1DE7BAB4A_mobile_playlist"},{"items":["this.PanoramaPlayListItem_DE379E08_D373_6621_41DD_AA555C9D26FC",{"class":"PanoramaPlayListItem","camera":"this.panorama_CAB50EE2_D326_6653_41DD_34B1425C54B0_camera","media":"this.panorama_CAB50EE2_D326_6653_41DD_34B1425C54B0","player":"this.MainViewer_mobilePanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"class":"PanoramaPlayListItem","camera":"this.panorama_CAB70804_D326_29D7_41D2_BDD2AC39BAA2_camera","media":"this.panorama_CAB70804_D326_29D7_41D2_BDD2AC39BAA2","end":"this.trigger('tourEnded')","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","player":"this.MainViewer_mobilePanoramaPlayer"}],"class":"PlayList","id":"mainPlayList"},{"opacity":0.4,"rollOverBackgroundColor":"#000000","selectedFontColor":"#FFFFFF","fontFamily":"Arial","backgroundColor":"#404040","children":["this.MenuItem_A92DF125_BDE7_E5EF_41DA_BC9C0CA5440C","this.MenuItem_A92DC125_BDE7_E5EF_41C8_840DE5474275","this.MenuItem_A92DD125_BDE7_E5EF_41E2_5330695A1FC3"],"rollOverFontColor":"#FFFFFF","label":trans('Menu_4F4AC447_4548_75D5_41BC_1A567C547CB0.label'),"distance":2,"class":"Menu","rollOverOpacity":0.8,"selectedBackgroundColor":"#202020","fontColor":"#FFFFFF","id":"Menu_4F4AC447_4548_75D5_41BC_1A567C547CB0"},{"minHeight":1,"id":"Container_6D25C29F_738B_D85F_41D6_42C675A272BF_mobile","scrollBarWidth":5,"minWidth":1,"verticalAlign":"middle","left":0,"scrollBarColor":"#000000","right":0,"scrollBarMargin":1,"horizontalAlign":"center","overflow":"hidden","scrollBarOpacity":0,"class":"Container","data":{"name":"\u043a\u043d\u043e\u043f\u043a\u0438 \u042d\u0422\u0410\u0416\u0418"},"bottom":40,"backgroundOpacity":0,"height":40,"children":["this.IconButton_6D2082A3_738B_D860_41C8_EB5A1BB5E262_mobile","this.IconButton_6D92F607_7388_5820_41CD_2DF7F54AEC52_mobile"],"layout":"horizontal","visible":false,"gap":4},{"hfov":360,"hfovMax":130,"thumbnailUrl":"media/panorama_CAB50EE2_D326_6653_41DD_34B1425C54B0_t.jpg","label":trans('panorama_CAB50EE2_D326_6653_41DD_34B1425C54B0.label'),"cardboardMenu":"this.Menu_4F4AC447_4548_75D5_41BC_1A567C547CB0","class":"Panorama","id":"panorama_CAB50EE2_D326_6653_41DD_34B1425C54B0","adjacentPanoramas":[{"data":{"overlayID":"overlay_B20AB226_BDE2_67ED_4198_D96EA33B97EE"},"class":"AdjacentPanorama","yaw":16.04,"distance":29.47,"select":"this.overlay_B20AB226_BDE2_67ED_4198_D96EA33B97EE.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_CA9FE24B_D326_3E51_41B6_633A759F0E68","backwardYaw":-179.03}],"vfov":180,"data":{"label":"3"},"overlays":["this.overlay_B20AB226_BDE2_67ED_4198_D96EA33B97EE"],"frames":[{"cube":{"class":"ImageResource","levels":[{"colCount":54,"class":"TiledImageResourceLevel","width":27648,"url":"media/panorama_CAB50EE2_D326_6653_41DD_34B1425C54B0_0/{face}/0/{row}_{column}.jpg","height":4608,"tags":"ondemand","rowCount":9},{"colCount":30,"class":"TiledImageResourceLevel","width":15360,"url":"media/panorama_CAB50EE2_D326_6653_41DD_34B1425C54B0_0/{face}/1/{row}_{column}.jpg","height":2560,"tags":"ondemand","rowCount":5},{"colCount":18,"class":"TiledImageResourceLevel","width":9216,"url":"media/panorama_CAB50EE2_D326_6653_41DD_34B1425C54B0_0/{face}/2/{row}_{column}.jpg","height":1536,"tags":"ondemand","rowCount":3},{"colCount":12,"class":"TiledImageResourceLevel","width":6144,"url":"media/panorama_CAB50EE2_D326_6653_41DD_34B1425C54B0_0/{face}/3/{row}_{column}.jpg","height":1024,"tags":"ondemand","rowCount":2},{"colCount":6,"class":"TiledImageResourceLevel","width":3072,"url":"media/panorama_CAB50EE2_D326_6653_41DD_34B1425C54B0_0/{face}/4/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"rowCount":1}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_CAB50EE2_D326_6653_41DD_34B1425C54B0_t.jpg"}]},{"class":"PanoramaCamera","initialPosition":{"pitch":-1.09,"class":"PanoramaCameraPosition","hfov":115,"yaw":-178.23},"id":"panorama_CA9FE24B_D326_3E51_41B6_633A759F0E68_camera","enterPointingToHorizon":true},{"buttonMoveRight":"this.IconButton_78FBA8EE_6189_80E5_4177_A05F0D7CC7B4_mobile","arrowKeysAction":"translate","touchControlMode":"drag_rotation","buttonMoveUp":"this.IconButton_78EBFC83_6188_8723_41C1_589BA6DE7DE7_mobile","buttonZoomIn":"this.IconButton_7B436E8B_6188_832C_41C6_0739489BE4BF_mobile","mouseControlMode":"drag_rotation","class":"PanoramaPlayer","surfaceSelectionHorizontalAngle":30.6,"buttonMoveDown":"this.IconButton_78F17661_6188_831F_41C5_D05323306B82_mobile","buttonMoveLeft":"this.IconButton_7B1378A5_618B_8F67_41BF_0EF686E02086_mobile","aaEnabled":true,"buttonZoomOut":"this.IconButton_78F6A9BF_6189_8163_41D0_BB865E015852_mobile","surfaceSelectionVerticalAngle":61.2,"surfaceSelectionEnabled":true,"displayPlaybackBar":true,"id":"MainViewer_mobilePanoramaPlayer","viewerArea":"this.MainViewer_mobile"},{"iconURL":"skin/IconButton_78EBFC83_6188_8723_41C1_589BA6DE7DE7.png","minHeight":1,"id":"IconButton_78EBFC83_6188_8723_41C1_589BA6DE7DE7_mobile","minWidth":1,"verticalAlign":"middle","propagateClick":false,"data":{"name":"\u0432\u0432\u0435\u0440\u0445"},"horizontalAlign":"center","transparencyActive":true,"class":"IconButton","width":25,"backgroundOpacity":0,"height":25},{"hfov":360,"hfovMax":130,"thumbnailUrl":"media/panorama_CAB70804_D326_29D7_41D2_BDD2AC39BAA2_t.jpg","label":trans('panorama_CAB70804_D326_29D7_41D2_BDD2AC39BAA2.label'),"cardboardMenu":"this.Menu_4F4AC447_4548_75D5_41BC_1A567C547CB0","class":"Panorama","id":"panorama_CAB70804_D326_29D7_41D2_BDD2AC39BAA2","adjacentPanoramas":[{"data":{"overlayID":"overlay_B21B1A1C_BDE2_E7DD_41B1_FF0C2A084A9E"},"class":"AdjacentPanorama","yaw":0.42,"distance":5.61,"select":"this.overlay_B21B1A1C_BDE2_E7DD_41B1_FF0C2A084A9E.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_CA9FE24B_D326_3E51_41B6_633A759F0E68","backwardYaw":2.38}],"vfov":180,"data":{"label":"2"},"overlays":["this.overlay_B21B1A1C_BDE2_E7DD_41B1_FF0C2A084A9E","this.overlay_C62C0BC3_D32E_2E50_41D0_D0ABA0FB7C1B"],"frames":[{"cube":{"class":"ImageResource","levels":[{"colCount":54,"class":"TiledImageResourceLevel","width":27648,"url":"media/panorama_CAB70804_D326_29D7_41D2_BDD2AC39BAA2_0/{face}/0/{row}_{column}.jpg","height":4608,"tags":"ondemand","rowCount":9},{"colCount":30,"class":"TiledImageResourceLevel","width":15360,"url":"media/panorama_CAB70804_D326_29D7_41D2_BDD2AC39BAA2_0/{face}/1/{row}_{column}.jpg","height":2560,"tags":"ondemand","rowCount":5},{"colCount":18,"class":"TiledImageResourceLevel","width":9216,"url":"media/panorama_CAB70804_D326_29D7_41D2_BDD2AC39BAA2_0/{face}/2/{row}_{column}.jpg","height":1536,"tags":"ondemand","rowCount":3},{"colCount":12,"class":"TiledImageResourceLevel","width":6144,"url":"media/panorama_CAB70804_D326_29D7_41D2_BDD2AC39BAA2_0/{face}/3/{row}_{column}.jpg","height":1024,"tags":"ondemand","rowCount":2},{"colCount":6,"class":"TiledImageResourceLevel","width":3072,"url":"media/panorama_CAB70804_D326_29D7_41D2_BDD2AC39BAA2_0/{face}/4/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"rowCount":1}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_CAB70804_D326_29D7_41D2_BDD2AC39BAA2_t.jpg"}]},{"iconURL":"skin/IconButton_78FBA8EE_6189_80E5_4177_A05F0D7CC7B4.png","minHeight":1,"id":"IconButton_78FBA8EE_6189_80E5_4177_A05F0D7CC7B4_mobile","minWidth":1,"verticalAlign":"middle","propagateClick":false,"data":{"name":"\u043f\u0440\u0430\u0432\u043e"},"horizontalAlign":"center","transparencyActive":true,"class":"IconButton","width":25,"backgroundOpacity":0,"height":25},{"toolTipPaddingRight":3,"itemThumbnailWidth":94,"toolTipFontFamily":"Arial","itemThumbnailBorderRadius":21,"selectedItemLabelFontColor":"#FFCC00","itemThumbnailBorderSize":0,"minHeight":10,"itemPaddingLeft":3,"minWidth":10,"itemLabelTextDecoration":"none","itemBackgroundColorDirection":"vertical","left":"0%","scrollBarColor":"#FFFFFF","scrollBarMargin":0.5,"toolTipPaddingLeft":3,"itemThumbnailOpacity":1,"rollOverItemBackgroundOpacity":0,"playList":"this.ThumbnailList_F5A2D2AF_E492_7D4C_41EA_F1E1DE7BAB4A_mobile_playlist","toolTipBackgroundColor":"#F6F6F6","itemPaddingTop":3,"itemMode":"thumbnail-only","itemLabelFontStyle":"normal","data":{"name":"ThumbnailList35762"},"class":"ThumbnailList","itemLabelFontSize":7,"backgroundOpacity":0.04,"itemLabelFontWeight":"normal","toolTipBorderColor":"#767676","toolTipShadowColor":"#333333","selectedItemLabelFontWeight":"bold","toolTipBorderRadius":1,"itemBackgroundOpacity":0,"itemThumbnailShadow":false,"rollOverItemThumbnailShadow":false,"backgroundColorRatios":[0],"toolTipShadowBlurRadius":1,"toolTipTextShadowColor":"#000000","toolTipFontColor":"#606060","toolTipTextShadowBlurRadius":1,"toolTipFontSize":6,"scrollBarWidth":2,"toolTipDisplayTime":5000,"itemBackgroundColorRatios":[],"id":"ThumbnailList_F5A2D2AF_E492_7D4C_41EA_F1E1DE7BAB4A_mobile","itemPaddingRight":3,"itemThumbnailShadowBlurRadius":8,"itemThumbnailShadowOpacity":0.16,"backgroundColor":["#000000"],"horizontalAlign":"center","propagateClick":false,"rollOverItemLabelFontWeight":"normal","itemThumbnailHeight":70,"itemBackgroundColor":[],"paddingLeft":5,"itemLabelFontFamily":"Arial","scrollBarOpacity":0.3,"itemThumbnailShadowSpread":1,"top":"0%","paddingRight":5,"width":"100%","itemThumbnailShadowColor":"#000000","height":102.65,"itemLabelGap":0,"itemPaddingBottom":3,"itemLabelFontColor":"#FFFFFF","itemThumbnailScaleMode":"fit_outside","itemBorderRadius":0,"layout":"horizontal"},{"click":"this.toggleVR()","minHeight":1,"id":"Image_4D814365_6DA7_9B6B_41C9_F0948222EC93_mobile","minWidth":1,"verticalAlign":"middle","propagateClick":false,"data":{"name":"Image16028"},"horizontalAlign":"center","url":trans('Image_4D814365_6DA7_9B6B_41C9_F0948222EC93_mobile.url'),"class":"Image","width":20,"backgroundOpacity":0,"height":20,"scaleMode":"fit_inside","cursor":"hand"},{"iconURL":"skin/IconButton_7B1378A5_618B_8F67_41BF_0EF686E02086.png","minHeight":1,"id":"IconButton_7B1378A5_618B_8F67_41BF_0EF686E02086_mobile","minWidth":1,"verticalAlign":"middle","data":{"name":"\u043b\u0435\u0432\u043e"},"horizontalAlign":"center","transparencyActive":true,"class":"IconButton","width":25,"backgroundOpacity":0,"height":25},{"iconURL":"skin/IconButton_7A221EAE_61B8_8364_41BE_A1A122EC1529.png","minHeight":1,"id":"IconButton_7A221EAE_61B8_8364_41BE_A1A122EC1529_mobile","minWidth":1,"verticalAlign":"middle","propagateClick":false,"data":{"name":"vr"},"horizontalAlign":"center","transparencyActive":true,"class":"IconButton","width":25,"backgroundOpacity":0,"height":25,"click":"this.set('fullscreenEnabled', true); this.set('fullscreenEnabled', false)"},{"iconURL":"skin/IconButton_6D2082A3_738B_D860_41C8_EB5A1BB5E262.png","minHeight":1,"id":"IconButton_6D2082A3_738B_D860_41C8_EB5A1BB5E262_mobile","minWidth":1,"verticalAlign":"middle","propagateClick":false,"data":{"name":"\u0432\u0432\u0435\u0440\u0445"},"horizontalAlign":"center","transparencyActive":true,"class":"IconButton","width":35,"backgroundOpacity":0,"height":35,"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_DE379E08_D373_6621_41DD_AA555C9D26FC, -178.24281329016495, -1.101108816355724, 115 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0)","visible":false},{"iconURL":"skin/IconButton_78F17661_6188_831F_41C5_D05323306B82.png","minHeight":1,"id":"IconButton_78F17661_6188_831F_41C5_D05323306B82_mobile","minWidth":1,"verticalAlign":"middle","propagateClick":false,"data":{"name":"\u0432\u043d\u0438\u0437"},"horizontalAlign":"center","transparencyActive":true,"class":"IconButton","width":25,"backgroundOpacity":0,"height":25},{"toolTipFontFamily":"Arial","playbackBarHeadBorderRadius":0,"surfaceReticleColor":"#FFFFFF","progressBarBackgroundColor":["#000000"],"playbackBarHeadBackgroundColor":["#111111","#666666"],"minHeight":25,"subtitlesTop":0,"minWidth":50,"playbackBarBottom":5,"surfaceReticleOpacity":0.13,"playbackBarHeadBorderColor":"#000000","toolTipPaddingLeft":3,"playbackBarBorderSize":0,"toolTipBackgroundColor":"transparent","progressBackgroundColor":["#666666"],"subtitlesTextShadowVerticalLength":1,"data":{"name":"Main Viewer"},"playbackBarBackgroundColor":["#FFFFFF"],"progressBottom":0,"displayTooltipInSurfaceSelection":false,"class":"ViewerArea","subtitlesGap":0,"subtitlesBackgroundColor":"#000000","progressHeight":2,"firstTransitionDuration":0,"playbackBarHeight":10,"progressBorderSize":0,"toolTipBorderColor":"#767676","toolTipShadowColor":"#333333","subtitlesBottom":50,"progressBarBorderRadius":0,"playbackBarProgressBorderSize":0,"toolTipBorderRadius":1,"progressBarBorderSize":0,"playbackBarBackgroundOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarRight":0,"toolTipShadowBlurRadius":1,"playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","toolTipFontColor":"#606060","toolTipTextShadowColor":"#000000","subtitlesTextShadowColor":"#000000","toolTipTextShadowBlurRadius":1,"toolTipFontSize":"6px","playbackBarProgressBorderRadius":0,"toolTipDisplayTime":5000,"subtitlesEnabled":false,"id":"MainViewer_mobile","playbackBarProgressBackgroundColor":["#3399FF"],"progressLeft":0,"progressBackgroundColorRatios":[0],"progressRight":0,"propagateClick":false,"progressBorderRadius":0,"subtitlesFontSize":"3vmin","subtitlesTextShadowOpacity":1,"subtitlesTextShadowHorizontalLength":1,"toolTipOpacity":0,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowBlurRadius":1.5,"progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadHeight":15,"playbackBarBorderColor":"#FFFFFF","vrPointerSelectionTime":1800,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesBorderColor":"#FFFFFF","playbackBarHeadShadow":true,"vrPointerColor":"#FFFFFF","playbackBarHeadBorderSize":0,"height":"100%","playbackBarBorderRadius":0,"subtitlesFontColor":"#FFFFFF","progressBorderColor":"#000000","width":"100%","vrPointerSelectionColor":"#FFFF00","playbackBarProgressBorderColor":"#000000","subtitlesFontFamily":"Arial","toolTipPaddingRight":3},{"iconURL":"skin/IconButton_6D92F607_7388_5820_41CD_2DF7F54AEC52.png","minHeight":1,"id":"IconButton_6D92F607_7388_5820_41CD_2DF7F54AEC52_mobile","minWidth":1,"verticalAlign":"middle","propagateClick":false,"data":{"name":"\u0432\u043d\u0438\u0437"},"horizontalAlign":"center","transparencyActive":true,"class":"IconButton","width":35,"backgroundOpacity":0,"height":35},{"iconURL":"skin/IconButton_78F6A9BF_6189_8163_41D0_BB865E015852.png","minHeight":1,"id":"IconButton_78F6A9BF_6189_8163_41D0_BB865E015852_mobile","minWidth":1,"verticalAlign":"middle","propagateClick":false,"data":{"name":"\u0434\u0430\u043b\u044c\u0448\u0435"},"horizontalAlign":"center","transparencyActive":true,"class":"IconButton","width":25,"backgroundOpacity":0,"height":25},{"class":"PanoramaCamera","initialPosition":{"pitch":2.13,"class":"PanoramaCameraPosition","hfov":115,"yaw":1.54},"id":"panorama_CAB70804_D326_29D7_41D2_BDD2AC39BAA2_camera","enterPointingToHorizon":true},{"class":"PlayerMenuItem","label":trans('TDVAuthor.label'),"id":"TDVAuthor"},{"data":{"label":"spot0","hasPanoramaAction":true},"areas":["this.FlatHotspotPanoramaOverlayArea_51E5E818_7389_C821_41D2_497FA04A1B69"],"id":"overlay_51EC3805_7389_C823_41B4_C65AF5E847E1","items":[{"pitch":-3.89,"offsetY":22.5,"yaw":-179.03,"height":45,"image":"this.res_57CE420E_738B_D821_41A0_94D5D57E8CE6","width":45,"class":"FlatHotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"spot0"},"offsetX":22.5}],"class":"FlatHotspotPanoramaOverlay","enabledInCardboard":true,"useHandCursor":true,"maps":[]},{"data":{"label":"spot0","hasPanoramaAction":true},"areas":["this.FlatHotspotPanoramaOverlayArea_C2073752_D32A_2673_41DA_C1D73EB9AB5E"],"id":"overlay_C207A751_D32A_2671_41C8_D1CED3827DFE","items":[{"pitch":-3.93,"offsetY":22.5,"yaw":2.38,"height":45,"image":"this.res_57CE420E_738B_D821_41A0_94D5D57E8CE6","width":45,"class":"FlatHotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"spot0"},"offsetX":22.5}],"class":"FlatHotspotPanoramaOverlay","enabledInCardboard":true,"useHandCursor":true,"maps":[]},{"class":"PanoramaPlayListItem","camera":"this.panorama_CA9FE24B_D326_3E51_41B6_633A759F0E68_camera","media":"this.panorama_CA9FE24B_D326_3E51_41B6_633A759F0E68","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewer_mobilePanoramaPlayer","id":"PanoramaPlayListItem_DE379E08_D373_6621_41DD_AA555C9D26FC"},{"class":"MenuItem","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","label":trans('MenuItem_A92DF125_BDE7_E5EF_41DA_BC9C0CA5440C.label'),"id":"MenuItem_A92DF125_BDE7_E5EF_41DA_BC9C0CA5440C"},{"class":"MenuItem","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","label":trans('MenuItem_A92DC125_BDE7_E5EF_41C8_840DE5474275.label'),"id":"MenuItem_A92DC125_BDE7_E5EF_41C8_840DE5474275"},{"class":"MenuItem","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","label":trans('MenuItem_A92DD125_BDE7_E5EF_41E2_5330695A1FC3.label'),"id":"MenuItem_A92DD125_BDE7_E5EF_41E2_5330695A1FC3"},{"data":{"label":"spot0","hasPanoramaAction":true},"areas":["this.FlatHotspotPanoramaOverlayArea_B20BB228_BDE2_67E5_41CF_41E549ADFA9E"],"id":"overlay_B20AB226_BDE2_67ED_4198_D96EA33B97EE","items":[{"pitch":-3.29,"offsetY":22.5,"yaw":16.04,"height":45,"image":"this.res_57CE420E_738B_D821_41A0_94D5D57E8CE6","width":45,"class":"FlatHotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"spot0"},"offsetX":22.5}],"class":"FlatHotspotPanoramaOverlay","enabledInCardboard":true,"useHandCursor":true,"maps":[]},{"data":{"label":"spot0","hasPanoramaAction":true},"areas":["this.FlatHotspotPanoramaOverlayArea_B2187A1E_BDE2_E7DD_41E3_FDE9D77073E5"],"id":"overlay_B21B1A1C_BDE2_E7DD_41B1_FF0C2A084A9E","items":[{"pitch":-16.86,"offsetY":22.5,"yaw":0.42,"height":45,"image":"this.res_57CE420E_738B_D821_41A0_94D5D57E8CE6","width":45,"class":"FlatHotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"spot0"},"offsetX":22.5}],"class":"FlatHotspotPanoramaOverlay","enabledInCardboard":true,"useHandCursor":true,"maps":[]},{"pitch":10.21,"class":"LensFlarePanoramaOverlay","yaw":175.27,"id":"overlay_C62C0BC3_D32E_2E50_41D0_D0ABA0FB7C1B","bleaching":0.7},{"displayTooltipInTouchScreens":true,"class":"FlatHotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","id":"FlatHotspotPanoramaOverlayArea_51E5E818_7389_C821_41D2_497FA04A1B69"},{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","width":90,"url":"media/res_57CE420E_738B_D821_41A0_94D5D57E8CE6_0.png","height":90}],"id":"res_57CE420E_738B_D821_41A0_94D5D57E8CE6"},{"displayTooltipInTouchScreens":true,"class":"FlatHotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","id":"FlatHotspotPanoramaOverlayArea_C2073752_D32A_2673_41DA_C1D73EB9AB5E"},{"displayTooltipInTouchScreens":true,"class":"FlatHotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","id":"FlatHotspotPanoramaOverlayArea_B20BB228_BDE2_67E5_41CF_41E549ADFA9E"},{"displayTooltipInTouchScreens":true,"class":"FlatHotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","id":"FlatHotspotPanoramaOverlayArea_B2187A1E_BDE2_E7DD_41E3_FDE9D77073E5"}],"scripts":{"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getOverlays":TDV.Tour.Script.getOverlays,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getMediaByName":TDV.Tour.Script.getMediaByName,"isPanorama":TDV.Tour.Script.isPanorama,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"clone":TDV.Tour.Script.clone,"disableVR":TDV.Tour.Script.disableVR,"openLink":TDV.Tour.Script.openLink,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"resumePlayers":TDV.Tour.Script.resumePlayers,"initAnalytics":TDV.Tour.Script.initAnalytics,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"mixObject":TDV.Tour.Script.mixObject,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"executeJS":TDV.Tour.Script.executeJS,"historyGoBack":TDV.Tour.Script.historyGoBack,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"cloneBindings":TDV.Tour.Script.cloneBindings,"getPixels":TDV.Tour.Script.getPixels,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"startMeasurement":TDV.Tour.Script.startMeasurement,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"playAudioList":TDV.Tour.Script.playAudioList,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"showWindow":TDV.Tour.Script.showWindow,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"init":TDV.Tour.Script.init,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setValue":TDV.Tour.Script.setValue,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"quizStart":TDV.Tour.Script.quizStart,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getComponentByName":TDV.Tour.Script.getComponentByName,"existsKey":TDV.Tour.Script.existsKey,"getMainViewer":TDV.Tour.Script.getMainViewer,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"quizFinish":TDV.Tour.Script.quizFinish,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"textToSpeech":TDV.Tour.Script.textToSpeech,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"showPopupImage":TDV.Tour.Script.showPopupImage,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"shareSocial":TDV.Tour.Script.shareSocial,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"registerKey":TDV.Tour.Script.registerKey,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getKey":TDV.Tour.Script.getKey,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"downloadFile":TDV.Tour.Script.downloadFile,"historyGoForward":TDV.Tour.Script.historyGoForward,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setMapLocation":TDV.Tour.Script.setMapLocation,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"translate":TDV.Tour.Script.translate,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"toggleVR":TDV.Tour.Script.toggleVR,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"enableVR":TDV.Tour.Script.enableVR,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"initQuiz":TDV.Tour.Script.initQuiz,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"createTween":TDV.Tour.Script.createTween,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setLocale":TDV.Tour.Script.setLocale},"width":"100%","height":"100%","menu":["this.TDVAuthor"],"defaultMenu":["fullscreen","mute","rotation"],"gap":10,"layout":"absolute","children":["this.MainViewer_mobile","this.Container_7B625D2A_6188_816C_41AE_DCFD6A81FF65_mobile","this.Container_6D25C29F_738B_D85F_41D6_42C675A272BF_mobile","this.ThumbnailList_F5A2D2AF_E492_7D4C_41EA_F1E1DE7BAB4A_mobile","this.Image_791C96B5_6D5C_9DEB_41D3_A45DCA34CDF5_mobile","this.Container_72F51EB0_6DA5_8DE9_41D9_8FFA57FEA011_mobile"]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.18.js.map
})();
//Generated with v2024.0.18, Mon Oct 28 2024