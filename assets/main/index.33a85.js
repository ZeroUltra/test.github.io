window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AdapterMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9848co1bh1O76pCrg2kIN9s", "AdapterMgr");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AdaptaterType = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AdapterMgr = function() {
      function AdapterMgr() {}
      AdapterMgr_1 = AdapterMgr;
      Object.defineProperty(AdapterMgr, "inst", {
        get: function() {
          if (null == this._instance) {
            this._instance = new AdapterMgr_1();
            this._instance.visibleSize = cc.view.getVisibleSize();
            console.log("visiable size: " + this._instance.visibleSize);
          }
          return this._instance;
        },
        enumerable: false,
        configurable: true
      });
      AdapterMgr.prototype.adapatByType = function(type, node, distance) {
        var widget = node.getComponent(cc.Widget);
        widget || (widget = node.addComponent(cc.Widget));
        switch (type) {
         case AdaptaterType.Top:
          if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            var menuInfo = window["wx"].getMenuButtonBoundingClientRect();
            var systemInfo = window["wx"].getSystemInfoSync();
            distance = cc.find("Canvas").height * (menuInfo.top / systemInfo.screenHeight);
          }
          widget.top = distance || 0;
          widget.isAbsoluteTop = true;
          widget.isAlignTop = true;
          break;

         case AdaptaterType.Bottom:
          widget.bottom = distance || 0;
          widget.isAbsoluteBottom = true;
          widget.isAlignBottom = true;
          break;

         case AdaptaterType.Left:
          widget.left = distance || 0;
          widget.isAbsoluteLeft = true;
          widget.isAlignLeft = true;
          break;

         case AdaptaterType.Right:
          widget.right = distance || 0;
          widget.isAbsoluteRight = true;
          widget.isAlignRight = true;
          break;

         case AdaptaterType.FullScreen:
          widget.right = 0;
          widget.left = 0;
          widget.top = 0;
          widget.bottom = 0;
          widget.isAlignLeft = true;
          widget.isAlignRight = true;
          widget.isAlignBottom = true;
          widget.isAlignTop = true;
        }
        widget.target = cc.find("Canvas");
        widget.updateAlignment();
      };
      AdapterMgr.prototype.removeAdaptater = function(node) {
        node.getComponent(cc.Widget) && node.removeComponent(cc.Widget);
      };
      var AdapterMgr_1;
      AdapterMgr._instance = null;
      AdapterMgr = AdapterMgr_1 = __decorate([ ccclass ], AdapterMgr);
      return AdapterMgr;
    }();
    exports.default = AdapterMgr;
    var AdaptaterType;
    (function(AdaptaterType) {
      AdaptaterType[AdaptaterType["Center"] = 0] = "Center";
      AdaptaterType[AdaptaterType["Top"] = 1] = "Top";
      AdaptaterType[AdaptaterType["Bottom"] = 2] = "Bottom";
      AdaptaterType[AdaptaterType["Left"] = 3] = "Left";
      AdaptaterType[AdaptaterType["Right"] = 4] = "Right";
      AdaptaterType[AdaptaterType["FullScreen"] = 5] = "FullScreen";
    })(AdaptaterType = exports.AdaptaterType || (exports.AdaptaterType = {}));
    cc._RF.pop();
  }, {} ],
  BattleSettingsButton: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6f9b3VhFrBPWI1TaGuzI5lM", "BattleSettingsButton");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AdapterMgr_1 = require("../UIFrame/AdapterMgr");
    var SysDefine_1 = require("../UIFrame/config/SysDefine");
    var UIBase_1 = require("../UIFrame/UIBase");
    var BattleSettingsPanel_1 = require("./BattleSettingsPanel");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BattleSettingsButton = function(_super) {
      __extends(BattleSettingsButton, _super);
      function BattleSettingsButton() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.formType = SysDefine_1.FormType.FixedUI;
        return _this;
      }
      BattleSettingsButton.prototype.start = function() {
        AdapterMgr_1.default.inst.adapatByType(AdapterMgr_1.AdaptaterType.Top, this.node, 0);
        AdapterMgr_1.default.inst.adapatByType(AdapterMgr_1.AdaptaterType.Right, this.node, 46);
      };
      BattleSettingsButton.prototype.openSettingsPanel = function(e) {
        var pos = e.getLocation();
        BattleSettingsPanel_1.default.openViewWithLoading(pos);
      };
      BattleSettingsButton.prefabPath = "UIForms/BattleSettingsButton";
      BattleSettingsButton = __decorate([ ccclass ], BattleSettingsButton);
      return BattleSettingsButton;
    }(UIBase_1.default);
    exports.default = BattleSettingsButton;
    cc._RF.pop();
  }, {
    "../UIFrame/AdapterMgr": "AdapterMgr",
    "../UIFrame/UIBase": "UIBase",
    "../UIFrame/config/SysDefine": "SysDefine",
    "./BattleSettingsPanel": "BattleSettingsPanel"
  } ],
  BattleSettingsPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e47d4exE5tNkbON6rsqbsH6", "BattleSettingsPanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ButtonPlus_1 = require("../Common/Components/ButtonPlus");
    var CocosHelper_1 = require("../UIFrame/CocosHelper");
    var SysDefine_1 = require("../UIFrame/config/SysDefine");
    var EventCenter_1 = require("../UIFrame/EventCenter");
    var FrameType_1 = require("../UIFrame/FrameType");
    var UIBase_1 = require("../UIFrame/UIBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BattleSettingsPanel = function(_super) {
      __extends(BattleSettingsPanel, _super);
      function BattleSettingsPanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.formType = SysDefine_1.FormType.PopUp;
        _this.maskType = new FrameType_1.MaskType(SysDefine_1.ModalOpacity.OpacityHigh, false);
        _this.closeButton = null;
        _this.physicsDebugToggle = null;
        _this._phy = null;
        return _this;
      }
      BattleSettingsPanel.prototype.start = function() {
        this.closeButton.addClick(this.closeUIForm, this);
        this._phy = cc.director.getPhysicsManager();
      };
      BattleSettingsPanel.prototype.exitGame = function() {
        EventCenter_1.EventCenter.emit("endGame", false);
      };
      BattleSettingsPanel.prototype.onShow = function(startPosition) {
        this.startPosition = this.node.convertToNodeSpaceAR(startPosition);
      };
      BattleSettingsPanel.prototype.showAnimation = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.node.scale = 0;
              this.node.setPosition(this.startPosition);
              return [ 4, CocosHelper_1.default.runTweenSync(this.node, cc.tween().to(.2, {
                position: cc.v3(0, 0),
                scale: 1
              })) ];

             case 1:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      BattleSettingsPanel.prototype.setPhyDebug = function() {
        this.physicsDebugToggle.isChecked ? this._phy.debugDrawFlags = cc.PhysicsManager.DrawBits.e_shapeBit : this._phy.debugDrawFlags = 0;
      };
      BattleSettingsPanel.prefabPath = "UIForms/BattleSettingsPanel";
      __decorate([ property(ButtonPlus_1.default) ], BattleSettingsPanel.prototype, "closeButton", void 0);
      __decorate([ property(cc.Toggle) ], BattleSettingsPanel.prototype, "physicsDebugToggle", void 0);
      BattleSettingsPanel = __decorate([ ccclass ], BattleSettingsPanel);
      return BattleSettingsPanel;
    }(UIBase_1.default);
    exports.default = BattleSettingsPanel;
    cc._RF.pop();
  }, {
    "../Common/Components/ButtonPlus": "ButtonPlus",
    "../UIFrame/CocosHelper": "CocosHelper",
    "../UIFrame/EventCenter": "EventCenter",
    "../UIFrame/FrameType": "FrameType",
    "../UIFrame/UIBase": "UIBase",
    "../UIFrame/config/SysDefine": "SysDefine"
  } ],
  BattleStageName: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dd4c3lBV0xO0KxqXfUkZ7XU", "BattleStageName");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AdapterMgr_1 = require("../UIFrame/AdapterMgr");
    var SysDefine_1 = require("../UIFrame/config/SysDefine");
    var UIBase_1 = require("../UIFrame/UIBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BattleStageName = function(_super) {
      __extends(BattleStageName, _super);
      function BattleStageName() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.formType = SysDefine_1.FormType.FixedUI;
        _this.label = null;
        return _this;
      }
      BattleStageName.prototype.onShow = function(data) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            this.label.string = data.name + "  " + data.level + "-" + data.stage;
            return [ 2 ];
          });
        });
      };
      BattleStageName.prototype.start = function() {
        AdapterMgr_1.default.inst.adapatByType(AdapterMgr_1.AdaptaterType.Top, this.node, 0);
        AdapterMgr_1.default.inst.adapatByType(AdapterMgr_1.AdaptaterType.Left, this.node, 7);
      };
      BattleStageName.prefabPath = "UIForms/BattleStageName";
      __decorate([ property(cc.Label) ], BattleStageName.prototype, "label", void 0);
      BattleStageName = __decorate([ ccclass ], BattleStageName);
      return BattleStageName;
    }(UIBase_1.default);
    exports.default = BattleStageName;
    cc._RF.pop();
  }, {
    "../UIFrame/AdapterMgr": "AdapterMgr",
    "../UIFrame/UIBase": "UIBase",
    "../UIFrame/config/SysDefine": "SysDefine"
  } ],
  BattleUIManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "43560wrPb9GdbNK5VrUjOwU", "BattleUIManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BattleSettingsButton_1 = require("./Script/test/BattleSettingsButton");
    var BattleStageName_1 = require("./Script/test/BattleStageName");
    var EventCenter_1 = require("./Script/UIFrame/EventCenter");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BattleUIManager = function(_super) {
      __extends(BattleUIManager, _super);
      function BattleUIManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.skill2Count = 0;
        _this.enemyKillCount = 0;
        return _this;
      }
      BattleUIManager.prototype.onLoad = function() {
        var _this = this;
        this.enemyKillCount = 0;
        this.node.on("die", function(group) {
          "Enemy" === group && _this.enemyKillCount++;
        });
        this.node.on("skill2Count", function(num) {
          _this.skill2Count += num;
        });
        this.node.once("end", function(isWin) {
          _this.endGame(isWin);
        });
        EventCenter_1.EventCenter.once("endGame", this.endGame, this);
      };
      BattleUIManager.prototype.start = function() {
        return __awaiter(this, void 0, void 0, function() {
          var levelData, savedData;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              savedData = cc.sys.localStorage.getItem("levelData");
              if (void 0 == savedData || "NaN" == savedData || "" == savedData || null == savedData || "[]" == savedData) {
                console.log("\u6ca1\u6709\u5173\u5361\u4fe1\u606f");
                levelData = {
                  name: "\u5927\u95f9\u5929\u5bab",
                  level: 1,
                  stage: 1
                };
              } else {
                levelData = JSON.parse(savedData);
                levelData.stage++;
              }
              cc.sys.localStorage.setItem("levelData", JSON.stringify(levelData));
              return [ 4, BattleStageName_1.default.openViewWithLoading(levelData) ];

             case 1:
              _a.sent();
              return [ 4, BattleSettingsButton_1.default.openView() ];

             case 2:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      BattleUIManager.prototype.endGame = function(isWin) {
        var _this = this;
        var savedData = cc.sys.localStorage.getItem("taskData");
        if (void 0 == savedData || "NaN" == savedData || "" == savedData || null == savedData || "[]" == savedData) console.log("\u6ca1\u6709\u4efb\u52a1"); else {
          var taskData = JSON.parse(savedData);
          taskData.forEach(function(data) {
            "monster_kill" === data.valueName && (data.currentNum + _this.enemyKillCount <= data.targetNum ? data.currentNum += _this.enemyKillCount : data.currentNum = data.targetNum);
            "map_pass" === data.valueName && isWin && data.currentNum < data.targetNum && (data.currentNum += 1);
            "skill2" === data.valueName && (data.currentNum + _this.skill2Count <= data.targetNum ? data.currentNum += _this.skill2Count : data.currentNum = data.targetNum);
          });
          cc.sys.localStorage.setItem("taskData", JSON.stringify(taskData));
        }
        if (isWin) cc.director.loadScene("game"); else {
          var levelData = JSON.parse(cc.sys.localStorage.getItem("levelData"));
          levelData.stage = 0;
          cc.sys.localStorage.setItem("levelData", JSON.stringify(levelData));
          cc.director.loadScene("menu");
        }
      };
      BattleUIManager.prototype.onDestroy = function() {
        EventCenter_1.EventCenter.targetOff(this);
      };
      __decorate([ property ], BattleUIManager.prototype, "skill2Count", void 0);
      __decorate([ property ], BattleUIManager.prototype, "enemyKillCount", void 0);
      BattleUIManager = __decorate([ ccclass ], BattleUIManager);
      return BattleUIManager;
    }(cc.Component);
    exports.default = BattleUIManager;
    cc._RF.pop();
  }, {
    "./Script/UIFrame/EventCenter": "EventCenter",
    "./Script/test/BattleSettingsButton": "BattleSettingsButton",
    "./Script/test/BattleStageName": "BattleStageName"
  } ],
  BigNumUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c4b72NccXhGKofOUM3hVrvP", "BigNumUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.RountType = void 0;
    var RountType;
    (function(RountType) {
      RountType[RountType["Round"] = 0] = "Round";
      RountType[RountType["Floor"] = 1] = "Floor";
      RountType[RountType["Ceil"] = 2] = "Ceil";
    })(RountType = exports.RountType || (exports.RountType = {}));
    var BigNumUtils = function() {
      function BigNumUtils() {}
      BigNumUtils.BNPlus = function() {
        var args = [];
        for (var _a = 0; _a < arguments.length; _a++) args[_a] = arguments[_a];
        var value = [ 0, 0 ];
        for (var _i = 0; _i < args.length; _i++) {
          var arg = args[_i];
          var base, zeroes;
          var num = +arg;
          if (0 === num || num && Infinity !== num) {
            zeroes = arg < 10 ? 0 : Math.floor(Math.log10(+arg) + 1e-6);
            base = arg < 10 ? arg : arg / Math.pow(10, zeroes);
          } else if (arg) {
            arg = arg.split("e");
            base = +arg[0] || 0;
            zeroes = +arg[1] || 0;
          } else {
            base = 0;
            zeroes = 0;
          }
          if (zeroes > value[1]) {
            value[0] /= Math.pow(10, zeroes - value[1]);
            value[0] += base;
            value[1] = zeroes;
          } else value[0] += base / Math.pow(10, value[1] - zeroes);
        }
        var sign = value[0] >= 0 ? 1 : -1;
        var rbase = Math.abs(value[0]);
        while (rbase < 1 && value[1] > 0) {
          rbase *= 10;
          value[1] -= 1;
        }
        while (rbase > 10) {
          rbase /= 10;
          value[1] += 1;
        }
        rbase *= sign;
        return rbase + "e" + value[1];
      };
      BigNumUtils.BNMinus = function() {
        var args = [];
        for (var _a = 0; _a < arguments.length; _a++) args[_a] = arguments[_a];
        var value = [ 0, 0 ];
        for (var _i = 0; _i < args.length; _i++) {
          var arg = args[_i];
          var idx = _i;
          var base, zeroes;
          var num = +arg;
          if (0 === num || num && Infinity !== num) {
            zeroes = arg < 10 ? 0 : Math.floor(Math.log10(+arg) + 1e-6);
            base = arg < 10 ? arg : arg / Math.pow(10, zeroes);
          } else {
            arg = arg.split("e");
            base = +arg[0];
            zeroes = +arg[1];
          }
          if (idx) if (value[1] < zeroes) {
            value[0] = value[0] / Math.pow(10, zeroes - value[1]) - base;
            value[1] = zeroes;
          } else value[0] -= base / Math.pow(10, value[1] - zeroes); else {
            value[0] = base;
            value[1] = zeroes;
          }
        }
        var sign = value[0] >= 0 ? 1 : -1;
        var rbase = Math.abs(value[0]);
        while (rbase < 1 && value[1] > 0) {
          rbase *= 10;
          value[1] -= 1;
        }
        while (rbase > 10) {
          rbase /= 10;
          value[1] += 1;
        }
        rbase *= sign;
        return rbase + "e" + value[1];
      };
      BigNumUtils.BNTimes = function() {
        var args = [];
        for (var _a = 0; _a < arguments.length; _a++) args[_a] = arguments[_a];
        var value = [ 0, 0 ];
        args.forEach(function(arg, idx) {
          var base, zeroes;
          var num = +arg;
          if (0 === num || num && Infinity !== num) {
            zeroes = arg < 10 ? 0 : Math.floor(Math.log10(+arg) + 1e-6);
            base = arg < 10 ? arg : arg / Math.pow(10, zeroes);
          } else if (arg) {
            arg = arg.split("e");
            base = +arg[0] || 0;
            zeroes = +arg[1] || 0;
          } else {
            base = 1;
            zeroes = 0;
          }
          if (idx) {
            value[0] *= base;
            value[1] += zeroes;
            if (value[0] > 1e300) {
              value[0] /= 1e300;
              value[1] += 300;
            }
          } else {
            value[0] = base;
            value[1] = zeroes;
          }
        });
        var sign = value[0] >= 0 ? 1 : -1;
        var base = Math.abs(value[0]);
        while (base < 1 && value[1] > 0) {
          base *= 10;
          value[1] -= 1;
        }
        while (base > 10) {
          base /= 10;
          value[1] += 1;
        }
        return base * sign + "e" + value[1];
      };
      BigNumUtils.BNDevide = function(value0, value1) {
        if (0 === +value1) return 0;
        var value = [ 0, 0 ];
        var sign = 1;
        [ value0, value1 ].forEach(function(arg, idx) {
          var base, zeroes;
          var realNum = +arg;
          var num = Math.abs(realNum);
          if (0 === num || num && Infinity !== num) {
            zeroes = num < 10 ? 0 : Math.floor(Math.log10(num) + 1e-6);
            base = num < 10 ? num : num / Math.pow(10, zeroes);
          } else {
            arg = arg.split("e");
            realNum = +arg[0];
            base = Math.abs(realNum);
            zeroes = +arg[1];
          }
          sign *= realNum >= 0 ? 1 : -1;
          if (0 === idx) {
            value[0] = base;
            value[1] = zeroes;
          } else {
            value[0] /= base;
            value[1] -= zeroes;
          }
        });
        var base = Math.abs(value[0]);
        while (base < 1 && value[1] > 0) {
          base *= 10;
          value[1] -= 1;
        }
        while (base > 10) {
          base /= 10;
          value[1] += 1;
        }
        base *= sign;
        if (value[1] < 100) return base * Math.pow(10, value[1]);
        return this.BNTimes(base, this.BNPow(10, value[1]));
      };
      BigNumUtils.BNCompare = function(value0, value1) {
        var bases = [ 0, 0 ];
        var zeroes = [ 0, 0 ];
        [ value0, value1 ].forEach(function(arg, idx) {
          var num = +arg;
          if (0 === num || num && Infinity !== num) {
            zeroes[idx] = arg < 10 ? 0 : Math.floor(Math.log10(+arg) + 1e-6);
            bases[idx] = arg < 10 ? arg : arg / Math.pow(10, zeroes[idx]);
          } else {
            arg = arg.split("e");
            bases[idx] = +arg[0];
            zeroes[idx] = +arg[1];
          }
        });
        return bases[0] * bases[1] < 0 ? bases[0] > 0 ? 1 : -1 : zeroes[1] > zeroes[0] ? -1 : zeroes[1] < zeroes[0] ? 1 : bases[1] > bases[0] ? -1 : bases[1] < bases[0] ? 1 : 0;
      };
      BigNumUtils.BNPow = function(di, zhi) {
        if (!di) return "0";
        if (!zhi) return "1";
        var max = Math.floor(Math.log(1e300) / Math.log(di));
        max = Math.max(max, 1);
        var val = 1;
        if (max >= zhi) val = Math.pow(di, zhi); else {
          var times = Math.floor(zhi / max);
          var arr = [];
          var mid = Math.pow(di, max);
          for (var i = 0; i < times; i++) arr.push(mid);
          arr.push(Math.pow(di, zhi - max * times));
          val = this.BNTimes.apply(this, arr);
        }
        return val;
      };
      BigNumUtils.BNMax = function(value0, value1) {
        return this.BNCompare(value0, value1) > 0 ? value0 : value1;
      };
      BigNumUtils.BNMin = function(value0, value1) {
        return this.BNCompare(value0, value1) > 0 ? value1 : value0;
      };
      BigNumUtils.BNLog = function(value) {
        var num = +value;
        if (0 === num || num && Infinity !== num) {
          var sign = num >= 0 ? 1 : -1;
          num = Math.abs(num);
          return sign * Math.log10(num);
        }
        return +value.split("e")[1];
      };
      BigNumUtils.BNSqrt = function(value) {
        var num = +value;
        if (0 === num || num && Infinity !== num) return Math.sqrt(num);
        var arr = value.split("e");
        var a = +arr[0];
        var b = +arr[1];
        return Math.sqrt(a) + "e" + b / 2;
      };
      BigNumUtils.BNSqrtEx = function(value, zhi) {
        var num = +value;
        if (0 === num || num && Infinity !== num) return Math.pow(num, 1 / zhi);
        var arr = value.split("e");
        var a = +arr[0];
        var b = +arr[1];
        return Math.pow(a, 1 / zhi) + "e" + b / zhi;
      };
      BigNumUtils.BNFloor = function(value) {
        var num = +value;
        if (0 === num || num && Infinity !== num) return Math.floor(num);
        return value;
      };
      BigNumUtils.BNCeil = function(value) {
        var num = +value;
        if (0 === num || num && Infinity !== num) return Math.ceil(num);
        return value;
      };
      BigNumUtils.BNRound = function(value) {
        var num = +value;
        if (0 === num || num && Infinity !== num) return Math.round(num);
        return value;
      };
      BigNumUtils.BN2Number = function(value) {
        var num = +value;
        if (0 === num || num && Infinity !== num) return num;
        var arr = value.split("e");
        return +arr[0] * Math.pow(10, arr[1]);
      };
      BigNumUtils.getOwnString = function(n) {
        return this.getNumberString(n, void 0, void 0, RountType.Floor);
      };
      BigNumUtils.getCostString = function(n) {
        return this.getNumberString(n, void 0, void 0, RountType.Ceil);
      };
      BigNumUtils.getNumberString = function(n, fixed, bigFixed, roundType) {
        void 0 === fixed && (fixed = 0);
        void 0 === roundType && (roundType = RountType.Round);
        var _base;
        var tailIdx;
        var num = +n;
        if (0 === num || num && Infinity !== num) {
          if (n < 1e3) return this.roundNum(n, roundType, fixed);
          var base = "" + Math.round(n);
          var digit = 0;
          if (~base.indexOf("e")) {
            var dishu = +base.split("e")[0];
            var zhishu = +base.split("e")[1];
            zhishu += Math.floor(Math.log10(dishu));
            digit = zhishu;
          } else digit = Math.floor(Math.log10(n));
          _base = ~base.indexOf("e") ? +base.split("e")[0] * Math.pow(10, digit % 3) : +base.slice(0, digit % 3 + 4) / 1e3;
          tailIdx = digit / 3 >> 0;
        } else {
          n = n.split("e");
          if (+n[1] < 3) {
            var v = n[0] * Math.pow(10, n[1]);
            return this.roundNum(v, roundType, fixed);
          }
          _base = n[0] * Math.pow(10, n[1] % 3);
          while (_base > 1e3) {
            _base /= 1e3;
            n[1] = +n[1] + 3;
          }
          tailIdx = n[1] / 3 >> 0;
        }
        var tail;
        if (tailIdx < 4) tail = [ "", "K", "M", "B" ][tailIdx]; else {
          var first = (tailIdx - 4) / 26 >> 0;
          var grade = first / 26 >> 0;
          var second = (tailIdx - 4) % 26;
          var a = "abcdefghijklmnopqrstuvwxyz";
          var b = a.toUpperCase();
          tail = (grade < 2 ? a : b)[first % 26] + (grade % 2 ? b : a)[second];
        }
        void 0 === bigFixed && (bigFixed = _base < 10 ? 2 : _base < 100 ? 1 : 0);
        var baseStr = this.roundNum(_base, roundType, bigFixed);
        return baseStr + tail;
      };
      BigNumUtils.roundNum = function(n, type, fixed) {
        var func;
        func = type === RountType.Round ? Math.round : type === RountType.Ceil ? Math.ceil : Math.floor;
        var val;
        if (0 === fixed) val = func(n); else {
          var b = Math.pow(10, fixed);
          val = func(b * n) / b;
        }
        return val.toFixed(fixed);
      };
      BigNumUtils.getFixNumber = function(num, fixed) {
        void 0 === fixed && (fixed = 1);
        var b = Math.pow(10, fixed);
        return Math.floor(num * b) / b;
      };
      BigNumUtils.getPercentString = function(num, fixed) {
        void 0 === fixed && (fixed = 1);
        return "string" === typeof num ? this.getNumberString(this.BNTimes(num, 100), fixed) + "%" : this.getNumberString(100 * num, fixed) + "%";
      };
      return BigNumUtils;
    }();
    exports.default = BigNumUtils;
    cc._RF.pop();
  }, {} ],
  Binder: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5d6d9cDT11Dsa+6Mg770rhh", "Binder");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CocosHelper_1 = require("./CocosHelper");
    var SysDefine_1 = require("./config/SysDefine");
    var Binder = function() {
      function Binder() {}
      Binder.prototype.bindComponent = function(component) {
        this.bindNode(component.node, component);
      };
      Binder.prototype.bindNode = function(node, component) {
        if (component.$collector === node.uuid) return;
        component.$collector = node.uuid;
        this._bindSubNode(node, component);
      };
      Binder.prototype._bindSubNode = function(node, component) {
        var _this = this;
        var name = node.name;
        if (CocosHelper_1.default.checkBindChildren(name)) {
          if (CocosHelper_1.default.checkNodePrefix(name)) {
            var names = CocosHelper_1.default.getPrefixNames(name);
            if (null === names || 2 !== names.length || !SysDefine_1.SysDefine.SeparatorMap[names[0]]) {
              console.log(names);
              cc.log(name + " \u547d\u4ee4\u4e0d\u89c4\u8303, \u8bf7\u4f7f\u7528_lab$xxx\u7684\u683c\u5f0f!, \u6216\u8005\u662f\u5728SysDefine\u4e2d\u6ca1\u6709\u5b9a\u4e49");
              return;
            }
            if (!component[names[0] + "s"]) {
              cc.log(name[0] + "s\u6ca1\u6709\u5728BaseUIForm\u4e2d\u5b9a\u4e49, \u5e76\u4e0d\u4f1a\u5f71\u54cd\u8fd0\u884c");
              component[names[0] + "s"] = {};
            }
            component[names[0] + "s"][names[1]] && cc.log(name + " \u5df2\u7ecf\u88ab\u7ed1\u5b9a\u4e86, \u8bf7\u68c0\u67e5\u60a8\u662f\u5426\u51fa\u73b0\u4e86\u91cd\u540d\u7684\u60c5\u51b5!");
            "cc.Node" === SysDefine_1.SysDefine.SeparatorMap[names[0]] ? component[names[0] + "s"][names[1]] = node : component[names[0] + "s"][names[1]] = node.getComponent(SysDefine_1.SysDefine.SeparatorMap[names[0]]);
          }
          node.children.forEach(function(target) {
            _this._bindSubNode(target, component);
          });
        }
      };
      return Binder;
    }();
    exports.default = new Binder();
    cc._RF.pop();
  }, {
    "./CocosHelper": "CocosHelper",
    "./config/SysDefine": "SysDefine"
  } ],
  Brain: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e4b77xBIwZBMrr1CGmtYQ1O", "Brain");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        bloodBarSprite: cc.Sprite,
        totalHp: 1e4,
        hp: 5,
        currentHp: {
          type: cc.Integer,
          tooltip: "\u8be5\u89d2\u8272\u5f53\u524d\u8840\u91cf",
          get: function get() {
            return this.hp;
          },
          set: function set(value) {
            if (true === this._inited) if (value > this.hp) {
              var healEf = cc.instantiate(this.healEffectPrefab);
              healEf.parent = this.node;
              this.scheduleOnce(function() {
                return healEf.destroy();
              }, 1);
            } else if (value < this.hp) {
              this.playAnim("hit", 1);
              this.damageNumberUpdate(this.hp - value);
            }
            value > this.totalHp ? this.hp = this.totalHp : this.hp = value < 0 ? 0 : value;
            cc.tween(this.bloodBarSprite).to(.1, {
              fillRange: this.hp / this.totalHp
            }).start();
            this.hp <= 0 ? this.Die() : this.hp / this.totalHp < .2 && this.node.emit("endanger", {});
          }
        },
        _defense: 0,
        defense: {
          type: cc.Integer,
          tooltip: "\u8be5\u89d2\u8272\u5f53\u524d\u62a4\u7532",
          get: function get() {
            return this._defense;
          },
          set: function set(value) {
            if (true === this._inited) {
              if (value > this._defense) {
                var defEf = cc.instantiate(this.defUpPrefab);
                defEf.parent = this.node;
                this.scheduleOnce(function() {
                  return defEf.destroy();
                }, 1);
              }
              if (value < this._defense) {
                var _defEf = cc.instantiate(this.defDownPrefab);
                _defEf.parent = this.node;
                this.scheduleOnce(function() {
                  return _defEf.destroy();
                }, 1);
              }
            }
            this._defense = value;
          }
        },
        _attack: 50,
        attack: {
          type: cc.Integer,
          tooltip: "\u8be5\u89d2\u8272\u5f53\u524d\u653b\u51fb\u529b",
          get: function get() {
            return this._attack;
          },
          set: function set(value) {
            if (true === this._inited && value > this._attack) {
              var atkEf = cc.instantiate(this.atkUpPrefab);
              atkEf.parent = this.node;
              this.scheduleOnce(function() {
                return atkEf.destroy();
              }, 1);
            }
            this._attack = value;
          }
        },
        evasion: 0,
        critical: 0,
        damageMult: 1,
        damageNumberPrefab: cc.Prefab,
        healEffectPrefab: cc.Prefab,
        defUpPrefab: cc.Prefab,
        defDownPrefab: cc.Prefab,
        atkUpPrefab: cc.Prefab,
        shieldPrefab: cc.Prefab,
        revivePrefab: cc.Prefab,
        burnPrefab: cc.Prefab,
        _inited: false
      },
      onLoad: function onLoad() {
        var _this = this;
        this._buff = [];
        this.died = false;
        this.node.on("buffReturn", function(buffName) {
          return _this.addBuffOld(buffName);
        });
        this.node.on("addBuff", function(buffData) {
          _this.addBuff(buffData);
        });
        this.node.on("deleteBuff", function(buffId) {
          return _this.deleteBuff(buffId);
        });
        this.node.on("checkDamageBuff", function() {
          _this.checkDamageBuff();
        });
        this.node.on("damageReturn", function(attackData) {
          _this.checkBuff("type", "shield").then(function(index) {
            _this.endBuffAnim(_this._buff[index], null);
            _this._buff.splice(index, 1);
          })["catch"](function(reason) {
            var damage = Math.round(attackData.attack / (1 + .06 * _this.defense));
            _this.currentHp -= damage;
            _this.node.emit("attacked", attackData);
          });
        });
        this.node.on("healReturn", function(points) {
          _this.currentHp += points;
        });
      },
      damageNumberUpdate: function damageNumberUpdate(damage) {
        var damageNumber = cc.instantiate(this.damageNumberPrefab);
        var damageNumberLabel = damageNumber.getComponent(cc.Label);
        damageNumberLabel.string = -damage;
        damageNumber.parent = this.node;
        cc.tween(damageNumber).parallel(cc.tween().by(.5, {
          position: cc.v2(0, 50)
        }), cc.tween().to(.8, {
          opacity: 0
        }).call(function() {
          damageNumber.destroy();
        })).start();
      },
      Die: function Die() {
        var _this2 = this;
        this.checkBuff("type", "revive").then(function(index) {
          _this2.node.getChildByName(_this2.node.name).active = false;
          _this2.bloodBarSprite.node.active = false;
          _this2.currentHp = 100;
          _this2.scheduleOnce(function() {
            _this2.endBuffAnim(_this2._buff[index], function(buffAnim) {
              buffAnim.setSiblingIndex(0);
              _this2.node.getChildByName(_this2.node.name).active = true;
              _this2.bloodBarSprite.node.active = true;
              _this2.node.emit("healReturn", _this2.totalHp);
            });
            _this2._buff.splice(index, 1);
          }, 0);
        })["catch"](function(reason) {
          _this2.bubble({
            eventName: "stop"
          });
          if (!_this2.died) {
            _this2.died = true;
            _this2.node.parent.parent.emit("die", _this2.node.group);
          }
          _this2.scheduleOnce(function() {
            return _this2.node.destroy();
          }, .8);
        });
      },
      bubble: function bubble(data) {
        var e = new cc.Event.EventCustom(data.eventName, true);
        ({}).hasOwnProperty.call(data, "extData") && e.setUserData(data.extData);
        this.node.dispatchEvent(e);
      },
      playAnim: function playAnim(name, times) {
        void 0 === times && (times = 0);
        this.node.emit("playAnim", name, times);
      },
      dealScaleX: function dealScaleX(x) {
        var sign = Math.sign(x);
        this.node.emit("setScaleX", sign);
      },
      addBuffOld: function addBuffOld(buffId) {},
      addBuff: function addBuff(buffData) {
        var _this3 = this;
        if ("valueChange" === buffData.type) {
          this.callBuff(buffData);
          buffData.life > 0 && this._buff.push(buffData);
        } else if ("clear" === buffData.type) {
          this.callBuff(buffData);
          var newBuff = [];
          this._buff.forEach(function(data) {
            "revive" === data.type || "shield" === data.type ? newBuff.push(data) : "valueChange" === data.type && _this3.reverseBuff(data);
          });
          this._buff = newBuff;
        } else this.checkBuff("type", buffData.type).then(function(index) {
          console.log("\u5df2\u5b58\u5728" + _this3._buff[index].type + ",\u4e0d\u4f1a\u91cd\u590d\u6dfb\u52a0");
        })["catch"](function(reason) {
          console.log(reason);
          _this3._buff.push(buffData);
          "shield" !== buffData.type && "revive" !== buffData.type || _this3.startBuffAnim(buffData);
        });
      },
      callBuff: function callBuff(buffData) {
        var _this4 = this;
        buffData.value instanceof Array ? buffData.value.forEach(function(buffValue) {
          _this4.callBuffValue(buffValue, buffData.attack);
        }) : this.callBuffValue(buffData.value, buffData.attack);
      },
      reverseBuff: function reverseBuff(buffData) {
        var _this5 = this;
        buffData.value instanceof Array ? buffData.value.forEach(function(buffValue) {
          _this5.reverseBuffValue(buffValue, buffData.attack);
        }) : this.reverseBuffValue(buffData.value, buffData.attack);
      },
      callBuffValue: function callBuffValue(buffValue, attack) {
        var amount = buffValue.amount;
        switch (buffValue.from) {
         case "origin":
         case "abs":
          amount = buffValue.amount;
          break;

         case "hpMax":
          amount = buffValue.amount * this.totalHp;
          break;

         case "attacker":
          amount = buffValue.amount * attack;
        }
        switch (buffValue.operation) {
         case "add":
          this[buffValue.name] += amount;
          break;

         case "minus":
          this[buffValue.name] -= amount;
          break;

         case "multiply":
          this[buffValue.name] *= amount;
          break;

         case "set":
          this[buffValue.name + "Origin"] = this[buffValue.name];
          this[buffValue.name] = amount;
        }
      },
      reverseBuffValue: function reverseBuffValue(buffValue, attack) {
        var amount = buffValue.amount;
        switch (buffValue.from) {
         case "origin":
         case "abs":
          amount = buffValue.amount;
          break;

         case "hpMax":
          amount = buffValue.amount * this.totalHp;
          break;

         case "attacker":
          amount = buffValue.amount * attack;
        }
        switch (buffValue.operation) {
         case "add":
          this[buffValue.name] -= amount;
          break;

         case "minus":
          this[buffValue.name] += amount;
          break;

         case "multiply":
          this[buffValue.name] /= amount;
          break;

         case "set":
          this[buffValue.name] = this[buffValue.name + "Origin"];
        }
      },
      checkBuff: function checkBuff(key, value) {
        var _this6 = this;
        return new Promise(function(resolve, reject) {
          if (0 === _this6._buff.length) reject(0); else switch (key) {
           case "type":
            var typeString = value;
            var index = _this6._buff.findIndex(function(data) {
              return data.type === typeString;
            });
            -1 !== index ? resolve(index) : reject(-1);
            break;

           default:
            reject(new Error("buff\u67e5\u8be2\u7c7b\u578b\u9519\u8bef"));
          }
        });
      },
      checkDamageBuff: function checkDamageBuff() {
        var _this7 = this;
        console.log("\u7ed3\u7b97\u524dbuff", this._buff);
        var newBuff = [];
        this._buff.forEach(function(data) {
          switch (data.type) {
           case "poision":
           case "burn":
            _this7.endBuffAnim(data, function(buffAnim) {
              return _this7.callBuff(data);
            });
          }
          data.life--;
          if (0 !== data.life) newBuff.push(data); else switch (data.type) {
           case "poision":
           case "burn":
            break;

           default:
            _this7.reverseBuff(data);
          }
        });
        this._buff = newBuff;
        console.log("\u7ed3\u7b97\u540eBuff", newBuff);
      },
      startBuffAnim: function startBuffAnim(buffData) {
        var buffType = buffData.type;
        if (!!this[buffType + "Prefab"]) {
          var buffAnim = cc.instantiate(this[buffType + "Prefab"]);
          buffAnim.parent = this.node;
          "revive" === buffData.type && (buffAnim.active = false);
          this[buffType + "Anim"] = buffAnim;
          return buffAnim;
        }
      },
      endBuffAnim: function endBuffAnim(buffData, callback) {
        var anim;
        var buffType = buffData.type;
        switch (buffType) {
         case "valueChange":
          callback();
          return;

         case "revive":
         case "shield":
          anim = this[buffType + "Anim"];
          break;

         case "dizzy":
         case "blind":
         case "confused":
          this.playAnim("yun", 0);
          callback();
          return;

         default:
          anim = this.startBuffAnim(buffData);
        }
        this.scheduleOnce(function() {
          anim.active = true;
          var dgb = anim.getComponent(dragonBones.ArmatureDisplay);
          dgb.on(dragonBones.EventObject.COMPLETE, function(event) {
            switch (dgb.animationName) {
             case "end":
              anim.destroy();
            }
          });
          dgb.on(dragonBones.EventObject.FRAME_EVENT, function(event) {
            "callback" === event.name && (!callback || callback(anim));
          });
          dgb.playAnimation("end", 1);
        }, 0);
      },
      deleteBuff: function deleteBuff(buffType) {
        var _this8 = this;
        this.checkBuff("type", buffType).then(function(index) {
          _this8._buff.splice(index, 1);
          _this8[buffid + "Anim"].destroy();
        });
      }
    });
    cc._RF.pop();
  }, {} ],
  BroadCast: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f90f7dcgAdJVp20E5qLB1g6", "BroadCast");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ListenerBinding = exports.Broadcast = void 0;
    var Broadcast = function() {
      function Broadcast() {
        this.bindings = [];
      }
      Broadcast.prototype.on = function(listener, target) {
        var binding = new ListenerBinding(listener, target, false, this);
        this.bindings.push(binding);
        return binding;
      };
      Broadcast.prototype.once = function(listener, target) {
        var binding = new ListenerBinding(listener, target, true, this);
        this.bindings.push(binding);
        return binding;
      };
      Broadcast.prototype.dispatch = function() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) params[_i] = arguments[_i];
        var flag = false;
        for (var _a = 0, _b = this.bindings; _a < _b.length; _a++) {
          var item = _b[_a];
          item.hasDestroyed ? flag = true : item.execute.apply(item, params);
        }
        if (flag) for (var i = 0; i < this.bindings.length; i++) if (this.bindings[i].hasDestroyed) {
          this.bindings.splice(i, 1);
          i--;
        }
      };
      Broadcast.prototype.get = function(listener, target) {
        for (var _i = 0, _a = this.bindings; _i < _a.length; _i++) {
          var item = _a[_i];
          if (item.listener == listener && item.target == target && !item.hasDestroyed) return item;
        }
        return null;
      };
      Broadcast.prototype.has = function(listener, target) {
        for (var _i = 0, _a = this.bindings; _i < _a.length; _i++) {
          var item = _a[_i];
          if (item.listener == listener && item.target == target && !item.hasDestroyed) return true;
        }
        return false;
      };
      Broadcast.prototype.remove = function(listener, target) {
        for (var _i = 0, _a = this.bindings; _i < _a.length; _i++) {
          var item = _a[_i];
          if (item.listener == listener && item.target == target && !item.hasDestroyed) return item.destroy();
        }
      };
      Broadcast.prototype.removeAll = function() {
        while (this.bindings.length) this.bindings.pop().destroy();
      };
      return Broadcast;
    }();
    exports.Broadcast = Broadcast;
    var ListenerBinding = function() {
      function ListenerBinding(listener, target, once, boradcast) {
        var _this = this;
        this.destroySelf = function() {
          _this.destroy();
        };
        this.listener = listener;
        this.target = target;
        this.once = once;
        this.broadcast = boradcast;
        this.hasDestroyed = false;
      }
      ListenerBinding.prototype.execute = function() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) params[_i] = arguments[_i];
        if (!this.hasDestroyed) {
          var result = this.listener.apply(this.target, params);
          this.once && this.destroy();
          return result;
        }
        return null;
      };
      ListenerBinding.prototype.destroy = function() {
        this.listener = null;
        this.target = null;
        this.once = null;
        this.broadcast = null;
        this.hasDestroyed = true;
      };
      return ListenerBinding;
    }();
    exports.ListenerBinding = ListenerBinding;
    cc._RF.pop();
  }, {} ],
  ButtonPlus: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3eaf8iLxgtDEKVcEmFvrbqy", "ButtonPlus");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SoundMgr_1 = require("../../UIFrame/SoundMgr");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, menu = _a.menu, help = _a.help, inspector = _a.inspector;
    var ButtonPlus = function(_super) {
      __extends(ButtonPlus, _super);
      function ButtonPlus() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.audioUrl = "";
        _this.openContinuous = true;
        _this.continuousTime = 1;
        _this.continuous = false;
        _this._continuousTimer = null;
        _this.openLongPress = false;
        _this.longPressTime = 1;
        _this.longPressFlag = false;
        _this.longPressTimer = null;
        return _this;
      }
      ButtonPlus.prototype.onEnable = function() {
        this.continuous = false;
        _super.prototype.onEnable.call(this);
        true;
      };
      ButtonPlus.prototype.onDisable = function() {
        if (this._continuousTimer) {
          clearTimeout(this._continuousTimer);
          this._continuousTimer = null;
        }
        if (this.longPressTimer) {
          clearTimeout(this.longPressTimer);
          this.longPressTimer = null;
        }
        _super.prototype.onDisable.call(this);
      };
      ButtonPlus.prototype._onTouchBegan = function(event) {
        if (!this.interactable || !this.enabledInHierarchy) return;
        if (this.openLongPress && !this.longPressFlag) {
          this.longPressTimer && clearTimeout(this.longPressTimer);
          this.longPressTimer = setTimeout(function() {
            if (this["_pressed"]) {
              this.node.emit("longclickStart", this);
              this.longPressFlag = true;
            }
          }.bind(this), 1e3 * this.longPressTime);
        }
        this["_pressed"] = true;
        this["_updateState"]();
        event.stopPropagation();
      };
      ButtonPlus.prototype._onTouchEnded = function(event) {
        if (!this.interactable || !this.enabledInHierarchy) return;
        if (this["_pressed"] && this.longPressFlag) {
          this.node.emit("longclickEnd", this);
          this.longPressFlag = false;
        } else if (this["_pressed"] && !this.continuous) {
          this.continuous = !!this.openContinuous;
          cc.Component.EventHandler.emitEvents(this.clickEvents, event);
          this.node.emit("click", event);
          SoundMgr_1.default.inst.playEffect(this.audioUrl);
          this.openContinuous && (this._continuousTimer = setTimeout(function() {
            this.continuous = false;
          }.bind(this), 1e3 * this.continuousTime));
        }
        this["_pressed"] = false;
        this["_updateState"]();
        event.stopPropagation();
      };
      ButtonPlus.prototype._onTouchCancel = function() {
        if (!this.interactable || !this.enabledInHierarchy) return;
        if (this["_pressed"] && this.longPressFlag) {
          this.node.emit("longclickEnd", this);
          this.longPressFlag = false;
        }
        this["_pressed"] = false;
        this["_updateState"]();
      };
      ButtonPlus.prototype.addClick = function(callback, target) {
        this.node.off("click");
        this.node.on("click", callback, target);
      };
      ButtonPlus.prototype.addLongClick = function(startFunc, endFunc, target) {
        this.node.off("longclickStart");
        this.node.off("longclickEnd");
        this.node.on("longclickStart", startFunc, target);
        this.node.on("longclickEnd", endFunc, target);
      };
      __decorate([ property({
        tooltip: "\u97f3\u6548\u8def\u5f84",
        type: "",
        multiline: true,
        formerlySerializedAs: "_N$string"
      }) ], ButtonPlus.prototype, "audioUrl", void 0);
      __decorate([ property({
        tooltip: "\u5c4f\u853d\u8fde\u7eed\u70b9\u51fb"
      }) ], ButtonPlus.prototype, "openContinuous", void 0);
      __decorate([ property({
        tooltip: "\u5c4f\u853d\u65f6\u95f4, \u5355\u4f4d:\u79d2"
      }) ], ButtonPlus.prototype, "continuousTime", void 0);
      __decorate([ property({
        tooltip: "\u662f\u5426\u5f00\u542f\u957f\u6309\u4e8b\u4ef6"
      }) ], ButtonPlus.prototype, "openLongPress", void 0);
      __decorate([ property({
        tooltip: "\u957f\u6309\u65f6\u95f4"
      }) ], ButtonPlus.prototype, "longPressTime", void 0);
      ButtonPlus = __decorate([ ccclass, menu("i18n:MAIN_MENU.component.ui/ButtonPlus"), executeInEditMode, help("i18n:COMPONENT.help_url.button"), inspector("packages://buttonplus/inspector.js") ], ButtonPlus);
      return ButtonPlus;
    }(cc.Button);
    exports.default = ButtonPlus;
    cc._RF.pop();
  }, {
    "../../UIFrame/SoundMgr": "SoundMgr"
  } ],
  CWebSocket: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "65ab688uJhB5bMfNapdpRC2", "CWebSocket");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CWebSocket = function() {
      function CWebSocket() {
        this.ws = null;
        this.onConnect = null;
        this.onMessage = null;
        this.onError = null;
        this.onClose = null;
      }
      CWebSocket.prototype.connect = function(option) {
        var _this = this;
        if (this.ws && this.ws.readyState === WebSocket.CONNECTING) {
          cc.log("\u5df2\u7ecf\u8fde\u63a5\u4e0a\u7f51\u7edc, \u91cd\u65b0\u8fde\u63a5\u524d\u8bf7\u5148\u8c03\u7528close\u65b9\u6cd5!");
          return false;
        }
        var url = "";
        url = "string" == typeof option ? option : option.protocol + "://" + option.ip + ":" + option.port;
        this.ws = new WebSocket(url);
        this.ws.binaryType = "arraybuffer";
        this.ws.onopen = this.onConnect;
        this.ws.onmessage = function(event) {
          _this.onMessage(event.data);
        };
        this.ws.onclose = this.onClose;
        this.ws.onerror = this.onError;
        return true;
      };
      CWebSocket.prototype.send = function(data) {
        if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
          cc.log("\u7f51\u7edc\u8fde\u63a5\u5df2\u5173\u95ed, \u65e0\u6cd5\u53d1\u9001\u6d88\u606f");
          return false;
        }
        this.ws.send(JSON.stringify(data));
        return true;
      };
      CWebSocket.prototype.close = function() {
        if (this.ws && this.ws.readyState !== WebSocket.CLOSED) {
          this.ws.close();
          this.ws = null;
        }
        return true;
      };
      return CWebSocket;
    }();
    exports.default = CWebSocket;
    cc._RF.pop();
  }, {} ],
  CameraCapture: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "29803DQKJdC2KvHyjig9y8N", "CameraCapture");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CocosHelper_1 = require("../../UIFrame/CocosHelper");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CameraCapture = function(_super) {
      __extends(CameraCapture, _super);
      function CameraCapture() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.captureNode = null;
        _this.camera = null;
        return _this;
      }
      CameraCapture_1 = CameraCapture;
      CameraCapture.prototype.onLoad = function() {
        CameraCapture_1.inst = this;
        this.camera = this.getComponent(cc.Camera);
        this.camera || (this.camera = this.addComponent(cc.Camera));
        this.node.active = false;
      };
      CameraCapture.prototype.start = function() {};
      CameraCapture.prototype.captureTexture = function() {
        this.node.active = true;
        this.captureNode.active = false;
        var data = CocosHelper_1.default.captureScreen(this.camera, this.captureNode);
        this.captureNode.active = true;
        this.node.active = false;
        return data;
      };
      var CameraCapture_1;
      CameraCapture.inst = null;
      __decorate([ property(cc.Node) ], CameraCapture.prototype, "captureNode", void 0);
      CameraCapture = CameraCapture_1 = __decorate([ ccclass ], CameraCapture);
      return CameraCapture;
    }(cc.Component);
    exports.default = CameraCapture;
    cc._RF.pop();
  }, {
    "../../UIFrame/CocosHelper": "CocosHelper"
  } ],
  CocosHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7d011DLhkxFPakrCRw6PZqk", "CocosHelper");
    "use strict";
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LoadProgress = void 0;
    var SysDefine_1 = require("./config/SysDefine");
    var LoadProgress = function() {
      function LoadProgress() {}
      return LoadProgress;
    }();
    exports.LoadProgress = LoadProgress;
    var CocosHelper = function() {
      function CocosHelper() {}
      CocosHelper.runRepeatTweenSync = function(target, repeat) {
        var tweens = [];
        for (var _i = 2; _i < arguments.length; _i++) tweens[_i - 2] = arguments[_i];
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve, reject) {
              var selfTween = cc.tween(target);
              for (var _i = 0, tweens_1 = tweens; _i < tweens_1.length; _i++) {
                var tmpTween = tweens_1[_i];
                selfTween = selfTween.then(tmpTween);
              }
              repeat < 0 ? cc.tween(target).repeatForever(selfTween).start() : cc.tween(target).repeat(repeat, selfTween).start();
            }) ];
          });
        });
      };
      CocosHelper.runTweenSync = function(target) {
        var tweens = [];
        for (var _i = 1; _i < arguments.length; _i++) tweens[_i - 1] = arguments[_i];
        return __awaiter(this, void 0, Promise, function() {
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve, reject) {
              var selfTween = cc.tween(target);
              for (var _i = 0, tweens_2 = tweens; _i < tweens_2.length; _i++) {
                var tmpTween = tweens_2[_i];
                selfTween = selfTween.then(tmpTween);
              }
              selfTween.call(function() {
                resolve();
              }).start();
            }) ];
          });
        });
      };
      CocosHelper.prototype.stopTween = function(target) {
        cc.Tween.stopAllByTarget(target);
      };
      CocosHelper.prototype.stopTweenByTag = function(tag) {
        cc.Tween.stopAllByTag(tag);
      };
      CocosHelper.runActionSync = function(node) {
        var actions = [];
        for (var _i = 1; _i < arguments.length; _i++) actions[_i - 1] = arguments[_i];
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            if (!actions || actions.length <= 0) return [ 2 ];
            return [ 2, new Promise(function(resolve, reject) {
              actions.push(cc.callFunc(function() {
                resolve(true);
              }));
              node.runAction(cc.sequence(actions));
            }) ];
          });
        });
      };
      CocosHelper.runAnimSync = function(node, animName) {
        return __awaiter(this, void 0, void 0, function() {
          var anim, clip, clips, i;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              anim = node.getComponent(cc.Animation);
              if (!anim) return [ 2 ];
              clip = null;
              if (animName) {
                clips = anim.getClips();
                if ("number" === typeof animName) clip = clips[animName]; else if ("string" === typeof animName) for (i = 0; i < clips.length; i++) if (clips[i].name === animName) {
                  clip = clips[i];
                  break;
                }
              } else clip = anim.defaultClip;
              if (!clip) return [ 2 ];
              return [ 4, CocosHelper.sleepSync(clip.duration) ];

             case 1:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      CocosHelper.loadResThrowErrorSync = function(url, type, progressCallback) {
        return null;
      };
      CocosHelper.loadResSync = function(url, type, progressCallback) {
        var _this = this;
        if (!url || !type) {
          cc.error("\u53c2\u6570\u9519\u8bef", url, type);
          return;
        }
        CocosHelper.loadProgress.url = url;
        progressCallback && (this.loadProgress.cb = progressCallback);
        return new Promise(function(resolve, reject) {
          cc.resources.load(url, type, _this._progressCallback, function(err, asset) {
            if (err) {
              cc.error(url + " [\u8d44\u6e90\u52a0\u8f7d] \u9519\u8bef " + err);
              resolve(null);
            } else resolve(asset);
            CocosHelper.loadProgress.url = "";
            CocosHelper.loadProgress.completedCount = 0;
            CocosHelper.loadProgress.totalCount = 0;
            CocosHelper.loadProgress.item = null;
            CocosHelper.loadProgress.cb = null;
          });
        });
      };
      CocosHelper._progressCallback = function(completedCount, totalCount, item) {
        CocosHelper.loadProgress.completedCount = completedCount;
        CocosHelper.loadProgress.totalCount = totalCount;
        CocosHelper.loadProgress.item = item;
        CocosHelper.loadProgress.cb && CocosHelper.loadProgress.cb(completedCount, totalCount, item);
      };
      CocosHelper.findChildInNode = function(nodeName, rootNode) {
        if (rootNode.name == nodeName) return rootNode;
        for (var i = 0; i < rootNode.childrenCount; i++) {
          var node = this.findChildInNode(nodeName, rootNode.children[i]);
          if (node) return node;
        }
        return null;
      };
      CocosHelper.checkNodePrefix = function(name) {
        if (name[0] !== SysDefine_1.SysDefine.SYS_STANDARD_Prefix) return false;
        return true;
      };
      CocosHelper.checkBindChildren = function(name) {
        if (name[name.length - 1] !== SysDefine_1.SysDefine.SYS_STANDARD_End) return true;
        return false;
      };
      CocosHelper.getPrefixNames = function(name) {
        if (null === name) return;
        return name.split(SysDefine_1.SysDefine.SYS_STANDARD_Separator);
      };
      CocosHelper.getComponentName = function(com) {
        var arr = com.name.match(/<.*>$/);
        if (arr && arr.length > 0) return arr[0].slice(1, -1);
        return com.name;
      };
      CocosHelper.loadBundleSync = function(url, options) {
        return new Promise(function(resolve, reject) {
          cc.assetManager.loadBundle(url, options, function(err, bundle) {
            if (err) resolve(bundle); else {
              cc.error("\u52a0\u8f7dbundle\u5931\u8d25, url: " + url + ", err:" + err);
              resolve(null);
            }
          });
        });
      };
      CocosHelper.loadAssetFromBundleSync = function(bundleName, url) {
        var bundle = cc.assetManager.getBundle(bundleName);
        if (!bundle) {
          cc.error("\u52a0\u8f7dbundle\u4e2d\u7684\u8d44\u6e90\u5931\u8d25, \u672a\u627e\u5230bundle, bundleUrl:" + bundleName);
          return null;
        }
        return new Promise(function(resolve, reject) {
          bundle.load(url, function(err, asset) {
            if (err) {
              cc.error("\u52a0\u8f7dbundle\u4e2d\u7684\u8d44\u6e90\u5931\u8d25, \u672a\u627e\u5230asset, url:" + url + ", err:" + err);
              resolve(null);
            } else resolve(asset);
          });
        });
      };
      CocosHelper.loadAssetSync = function(url) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          cc.resources.load(url, function(err, assets) {
            if (err) {
              _this.addRef(assets);
              resolve(assets);
            } else {
              cc.error("\u52a0\u8f7dasset\u5931\u8d25, url:" + url + ", err: " + err);
              resolve(null);
            }
          });
        });
      };
      CocosHelper.releaseAsset = function(assets) {
        this.decRes(assets);
      };
      CocosHelper.addRef = function(assets) {
        if (assets instanceof Array) for (var _i = 0, assets_1 = assets; _i < assets_1.length; _i++) {
          var a = assets_1[_i];
          a.addRef();
        } else assets.addRef();
      };
      CocosHelper.decRes = function(assets) {
        if (assets instanceof Array) for (var _i = 0, assets_2 = assets; _i < assets_2.length; _i++) {
          var a = assets_2[_i];
          a.decRef();
        } else assets.decRef();
      };
      CocosHelper.testForCallback = function(callback) {
        var a = 1;
        setTimeout(function() {
          callback(a);
        }, 1e3);
        return a;
      };
      CocosHelper.captureScreen = function(camera, prop) {
        var newTexture = new cc.RenderTexture();
        var oldTexture = camera.targetTexture;
        var rect = cc.rect(0, 0, cc.visibleRect.width, cc.visibleRect.height);
        prop && (rect = prop instanceof cc.Node ? prop.getBoundingBoxToWorld() : prop);
        newTexture.initWithSize(cc.visibleRect.width, cc.visibleRect.height, cc.game._renderContext.STENCIL_INDEX8);
        camera.targetTexture = newTexture;
        camera.render();
        camera.targetTexture = oldTexture;
        var buffer = new ArrayBuffer(rect.width * rect.height * 4);
        var data = new Uint8Array(buffer);
        newTexture.readPixels(data, rect.x, rect.y, rect.width, rect.height);
        return data;
      };
      CocosHelper.loadProgress = new LoadProgress();
      CocosHelper.sleepSync = function(time) {
        return new Promise(function(resolve, reject) {
          setTimeout(function() {
            resolve(true);
          }, 1e3 * time);
        });
      };
      return CocosHelper;
    }();
    exports.default = CocosHelper;
    cc._RF.pop();
  }, {
    "./config/SysDefine": "SysDefine"
  } ],
  CommonUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9814d/85SFDfo1f4MmYfH4s", "CommonUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CommonUtils = void 0;
    var CocosHelper_1 = require("../../UIFrame/CocosHelper");
    var MatchUtils_1 = require("./MatchUtils");
    var kDefaultRandomGenerator = {
      nextInt: function(start, endAndNotIncluded) {
        return Math.floor(Math.random() * (endAndNotIncluded - start)) + start;
      },
      next01: function() {
        return Math.random();
      }
    };
    var CommonUtils = function() {
      function CommonUtils() {}
      CommonUtils.isArray = function(target) {
        return "function" === typeof Array.isArray ? Array.isArray(target) : "[object Array]" === Object.prototype.toString.call(target);
      };
      CommonUtils.foramtDate = function(dateObj, format) {
        var date = {
          "M+": dateObj.getMonth() + 1,
          "d+": dateObj.getDate(),
          "h+": dateObj.getHours(),
          "m+": dateObj.getMinutes(),
          "s+": dateObj.getSeconds(),
          "q+": Math.floor((dateObj.getMonth() + 3) / 3),
          "S+": dateObj.getMilliseconds()
        };
        /(y+)/i.test(format) && (format = format.replace(RegExp.$1, (dateObj.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var k in date) new RegExp("(" + k + ")").test(format) && (format = format.replace(RegExp.$1, ("00" + date[k]).substr(("" + date[k]).length)));
        return format;
      };
      CommonUtils.getElemClamped = function(arr, index) {
        return arr[Math.max(0, Math.min(arr.length - 1, index))];
      };
      CommonUtils.randomIntClosedRange = function(min, max) {
        return Math.floor(Math.random() * (max - min + .9999) + min);
      };
      CommonUtils.indexOf = function(val, arr) {
        for (var i = 0; i < arr.length; i++) if (arr[i] == val) return i;
        return -1;
      };
      CommonUtils.indexOfArr = function(arr) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) values[_i - 1] = arguments[_i];
        var paramCount = values.length;
        var found = false;
        for (var i = 0; i <= arr.length - paramCount; i += paramCount) {
          found = true;
          for (var j = 0; j < paramCount; j++) if (arr[i + j] !== values[j]) {
            found = false;
            break;
          }
          if (found) return i;
        }
        return -1;
      };
      CommonUtils.floatEqual = function(left, right, epsilon) {
        void 0 === epsilon && (epsilon = 1e-6);
        return Math.abs(left - right) < epsilon;
      };
      CommonUtils.formatTimeInterval = function(seconds, alwaysShowMinutes, alwaysShowHours) {
        void 0 === alwaysShowMinutes && (alwaysShowMinutes = false);
        void 0 === alwaysShowHours && (alwaysShowHours = false);
        alwaysShowMinutes = alwaysShowHours || alwaysShowMinutes;
        var ret = "";
        var hour = Math.floor(seconds / 3600);
        seconds %= 3600;
        var minute = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        if (alwaysShowHours || hour > 0) {
          hour < 10 && (ret += "0");
          ret += hour + ":";
        }
        if (alwaysShowMinutes || minute > 0 || hour > 0) {
          minute < 10 && (ret += "0");
          ret += minute + ":";
        }
        seconds < 10 && (ret += "0");
        ret += seconds;
        return ret;
      };
      CommonUtils.alignNumber = function(input, divider) {
        input -= Math.floor(input / divider) * divider;
        return input;
      };
      CommonUtils.formatNumber = function(num) {
        var str = "" + Math.floor(num);
        var newStr = "";
        var count = 0;
        if (-1 == str.indexOf(".")) {
          for (var i = str.length - 1; i >= 0; i--) {
            newStr = count % 3 == 0 && 0 != count ? str.charAt(i) + "," + newStr : str.charAt(i) + newStr;
            count++;
          }
          str = newStr;
          return str;
        }
        for (var i = str.indexOf(".") - 1; i >= 0; i--) {
          newStr = count % 3 == 0 && 0 != count ? str.charAt(i) + "," + newStr : str.charAt(i) + newStr;
          count++;
        }
        str = newStr + (str + "00").substr((str + "00").indexOf("."), 3);
        return str;
      };
      CommonUtils.updateLabelSize = function(label) {
        label["_updateRenderData"](true);
      };
      CommonUtils.lerp = function(begin, end, factor) {
        return begin + (end - begin) * factor;
      };
      CommonUtils.shuffle = function(container, randGenerator, start, count) {
        void 0 === randGenerator && (randGenerator = kDefaultRandomGenerator);
        void 0 === start && (start = 0);
        void 0 === count && (count = -1);
        randGenerator = randGenerator || kDefaultRandomGenerator;
        count < 0 && (count = container.length - start);
        for (var i = 0; i < count; i++) {
          var idx = randGenerator.nextInt(start, start + count - i);
          var temp = container[idx];
          container[idx] = container[count - i - 1 + start];
          container[count - i - 1 + start] = temp;
        }
      };
      CommonUtils.setItemSpriteFrame = function(sprite, url, successCB) {
        void 0 === successCB && (successCB = null);
        sprite["spriteFrameName"] = url;
        CocosHelper_1.default.loadResSync(url, cc.SpriteFrame).then(function(spriteFrame) {
          if (sprite.isValid && sprite["spriteFrameName"] == url) {
            sprite.spriteFrame = spriteFrame;
            successCB && successCB(sprite);
          }
        });
      };
      CommonUtils.addSimpleClick = function(target, cb) {
        var targetNode = target;
        var lastTouchPos = null;
        targetNode.on(cc.Node.EventType.TOUCH_START, function(e) {
          lastTouchPos = e.getLocation();
        }, this);
        targetNode.on(cc.Node.EventType.TOUCH_END, function(e) {
          if (lastTouchPos) {
            var delta = lastTouchPos.subSelf(e.getLocation()).mag();
            delta < 3 && cb();
          }
        }, this);
      };
      CommonUtils.isGoodNumber = function(num) {
        return "number" === typeof num && !Number.isNaN(num);
      };
      CommonUtils.getVisibleRect = function() {
        var visibleRect = cc.view.getViewportRect();
        visibleRect = cc.rect(visibleRect.origin.x / -cc.view.getScaleX(), visibleRect.origin.y / -cc.view.getScaleY(), (visibleRect.size.width + 2 * visibleRect.origin.x) / cc.view.getScaleX(), (visibleRect.size.height + 2 * visibleRect.origin.y) / cc.view.getScaleY());
        return visibleRect;
      };
      CommonUtils.httpGet = function(url, cb) {
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.onreadystatechange = function() {
          if (4 === xhr.readyState && 200 == xhr.status) {
            var respone = xhr.responseText;
            var rsp = JSON.parse(respone);
            cb(rsp);
          } else 4 === xhr.readyState && 401 == xhr.status && cb({
            ret: 1
          });
        };
        xhr.withCredentials = true;
        xhr.open("GET", url, true);
        xhr.withCredentials = false;
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr.setRequestHeader("Access-Control-Allow-Methods", "GET, POST");
        xhr.setRequestHeader("Access-Control-Allow-Headers", "x-requested-with,content-type,authorization");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.timeout = 8e3;
        xhr.send();
      };
      CommonUtils.randomGaussian = function(avg, variant, randGenerator) {
        void 0 === randGenerator && (randGenerator = kDefaultRandomGenerator);
        randGenerator = randGenerator || kDefaultRandomGenerator;
        var x1 = randGenerator.next01();
        var x2 = randGenerator.next01();
        var standard = Math.sqrt(-2 * Math.log(x1)) * Math.cos(2 * Math.PI * x2);
        return standard * variant + avg;
      };
      CommonUtils.deepCopy = function(dst, src) {
        for (var field in src) this._deepCopyFields(dst, src, field);
      };
      CommonUtils.constructObjectMap = function(obj) {
        var map = new Map();
        for (var key in obj) {
          var val = obj[key];
          "object" === typeof val ? map.set(key, this.constructObjectMap(val)) : map.set(key, val);
        }
        return map;
      };
      CommonUtils._deepCopyFields = function(dst, src, field) {
        var value = src[field];
        if ("number" == typeof value || "string" == typeof value) dst[field] = value; else if (this.isArray[value]) {
          var dstArr = dst[field] = [];
          for (var i = 0; i < value.length; i++) this._deepCopyFields(dstArr, value, i);
        } else if (null == value) dst[field] = null; else if ("object" == typeof value) {
          var dstObj = new value.constructor();
          for (var field_1 in src) this._deepCopyFields(dstObj, value, field_1);
        }
      };
      CommonUtils.formatNumberToEng = function(value) {
        if (value < 1 && value > 0) return "1";
        value = Math.floor(value);
        var exp = Math.floor(CommonUtils.getExponent(value));
        if (exp < 13) {
          if (exp < 4) return value + "";
          var unitIt = Math.floor(exp / CommonUtils.constNum);
          var rem = exp % CommonUtils.constNum;
          var numStr = String(value / Math.pow(10, unitIt * CommonUtils.constNum)).substr(0, CommonUtils.constNum + rem);
          return numStr + CommonUtils.getUnit(exp);
        }
        var _num = value / Math.pow(10, exp);
        return _num.toFixed(3) + "e" + exp;
      };
      CommonUtils.getExponent = function(value) {
        var exp = 0;
        while (value >= 10) {
          exp++;
          value /= 10;
        }
        return exp;
      };
      CommonUtils.getUnit = function(exp) {
        var unitIt = Math.floor(exp / CommonUtils.constNum);
        if (exp < 13) return CommonUtils.unitArr[unitIt];
        var unitIt = Math.floor(exp / CommonUtils.constNum);
        return "e" + unitIt * CommonUtils.constNum;
      };
      CommonUtils.formatEngNumber = function(number, decimals) {
        void 0 === decimals && (decimals = 2);
        var str;
        var num;
        number = number;
        if (number >= 1e6) {
          num = number / 1e6;
          str = (.001 * Math.floor(num / .001)).toFixed(decimals);
          return this.formatEndingZero(str) + "M";
        }
        if (number >= 1e3) {
          num = number / 1e3;
          str = (.001 * Math.floor(num / .001)).toFixed(decimals);
          return this.formatEndingZero(str) + "K";
        }
        return number + "";
      };
      CommonUtils.formatEndingZero = function(c) {
        if (-1 != c.indexOf(".")) {
          if (this.endWith(c, "00")) return c.substring(0, c.length - 3);
          if (this.endWith(c, "0")) return c.substring(0, c.length - 1);
        }
        return c;
      };
      CommonUtils.endWith = function(c, suffix) {
        return suffix == c.substring(c.length - suffix.length);
      };
      CommonUtils.makeMaxWidthLabel = function(label, width) {
        var obj = {};
        obj["__proto__"] = label;
        Object.defineProperty(obj, "string", {
          configurable: true,
          enumerable: true,
          get: function() {
            return label.string;
          },
          set: function(str) {
            label.overflow = cc.Label.Overflow.NONE;
            label.string = str;
            label["_updateRenderData"](true);
            if (label.node.width > width) {
              label.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
              label.node.setContentSize(width, 1);
              label.string = str;
            }
          }
        });
        return obj;
      };
      CommonUtils.climeUserName = function(name, showLen) {
        void 0 === showLen && (showLen = 14);
        var len = name.length;
        while (this.strlen(name) > showLen) name = name.substring(0, name.length - 1);
        name.length != len && (name += "...");
        return name;
      };
      CommonUtils.strlen = function(str) {
        var len = 0;
        for (var i = 0; i < str.length; i++) {
          var c = str.charCodeAt(i);
          c >= 1 && c <= 126 || 65376 <= c && c <= 65439 ? len++ : len += 2;
        }
        return len;
      };
      CommonUtils.shuffleArr = function(arr) {
        var _swap = function(a, b) {
          var tmp = arr[a];
          arr[a] = arr[b];
          arr[b] = tmp;
        };
        var len = arr.length;
        for (var i = 0; i < len; i++) {
          var idx = Math.floor(Math.random() * (len - i));
          _swap(idx, len - i - 1);
        }
        return arr;
      };
      CommonUtils.binarySearch = function(arr, target, findFlag) {
        void 0 === findFlag && (findFlag = false);
        var start = 0, end = arr.length - 1;
        while (end - start > 1) {
          var idx = Math.floor((start + end) / 2);
          if (target < arr[idx]) end = idx; else {
            if (!(target > arr[idx])) return idx;
            start = idx;
          }
        }
        if (findFlag) {
          if (start == arr.length - 1) return arr.length;
          return end;
        }
        if (0 == end) return -1;
        return start;
      };
      CommonUtils.isInTriangle = function(point, triA, triB, triC) {
        var AB = triB.sub(triA), AC = triC.sub(triA), BC = triC.sub(triB), AD = point.sub(triA), BD = point.sub(triB);
        return AB.cross(AC) >= 0 ^ AB.cross(AD) < 0 && AB.cross(AC) >= 0 ^ AC.cross(AD) >= 0 && BC.cross(AB) > 0 ^ BC.cross(BD) >= 0;
      };
      CommonUtils.isInPolygon = function(checkPoint, polygonPoints) {
        var counter = 0, i, xinters;
        var p1, p2;
        var pointCount = polygonPoints.length;
        p1 = polygonPoints[0];
        for (i = 1; i <= pointCount; i++) {
          p2 = polygonPoints[i % pointCount];
          if (checkPoint.x > Math.min(p1.x, p2.x) && checkPoint.x <= Math.max(p1.x, p2.x) && checkPoint.y <= Math.max(p1.y, p2.y) && p1.x != p2.x) {
            xinters = (checkPoint.x - p1.x) * (p2.y - p1.y) / (p2.x - p1.x) + p1.y;
            (p1.y == p2.y || checkPoint.y <= xinters) && counter++;
          }
          p1 = p2;
        }
        return counter % 2 != 0;
      };
      CommonUtils.splitePolygon = function(points) {
        if (points.length <= 3) return [ 0, 1, 2 ];
        var pointMap = {};
        for (var i = 0; i < points.length; i++) {
          var p = points[i];
          pointMap[p.x + "-" + p.y] = i;
        }
        var getIdx = function(p) {
          return pointMap[p.x + "-" + p.y];
        };
        points = points.concat([]);
        var idxs = [];
        var index = 0;
        while (points.length > 3) {
          var p1 = points[index % points.length], p2 = points[(index + 1) % points.length], p3 = points[(index + 2) % points.length];
          var splitPoint = (index + 1) % points.length;
          var v1 = p2.sub(p1);
          var v2 = p3.sub(p2);
          if (v1.cross(v2) < 0) {
            index = (index + 1) % points.length;
            continue;
          }
          var hasPoint = false;
          for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
            var p = points_1[_i];
            if (p != p1 && p != p2 && p != p3 && this.isInTriangle(p, p1, p2, p3)) {
              hasPoint = true;
              break;
            }
          }
          if (hasPoint) {
            index = (index + 1) % points.length;
            continue;
          }
          idxs.push(getIdx(p1), getIdx(p2), getIdx(p3));
          points.splice(splitPoint, 1);
        }
        for (var _a = 0, points_2 = points; _a < points_2.length; _a++) {
          var p = points_2[_a];
          idxs.push(getIdx(p));
        }
        return idxs;
      };
      CommonUtils.computeUv = function(points, width, height) {
        var uvs = [];
        for (var _i = 0, points_3 = points; _i < points_3.length; _i++) {
          var p = points_3[_i];
          var x = MatchUtils_1.MathUtils.clamp(0, 1, (p.x + width / 2) / width);
          var y = MatchUtils_1.MathUtils.clamp(0, 1, 1 - (p.y + height / 2) / height);
          uvs.push(cc.v2(x, y));
        }
        return uvs;
      };
      CommonUtils.unitArr = [ "", "K", "M", "B" ];
      CommonUtils.constNum = 3;
      return CommonUtils;
    }();
    exports.CommonUtils = CommonUtils;
    cc._RF.pop();
  }, {
    "../../UIFrame/CocosHelper": "CocosHelper",
    "./MatchUtils": "MatchUtils"
  } ],
  ConfigMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "99faeZt2e5AobpvQuyUBgaI", "ConfigMgr");
    "use strict";
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ConfigMgr = function() {
      function ConfigMgr() {}
      ConfigMgr.prototype.loadConfigs = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [ 2 ];
          });
        });
      };
      ConfigMgr.prototype.onConfigChange = function() {};
      return ConfigMgr;
    }();
    exports.default = ConfigMgr;
    cc._RF.pop();
  }, {} ],
  DebugWindowUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "84e75b8tBhNjY7KyBAgOsH/", "DebugWindowUtils");
    "use strict";
    var __spreadArrays = this && this.__spreadArrays || function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
      k++) r[k] = a[j];
      return r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function hookCtor(func) {
      return function() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) params[_i] = arguments[_i];
        var result = func.call.apply(func, __spreadArrays([ this ], params)) || this;
        func["___ins"] = result;
        return result;
      };
    }
    var DebugWindowUtil = function() {
      function DebugWindowUtil() {}
      DebugWindowUtil.getModuleName = function(modules) {
        if ("string" !== typeof modules) return modules;
        return modules.split("/").pop().split(".")[0];
      };
      DebugWindowUtil.init = function() {
        var require = "undefined" !== typeof __modular ? __modular : {};
        if (!require || !require.modules) return;
        var installedModules = require.modules;
        var allExports = {};
        function addExports(k, obj, modName) {
          var name = k;
          obj && obj.name && (name = obj.name);
          if (allExports[k]) return addExports(k + modName, obj, modName);
          var wraped = obj;
          allExports[name] = wraped;
          return wraped;
        }
        for (var k in installedModules) {
          var module = installedModules[k];
          var file = module.file;
          var exports = module.module ? module.module.exports : {};
          var modName = this.getModuleName(file);
          for (var k_1 in exports) {
            if ("__esModule" === k_1) continue;
            if ("default" === k_1) {
              exports[k_1] = addExports(modName, exports[k_1], modName);
              exports[modName] || (exports[modName] = exports[k_1]);
            } else exports[k_1] = addExports(k_1, exports[k_1], modName);
          }
          window[modName + "_mod"] = exports;
        }
        for (var k in allExports) {
          if (window[k]) continue;
          window[k] = allExports[k];
        }
      };
      return DebugWindowUtil;
    }();
    exports.default = DebugWindowUtil;
    cc._RF.pop();
  }, {} ],
  DrawBorad: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5d19bkVv4BM774fPMww+bzv", "DrawBorad");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var DrawingBoard_1 = require("../Utils/DrawingBoard");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DrawBorad = function(_super) {
      __extends(DrawBorad, _super);
      function DrawBorad() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ndBroad = null;
        _this._drawingBroad = null;
        _this._texture = new cc.Texture2D();
        _this._sprite = null;
        _this.broadYMax = -1;
        _this.broadXMin = -1;
        _this._touching = false;
        return _this;
      }
      DrawBorad.prototype.onLoad = function() {
        this.ndBroad || (this.ndBroad = this.node);
        this._sprite = this.ndBroad.getComponent(cc.Sprite);
        this._sprite || this.ndBroad.addComponent(cc.Sprite);
        this._drawingBroad = new DrawingBoard_1.default(this.ndBroad.width, this.ndBroad.height);
        this._drawingBroad.setColor(0, 0, 0, 255);
        this._drawingBroad.setLineWidth(5);
        this._touching = false;
        var worldPos = this.ndBroad.convertToWorldSpaceAR(cc.v2(0, 0));
        this.broadYMax = worldPos.y + this.ndBroad.height / 2;
        this.broadXMin = worldPos.x - this.ndBroad.width / 2;
        this.ndBroad.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.ndBroad.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.ndBroad.on(cc.Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
        this.ndBroad.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
      };
      DrawBorad.prototype.start = function() {};
      DrawBorad.prototype.setData = function(data) {
        this._drawingBroad.setData(data);
        this.updateTexture(this._drawingBroad.getData(), this.ndBroad.width, this.ndBroad.height);
      };
      DrawBorad.prototype.touchStart = function(e) {
        if (this._touching) return;
        this._touching = true;
        var worldPos = e.getLocation();
        this._drawingBroad.moveTo(worldPos.x - this.broadXMin, this.getRealY(worldPos.y));
      };
      DrawBorad.prototype.touchMove = function(e) {
        if (!this._touching) return;
        var worldPos = e.getLocation();
        this._drawingBroad.lineTo(worldPos.x - this.broadXMin, this.getRealY(worldPos.y));
        this.updateTexture(this._drawingBroad.getData(), this.ndBroad.width, this.ndBroad.height);
      };
      DrawBorad.prototype.touchCancel = function(e) {
        this._touching = false;
      };
      DrawBorad.prototype.touchEnd = function(e) {
        this._touching = false;
      };
      DrawBorad.prototype.onDestroy = function() {
        this.ndBroad.off(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.ndBroad.off(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.ndBroad.off(cc.Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
        this.ndBroad.off(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
      };
      DrawBorad.prototype.setColor = function(r, g, b, a) {
        this._drawingBroad.setColor(r, g, b, a);
      };
      DrawBorad.prototype.setLineWidth = function(width) {
        this._drawingBroad.setLineWidth(width);
      };
      DrawBorad.prototype.setPen = function() {
        this.setColor(0, 0, 0, 255);
        this.setLineWidth(5);
      };
      DrawBorad.prototype.setReaser = function() {
        this.setColor(0, 0, 0, 0);
        this.setLineWidth(20);
      };
      DrawBorad.prototype.getTexture = function() {
        return this._texture;
      };
      DrawBorad.prototype.updateTexture = function(data, width, height) {
        this._texture.initWithData(data, cc.Texture2D.PixelFormat.RGBA8888, width, height);
        this._sprite.spriteFrame.setTexture(this._texture);
        this._sprite.markForRender(true);
      };
      DrawBorad.prototype.getRealY = function(y) {
        if (this._sprite.spriteFrame["_flipY"]) return this.broadYMax - (cc.visibleRect.height - y);
        return this.broadYMax - y;
      };
      __decorate([ property(cc.Node) ], DrawBorad.prototype, "ndBroad", void 0);
      DrawBorad = __decorate([ ccclass ], DrawBorad);
      return DrawBorad;
    }(cc.Component);
    exports.default = DrawBorad;
    cc._RF.pop();
  }, {
    "../Utils/DrawingBoard": "DrawingBoard"
  } ],
  DrawingBoard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "54b2dNYr/FCsJ51TWLTWJoT", "DrawingBoard");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var DrawingBoard = function() {
      function DrawingBoard(width, height, data) {
        this.init(width, height, data);
      }
      Object.defineProperty(DrawingBoard.prototype, "width", {
        get: function() {
          return this._witdh;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(DrawingBoard.prototype, "height", {
        get: function() {
          return this._height;
        },
        enumerable: false,
        configurable: true
      });
      DrawingBoard.prototype.init = function(width, height, data) {
        this.tempColor = this.tempR = this.tempG = this.tempB = this.tempA = 0;
        this.curColor = 0;
        this._witdh = Math.round(width);
        this._height = Math.round(height);
        this.initPointColor();
        this.initPixelColor();
        this.initLineData();
        !data || this.setData(data);
      };
      DrawingBoard.prototype.initPointColor = function() {
        this.pointColor || (this.pointColor = []);
        for (var x = 0; x < this.width; ++x) {
          this.pointColor[x] || (this.pointColor[x] = []);
          for (var y = 0; y < this.height; ++y) this.pointColor[x][y] = 0;
        }
        this.colorCount = {};
        this.colorCount[0] = this.width * this.height;
      };
      DrawingBoard.prototype.initPixelColor = function() {
        this.buffer = new ArrayBuffer(this.width * this.height * 4);
        this.pixelColor = new Uint8Array(this.buffer);
        this.pixelColor.fill(0);
      };
      DrawingBoard.prototype.reset = function() {
        this.resetPointColor();
        this.resetPixelColor();
      };
      DrawingBoard.prototype.resetPointColor = function() {
        for (var x = this.width - 1; x >= 0; --x) for (var y = this.height - 1; y >= 0; --y) this.pointColor[x][y] = 0;
        for (var key in this.colorCount) this.colorCount[key] = 0;
      };
      DrawingBoard.prototype.resetPixelColor = function() {
        this.pixelColor.fill(0);
      };
      DrawingBoard.prototype.setData = function(data) {
        var pixelData = new Uint8Array(data);
        if (pixelData.length != this.width * this.height * 4) {
          console.warn("\u753b\u677f\u8bbe\u7f6e\u6570\u636e\u5931\u8d25\uff0c\u6570\u636e\u957f\u5ea6\u4e0e\u753b\u677f\u5927\u5c0f\u4e0d\u4e00\u81f4\u3002");
          pixelData = pixelData.subarray(0, this.width * this.height * 4);
        }
        this.setPixelColorByRGBA(pixelData);
        this.setPointColorByRGBA(pixelData);
      };
      DrawingBoard.prototype.setPixelColorByRGBA = function(data) {
        this.pixelColor.set(data);
      };
      DrawingBoard.prototype.setPointColorByRGBA = function(data) {
        this.colorCount = {};
        for (var y = 0; y < this.height; ++y) {
          var i = y * this.height;
          for (var x = 0; x < this.width; ++x) {
            var color = this.convertToNumber(data[i++], data[i++], data[i++], data[i++]);
            this.pointColor[x][y] = color;
            this.colorCount[color] ? this.colorCount[color] += 1 : this.colorCount[color] = 1;
          }
        }
      };
      DrawingBoard.prototype.copyData = function(data) {
        void 0 === data && (data = []);
        for (var i = 0, count = this.pixelColor.length; i < count; ++i) data[i] = this.pixelColor[i];
        return data;
      };
      DrawingBoard.prototype.getData = function() {
        return this.pixelColor;
      };
      DrawingBoard.prototype.getBuffer = function() {
        return this.buffer;
      };
      DrawingBoard.prototype.getColorCount = function(r, g, b, a) {
        void 0 === a && (a = 255);
        var c = this.convertToNumber(r, g, b, a);
        return this.colorCount[c];
      };
      DrawingBoard.prototype.setColor = function(r, g, b, a) {
        void 0 === a && (a = 255);
        this.curColor = this.convertToNumber(r, g, b, a);
        this.colorCount[this.curColor] || (this.colorCount[this.curColor] = 0);
        this.tempColor = this.curColor;
        this.tempR = r;
        this.tempG = g;
        this.tempB = b;
        this.tempA = a;
      };
      DrawingBoard.prototype.clear = function() {
        this.reset();
      };
      DrawingBoard.prototype.initLineData = function() {
        this.previousLineEndPos = new Vec2();
        this.previousLineEndPosT = new Vec2();
        this.previousLineEndPosB = new Vec2();
        this.previousLineCircleEnd = true;
        this.previousLineWidth = 1;
      };
      DrawingBoard.prototype.moveTo = function(x, y) {
        x = Math.round(x);
        y = Math.round(y);
        this.previousLineEndPos.set(x, y);
        this.previousLineEndPosT.set(x, y);
        this.previousLineEndPosB.set(x, y);
      };
      DrawingBoard.prototype.setLineWidth = function(w) {
        this.previousLineWidth = w;
      };
      DrawingBoard.prototype.setLineCircleEnd = function(b) {
        this.previousLineCircleEnd = b;
      };
      DrawingBoard.prototype.line = function(x1, y1, x2, y2) {
        x1 = Math.round(x1);
        x2 = Math.round(x2);
        y1 = Math.round(y1);
        y2 = Math.round(y2);
        if (x1 == x2 && y1 == y2) return;
        var width = this.previousLineWidth;
        var circleEnd = this.previousLineCircleEnd;
        this.previousLineEndPos.set(x2, y2);
        var offsetX = 0;
        var offsetY = 0;
        var rateK = 1;
        if (x1 == x2) offsetX = Math.round(.5 * width); else if (y1 == y2) offsetY = Math.round(.5 * width); else {
          var k = (y2 - y1) / (x2 - x1);
          rateK = Math.sqrt(k * k + 1);
          offsetY = .5 * width / rateK;
          offsetX = Math.round(offsetY * k);
          offsetY = Math.round(offsetY);
        }
        this.previousLineEndPosT.set(x2 - offsetX, y2 + offsetY);
        this.previousLineEndPosB.set(x2 + offsetX, y2 - offsetY);
        var p1 = new Vec2(x1, y1);
        var p2 = new Vec2(x2, y2);
        if (x1 > x2) {
          p1.x = x2;
          p1.y = y2;
          p2.x = x1;
          p2.y = y1;
        }
        this._drawLine(p1, p2, width, offsetX, offsetY, rateK);
        if (circleEnd) {
          this._drawCircle(x1, y1, .5 * width);
          this._drawCircle(x2, y2, .5 * width);
        }
      };
      DrawingBoard.prototype.lineTo = function(x, y) {
        x = Math.round(x);
        y = Math.round(y);
        if (this.previousLineEndPos.x == x && this.previousLineEndPos.y == y) return;
        var width = this.previousLineWidth;
        var circleEnd = this.previousLineCircleEnd;
        var x1 = this.previousLineEndPos.x;
        var y1 = this.previousLineEndPos.y;
        var x2 = x;
        var y2 = y;
        if (x1 > x2) {
          x1 = x2;
          y1 = y2;
          x2 = this.previousLineEndPos.x;
          y2 = this.previousLineEndPos.y;
        }
        var offsetX = 0;
        var offsetY = 0;
        var rateK = 1;
        if (x1 == x2) offsetX = Math.round(.5 * width); else if (y1 == y2) offsetY = Math.round(.5 * width); else {
          var k = (y2 - y1) / (x2 - x1);
          rateK = Math.sqrt(k * k + 1);
          offsetY = .5 * width / rateK;
          offsetX = Math.round(offsetY * k);
          offsetY = Math.round(offsetY);
        }
        if (circleEnd) {
          this._drawCircle(x1, y1, .5 * width);
          this._drawCircle(x2, y2, .5 * width);
        } else if (this.previousLineEndPos.x != this.previousLineEndPosT.x || this.previousLineEndPos.y != this.previousLineEndPosT.y) {
          var p1 = new Vec2(this.previousLineEndPos.x - offsetX, this.previousLineEndPos.y + offsetY);
          var p2 = new Vec2(this.previousLineEndPos.x + offsetX, this.previousLineEndPos.y - offsetY);
          this._drawTriangle([ p1, p2, this.previousLineEndPosT ]);
          this._drawTriangle([ p1, p2, this.previousLineEndPosB ]);
        }
        this._drawLine(new Vec2(x1, y1), new Vec2(x2, y2), width, offsetX, offsetY, rateK);
        this.previousLineEndPos.set(x, y);
        this.previousLineEndPosT.set(x - offsetX, y + offsetY);
        this.previousLineEndPosB.set(x + offsetX, y - offsetY);
      };
      DrawingBoard.prototype._drawLine = function(p1, p2, width, offsetX, offsetY, slopeRate) {
        if (p1.y == p2.y) {
          var x = p1.x < p2.x ? p1.x : p2.x;
          this._drawRect(new Vec2(x, Math.round(p1.y - .5 * width)), Math.abs(p1.x - p2.x), width);
        } else if (p1.x == p2.x) {
          var y = p1.y < p2.y ? p1.y : p2.y;
          this._drawRect(new Vec2(Math.round(p1.x - .5 * width), y), width, Math.abs(p1.y - p2.y));
        } else {
          var inverseK = (p1.x - p2.x) / (p1.y - p2.y);
          var p1t = new Vec2(p1.x - offsetX, p1.y + offsetY);
          var p1b = new Vec2(p1.x + offsetX, p1.y - offsetY);
          var p2t = new Vec2(p2.x - offsetX, p2.y + offsetY);
          var p2b = new Vec2(p2.x + offsetX, p2.y - offsetY);
          var p1c = new Vec2();
          var p2c = new Vec2();
          var height = Math.round(width * slopeRate);
          if (p2.y > p1.y) if (p1b.x < p2t.x) {
            p1c.x = p1b.x;
            p1c.y = p1b.y + height;
            p2c.x = p2t.x;
            p2c.y = p2t.y - height;
            this._drawVerticalTriangle(p1c, p1b, p1t);
            this._drawParallelogram(p1b, p2c, height);
            this._drawVerticalTriangle(p2t, p2c, p2b);
          } else {
            p1c.x = p1b.x;
            p1c.y = Math.round(p2t.y - (p1c.x - p2t.x) * inverseK);
            p2c.x = p2t.x;
            p2c.y = Math.round(p1b.y + (p1b.x - p2c.x) * inverseK);
            this._drawVerticalTriangle(p2t, p2c, p1t);
            this._drawParallelogram(p2c, p1b, p2t.y - p2c.y);
            this._drawVerticalTriangle(p1c, p1b, p2b);
          } else if (p1t.x < p2b.x) {
            p1c.x = p1t.x;
            p1c.y = p1t.y - height;
            p2c.x = p2b.x;
            p2c.y = p2b.y + height;
            this._drawVerticalTriangle(p1t, p1c, p1b);
            this._drawParallelogram(p1c, p2b, height);
            this._drawVerticalTriangle(p2c, p2b, p2t);
          } else {
            p1c.x = p1t.x;
            p1c.y = Math.round(p2b.y - (p1c.x - p2b.x) * inverseK);
            p2c.x = p2b.x;
            p2c.y = Math.round(p1t.y + (p1t.x - p2c.x) * inverseK);
            this._drawVerticalTriangle(p2c, p2b, p1b);
            this._drawParallelogram(p2b, p1c, p1t.y - p1c.y);
            this._drawVerticalTriangle(p1t, p1c, p2t);
          }
        }
      };
      DrawingBoard.prototype.rect = function(x, y, w, h) {
        this._drawRect(new Vec2(x, y), w, h);
      };
      DrawingBoard.prototype._drawRect = function(p, w, h) {
        var minX = this.clampX(p.x);
        var maxX = this.clampX(p.x + w);
        var minY = this.clampY(p.y);
        var maxY = this.clampY(p.y + h);
        for (var y = minY; y <= maxY; ++y) this._drawRowPixel(minX, maxX, y);
      };
      DrawingBoard.prototype._drawParallelogram = function(p1, p2, height) {
        if (p1.x == p2.x) return;
        var k = (p2.y - p1.y) / (p2.x - p1.x);
        var minX = this._minX(p1.x);
        var maxX = this._maxX(p2.x);
        for (var x = minX; x <= maxX; ++x) {
          var minY = p1.y + Math.round((x - p1.x) * k);
          var maxY = minY + height;
          minY = this._minY(minY);
          maxY = this._maxY(maxY);
          this._drawColPixel(minY, maxY, x);
        }
      };
      DrawingBoard.prototype.triangle = function(x1, y1, x2, y2, x3, y3) {
        var pList = [];
        pList.push(new Vec2(x1, y1));
        pList.push(new Vec2(x2, y2));
        pList.push(new Vec2(x3, y3));
        this._drawTriangle(pList);
      };
      DrawingBoard.prototype._drawTriangle = function(pList) {
        pList.sort(function(a, b) {
          return a.x - b.x;
        });
        var p1 = pList[0];
        var p2 = pList[1];
        var p3 = pList[2];
        if (p1.x == p2.x) {
          if (p1.x == p3.x) return;
          if (p1.y < p2.y) {
            p1 = pList[1];
            p2 = pList[0];
          }
          this._drawVerticalTriangle(p1, p2, p3);
          return;
        }
        var k = (p3.y - p1.y) / (p3.x - p1.x);
        var p4 = new Vec2(p2.x, Math.round(p1.y + (p2.x - p1.x) * k));
        if (p4.y == p2.y) return;
        if (p4.y < p2.y) {
          this._drawVerticalTriangle(p2, p4, p1);
          this._drawVerticalTriangle(p2, p4, p3);
        } else {
          this._drawVerticalTriangle(p4, p2, p1);
          this._drawVerticalTriangle(p4, p2, p3);
        }
      };
      DrawingBoard.prototype._drawVerticalTriangle = function(p1, p2, p3) {
        if (p3.x == p1.x) return;
        var k1 = (p3.y - p1.y) / (p3.x - p1.x);
        var k2 = (p3.y - p2.y) / (p3.x - p2.x);
        var maxX = p3.x, minX = p1.x;
        if (maxX < minX) {
          maxX = p1.x;
          minX = p3.x;
        }
        minX = this._minX(minX);
        maxX = this._maxX(maxX);
        for (var x = minX; x <= maxX; ++x) {
          var maxY = this.clampY(Math.round(p1.y + (x - p1.x) * k1));
          var minY = this.clampY(Math.round(p2.y + (x - p2.x) * k2));
          this._drawColPixel(minY, maxY, x);
        }
      };
      DrawingBoard.prototype.circle = function(x, y, radius) {
        x = Math.round(x);
        y = Math.round(y);
        this._drawCircle(x, y, radius);
      };
      DrawingBoard.prototype._drawCircle = function(x, y, radius) {
        radius = Math.round(radius);
        if (0 == radius) return;
        var dis = radius * radius;
        var minY = this.clampY(y - radius);
        var maxY = this.clampY(y + radius);
        for (var j = minY; j <= maxY; ++j) {
          var r = j - y;
          r = Math.round(Math.sqrt(dis - r * r));
          var minX = this.clampX(x - r);
          var maxX = this.clampX(x + r);
          this._drawRowPixel(minX, maxX, j);
        }
      };
      DrawingBoard.prototype._minX = function(x) {
        return x >= 0 ? x : 0;
      };
      DrawingBoard.prototype._maxX = function(x) {
        return x < this.width ? x : this.width - 1;
      };
      DrawingBoard.prototype._minY = function(y) {
        return y >= 0 ? y : 0;
      };
      DrawingBoard.prototype._maxY = function(y) {
        return y < this.height ? y : this.height - 1;
      };
      DrawingBoard.prototype.clampX = function(x) {
        if (x < 0) return 0;
        if (x >= this.width) return this.width - 1;
        return x;
      };
      DrawingBoard.prototype.clampY = function(y) {
        if (y < 0) return 0;
        if (y >= this.height) return this.height - 1;
        return y;
      };
      DrawingBoard.prototype._drawPixel = function(x, y) {
        if (this.pointColor[x][y] == this.tempColor) return;
        var index = 4 * (y * this.width + x);
        this.pixelColor[index] = this.tempR;
        this.pixelColor[index + 1] = this.tempG;
        this.pixelColor[index + 2] = this.tempB;
        this.pixelColor[index + 3] = this.tempA;
        var c = this.pointColor[x][y];
        this.colorCount[c]--;
        this.colorCount[this.tempColor]++;
        this.pointColor[x][y] = this.tempColor;
      };
      DrawingBoard.prototype._drawRowPixel = function(startX, endX, y) {
        var index = 4 * (y * this.width + startX);
        for (var x = startX; x <= endX; ++x) {
          if (this.pointColor[x][y] != this.tempColor) {
            this.pixelColor[index] = this.tempR;
            this.pixelColor[index + 1] = this.tempG;
            this.pixelColor[index + 2] = this.tempB;
            this.pixelColor[index + 3] = this.tempA;
            var c = this.pointColor[x][y];
            this.colorCount[c]--;
            this.colorCount[this.tempColor]++;
            this.pointColor[x][y] = this.tempColor;
          }
          index += 4;
        }
      };
      DrawingBoard.prototype._drawColPixel = function(startY, endY, x) {
        var index = 4 * (startY * this.width + x);
        for (var y = startY; y <= endY; ++y) {
          if (this.pointColor[x][y] != this.tempColor) {
            this.pixelColor[index] = this.tempR;
            this.pixelColor[index + 1] = this.tempG;
            this.pixelColor[index + 2] = this.tempB;
            this.pixelColor[index + 3] = this.tempA;
            var c = this.pointColor[x][y];
            this.colorCount[c]--;
            this.colorCount[this.tempColor]++;
            this.pointColor[x][y] = this.tempColor;
          }
          index += 4 * this.width;
        }
      };
      DrawingBoard.prototype.convertToNumber = function(r, g, b, a) {
        void 0 === a && (a = 255);
        return (254 & r) << 23 | g << 16 | b << 8 | a;
      };
      DrawingBoard.prototype.convertToRGBA = function(color) {
        return {
          r: (4009754624 & color) >> 23,
          g: (16711680 & color) >> 16,
          b: (65280 & color) >> 8,
          a: 255 & color
        };
      };
      return DrawingBoard;
    }();
    exports.default = DrawingBoard;
    var Vec2 = function() {
      function Vec2(x, y) {
        void 0 === x && (x = 0);
        void 0 === y && (y = 0);
        this.x = x;
        this.y = y;
      }
      Vec2.prototype.set = function(p, y) {
        if ("number" === typeof p) {
          this.x = p;
          this.y = y;
        } else {
          this.x = p.x;
          this.y = p.y;
        }
      };
      return Vec2;
    }();
    cc._RF.pop();
  }, {} ],
  EnemyBrain: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "171c7GW9O5GoYrHHcDhd4jQ", "EnemyBrain");
    "use strict";
    cc.Class({
      extends: require("Brain"),
      properties: {
        rigidBody: cc.RigidBody
      },
      start: function start() {
        var _this = this;
        this.node.on("setEnemyData", function(data) {
          _this.node.name = data.name;
          _this.attack = data.attack;
          _this.speed = data.speed;
          0 === _this.speed && (_this.rigidBody.type = cc.RigidBodyType.Static);
          _this.totalHp = data.hpMax;
          _this.currentHp = data.hpMax;
          _this.scheduleOnce(function() {
            _this._inited = true;
          }, 0);
        });
        this.node.on("enemyAttack", function(heroContainer, index) {
          _this.playAnim("attack_2", 1);
        });
        this.moving = false;
        this.node.emit("buffReturn", "revive");
      },
      onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
        if (false === otherCollider.sensor && 0 === selfCollider.tag) {
          if (this.rigidBody.type === cc.RigidBodyType.Dynamic && !this.moving && "Roudan" !== otherCollider.node.group) {
            this.moving = true;
            this.bubble({
              eventName: "start"
            });
          }
          var worldManifold = contact.getWorldManifold();
          "Wall" !== otherCollider.node.group && otherCollider.node.name !== contact.colliderA.node.name || this.bubble({
            eventName: "spark",
            extData: {
              worldManifold: worldManifold.points[0]
            }
          });
        }
      },
      onEndContact: function onEndContact(contact, selfCollider, otherCollider) {
        false === otherCollider.sensor && 0 === selfCollider.tag && this.rigidBody.type === cc.RigidBodyType.Dynamic && this.dealScaleX(this.rigidBody.linearVelocity.x);
      },
      update: function update(dt) {
        if (this.moving && this.rigidBody.linearVelocity.mag() < 80) {
          this.moving = false;
          this.bubble({
            eventName: "stop"
          });
          this.rigidBody.linearVelocity = cc.Vec2.ZERO;
          this.playAnim("idle", 0);
        }
      }
    });
    cc._RF.pop();
  }, {
    Brain: "Brain"
  } ],
  EnemySkin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0c233OBW/dAsp46/RBH5Erq", "EnemySkin");
    "use strict";
    cc.Class({
      extends: require("Skin"),
      properties: {
        bulletType: 0,
        bullet: cc.Prefab,
        canRemoveTarget: true
      },
      Init: function Init() {
        var _this = this;
        var that = this;
        this.node.parent.on("chaofeng", function(source) {
          that.target = source;
          that.canRemoveTarget = false;
        });
        this.node.parent.on("setEnemyData", function(data) {
          that.attack = data.attack;
        });
        this.node.parent.on("enemyAttack", function(heroContainer, index) {
          that.index = index;
          if (!that.target) {
            var min = {
              dis: 2e4,
              index: null
            };
            heroContainer.children.forEach(function(hero, index) {
              var distance = hero.position.sub(that.node.parent.position).mag();
              if (distance < min.dis) {
                min.dis = distance;
                min.index = index;
              }
            });
            that.target = heroContainer.children[min.index];
            that.node.parent.emit("setScaleX", Math.sign(that.target.position.x - that.node.parent.position.x));
          }
        });
        this.dragonBone.on(dragonBones.EventObject.FRAME_EVENT, function(event) {
          console.log("\u5e27\u4e8b\u4ef6:" + event.name, event.data);
          if ("attack" === event.name) {
            var bullet = cc.instantiate(_this.bullet);
            var dis = _this.target.position.sub(_this.node.parent.position);
            var vec = dis.normalize();
            switch (_this.bulletType) {
             case 0:
              bullet.position = _this.node.parent.position;
              bullet.angle = Math.floor(180 * cc.v2(0, 1).signAngle(vec) / Math.PI);
              break;

             case 1:
              if (!event.data) {
                bullet.position = _this.target.position.sub(vec.mul(80));
                bullet.angle = Math.floor(180 * cc.v2(0, -1).signAngle(vec) / Math.PI);
              } else {
                bullet.position = _this.target.position;
                bullet.angle = event.data.ints[0];
              }
            }
            bullet.parent = _this.node.parent.parent.parent;
            var data = {
              attack: _this.attack,
              vec: vec,
              source: _this.node.parent,
              speed: 2e3
            };
            bullet.emit("fire", data);
          }
        });
        this.dragonBone.on(dragonBones.EventObject.COMPLETE, function(event) {
          switch (_this.dragonBone.animationName) {
           case "idle":
            break;

           case "attack":
           case "attack_2":
            _this.canRemoveTarget && (_this.target = null);
            _this.node.parent.emit("checkDamageBuff");
            _this.dragonBone.playAnimation("idle", 0);
            break;

           case "die":
            _this.scheduleOnce(function() {
              _this.node.parent.destroy();
            }, 0);
            break;

           default:
            _this.dragonBone.playAnimation("idle", 0);
          }
        }, this);
      }
    });
    cc._RF.pop();
  }, {
    Skin: "Skin"
  } ],
  EnumUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c0967gbR3dMcbkSIeGpt59T", "EnumUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EnumUtils = void 0;
    var EnumUtils = function() {
      function EnumUtils() {}
      EnumUtils.getNamesAndValues = function(e) {
        return this.getNames(e).map(function(_name) {
          return {
            name: _name,
            value: e[_name]
          };
        });
      };
      EnumUtils.getNames = function(e) {
        return this.getObjectValues(e).filter(function(v) {
          return "string" === typeof v;
        });
      };
      EnumUtils.getValues = function(e) {
        return this.getObjectValues(e).filter(function(v) {
          return "number" === typeof v;
        });
      };
      EnumUtils.getObjectValues = function(e) {
        return Object.keys(e).map(function(k) {
          return e[k];
        });
      };
      return EnumUtils;
    }();
    exports.EnumUtils = EnumUtils;
    cc._RF.pop();
  }, {} ],
  EventCenter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "15cf5C/OS9IyY5TeN5ujTW/", "EventCenter");
    "use strict";
    var __spreadArrays = this && this.__spreadArrays || function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
      k++) r[k] = a[j];
      return r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EventCenter = exports.EventInfo = void 0;
    var Pool_1 = require("../Common/Utils/Pool");
    var EventInfo = function() {
      function EventInfo() {}
      EventInfo.prototype.free = function() {
        this.callback = null;
        this.target = null;
        this.once = false;
      };
      EventInfo.prototype.init = function(callback, target, once) {
        this.callback = callback;
        this.target = target;
        this.once = once;
      };
      return EventInfo;
    }();
    exports.EventInfo = EventInfo;
    var RemoveCommand = function() {
      function RemoveCommand(eventName, callback, targetId) {
        this.eventName = eventName;
        this.callback = callback;
        this.targetId = targetId;
      }
      return RemoveCommand;
    }();
    var idSeed = 1;
    var EventCenter = function() {
      function EventCenter() {}
      EventCenter.on = function(eventName, callback, target, once) {
        void 0 === target && (target = void 0);
        void 0 === once && (once = false);
        target = target || this;
        var targetId = target["uuid"] || target["id"];
        void 0 === targetId && (target["uuid"] = targetId = "" + idSeed++);
        this.onById(eventName, targetId, target, callback, once);
      };
      EventCenter.once = function(eventName, callback, target) {
        void 0 === target && (target = void 0);
        this.on(eventName, callback, target, true);
      };
      EventCenter.onById = function(eventName, targetId, target, cb, once) {
        var collection = this._listeners[eventName];
        collection || (collection = this._listeners[eventName] = {});
        var events = collection[targetId];
        events || (events = collection[targetId] = []);
        var eventInfo = this._eventPool.alloc();
        eventInfo.init(cb, target, once);
        events.push(eventInfo);
      };
      EventCenter.off = function(eventName, callback, target) {
        void 0 === target && (target = void 0);
        target = target || this;
        var targetId = target["uuid"] || target["id"];
        if (!targetId) return;
        this.offById(eventName, callback, targetId);
      };
      EventCenter.targetOff = function(target) {
        target = target || this;
        var targetId = target["uuid"] || target["id"];
        if (!targetId) return;
        for (var event in this._listeners) {
          var collection = this._listeners[event];
          void 0 !== collection[targetId] && delete collection[targetId];
        }
      };
      EventCenter.offById = function(eventName, callback, targetId) {
        if (this._dispatching > 0) {
          var cmd = new RemoveCommand(eventName, callback, targetId);
          this._removeCommands.push(cmd);
        } else this.doOff(eventName, callback, targetId);
      };
      EventCenter.doOff = function(eventName, callback, targetId) {
        var collection = this._listeners[eventName];
        if (!collection) return;
        var events = collection[targetId];
        if (!events) return;
        for (var i = events.length - 1; i >= 0; i--) events[i].callback === callback && events.splice(i, 1);
        if (0 === events.length) {
          collection[targetId] = null;
          delete collection[targetId];
        }
      };
      EventCenter.doRemoveCommands = function() {
        if (0 !== this._dispatching) return;
        for (var _i = 0, _a = this._removeCommands; _i < _a.length; _i++) {
          var cmd = _a[_i];
          this.doOff(cmd.eventName, cmd.callback, cmd.targetId);
        }
        this._removeCommands.length = 0;
      };
      EventCenter.emit = function(eventName) {
        var _a;
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) param[_i - 1] = arguments[_i];
        var collection = this._listeners[eventName];
        if (!collection) return false;
        this._dispatching++;
        for (var targetId in collection) for (var _b = 0, _c = collection[targetId]; _b < _c.length; _b++) {
          var eventInfo = _c[_b];
          (_a = eventInfo.callback).call.apply(_a, __spreadArrays([ eventInfo.target ], param));
          if (eventInfo.once) {
            var cmd = new RemoveCommand(eventName, eventInfo.callback, targetId);
            this._removeCommands.push(cmd);
          }
        }
        this._dispatching--;
        this.doRemoveCommands();
      };
      EventCenter._listeners = cc.js.createMap();
      EventCenter._dispatching = 0;
      EventCenter._removeCommands = [];
      EventCenter._eventPool = new Pool_1.Pool(function() {
        return new EventInfo();
      }, 10);
      return EventCenter;
    }();
    exports.EventCenter = EventCenter;
    cc._RF.pop();
  }, {
    "../Common/Utils/Pool": "Pool"
  } ],
  EventType: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d91c3NJBEVLOImFlZf1j8Q7", "EventType");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EventType = void 0;
    var EventType;
    (function(EventType) {
      EventType["GameShow"] = "GameShow";
      EventType["GameHide"] = "GameHide";
    })(EventType = exports.EventType || (exports.EventType = {}));
    cc._RF.pop();
  }, {} ],
  FrameType: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bc241nOtElHZZbltVn2FBox", "FrameType");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MaskType = void 0;
    var SysDefine_1 = require("./config/SysDefine");
    var MaskType = function() {
      function MaskType(opacity, ClickMaskClose, IsEasing, EasingTime) {
        void 0 === opacity && (opacity = SysDefine_1.ModalOpacity.OpacityHalf);
        void 0 === ClickMaskClose && (ClickMaskClose = false);
        void 0 === IsEasing && (IsEasing = true);
        void 0 === EasingTime && (EasingTime = .2);
        this.opacity = SysDefine_1.ModalOpacity.OpacityHalf;
        this.clickMaskClose = false;
        this.isEasing = true;
        this.easingTime = .2;
        this.opacity = opacity;
        this.clickMaskClose = ClickMaskClose;
        this.isEasing = IsEasing;
        this.easingTime = EasingTime;
      }
      return MaskType;
    }();
    exports.MaskType = MaskType;
    cc._RF.pop();
  }, {
    "./config/SysDefine": "SysDefine"
  } ],
  GameConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f46b13WB51JHaffBN5ie56i", "GameConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameConfig = function() {
      function GameConfig() {}
      Object.defineProperty(GameConfig, "debugUserId", {
        get: function() {
          return this._debugUserId;
        },
        enumerable: false,
        configurable: true
      });
      GameConfig.gameId = "";
      GameConfig.version = "0.0.1";
      GameConfig._debugUserId = "";
      return GameConfig;
    }();
    exports.default = GameConfig;
    cc._RF.pop();
  }, {} ],
  GameManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e015dr1SvBDQp2a7lPKkiIo", "GameManager");
    "use strict";
    var shakeComp = require("shake");
    cc.Class({
      extends: cc.Component,
      properties: {
        input: cc.Node,
        currentHero: cc.Node,
        heroContainer: cc.Node,
        enemyContainer: cc.Node,
        smokeParent: cc.Node,
        initPositions: [ cc.Vec2 ],
        enemyPositions: [ cc.Vec2 ],
        currentIndex: 0,
        enemyIndex: 0,
        skill2Toggle: cc.Toggle,
        camera: cc.Camera,
        _state: "action"
      },
      onLoad: function onLoad() {
        var _this = this;
        this.testHeroData = [ {
          name: "tangseng",
          speed: 12,
          attack: 80,
          hpMax: 440,
          defense: 0,
          skill1Type: 3
        }, {
          name: "wukong",
          speed: 15,
          attack: 150,
          hpMax: 560,
          defense: 1,
          skill1Type: 1
        }, {
          name: "honghaier",
          speed: 20,
          attack: 100,
          hpMax: 540,
          defense: 1,
          skill1Type: 4
        } ];
        this.testEnemyData = [ {
          name: "niumowang",
          speed: 0,
          attack: 100,
          hpMax: 1e4,
          isBoss: true
        }, {
          name: "shizi",
          speed: 10,
          attack: 50,
          hpMax: 3e3,
          isBoss: false
        }, {
          name: "lang",
          speed: 10,
          attack: 20,
          hpMax: 2500,
          isBoss: false
        } ];
        var savedData = cc.sys.localStorage.getItem("teamData");
        if (void 0 == savedData || "NaN" == savedData || "" == savedData || null == savedData || "[]" == savedData) {
          console.log("\u6ca1\u6709\u82f1\u96c4\u5b58\u6863");
          this.loadPrefabs(this.testHeroData, this.testEnemyData);
        } else {
          console.log("\u52a0\u8f7d\u82f1\u96c4\u5b58\u6863");
          var loadData = JSON.parse(savedData);
          cc.resources.load("data/heros", cc.JsonAsset, function(err, asset) {
            if (err) {
              console.info(err);
              return;
            }
            var heroData = [];
            cc.resources.load("data/skills", cc.JsonAsset, function(error, skillAsset) {
              if (error) {
                console.info(error);
                return;
              }
              loadData.forEach(function(data) {
                var detail = JSON.parse(JSON.stringify(asset.json.find(function(item) {
                  return item.id === data.name;
                })));
                if (void 0 === detail.attack) console.warn("\u82f1\u96c4" + data.name + "\u7684\u6218\u6597\u6570\u636e\u52a0\u8f7d\u5931\u8d25,\u8bf7\u68c0\u67e5\u95ee\u9898"); else {
                  detail.attack = detail.attack[data.star];
                  detail.defense = detail.defense[data.star];
                  detail.hpMax = detail.hpMax[data.star];
                  detail.rageSpeed = detail.rageSpeed[data.star];
                  switch (data.star) {
                   case 0:
                    detail.skills.pop();

                   case 1:
                   case 2:
                    detail.skills.pop();

                   case 3:
                   case 4:
                    detail.skills.pop();
                    break;

                   case 5:
                    detail.skills[detail.finalSkillReplaceIndex] = detail.skills.pop();
                  }
                  var _loop = function _loop(i) {
                    detail.skills[i] = skillAsset.json.find(function(item) {
                      return item.id === detail.skills[i];
                    });
                  };
                  for (var i = 0; i < detail.skills.length; i++) _loop(i);
                  detail.level = data.level;
                  detail.star = data.star;
                  console.info("detail\n", detail);
                  heroData.push(detail);
                }
              });
              _this.loadPrefabs(heroData, _this.testEnemyData);
            });
          });
        }
      },
      loadPrefabs: function loadPrefabs(heroData, enemyData) {
        var that = this;
        cc.resources.load("Prefabs/smoke", cc.Prefab, function(er, smoke) {
          if (er) return;
          cc.resources.load("Prefabs/hero", cc.Prefab, function(error, prefab) {
            if (error) return;
            heroData.forEach(function(data, index) {
              var hero = cc.instantiate(prefab);
              hero.position = that.initPositions[index];
              hero.parent = that.heroContainer;
              cc.resources.load("Prefabs/" + data.id, cc.Prefab, function(e, bone) {
                if (e) return;
                var dragon = cc.instantiate(bone);
                dragon.parent = hero;
                dragon.addComponent(shakeComp);
                that.scheduleOnce(function() {
                  hero.emit("setHeroData", data);
                  hero.emit("setSmoke", that.smokeParent);
                }, .01);
              });
            });
          });
          enemyData.forEach(function(data, index) {
            var type = data.isBoss ? "boss" : "enemy";
            cc.resources.load("Prefabs/" + type, cc.Prefab, function(error, prefab) {
              if (error) {
                console.log("\u52a0\u8f7d" + type + "\u5931\u8d25");
                return;
              }
              var enemy = cc.instantiate(prefab);
              enemy.position = that.enemyPositions[index];
              enemy.parent = that.enemyContainer;
              cc.resources.load("Prefabs/" + data.name, cc.Prefab, function(e, bone) {
                if (e) return;
                var dragon = cc.instantiate(bone);
                dragon.parent = enemy;
                that.scheduleOnce(function() {
                  enemy.emit("setEnemyData", data);
                  enemy.emit("setSmoke", that.smokeParent);
                }, .1);
              });
            });
          });
        });
        cc.resources.load("Prefabs/spark", cc.Prefab, function(e, spark) {
          if (e) return;
          that._spark = spark;
        });
      },
      start: function start() {
        var _this2 = this;
        var that = this;
        this.node.on("spark", function(event) {
          var data = event.getUserData();
          var spark = cc.instantiate(that._spark);
          spark.position = that.node.convertToNodeSpaceAR(data.worldManifold);
          spark.parent = that.node;
          setTimeout(function() {
            spark.destroy();
          }, 1e3);
        });
        this.node.on("start", function(event) {
          if ("action" === that._state) {
            var index = that.waitList.indexOf(event.target.uuid);
            -1 === index && that.waitList.push(event.target.uuid);
          }
        });
        this.node.on("stop", function(event) {
          if ("action" === that._state) switch (that.waitList.length) {
           case 0:
            console.info("\u7a7a\u4e86");
            break;

           case 1:
            if (that.waitList[0] === event.target.uuid) {
              that.waitList.pop();
              that.currentIndex++;
              that.currentHero.emit("actionEnd");
              that._state = "wait";
            } else console.info("\u9a6c\u8001\u5e08\u53d1\u751f\u751a\u4e48\u4e8b\u4e86");
            break;

           default:
            var index = that.waitList.indexOf(event.target.uuid);
            -1 !== index ? that.waitList.splice(index, 1) : console.info("\u6211\u88c2\u5f00\u4e86");
          }
        });
        this.node.on("nextHero", function() {
          that.nextHero(that.currentIndex);
        });
        this.node.on("nextEnemy", function() {
          that.nextEnemy(that.enemyIndex);
        });
        this.node.on("bulletStart", function(uuid) {
          var index = _this2.bulletList.indexOf(uuid);
          -1 === index && that.bulletList.push(uuid);
        });
        this.node.on("bulletEnd", function(uuid) {
          switch (that.bulletList.length) {
           case 0:
            console.info("\u5b50\u5f39\u7a7a\u4e86\n", uuid);
            break;

           case 1:
            if (that.bulletList[0] === uuid) {
              that.bulletList.pop();
              that.enemyIndex++;
              that.scheduleOnce(function() {
                return that.nextEnemy(that.enemyIndex);
              }, 0);
            } else console.info("\u6211\u5927\u610f\u4e86\uff0c\u6ca1\u6709\u95ea\n", uuid);
            break;

           default:
            var index = that.bulletList.indexOf(uuid);
            -1 !== index ? that.bulletList.splice(index, 1) : console.info("\u5b50\u5f39\u6ede\u9500\uff0c\u5e2e\u5e2e\u6211\u4eec\n", uuid);
          }
        });
        this.node.on("die", function() {
          that.scheduleOnce(function() {
            that.heroContainer.childrenCount > 0 && that.enemyContainer.childrenCount > 0 ? console.log("\u8fd8\u6ca1\u7ed3\u675f,", that.heroContainer.childrenCount, that.enemyContainer.childrenCount) : 0 === that.heroContainer.childrenCount ? that.lose() : that.win();
          }, .1);
        });
        this.scheduleOnce(function() {
          _this2.waitList = [];
          _this2.bulletList = [];
          _this2.currentIndex = 0;
          _this2.enemyIndex = 0;
          _this2.nextHero(_this2.currentIndex);
        }, 1);
      },
      nextHero: function nextHero(index) {
        var _this3 = this;
        this.checkAlive().then(function() {
          _this3._state = "action";
          if (index >= _this3.heroContainer.childrenCount) {
            console.log("\u6211\u65b9\u56de\u5408\u7ed3\u675f");
            _this3.enemyIndex = 0;
            _this3.scheduleOnce(function() {
              _this3.nextEnemy(_this3.enemyIndex);
            }, 0);
          } else {
            _this3.currentHero = _this3.heroContainer.children[index];
            _this3.currentHero || (_this3.currentHero = _this3.heroContainer.children[index - 1]);
            _this3.skill2Toggle.interactable = true;
            _this3.skill2Toggle.isChecked = true;
            _this3.currentHero.once("shoot", function() {
              _this3.skill2Toggle.interactable && (_this3.skill2Toggle.interactable = false);
            });
            _this3.selectHero(_this3.currentHero);
          }
        })["catch"](function() {
          0 === _this3.heroContainer.childrenCount ? _this3.lose() : _this3.win();
        });
      },
      nextEnemy: function nextEnemy(index) {
        var _this4 = this;
        this.checkAlive().then(function() {
          if (index >= _this4.enemyContainer.childrenCount) {
            console.log("\u654c\u65b9\u56de\u5408\u7ed3\u675f");
            _this4.currentIndex = 0;
            _this4.scheduleOnce(function() {
              _this4.nextHero(_this4.currentIndex);
            }, 0);
          } else _this4.scheduleOnce(function() {
            var enemy = _this4.enemyContainer.children[index];
            enemy || (enemy = _this4.enemyContainer.children[index - 1]);
            enemy.emit("enemyAttack", _this4.heroContainer, index);
          }, 1);
        })["catch"](function() {
          0 === _this4.heroContainer.childrenCount ? _this4.lose() : _this4.win();
        });
      },
      checkAlive: function checkAlive() {
        var _this5 = this;
        return new Promise(function(resolve, reject) {
          _this5.scheduleOnce(function() {
            _this5.enemyContainer.childrenCount > 0 && _this5.heroContainer.childrenCount > 0 ? resolve() : reject();
          }, 1);
        });
      },
      skill2ToggleFire: function skill2ToggleFire() {
        var _this6 = this;
        !this.currentHero || this.scheduleOnce(function() {
          _this6.currentHero.once("camShake", function() {
            return _this6.node.emit("shake", "in", "limited");
          });
          _this6.currentHero.emit("skill2Toggle", !_this6.skill2Toggle.isChecked);
          _this6.skill2Toggle.interactable = false;
          _this6.node.emit("skill2Count", 1);
        }, 0);
      },
      selectHero: function selectHero(hero) {
        hero.emit("selected");
        this.input.emit("initHero", hero);
      },
      win: function win() {
        console.log("\u4f60\u8d62\u4e86");
        this.node.emit("end", true);
      },
      lose: function lose() {
        console.log("\u4f60\u8f93\u4e86");
        this.node.emit("end", false);
      }
    });
    cc._RF.pop();
  }, {
    shake: "shake"
  } ],
  Game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "30ba5eNytVM3pckqs/AGbqm", "Game");
    "use strict";
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ConfigMgr_1 = require("./Manager/ConfigMgr");
    var PlayerMgr_1 = require("./Manager/PlayerMgr");
    var Game = function() {
      function Game() {
        this.inited = false;
        this.configMgr = null;
        this.playerMgr = null;
      }
      Game.prototype.init = function(uiRoot) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.configMgr = new ConfigMgr_1.default();
              this.playerMgr = new PlayerMgr_1.default();
              return [ 4, this.configMgr.loadConfigs() ];

             case 1:
              _a.sent();
              this.inited = true;
              return [ 2 ];
            }
          });
        });
      };
      Game.prototype.onGameShow = function() {};
      Game.prototype.onGameHide = function() {};
      Game.prototype.update = function(dt) {
        if (!this.inited) return;
      };
      return Game;
    }();
    exports.default = new Game();
    cc._RF.pop();
  }, {
    "./Manager/ConfigMgr": "ConfigMgr",
    "./Manager/PlayerMgr": "PlayerMgr"
  } ],
  GlobalHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "97861Bw45RARLIDvaYH8CIV", "GlobalHelper");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GlobalHelper = function() {
      function GlobalHelper() {}
      GlobalHelper.Register = function(name, inst) {
        GlobalHelper[name] = inst;
      };
      GlobalHelper.Get = function(name) {
        return GlobalHelper._globalMap[name] ? GlobalHelper._globalMap[name] : void 0;
      };
      GlobalHelper._globalMap = {};
      return GlobalHelper;
    }();
    exports.default = GlobalHelper;
    window["GlobalHelper"] = GlobalHelper;
    cc._RF.pop();
  }, {} ],
  GridScrollList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1cacdUiKzNJIJRK/5ihZG1M", "GridScrollList");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GridScrollList = void 0;
    var ScrollViewHelper_1 = require("../../Common/Components/ScrollViewHelper");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RowDirection;
    (function(RowDirection) {
      RowDirection[RowDirection["LeftToRight"] = 0] = "LeftToRight";
      RowDirection[RowDirection["TopToBottom"] = 1] = "TopToBottom";
    })(RowDirection || (RowDirection = {}));
    var GridScrollList = function(_super) {
      __extends(GridScrollList, _super);
      function GridScrollList() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.allProxy = [];
        _this.scrollHelper = null;
        _this.rowDirection = RowDirection.LeftToRight;
        _this.colSpace = 10;
        _this.rowSpace = 10;
        _this.colCount = 3;
        _this.margin = 10;
        return _this;
      }
      GridScrollList.prototype.doLayout = function() {
        this._layoutItems();
      };
      GridScrollList.prototype._layoutItems = function() {
        this.scrollHelper.clearData();
        var data = this.allProxy;
        var elemSize = data.length ? data[0].region.size : cc.size(0, 0);
        var xSpace = this.colSpace;
        var ySpace = this.rowSpace;
        var colCount = this.colCount;
        var viewSize = this.scrollHelper.scrollView.node.getContentSize();
        if (this.rowDirection == RowDirection.TopToBottom) {
          var temp = viewSize.width;
          viewSize.width = viewSize.height;
          viewSize.height = temp;
          temp = elemSize.width;
          elemSize.width = elemSize.height;
          elemSize.height = temp;
        }
        var yMargin = this.margin;
        var xMargin = (viewSize.width - (colCount * elemSize.width + (colCount - 1) * xSpace)) / 2;
        var x = xMargin;
        var y = -yMargin + ySpace + elemSize.height;
        var dy = -ySpace - elemSize.height;
        var dx = xSpace + elemSize.width;
        if (this.rowDirection == RowDirection.TopToBottom) {
          dy = ySpace + elemSize.height;
          dx = -xSpace - elemSize.width;
          y = yMargin - dy;
        }
        for (var i = 0; i < data.length; i++) {
          x += dx;
          if (i % colCount == 0) {
            y += dy;
            x = xMargin;
          }
          var proxy = data[i];
          this.rowDirection == RowDirection.LeftToRight ? proxy.region.origin = cc.v2(x, y - elemSize.height) : proxy.region.origin = cc.v2(y, x - elemSize.height);
          this.scrollHelper.addData(proxy);
        }
        this.rowDirection == RowDirection.LeftToRight ? this.scrollHelper.scrollView.content.setContentSize(viewSize.width, -y + elemSize.height + yMargin) : this.scrollHelper.scrollView.content.setContentSize(y + elemSize.height + yMargin, viewSize.width);
      };
      __decorate([ property(ScrollViewHelper_1.ScrollViewHelper) ], GridScrollList.prototype, "scrollHelper", void 0);
      __decorate([ property({
        type: cc.Enum(RowDirection)
      }) ], GridScrollList.prototype, "rowDirection", void 0);
      __decorate([ property() ], GridScrollList.prototype, "colSpace", void 0);
      __decorate([ property() ], GridScrollList.prototype, "rowSpace", void 0);
      __decorate([ property() ], GridScrollList.prototype, "colCount", void 0);
      __decorate([ property() ], GridScrollList.prototype, "margin", void 0);
      GridScrollList = __decorate([ ccclass ], GridScrollList);
      return GridScrollList;
    }(cc.Component);
    exports.GridScrollList = GridScrollList;
    cc._RF.pop();
  }, {
    "../../Common/Components/ScrollViewHelper": "ScrollViewHelper"
  } ],
  HealAll: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f468aKKE/xH0an6WYFDOVHw", "HealAll");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var HealAll = function(_super) {
      __extends(HealAll, _super);
      function HealAll() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HealAll.prototype.onLoad = function() {
        var _this = this;
        this.node.once("fire", function(data) {
          var heroParent = cc.find("Canvas/HeroContainer");
          heroParent.children.forEach(function(hero) {
            hero.emit("healReturn", data.attack);
          });
          _this.node.destroy();
        });
      };
      HealAll.prototype.start = function() {};
      HealAll = __decorate([ ccclass ], HealAll);
      return HealAll;
    }(cc.Component);
    exports.default = HealAll;
    cc._RF.pop();
  }, {} ],
  HeroSkin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6cc4fNdiJNIiKASg2APntvR", "HeroSkin");
    "use strict";
    cc.Class({
      extends: require("Skin"),
      properties: {
        skill1: cc.Prefab,
        skill2: cc.Prefab
      },
      Init: function Init() {
        var _this = this;
        this.node.parent.on("skill1", function(type, attack, target) {
          switch (type) {
           case 1:
            if (!!_this.skill1) {
              var skill1 = cc.instantiate(_this.skill1);
              skill1.position = target.position;
              _this.scheduleOnce(function() {
                skill1.parent = _this.node.parent.parent.parent;
                skill1.emit("fire", target.position, _this.node.parent.position, attack);
              }, 0);
            }
            break;

           case 3:
            target.emit("healReturn", attack);
            break;

           case 4:
            if (!!_this.skill1) {
              var _skill = cc.instantiate(_this.skill1);
              _skill.position = _this.node.parent.position;
              _this.scheduleOnce(function() {
                _skill.parent = _this.node.parent.parent.parent;
                _skill.emit("fire", _this.node.parent.position, _this.node.parent.position, attack);
              }, 0);
            }
          }
        });
        this.node.parent.on("skill2", function(type, data, attack) {
          if (!!_this.skill2) if ("wukong" === _this.node.parent.name) {
            var rotations = [ 30 + data.rotation, -30 + data.rotation, 60 + data.rotation, -60 + data.rotation, 90 + data.rotation, -90 + data.rotation, -180 + data.rotation ];
            rotations.forEach(function(rot) {
              var skill2 = cc.instantiate(_this.skill2);
              skill2.position = _this.node.parent.position.add(cc.v2(Math.sin(rot * Math.PI / 180), Math.cos(rot * Math.PI / 180)).mul(200));
              _this.scheduleOnce(function() {
                skill2.parent = _this.node.parent.parent.parent;
                var speedVector = cc.v2(Math.sin(rot * Math.PI / 180), Math.cos(rot * Math.PI / 180));
                console.log("mew", speedVector);
                skill2.emit("fire", skill2.position.add(speedVector), skill2.position, attack);
              }, 0);
            });
          } else {
            var skill2 = cc.instantiate(_this.skill2);
            skill2.position = _this.node.parent.position;
            _this.scheduleOnce(function() {
              !data || 2 === type || (skill2.angle += -data.rotation);
              skill2.parent = _this.node.parent.parent.parent;
              if (3 === type) {
                var speedVector = cc.v2(Math.sin(data.rotation * Math.PI / 180), Math.cos(data.rotation * Math.PI / 180));
                skill2.emit("fire", _this.node.parent.position.add(speedVector), _this.node.parent.position, attack);
              } else skill2.emit("fire", _this.node.parent.position, _this.node.parent.position, attack);
            }, 0);
          }
        });
        this.dragonBone.on(dragonBones.EventObject.COMPLETE, function(event) {
          if (event.type === dragonBones.EventObject.COMPLETE) {
            console.log(_this.dragonBone.animationName);
            switch (_this.dragonBone.animationName) {
             case "idle":
             case "attack":
              break;

             case "select":
              _this.dragonBone.playAnimation("aim", 0);
              break;

             default:
              _this.dragonBone.playAnimation("idle", 0);
            }
          }
        }, this);
      }
    });
    cc._RF.pop();
  }, {
    Skin: "Skin"
  } ],
  Hero: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "18e1fNFnKRFp51Kxq5+A4A/", "Hero");
    "use strict";
    cc.Class({
      extends: require("Brain"),
      properties: {
        speed: 10,
        rigidBody: cc.RigidBody,
        halo: cc.Node,
        skill1Type: 1,
        skill1Fired: false,
        smokePrefab: cc.Prefab,
        skill2Type: 1,
        skill2Fired: false,
        skill2Board: cc.Prefab,
        skill3: cc.Prefab
      },
      start: function start() {
        var _this = this;
        this.node.on("setHeroData", function(data) {
          _this.node.name = data.name;
          _this.attack = data.attack;
          _this.rageSpeed = data.rageSpeed;
          _this.totalHp = data.hpMax;
          _this.currentHp = data.hpMax;
          _this.defense = data.defense;
          _this.loadSkill(data.skills);
          _this.scheduleOnce(function() {
            _this._inited = true;
          }, 0);
        });
        this.node.on("setSmoke", function(parent) {
          _this.smokeParent = parent;
        });
        this.node.on("skill2Toggle", function(isChecked) {
          if (isChecked) {
            var index = _this.skills.findIndex(function(skill) {
              return !Boolean(skill.isPassive);
            });
            if (-1 === index) console.log("\u3084\u3070\u3044"); else {
              _this.skills[index].fired = false;
              _this.node.emit("chooseToggle", {});
            }
          }
        });
        this.node.on("shoot", function(data) {
          _this._shootData = data;
          _this.halo.active = false;
          var index = _this.skills.findIndex(function(skill) {
            return "unleashInput" === skill.trigger;
          });
          if (-1 === index || _this.skills[index].fired) {
            console.log("\u3084\u3070\u3044");
            _this.shoot(data);
          } else {
            _this.node.emit("unleashInput", data);
            _this.skills[index].isPassive || _this.scheduleOnce(function() {
              _this.shoot(data);
            }, 3);
          }
        });
        this.node.on("selected", function() {
          _this.playAnim("select", 1);
          _this.halo.active = true;
          for (var i = 0; i < _this.skills.length; i++) !_this.skills[i].isPassive || (_this.skills[i].fired = false);
          _this.node.emit("beforeMove", {});
        });
        this.node.on("actionEnd", function() {
          _this.onActionEnd();
        });
        this.moving = false;
        true;
        this.rougelikeSkillUnlocked = true;
      },
      onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
        if (false === otherCollider.sensor && 0 === selfCollider.tag) {
          if (!this.moving) {
            this.moving = true;
            this.bubble({
              eventName: "start"
            });
          }
          this.playAnim("attack", 0);
          var worldManifold = contact.getWorldManifold();
          "Wall" !== otherCollider.node.group && otherCollider.node.name !== contact.colliderA.node.name || this.bubble({
            eventName: "spark",
            extData: {
              worldManifold: worldManifold.points[0]
            }
          });
        }
      },
      onEndContact: function onEndContact(contact, selfCollider, otherCollider) {
        if (false === otherCollider.sensor && 0 === selfCollider.tag) {
          this.dealScaleX(this.rigidBody.linearVelocity.x);
          var data = {};
          var vec = otherCollider.node.position.sub(selfCollider.node.position);
          data.rotation = -Math.floor(180 * cc.v2(0, 1).signAngle(vec) / Math.PI);
          data.target = otherCollider.node;
          switch (otherCollider.node.group) {
           case "Boss":
            otherCollider.node.emit("damageReturn", {
              attack: this.attack,
              source: this.node
            });
            this.lastContactEnemy = otherCollider.node;
            selfCollider.node.emit("contactEnemy", data);
            break;

           case "Enemy":
            otherCollider.node.emit("damageReturn", {
              attack: this.attack,
              source: this.node
            });
            this.lastContactEnemy = otherCollider.node;
            selfCollider.node.emit("contactEnemy", data);
            selfCollider.node.emit("contactNotBoss", data);
            break;

           case "Hero":
            selfCollider.node.emit("contactHero", data);
          }
        }
      },
      shoot: function shoot(data) {
        this.playAnim("attack", 0);
        this.rigidBody.linearDamping = 1;
        var speedVector = cc.v2(data.speed * Math.sin(data.rotation * Math.PI / 180), data.speed * Math.cos(data.rotation * Math.PI / 180));
        this.rigidBody.applyLinearImpulse(speedVector.mul(34.56 * this.rigidBody.getMass()), this.node.position);
        this.dealScaleX(speedVector.x);
        this.moving = true;
        this.bubble({
          eventName: "start"
        });
        this.smokeCount = 0;
      },
      onActionEnd: function onActionEnd() {
        var _this2 = this;
        this.node.emit("endMove", {});
        this.checkDamageBuff();
        this.scheduleOnce(function() {
          _this2.skills.forEach(function(skill) {
            skill.fired = true;
          });
          _this2.scheduleOnce(function() {
            return _this2.node.parent.parent.emit("nextHero");
          }, 1);
        }, 1);
      },
      loadSkill: function loadSkill(skills) {
        var _this3 = this;
        var that = this;
        skills.forEach(function(skill, index) {
          skill.fired = true;
          skill.bulletData.forEach(function(data) {
            "id" === data.name ? data.name = skill.id : 0 === String(data.name).indexOf("id") && (data.name = data.name.substring(2));
            cc.resources.load("skillPrefabs/" + data.name, cc.Prefab, function(err, prefab) {
              if (err) return;
              that[data.name + "Prefab"] = prefab;
            });
          });
          that.node.on(skill.trigger, function(callData) {
            if (0 === index && !that.rougelikeSkillUnlocked) return;
            if (true === that.skills[index].fired) return;
            if (skill.isPassive) that.callSkill(callData, index); else {
              var phy = cc.director.getPhysicsManager();
              skill.trigger.indexOf(false) && (phy.enabled = false);
              var board = cc.instantiate(that.skill2Board);
              board.parent = that.node.parent.parent;
              that.scheduleOnce(function() {
                board.destroy();
                "buff" !== skill.bulletType && that.node.emit("camShake");
                false === phy.enabled && (phy.enabled = true);
                that.callSkill(callData, index);
              }, 2.3);
            }
          });
        });
        this.skills = skills;
        this.scheduleOnce(function() {
          _this3.node.emit("startStage", {});
        }, 0);
      },
      callSkill: function callSkill(data, index) {
        var _this4 = this;
        var skill = this.skills[index];
        console.log(this.node.name + "\u53d1\u52a8\u4e86" + skill.skillName);
        skill.isMultPerShoot || (this.skills[index].fired = true);
        if (Math.random() < skill.buffChance) {
          console.log("buff\u6ce8\u518c");
          var _loop = function _loop(i) {
            var buffData = {
              type: skill.buffType[i],
              life: skill.buffLife[i],
              value: skill.buffValue.length === skill.buffTarget.length ? skill.buffValue[i] : skill.buffValue,
              attack: _this4.attack,
              tauntTarget: "fake" === skill.bulletType ? "fake" : _this4.node.uuid,
              bossBuff: Boolean(skill.bossBuff)
            };
            switch (skill.buffTarget[i]) {
             case "contactTarget":
              !data.target || data.target.emit("addBuff", JSON.parse(JSON.stringify(buffData)));
              break;

             case "source":
              !data.source || data.source.emit("addBuff", JSON.parse(JSON.stringify(buffData)));
              break;

             case "lastContactEnemy":
              !_this4.lastContactEnemy || _this4.lastContactEnemy.emit("addBuff", JSON.parse(JSON.stringify(buffData)));
              break;

             case "self":
              _this4.node.emit("addBuff", JSON.parse(JSON.stringify(buffData)));
              break;

             case "heroAll":
              var heroContainer = cc.find("Canvas/HeroContainer");
              !heroContainer || heroContainer.children.forEach(function(hero) {
                hero.emit("addBuff", JSON.parse(JSON.stringify(buffData)));
              });
              break;

             case "enemyAll":
              if ("fake" !== skill.bulletType) {
                var enemyContainer = cc.find("CanvasEnemyContainer");
                !enemyContainer || enemyContainer.children.forEach(function(enemy) {
                  enemy.emit("addBuff", JSON.parse(JSON.stringify(buffData)));
                });
                break;
              }

             case "contactHero":
             case "contactEnemy":
              _this4.node.once("daoguangInit", function(daoguang) {
                daoguang.emit("addBuff", JSON.parse(JSON.stringify(buffData)));
              });
            }
          };
          for (var i = 0; i < skill.buffTarget.length; i++) _loop(i);
        } else console.log("buff\u672a\u6ce8\u518c");
        skill.bulletData.forEach(function(datum) {
          if (!_this4[datum.name + "Prefab"]) console.log("\u4f46\u6b64\u6280\u80fd\u7684Prefab\u4e0d\u5b58\u5728,\u56e0\u6b64\u4ec0\u4e48\u4e5f\u6ca1\u6709\u53d1\u751f"); else {
            var bullet = cc.instantiate(_this4[datum.name + "Prefab"]);
            var rot = datum.rotation;
            !data.rotation || (rot += data.rotation);
            !skill.isRotate || (bullet.angle -= rot);
            var vec = cc.v3(Math.sin(rot * Math.PI / 180), Math.cos(rot * Math.PI / 180));
            switch (skill.startPos) {
             case "hero":
              bullet.position = _this4.node.position.add(bullet.position);
              break;

             case "rot":
              bullet.position = _this4.node.position.add(vec.mul(200)).add(bullet.position);
              break;

             case "center":
             case "none":
              bullet.position = cc.v2(0, 0).add(bullet.position);
              break;

             case "target":
              data.target ? bullet.position = data.target.position.add(bullet.position) : bullet.position = cc.v2(0, 0);
              break;

             case "random":
              var randX = 2 * (Math.random() - .5) * 450;
              var randY = 2 * (Math.random() - .5) * 850;
              bullet.position = cc.v2(randX, randY).add(bullet.position);
            }
            bullet.parent = _this4.node.parent.parent;
            "daoguang" !== skill.bulletType && "fake" !== skill.bulletType || _this4.node.emit("daoguangInit", bullet);
            var fireData = {
              attack: _this4.attack * skill.multDamage,
              rot: rot,
              speed: 0,
              source: _this4.node
            };
            switch (skill.speedType) {
             case "none":
              fireData.speed = 0;
              break;

             case "fixed":
              fireData.speed = 2e3;
              break;

             case "input":
              fireData.speed = 20 * data.speed;
            }
            "bullet" === skill.bulletType ? _this4.scheduleOnce(function() {
              return bullet.emit("fire", fireData);
            }, 0) : bullet.emit("fire", fireData);
          }
        });
      },
      update: function update(dt) {
        if (this.moving) if (this.rigidBody.linearVelocity.mag() < 80) {
          this.moving = false;
          0 == this.smokeCount;
          this.rigidBody.linearVelocity = cc.Vec2.ZERO;
          this.bubble({
            eventName: "stop"
          });
          this.playAnim("idle", 0);
        } else {
          this.smokeCount++;
          if (this.smokeCount % 5 === 0) {
            var smoke = cc.instantiate(this.smokePrefab);
            smoke.position = cc.v2(this.node.position.x, this.node.position.y);
            smoke.angle = -Math.floor(180 * cc.v2(0, 1).signAngle(cc.v2(this.rigidBody.linearVelocity.x, this.rigidBody.linearVelocity.y)) / Math.PI);
            smoke.parent = this.smokeParent;
            setTimeout(function() {
              smoke.destroy();
            }, 1e3);
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    Brain: "Brain"
  } ],
  Input: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a4ee4s09BlNTKzJdGWnNM+K", "Input");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        arrow: cc.Node,
        currentHero: cc.Node,
        mainCam: cc.Camera,
        maxDis: 200,
        minDis: 50,
        minArrowScale: .5,
        maxArrowScale: 2,
        ctx: cc.Graphics,
        ctx2: cc.Graphics,
        AIM_LINE_MAX_LENGTH: 2e3,
        _cur_length: 0
      },
      onLoad: function onLoad() {
        this.phy = cc.director.getPhysicsManager();
        this.phy.enabled = true;
        cc.macro.ENABLE_MULTI_TOUCH = false;
        console.log("user control onload");
        this.canTouch = false;
      },
      start: function start() {
        var _this = this;
        this.node.on("initHero", function(hero) {
          _this.currentHero = hero;
          _this.arrow.active = false;
          _this.startX = 0;
          _this.startY = 0;
          _this.rotation = 0;
          _this.speed = 0;
          _this.startShoot = false;
          _this.canTouch = true;
        });
        this.node.on(cc.Node.EventType.TOUCH_START, function(event) {
          if (!this.canTouch) return;
          false === this.startShoot && (this.arrow.scaleY = this.minArrowScale);
          this.startShoot = true;
          var pos = event.getLocation();
          this.startPoint = this.node.parent.convertToNodeSpaceAR(pos);
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function(event) {
          if (!this.canTouch) return;
          if (false == this.startShoot) return;
          this.updateArrow(event);
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function(event) {
          if (!this.canTouch) return;
          if (false == this.startShoot) return;
          this.arrow.active = false;
          this.ctx.clear();
          this.ctx2.clear();
          this.startShoot = false;
          if (this.speed <= this.minDis) {
            console.info(this.speed);
            return;
          }
          var data = {
            rotation: -this.rotation,
            speed: this.speed
          };
          this.currentHero.emit("shoot", data);
          this.canTouch = false;
        }, this);
      },
      updateArrow: function updateArrow(event) {
        this.arrow.setPosition(this.currentHero.position);
        this.ctx.clear();
        var location = event.getLocation();
        var point = this.node.parent.convertToNodeSpaceAR(location);
        var disX = this.startPoint.x - point.x;
        var disY = this.startPoint.y - point.y;
        this.rotation = Math.floor(180 * cc.v2(0, 1).signAngle(cc.v2(disX, disY)) / Math.PI);
        this.arrow.angle = this.rotation;
        this._cur_length = 0;
        var ray = cc.v2(Math.sin(-this.rotation * Math.PI / 180), Math.cos(this.rotation * Math.PI / 180));
        var startLocation = this.node.parent.convertToWorldSpaceAR(this.currentHero.position);
        this.drawRayCast(startLocation, ray, 0);
        this.ctx.stroke();
        var dis = Math.sqrt(Math.pow(disX, 2) + Math.pow(disY, 2));
        dis = dis > this.maxDis ? this.maxDis : dis;
        this.speed = Math.floor(dis);
        var per = this.speed / this.maxDis;
        this.arrow.scaleY = this.minArrowScale + per * (this.maxArrowScale - this.minArrowScale);
        this.speed >= this.minDis ? this.arrow.activeInHierarchy || (this.arrow.active = true) : this.arrow.active = false;
      },
      drawRayCast: function drawRayCast(startLocation, vector_dir, depth) {
        var left_length = this.AIM_LINE_MAX_LENGTH - this._cur_length;
        if (left_length <= 0) return;
        var endLocation = startLocation.add(vector_dir.mul(left_length));
        var results = this.phy.rayCast(startLocation, endLocation, cc.RayCastType.AllClosest);
        if (results.length > 0 && depth < 5) {
          var result = null;
          var distance = 1e6;
          for (var i = 0; i < results.length; i++) if (results[i].collider.node.name !== this.currentHero.name && results[i].collider.sensor) {
            var newDis = results[i].point.sub(startLocation).mag();
            if (newDis < distance) {
              distance = newDis;
              result = results[i];
            }
          }
          if (result) {
            var point = result.point;
            this.drawAimLine(startLocation, point);
            var line_length = point.sub(startLocation).mag();
            this._cur_length += line_length;
            var vector_n = result.normal;
            var vector_i = vector_dir;
            var vector_r = cc.v2();
            switch (result.collider.body.type) {
             case cc.RigidBodyType.Static:
              vector_r = vector_i.sub(vector_n.mul(2 * vector_i.dot(vector_n)));
              break;

             case cc.RigidBodyType.Dynamic:
              vector_r = vector_i.sub(vector_i.project(vector_n.neg())).normalize();
            }
            this.drawRayCast(point, vector_r, depth + 1);
          } else this.drawAimLine(startLocation, endLocation);
        } else this.drawAimLine(startLocation, endLocation);
      },
      drawAimLine: function drawAimLine(startLocation, endLocation) {
        var graphic_startLocation = this.node.convertToNodeSpaceAR(startLocation);
        this.ctx.moveTo(graphic_startLocation.x, graphic_startLocation.y);
        var delta = 20;
        var vector_dir = endLocation.sub(startLocation);
        var total_count = Math.round(vector_dir.mag() / delta);
        vector_dir.normalizeSelf().mulSelf(delta);
        for (var index = 0; index < total_count; index++) {
          graphic_startLocation.addSelf(vector_dir);
          this.ctx.circle(graphic_startLocation.x, graphic_startLocation.y, 5);
          this.ctx.fill();
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  MaskPlus: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a1aa9cyaadEZ67qCIT1FuzO", "MaskPlus");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MaskPlusType = void 0;
    var CommonUtils_1 = require("../Utils/CommonUtils");
    var MaskPlusType;
    (function(MaskPlusType) {
      MaskPlusType[MaskPlusType["RECT"] = 0] = "RECT";
      MaskPlusType[MaskPlusType["ELLIPSE"] = 1] = "ELLIPSE";
      MaskPlusType[MaskPlusType["IMAGE_STENCIL"] = 2] = "IMAGE_STENCIL";
      MaskPlusType[MaskPlusType["Polygon"] = 3] = "Polygon";
    })(MaskPlusType = exports.MaskPlusType || (exports.MaskPlusType = {}));
    var _vec2_temp = new cc.Vec2();
    var _mat4_temp = new cc.Mat4();
    var _circlepoints = [];
    function _calculateCircle(center, radius, segements) {
      _circlepoints.length = 0;
      var anglePerStep = 2 * Math.PI / segements;
      for (var step = 0; step < segements; ++step) _circlepoints.push(cc.v2(radius.x * Math.cos(anglePerStep * step) + center.x, radius.y * Math.sin(anglePerStep * step) + center.y));
      return _circlepoints;
    }
    var EllipseConfig = function() {
      function EllipseConfig() {}
      return EllipseConfig;
    }();
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, menu = _a.menu, help = _a.help, inspector = _a.inspector;
    var MaskPlus = function(_super) {
      __extends(MaskPlus, _super);
      function MaskPlus() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._type = 0;
        _this._polygon = [];
        _this.ellipse = new EllipseConfig();
        return _this;
      }
      Object.defineProperty(MaskPlus.prototype, "type", {
        get: function() {
          return this._type;
        },
        set: function(value) {
          this._type !== value && this["_resetAssembler"]();
          this._type = value;
          if (this._type === MaskPlusType.Polygon && 0 === this._polygon.length) {
            var _a = this.getNodeRect(), x = _a[0], y = _a[1], width = _a[2], height = _a[3];
            this._polygon.push(cc.v2(x, y), cc.v2(x + width, y), cc.v2(x + width, y + height), cc.v2(x, y + height));
          }
          if (this._type !== MaskPlusType.IMAGE_STENCIL) {
            this.spriteFrame = null;
            this.alphaThreshold = 0;
            this._updateGraphics();
          }
          this["_activateMaterial"]();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MaskPlus.prototype, "polygon", {
        get: function() {
          return this._polygon;
        },
        set: function(points) {
          this._polygon = points;
          this._updateGraphics();
        },
        enumerable: false,
        configurable: true
      });
      MaskPlus.prototype.setEllipse = function(center, r, segments) {
        this.ellipse.center = center;
        this.ellipse.r = r;
        this.ellipse.segments = segments || this.segements;
      };
      MaskPlus.prototype._updateGraphics = function() {
        var node = this.node;
        var graphics = this["_graphics"];
        graphics.clear(false);
        var _a = this.getNodeRect(), x = _a[0], y = _a[1], width = _a[2], height = _a[3];
        if (this["_type"] === MaskPlusType.RECT) graphics.rect(x, y, width, height); else if (this["_type"] === MaskPlusType.ELLIPSE) {
          var center = this.ellipse.center || cc.v2(x + width / 2, y + height / 2);
          var radius = this.ellipse.r || {
            x: width / 2,
            y: height / 2
          };
          var segments = this.ellipse.segments || this["_segments"];
          var points = _calculateCircle(center, radius, segments);
          for (var i = 0; i < points.length; ++i) {
            var point = points[i];
            0 === i ? graphics.moveTo(point.x, point.y) : graphics.lineTo(point.x, point.y);
          }
          graphics.close();
        } else if (this["_type"] === MaskPlusType.Polygon) {
          0 === this._polygon.length && this._polygon.push(cc.v2(0, 0));
          graphics.moveTo(this._polygon[0].x, this._polygon[0].y);
          for (var i = 1; i < this._polygon.length; i++) graphics.lineTo(this._polygon[i].x, this._polygon[i].y);
          graphics.lineTo(this._polygon[0].x, this._polygon[0].y);
        }
        cc.game.renderType === cc.game.RENDER_TYPE_CANVAS ? graphics.stroke() : graphics.fill();
      };
      MaskPlus.prototype._hitTest = function(cameraPt) {
        var node = this.node;
        var size = node.getContentSize(), w = size.width, h = size.height, testPt = _vec2_temp;
        node["_updateWorldMatrix"]();
        if (!cc.Mat4.invert(_mat4_temp, node["_worldMatrix"])) return false;
        cc.Vec2.transformMat4(testPt, cameraPt, _mat4_temp);
        testPt.x += node["_anchorPoint"].x * w;
        testPt.y += node["_anchorPoint"].y * h;
        var result = false;
        if (this.type === MaskPlusType.RECT || this.type === MaskPlusType.IMAGE_STENCIL) result = testPt.x >= 0 && testPt.y >= 0 && testPt.x <= w && testPt.y <= h; else if (this.type === MaskPlusType.ELLIPSE) {
          var rx = w / 2, ry = h / 2;
          var px = testPt.x - .5 * w, py = testPt.y - .5 * h;
          result = px * px / (rx * rx) + py * py / (ry * ry) < 1;
        } else this.type === MaskPlusType.Polygon && (result = CommonUtils_1.CommonUtils.isInPolygon(testPt, this.polygon));
        this.inverted && (result = !result);
        return result;
      };
      MaskPlus.prototype.getNodeRect = function() {
        var width = this.node["_contentSize"].width;
        var height = this.node["_contentSize"].height;
        var x = -width * this.node["_anchorPoint"].x;
        var y = -height * this.node["_anchorPoint"].y;
        return [ x, y, width, height ];
      };
      MaskPlus.Type = MaskPlusType;
      __decorate([ property({
        type: cc.Enum(MaskPlusType),
        override: true
      }) ], MaskPlus.prototype, "_type", void 0);
      __decorate([ property({
        type: cc.Enum(MaskPlusType),
        override: true
      }) ], MaskPlus.prototype, "type", null);
      __decorate([ property({
        type: [ cc.Vec2 ],
        serializable: true
      }) ], MaskPlus.prototype, "_polygon", void 0);
      __decorate([ property({
        type: [ cc.Vec2 ],
        serializable: true
      }) ], MaskPlus.prototype, "polygon", null);
      MaskPlus = __decorate([ ccclass, menu("i18n:MAIN_MENU.component.renderers/MaskPlus"), executeInEditMode, help("i18n:COMPONENT.help_url.mask"), inspector("packages://maskplus/inspector.js") ], MaskPlus);
      return MaskPlus;
    }(cc.Mask);
    exports.default = MaskPlus;
    cc["MaskPlus"] = MaskPlus;
    cc._RF.pop();
  }, {
    "../Utils/CommonUtils": "CommonUtils"
  } ],
  MatchUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ce2a5iLaMdGPJK3POfEqDgZ", "MatchUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MathUtils = void 0;
    var MathUtils = function() {
      function MathUtils() {}
      MathUtils.clamp = function(a, b, x) {
        if (a > b) {
          var t = a;
          a = b;
          b = t;
        }
        if (x < a) return a;
        if (x > b) return b;
        return x;
      };
      MathUtils.getAngle = function(radian) {
        return 180 * radian / Math.PI;
      };
      MathUtils.getRadian = function(angle) {
        return angle / 180 * Math.PI;
      };
      MathUtils.getRadian2 = function(p1X, p1Y, p2X, p2Y) {
        var xdis = p2X - p1X;
        var ydis = p2Y - p1Y;
        return Math.atan2(ydis, xdis);
      };
      MathUtils.getDistance = function(p1X, p1Y, p2X, p2Y) {
        var disX = p2X - p1X;
        var disY = p2Y - p1Y;
        var disQ = disX * disX + disY * disY;
        return Math.sqrt(disQ);
      };
      MathUtils.toFixedStr = function(value, fixCount) {
        return value.toFixed(fixCount).replace(/\.?0*$/, "");
      };
      MathUtils.toPercentStr = function(value, fixCount) {
        return this.toFixedStr(100 * value, fixCount) + "%";
      };
      MathUtils.toFixedWan = function(value) {
        var wanFix = 1e5;
        var wanFloat = wanFix / 10;
        var v = Math.floor(value / wanFloat) * wanFloat;
        return value > wanFix ? MathUtils.toFixedStr(v / wanFix * 10, 1) + "\u4e07" : value.toString();
      };
      MathUtils.getFinalValueBasedOnParams = function(level, paramList, needCeil) {
        if (paramList.length < 5) return 0;
        var ret = paramList[4] * (paramList[0] * Math.pow(level, paramList[3]) + paramList[1] * level + paramList[2]);
        needCeil && (ret = Math.ceil(ret));
        return ret;
      };
      MathUtils.limit = function($from, $end) {
        $from = Math.min($from, $end);
        $end = Math.max($from, $end);
        var range = $end - $from;
        return $from + Math.random() * range;
      };
      MathUtils.limitInteger = function($from, $end) {
        return Math.round(MathUtils.limit($from, $end));
      };
      MathUtils.randomArray = function(arr) {
        var index = Math.floor(Math.random() * arr.length);
        return arr[index];
      };
      return MathUtils;
    }();
    exports.MathUtils = MathUtils;
    cc._RF.pop();
  }, {} ],
  MenuAvatarDisplay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "93d65Kzx9hF45tT8UnTUul8", "MenuAvatarDisplay");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventCenter_1 = require("./Script/UIFrame/EventCenter");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MenuAvatarDisplay = function(_super) {
      __extends(MenuAvatarDisplay, _super);
      function MenuAvatarDisplay() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.avatarPrefab = null;
        _this.avatarParent = null;
        _this.canEdit = false;
        return _this;
      }
      MenuAvatarDisplay.prototype.onLoad = function() {
        var _this = this;
        EventCenter_1.EventCenter.on("MenuAvatarDelete", function(num) {
          _this.avatarParent.children[num + 1].destroy();
        }, this);
        EventCenter_1.EventCenter.on("MenuAvatarAdd", function(data) {
          _this.avatarParent.childrenCount < 6 && _this.initAvatar(data);
        }, this);
        var savedData = cc.sys.localStorage.getItem("teamData");
        if (void 0 == savedData || "NaN" == savedData || "" == savedData || null == savedData || "[]" == savedData) console.log("\u6ca1\u6709\u5b58\u6863"); else {
          var loadData = JSON.parse(savedData);
          loadData.forEach(function(data) {
            _this.initAvatar(data);
          });
        }
      };
      MenuAvatarDisplay.prototype.initAvatar = function(data) {
        var _this = this;
        var avatar = cc.instantiate(this.avatarPrefab);
        avatar.parent = this.avatarParent;
        this.scheduleOnce(function() {
          avatar.emit("MenuAvatarLoad", data, _this.canEdit);
        }, 0);
      };
      MenuAvatarDisplay.prototype.start = function() {};
      MenuAvatarDisplay.prototype.onDestroy = function() {
        EventCenter_1.EventCenter.targetOff(this);
      };
      __decorate([ property(cc.Prefab) ], MenuAvatarDisplay.prototype, "avatarPrefab", void 0);
      __decorate([ property(cc.Node) ], MenuAvatarDisplay.prototype, "avatarParent", void 0);
      __decorate([ property(cc.Boolean) ], MenuAvatarDisplay.prototype, "canEdit", void 0);
      MenuAvatarDisplay = __decorate([ ccclass ], MenuAvatarDisplay);
      return MenuAvatarDisplay;
    }(cc.Component);
    exports.default = MenuAvatarDisplay;
    cc._RF.pop();
  }, {
    "./Script/UIFrame/EventCenter": "EventCenter"
  } ],
  MenuAvatar: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cc04897PclDzZhl9UBEmW2h", "MenuAvatar");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ButtonPlus_1 = require("./Script/Common/Components/ButtonPlus");
    var EventCenter_1 = require("./Script/UIFrame/EventCenter");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MenuAvatar = function(_super) {
      __extends(MenuAvatar, _super);
      function MenuAvatar() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nameLabel = null;
        _this.closeButton = null;
        _this._name = "";
        return _this;
      }
      Object.defineProperty(MenuAvatar.prototype, "heroName", {
        get: function() {
          return this._name;
        },
        set: function(name) {
          this._name = name;
          !this.nameLabel || (this.nameLabel.string = name);
        },
        enumerable: false,
        configurable: true
      });
      MenuAvatar.prototype.onLoad = function() {
        var _this = this;
        this.node.on("MenuAvatarLoad", function(data, canEdit) {
          _this.heroName = data.name;
          _this.closeButton.node.active = canEdit;
          canEdit && _this.closeButton.addClick(_this.delete, _this);
        });
      };
      MenuAvatar.prototype.delete = function() {
        var num = this.node.getSiblingIndex();
        EventCenter_1.EventCenter.emit("MenuAvatarDelete", num);
        this.node.destroy();
      };
      __decorate([ property(cc.Label) ], MenuAvatar.prototype, "nameLabel", void 0);
      __decorate([ property(ButtonPlus_1.default) ], MenuAvatar.prototype, "closeButton", void 0);
      __decorate([ property ], MenuAvatar.prototype, "heroName", null);
      MenuAvatar = __decorate([ ccclass ], MenuAvatar);
      return MenuAvatar;
    }(cc.Component);
    exports.default = MenuAvatar;
    cc._RF.pop();
  }, {
    "./Script/Common/Components/ButtonPlus": "ButtonPlus",
    "./Script/UIFrame/EventCenter": "EventCenter"
  } ],
  MenuCard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "29ab0gC9+NFYKfO/3bvD8Vy", "MenuCard");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ButtonPlus_1 = require("./Script/Common/Components/ButtonPlus");
    var EventCenter_1 = require("./Script/UIFrame/EventCenter");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MenuCard = function(_super) {
      __extends(MenuCard, _super);
      function MenuCard() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nameLabel = null;
        _this.addButton = null;
        _this._name = "";
        _this.starParent = null;
        _this.starPrefab = null;
        _this._data = null;
        return _this;
      }
      Object.defineProperty(MenuCard.prototype, "heroName", {
        get: function() {
          return this._name;
        },
        set: function(name) {
          this._name = name;
          !this.nameLabel || (this.nameLabel.string = name);
        },
        enumerable: false,
        configurable: true
      });
      MenuCard.prototype.onLoad = function() {
        var _this = this;
        this.node.on("MenuCardLoad", function(data) {
          _this._data = data;
          _this.heroName = data.name;
          !data.level || (_this.heroName += " lv." + data.level);
          if (!!data.star && data.star > 0) for (var i = 0; i < data.star; i++) cc.instantiate(_this.starPrefab).setParent(_this.starParent);
          _this.addButton.addClick(_this.add, _this);
          _this.check();
        });
        EventCenter_1.EventCenter.on("MenuAvatarDelete", this.check, this);
        EventCenter_1.EventCenter.on("MenuAvatarAdd", this.check, this);
      };
      MenuCard.prototype.add = function() {
        EventCenter_1.EventCenter.emit("MenuAvatarAdd", this._data);
      };
      MenuCard.prototype.check = function() {
        var savedData = cc.sys.localStorage.getItem("teamData");
        if (!!savedData) if (JSON.parse(savedData).length < 5) {
          var loaded = savedData.includes(JSON.stringify(this._data));
          this.addButton.interactable = !loaded;
        } else this.addButton.interactable = false; else this.addButton.interactable = true;
      };
      MenuCard.prototype.onDestroy = function() {
        EventCenter_1.EventCenter.targetOff(this);
      };
      __decorate([ property(cc.Label) ], MenuCard.prototype, "nameLabel", void 0);
      __decorate([ property(ButtonPlus_1.default) ], MenuCard.prototype, "addButton", void 0);
      __decorate([ property ], MenuCard.prototype, "heroName", null);
      __decorate([ property(cc.Node) ], MenuCard.prototype, "starParent", void 0);
      __decorate([ property(cc.Prefab) ], MenuCard.prototype, "starPrefab", void 0);
      MenuCard = __decorate([ ccclass ], MenuCard);
      return MenuCard;
    }(cc.Component);
    exports.default = MenuCard;
    cc._RF.pop();
  }, {
    "./Script/Common/Components/ButtonPlus": "ButtonPlus",
    "./Script/UIFrame/EventCenter": "EventCenter"
  } ],
  MenuHeroPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bfe54PiqPhIz6u88FpTVLzH", "MenuHeroPanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ButtonPlus_1 = require("../Common/Components/ButtonPlus");
    var AdapterMgr_1 = require("../UIFrame/AdapterMgr");
    var CocosHelper_1 = require("../UIFrame/CocosHelper");
    var SysDefine_1 = require("../UIFrame/config/SysDefine");
    var EventCenter_1 = require("../UIFrame/EventCenter");
    var FrameType_1 = require("../UIFrame/FrameType");
    var UIBase_1 = require("../UIFrame/UIBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MenuHeroPanel = function(_super) {
      __extends(MenuHeroPanel, _super);
      function MenuHeroPanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.formType = SysDefine_1.FormType.PopUp;
        _this.maskType = new FrameType_1.MaskType(SysDefine_1.ModalOpacity.OpacityHigh, false);
        _this.closeButton = null;
        _this.avatarPrefab = null;
        _this.avatarParent = null;
        _this.cardPrefab = null;
        _this.cardParent = null;
        _this.canEdit = true;
        _this._testHeroData = [ {
          name: "tangseng",
          level: 1,
          star: 0
        }, {
          name: "wukong",
          level: 1,
          star: 0
        }, {
          name: "bailongma",
          level: 1,
          star: 0
        }, {
          name: "honghaier",
          level: 1,
          star: 0
        }, {
          name: "bajie",
          level: 1,
          star: 0
        } ];
        _this._teamData = [];
        _this._cardData = [];
        return _this;
      }
      MenuHeroPanel.prototype.onLoad = function() {
        var _this = this;
        EventCenter_1.EventCenter.on("MenuAvatarDelete", function(num) {
          _this._teamData.splice(num, 1);
          cc.sys.localStorage.setItem("teamData", JSON.stringify(_this._teamData));
        }, this);
        EventCenter_1.EventCenter.on("MenuAvatarAdd", function(data) {
          _this.avatarParent.childrenCount < 5 && _this.initAvatar(data);
        }, this);
        var savedData = cc.sys.localStorage.getItem("teamData");
        if (void 0 == savedData || "NaN" == savedData || "" == savedData || null == savedData || "[]" == savedData) console.log("\u6ca1\u6709\u5b58\u6863\u6216\u5b58\u6863\u4e3a\u7a7a"); else {
          var loadData = JSON.parse(savedData);
          loadData.forEach(function(data) {
            _this.initAvatar(data);
          });
        }
        var savedCardData = cc.sys.localStorage.getItem("cardData");
        if (void 0 == savedCardData || "NaN" == savedCardData || "" == savedCardData || null == savedCardData || "[]" == savedCardData) this._testHeroData.forEach(function(data) {
          _this.initCard(data);
        }); else {
          var loadCardData = JSON.parse(savedCardData);
          loadCardData.forEach(function(data) {
            _this.initCard(data);
          });
        }
      };
      MenuHeroPanel.prototype.onShow = function(startPosition) {
        this.startPosition = this.node.convertToNodeSpaceAR(startPosition);
      };
      MenuHeroPanel.prototype.initAvatar = function(data) {
        var _this = this;
        this._teamData.push(data);
        cc.sys.localStorage.setItem("teamData", JSON.stringify(this._teamData));
        var avatar = cc.instantiate(this.avatarPrefab);
        avatar.parent = this.avatarParent;
        this.scheduleOnce(function() {
          avatar.emit("MenuAvatarLoad", data, _this.canEdit);
        }, 0);
      };
      MenuHeroPanel.prototype.initCard = function(data) {
        this._cardData.push(data);
        cc.sys.localStorage.setItem("cardData", JSON.stringify(this._cardData));
        var card = cc.instantiate(this.cardPrefab);
        card.parent = this.cardParent;
        this.scheduleOnce(function() {
          card.emit("MenuCardLoad", data);
        }, 0);
      };
      MenuHeroPanel.prototype.showAnimation = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.node.scale = 0;
              this.node.setPosition(this.startPosition);
              return [ 4, CocosHelper_1.default.runTweenSync(this.node, cc.tween().to(.2, {
                position: cc.v3(0, AdapterMgr_1.default.inst.visibleSize.height / 2 - 300, 0),
                scale: 1
              })) ];

             case 1:
              _a.sent();
              AdapterMgr_1.default.inst.adapatByType(AdapterMgr_1.AdaptaterType.Top, this.node, 300);
              AdapterMgr_1.default.inst.adapatByType(AdapterMgr_1.AdaptaterType.Bottom, this.node, 100);
              return [ 2 ];
            }
          });
        });
      };
      MenuHeroPanel.prototype.start = function() {
        this.closeButton.addClick(this.closeUIForm, this);
      };
      MenuHeroPanel.prototype.onDestroy = function() {
        EventCenter_1.EventCenter.targetOff(this);
      };
      MenuHeroPanel.prefabPath = "UIForms/MenuHeroPanel";
      __decorate([ property(ButtonPlus_1.default) ], MenuHeroPanel.prototype, "closeButton", void 0);
      __decorate([ property(cc.Prefab) ], MenuHeroPanel.prototype, "avatarPrefab", void 0);
      __decorate([ property(cc.Node) ], MenuHeroPanel.prototype, "avatarParent", void 0);
      __decorate([ property(cc.Prefab) ], MenuHeroPanel.prototype, "cardPrefab", void 0);
      __decorate([ property(cc.Node) ], MenuHeroPanel.prototype, "cardParent", void 0);
      __decorate([ property(cc.Boolean) ], MenuHeroPanel.prototype, "canEdit", void 0);
      MenuHeroPanel = __decorate([ ccclass ], MenuHeroPanel);
      return MenuHeroPanel;
    }(UIBase_1.default);
    exports.default = MenuHeroPanel;
    cc._RF.pop();
  }, {
    "../Common/Components/ButtonPlus": "ButtonPlus",
    "../UIFrame/AdapterMgr": "AdapterMgr",
    "../UIFrame/CocosHelper": "CocosHelper",
    "../UIFrame/EventCenter": "EventCenter",
    "../UIFrame/FrameType": "FrameType",
    "../UIFrame/UIBase": "UIBase",
    "../UIFrame/config/SysDefine": "SysDefine"
  } ],
  MenuLevelSelect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6cebcFFGvhFr48OnP01qah1", "MenuLevelSelect");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SysDefine_1 = require("../UIFrame/config/SysDefine");
    var UIBase_1 = require("../UIFrame/UIBase");
    var ButtonPlus_1 = require("../Common/Components/ButtonPlus");
    var EventCenter_1 = require("../UIFrame/EventCenter");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MenuLevelSelect = function(_super) {
      __extends(MenuLevelSelect, _super);
      function MenuLevelSelect() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.formType = SysDefine_1.FormType.FixedUI;
        _this.startButton = null;
        _this.rightButton = null;
        _this.leftButton = null;
        _this.pageView = null;
        return _this;
      }
      MenuLevelSelect.prototype.onLoad = function() {
        var _this = this;
        this.startButton.addClick(function() {
          return _this.loadGame();
        }, this);
        this.rightButton.addClick(function() {
          return _this.nextPage();
        }, this);
        this.leftButton.addClick(function() {
          return _this.previousPage();
        }, this);
      };
      MenuLevelSelect.prototype.loadGame = function() {
        var _this = this;
        var teamData = cc.sys.localStorage.getItem("teamData");
        if (void 0 == teamData || "NaN" == teamData || "" == teamData || null == teamData || "[]" == teamData) {
          alert("\u6ca1\u6709\u5b58\u6863\u6216\u5f53\u524d\u9635\u5bb9\u4e3a\u7a7a");
          return;
        }
        var batteryConsumption = 5;
        EventCenter_1.EventCenter.once("batteryReply", function(battery) {
          if (battery < batteryConsumption) ; else {
            EventCenter_1.EventCenter.emit("batteryChange", -batteryConsumption);
            _this.startButton.interactable = false;
            _this.scheduleOnce(function() {
              cc.director.loadScene("game");
            }, .05);
          }
        }, this);
        EventCenter_1.EventCenter.emit("batteryCheck");
      };
      MenuLevelSelect.prototype.nextPage = function() {
        var index = this.pageView.getCurrentPageIndex();
        this.pageView.scrollToPage(index + 1, .5);
      };
      MenuLevelSelect.prototype.previousPage = function() {
        var index = this.pageView.getCurrentPageIndex();
        this.pageView.scrollToPage(index - 1, .5);
      };
      MenuLevelSelect.prefabPath = "UIForms/MenuLevelSelect";
      __decorate([ property(ButtonPlus_1.default) ], MenuLevelSelect.prototype, "startButton", void 0);
      __decorate([ property(ButtonPlus_1.default) ], MenuLevelSelect.prototype, "rightButton", void 0);
      __decorate([ property(ButtonPlus_1.default) ], MenuLevelSelect.prototype, "leftButton", void 0);
      __decorate([ property(cc.PageView) ], MenuLevelSelect.prototype, "pageView", void 0);
      MenuLevelSelect = __decorate([ ccclass ], MenuLevelSelect);
      return MenuLevelSelect;
    }(UIBase_1.default);
    exports.default = MenuLevelSelect;
    cc._RF.pop();
  }, {
    "../Common/Components/ButtonPlus": "ButtonPlus",
    "../UIFrame/EventCenter": "EventCenter",
    "../UIFrame/UIBase": "UIBase",
    "../UIFrame/config/SysDefine": "SysDefine"
  } ],
  MenuManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4e0b7Bj7GZAIYo/QphTxPpc", "MenuManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MenuSettingsButton_1 = require("./Script/test/MenuSettingsButton");
    var MenuTaskButton_1 = require("./Script/test/MenuTaskButton");
    var MenuLevelSelect_1 = require("./Script/test/MenuLevelSelect");
    var MenuTreasurePanel_1 = require("./Script/test/MenuTreasurePanel");
    var MenuHeroPanel_1 = require("./Script/test/MenuHeroPanel");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MenuManager = function(_super) {
      __extends(MenuManager, _super);
      function MenuManager() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      MenuManager.prototype.start = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, MenuLevelSelect_1.default.openView() ];

             case 1:
              _a.sent();
              MenuTaskButton_1.default.openView();
              MenuSettingsButton_1.default.openView();
              return [ 2 ];
            }
          });
        });
      };
      MenuManager.prototype.openTreasure = function(e) {
        var pos = e.getLocation();
        MenuTreasurePanel_1.default.openView(pos);
      };
      MenuManager.prototype.openHero = function(e) {
        var pos = e.getLocation();
        MenuHeroPanel_1.default.openView(pos);
      };
      MenuManager.prototype.onLoad = function() {
        var time = cc.sys.localStorage.getItem("task_check_time");
        if (void 0 == time || "NaN" == time || "" == time || null == time) {
          time = Date.now();
          cc.sys.localStorage.setItem("task_check_time", time);
          this.initSaveDataDaily();
        } else {
          var now = Date.now();
          var fourAm = new Date(new Date(now).setHours(4, 0, 0, 0)).getTime();
          time < fourAm && now >= fourAm && this.initSaveDataDaily();
          cc.sys.localStorage.setItem("task_check_time", now);
        }
      };
      MenuManager.prototype.initSaveDataDaily = function() {
        cc.resources.load("data/task", cc.JsonAsset, function(err, asset) {
          if (!!err) return;
          console.log(asset.json);
          cc.sys.localStorage.setItem("taskData", JSON.stringify(asset.json));
        });
        cc.sys.localStorage.removeItem("teamData");
        cc.sys.localStorage.removeItem("cardData");
      };
      MenuManager = __decorate([ ccclass ], MenuManager);
      return MenuManager;
    }(cc.Component);
    exports.default = MenuManager;
    cc._RF.pop();
  }, {
    "./Script/test/MenuHeroPanel": "MenuHeroPanel",
    "./Script/test/MenuLevelSelect": "MenuLevelSelect",
    "./Script/test/MenuSettingsButton": "MenuSettingsButton",
    "./Script/test/MenuTaskButton": "MenuTaskButton",
    "./Script/test/MenuTreasurePanel": "MenuTreasurePanel"
  } ],
  MenuSettingsButton: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5a87bCFXZVKz4c+NH63XWi2", "MenuSettingsButton");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ButtonPlus_1 = require("../Common/Components/ButtonPlus");
    var AdapterMgr_1 = require("../UIFrame/AdapterMgr");
    var SysDefine_1 = require("../UIFrame/config/SysDefine");
    var UIBase_1 = require("../UIFrame/UIBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MenuSettingsButton = function(_super) {
      __extends(MenuSettingsButton, _super);
      function MenuSettingsButton() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.formType = SysDefine_1.FormType.FixedUI;
        _this.button = null;
        return _this;
      }
      MenuSettingsButton.prototype.onLoad = function() {
        this.button.addClick(function() {
          console.log("\u6253\u5f00\u8bbe\u7f6e\u9762\u677f");
        }, this);
      };
      MenuSettingsButton.prototype.start = function() {
        AdapterMgr_1.default.inst.adapatByType(AdapterMgr_1.AdaptaterType.Top, this.node, 620);
        AdapterMgr_1.default.inst.adapatByType(AdapterMgr_1.AdaptaterType.Right, this.node, 25);
      };
      MenuSettingsButton.prefabPath = "UIForms/MenuSettingsButton";
      __decorate([ property(ButtonPlus_1.default) ], MenuSettingsButton.prototype, "button", void 0);
      MenuSettingsButton = __decorate([ ccclass ], MenuSettingsButton);
      return MenuSettingsButton;
    }(UIBase_1.default);
    exports.default = MenuSettingsButton;
    cc._RF.pop();
  }, {
    "../Common/Components/ButtonPlus": "ButtonPlus",
    "../UIFrame/AdapterMgr": "AdapterMgr",
    "../UIFrame/UIBase": "UIBase",
    "../UIFrame/config/SysDefine": "SysDefine"
  } ],
  MenuTaskButton: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "09cd11gOR5G34mkrs+WaJz2", "MenuTaskButton");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ButtonPlus_1 = require("../Common/Components/ButtonPlus");
    var AdapterMgr_1 = require("../UIFrame/AdapterMgr");
    var SysDefine_1 = require("../UIFrame/config/SysDefine");
    var UIBase_1 = require("../UIFrame/UIBase");
    var MenuTaskPanel_1 = require("./MenuTaskPanel");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MenuTaskButton = function(_super) {
      __extends(MenuTaskButton, _super);
      function MenuTaskButton() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.formType = SysDefine_1.FormType.FixedUI;
        _this.button = null;
        return _this;
      }
      MenuTaskButton.prototype.onLoad = function() {
        this.button.addClick(function(e) {
          var pos = e.getLocation();
          MenuTaskPanel_1.default.openView(pos);
        }, this);
      };
      MenuTaskButton.prototype.start = function() {
        AdapterMgr_1.default.inst.adapatByType(AdapterMgr_1.AdaptaterType.Top, this.node, 270);
        AdapterMgr_1.default.inst.adapatByType(AdapterMgr_1.AdaptaterType.Right, this.node, 0);
      };
      MenuTaskButton.prefabPath = "UIForms/MenuTaskButton";
      __decorate([ property(ButtonPlus_1.default) ], MenuTaskButton.prototype, "button", void 0);
      MenuTaskButton = __decorate([ ccclass ], MenuTaskButton);
      return MenuTaskButton;
    }(UIBase_1.default);
    exports.default = MenuTaskButton;
    cc._RF.pop();
  }, {
    "../Common/Components/ButtonPlus": "ButtonPlus",
    "../UIFrame/AdapterMgr": "AdapterMgr",
    "../UIFrame/UIBase": "UIBase",
    "../UIFrame/config/SysDefine": "SysDefine",
    "./MenuTaskPanel": "MenuTaskPanel"
  } ],
  MenuTaskPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5bbd8nIS65P+IUAn8eeMjIA", "MenuTaskPanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ButtonPlus_1 = require("../Common/Components/ButtonPlus");
    var AdapterMgr_1 = require("../UIFrame/AdapterMgr");
    var CocosHelper_1 = require("../UIFrame/CocosHelper");
    var SysDefine_1 = require("../UIFrame/config/SysDefine");
    var EventCenter_1 = require("../UIFrame/EventCenter");
    var FrameType_1 = require("../UIFrame/FrameType");
    var UIBase_1 = require("../UIFrame/UIBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MenuTaskPanel = function(_super) {
      __extends(MenuTaskPanel, _super);
      function MenuTaskPanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.formType = SysDefine_1.FormType.PopUp;
        _this.maskType = new FrameType_1.MaskType(SysDefine_1.ModalOpacity.OpacityHalf, false);
        _this.closeButton = null;
        _this.scrollView = null;
        _this.completeAllButton = null;
        _this.content = null;
        _this.taskPrefab = null;
        return _this;
      }
      MenuTaskPanel.prototype.onShow = function(startPosition) {
        this.startPosition = this.node.convertToNodeSpaceAR(startPosition);
      };
      MenuTaskPanel.prototype.onLoad = function() {
        this.completeAllButton.addClick(this.completeAllTasks, this);
        this.loadSaved();
      };
      MenuTaskPanel.prototype.loadSaved = function() {
        var savedData = cc.sys.localStorage.getItem("taskData");
        void 0 == savedData || "NaN" == savedData || "" == savedData || null == savedData || "[]" == savedData ? this.loadNew() : this.InitTask(JSON.parse(savedData));
      };
      MenuTaskPanel.prototype.loadNew = function() {
        var _this = this;
        cc.resources.load("data/task", cc.JsonAsset, function(err, asset) {
          if (!!err) return;
          _this.InitTask(asset.json);
        });
      };
      MenuTaskPanel.prototype.InitTask = function(taskData) {
        var _this = this;
        taskData.forEach(function(data) {
          var task = cc.instantiate(_this.taskPrefab);
          _this.content.addChild(task);
          _this.scheduleOnce(function() {
            return task.emit("InitTask", data);
          }, 0);
          data["id"] = task.uuid;
        });
        cc.sys.localStorage.setItem("taskData", JSON.stringify(taskData));
      };
      MenuTaskPanel.prototype.completeAllTasks = function() {
        EventCenter_1.EventCenter.emit("completeAllTasks");
      };
      MenuTaskPanel.prototype.start = function() {
        this.closeButton.addClick(this.closeUIForm, this);
      };
      MenuTaskPanel.prototype.showAnimation = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.node.scale = 0;
              this.node.setPosition(this.startPosition);
              return [ 4, CocosHelper_1.default.runTweenSync(this.node, cc.tween().to(.2, {
                position: cc.v3(0, AdapterMgr_1.default.inst.visibleSize.height / 2 - 300, 0),
                scale: 1
              })) ];

             case 1:
              _a.sent();
              AdapterMgr_1.default.inst.adapatByType(AdapterMgr_1.AdaptaterType.Top, this.node, 300);
              AdapterMgr_1.default.inst.adapatByType(AdapterMgr_1.AdaptaterType.Bottom, this.node, 100);
              return [ 2 ];
            }
          });
        });
      };
      MenuTaskPanel.prefabPath = "UIForms/MenuTaskPanel";
      __decorate([ property(ButtonPlus_1.default) ], MenuTaskPanel.prototype, "closeButton", void 0);
      __decorate([ property(cc.ScrollView) ], MenuTaskPanel.prototype, "scrollView", void 0);
      __decorate([ property(ButtonPlus_1.default) ], MenuTaskPanel.prototype, "completeAllButton", void 0);
      __decorate([ property(cc.Node) ], MenuTaskPanel.prototype, "content", void 0);
      __decorate([ property(cc.Prefab) ], MenuTaskPanel.prototype, "taskPrefab", void 0);
      MenuTaskPanel = __decorate([ ccclass ], MenuTaskPanel);
      return MenuTaskPanel;
    }(UIBase_1.default);
    exports.default = MenuTaskPanel;
    cc._RF.pop();
  }, {
    "../Common/Components/ButtonPlus": "ButtonPlus",
    "../UIFrame/AdapterMgr": "AdapterMgr",
    "../UIFrame/CocosHelper": "CocosHelper",
    "../UIFrame/EventCenter": "EventCenter",
    "../UIFrame/FrameType": "FrameType",
    "../UIFrame/UIBase": "UIBase",
    "../UIFrame/config/SysDefine": "SysDefine"
  } ],
  MenuTreasurePanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8ecc17tks1PtJtOf4INQ2Xk", "MenuTreasurePanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ButtonPlus_1 = require("../Common/Components/ButtonPlus");
    var AdapterMgr_1 = require("../UIFrame/AdapterMgr");
    var CocosHelper_1 = require("../UIFrame/CocosHelper");
    var SysDefine_1 = require("../UIFrame/config/SysDefine");
    var FrameType_1 = require("../UIFrame/FrameType");
    var UIBase_1 = require("../UIFrame/UIBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MenuTreasurePanel = function(_super) {
      __extends(MenuTreasurePanel, _super);
      function MenuTreasurePanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.formType = SysDefine_1.FormType.PopUp;
        _this.maskType = new FrameType_1.MaskType(SysDefine_1.ModalOpacity.OpacityHalf, false);
        _this.closeButton = null;
        _this.treasurePrefab = null;
        return _this;
      }
      MenuTreasurePanel.prototype.onShow = function(startPosition) {
        this.startPosition = this.node.convertToNodeSpaceAR(startPosition);
      };
      MenuTreasurePanel.prototype.showAnimation = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.node.scale = 0;
              this.node.setPosition(this.startPosition);
              return [ 4, CocosHelper_1.default.runTweenSync(this.node, cc.tween().to(.2, {
                position: cc.v3(0, AdapterMgr_1.default.inst.visibleSize.height / 2 - 300, 0),
                scale: 1
              })) ];

             case 1:
              _a.sent();
              AdapterMgr_1.default.inst.adapatByType(AdapterMgr_1.AdaptaterType.Top, this.node, 300);
              AdapterMgr_1.default.inst.adapatByType(AdapterMgr_1.AdaptaterType.Bottom, this.node, 100);
              return [ 2 ];
            }
          });
        });
      };
      MenuTreasurePanel.prototype.start = function() {
        this.closeButton.addClick(this.closeUIForm, this);
      };
      MenuTreasurePanel.prefabPath = "UIForms/MenuTreasurePanel";
      __decorate([ property(ButtonPlus_1.default) ], MenuTreasurePanel.prototype, "closeButton", void 0);
      __decorate([ property(cc.Prefab) ], MenuTreasurePanel.prototype, "treasurePrefab", void 0);
      MenuTreasurePanel = __decorate([ ccclass ], MenuTreasurePanel);
      return MenuTreasurePanel;
    }(UIBase_1.default);
    exports.default = MenuTreasurePanel;
    cc._RF.pop();
  }, {
    "../Common/Components/ButtonPlus": "ButtonPlus",
    "../UIFrame/AdapterMgr": "AdapterMgr",
    "../UIFrame/CocosHelper": "CocosHelper",
    "../UIFrame/FrameType": "FrameType",
    "../UIFrame/UIBase": "UIBase",
    "../UIFrame/config/SysDefine": "SysDefine"
  } ],
  MenuUIResource: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "136fe0mTFdP5JsVXwp11hnV", "MenuUIResource");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ButtonPlus_1 = require("../Common/Components/ButtonPlus");
    var EventCenter_1 = require("../UIFrame/EventCenter");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MenuUIResource = function(_super) {
      __extends(MenuUIResource, _super);
      function MenuUIResource() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.valueName = "battery";
        _this.label = null;
        _this.button = null;
        _this.defaultValue = 10;
        _this._inner = 8;
        _this.canRestore = false;
        _this._powerAddLeft = void 0;
        _this.haveMax = false;
        _this.max = 25;
        return _this;
      }
      Object.defineProperty(MenuUIResource.prototype, "extra", {
        get: function() {
          return this._inner;
        },
        set: function(value) {
          value < 0 && (value = 0);
          this.haveMax && value > this.max && (value = this.max);
          this._inner = value;
          this.label.string = value >= 1e7 ? String(Math.round(value / 1e5) / 10) + "M" : value >= 1e4 ? String(Math.round(value / 100) / 10) + "k" : String(value);
          this.haveMax && (this.label.string += "/" + this.max);
          cc.sys.localStorage.setItem(this.valueName, value);
        },
        enumerable: false,
        configurable: true
      });
      MenuUIResource.prototype.onLoad = function() {
        var _this = this;
        var data = cc.sys.localStorage.getItem(this.valueName);
        if (void 0 == data || "NaN" == data || null == data || "" == data) {
          this.extra = this.defaultValue;
          this.canRestore && cc.sys.localStorage.setItem(this.valueName + "_check_time", Date.now());
        } else {
          data = parseInt(data);
          if (this.canRestore) {
            var time = cc.sys.localStorage.getItem(this.valueName + "_check_time");
            if (void 0 == time || "NaN" == time || "" == time || null == time) {
              time = Date.now();
              cc.sys.localStorage.setItem(this.valueName + "_check_time", time);
            }
            time = parseInt(time);
            var add = Math.floor((Date.now() - time) / 3e5);
            this.extra = data + add;
            add > 0 && cc.sys.localStorage.setItem(this.valueName + "_check_time", Date.now());
          } else this.extra = data;
        }
        EventCenter_1.EventCenter.on(this.valueName + "Change", function(value) {
          _this.extra += value;
        }, this);
        EventCenter_1.EventCenter.on(this.valueName + "Check", function() {
          EventCenter_1.EventCenter.emit(_this.valueName + "Reply", _this.extra);
        }, this);
        this.button.addClick(function() {
          EventCenter_1.EventCenter.emit(_this.valueName + "Change", 5);
        }, this);
      };
      MenuUIResource.prototype.onDestroy = function() {
        cc.sys.localStorage.setItem(this.valueName, this.extra);
        EventCenter_1.EventCenter.targetOff(this);
      };
      MenuUIResource.prototype.start = function() {
        this.canRestore && (this._powerAddLeft = (parseInt(cc.sys.localStorage.getItem(this.valueName + "_check_time")) + 3e5 - Date.now()) / 1e3);
      };
      MenuUIResource.prototype.update = function(dt) {
        if (this.canRestore && void 0 !== this._powerAddLeft) {
          this._powerAddLeft -= dt;
          if (this._powerAddLeft <= 0) {
            this._powerAddLeft = 300;
            this.extra++;
            cc.sys.localStorage.setItem(this.valueName + "_check_time", Date.now());
          }
        }
      };
      __decorate([ property ], MenuUIResource.prototype, "valueName", void 0);
      __decorate([ property(cc.Label) ], MenuUIResource.prototype, "label", void 0);
      __decorate([ property(ButtonPlus_1.default) ], MenuUIResource.prototype, "button", void 0);
      __decorate([ property ], MenuUIResource.prototype, "defaultValue", void 0);
      __decorate([ property ], MenuUIResource.prototype, "canRestore", void 0);
      __decorate([ property ], MenuUIResource.prototype, "haveMax", void 0);
      __decorate([ property ], MenuUIResource.prototype, "max", void 0);
      MenuUIResource = __decorate([ ccclass ], MenuUIResource);
      return MenuUIResource;
    }(cc.Component);
    exports.default = MenuUIResource;
    cc._RF.pop();
  }, {
    "../Common/Components/ButtonPlus": "ButtonPlus",
    "../UIFrame/EventCenter": "EventCenter"
  } ],
  ModalMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a6cfbGOowFD6rGCFIN9QFMs", "ModalMgr");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SysDefine_1 = require("./config/SysDefine");
    var UIModalScript_1 = require("./UIModalScript");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ModalMgr = function(_super) {
      __extends(ModalMgr, _super);
      function ModalMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.uiModal = null;
        return _this;
      }
      ModalMgr_1 = ModalMgr;
      Object.defineProperty(ModalMgr, "inst", {
        get: function() {
          null == this._inst && (this._inst = new ModalMgr_1());
          return this._inst;
        },
        enumerable: false,
        configurable: true
      });
      ModalMgr.prototype.showModal = function(maskType) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, this.uiModal.showModal(maskType.opacity, maskType.easingTime, maskType.isEasing) ];

             case 1:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      ModalMgr.prototype.checkModalWindow = function(uiBases) {
        if (!!!this.uiModal || !!!this.uiModal.node) {
          this.uiModal = new cc.Node("UIModalNode").addComponent(UIModalScript_1.default);
          this.uiModal.init();
        }
        this.uiModal.node.parent && this.uiModal.node.removeFromParent();
        for (var i = uiBases.length - 1; i >= 0; i--) if (uiBases[i].maskType.opacity > 0) {
          cc.find(ModalMgr_1.popUpRoot).addChild(this.uiModal.node, Math.max(uiBases[i].node.zIndex - 1, 0));
          this.uiModal.uid = uiBases[i].uid;
          this.showModal(uiBases[i].maskType);
          break;
        }
        this.uiModal.node.parent || (this.uiModal.node.opacity = 0);
      };
      var ModalMgr_1;
      ModalMgr.popUpRoot = SysDefine_1.SysDefine.SYS_UIROOT_NAME + "/" + SysDefine_1.SysDefine.SYS_POPUP_NODE;
      ModalMgr._inst = null;
      ModalMgr = ModalMgr_1 = __decorate([ ccclass ], ModalMgr);
      return ModalMgr;
    }(cc.Component);
    exports.default = ModalMgr;
    cc._RF.pop();
  }, {
    "./UIModalScript": "UIModalScript",
    "./config/SysDefine": "SysDefine"
  } ],
  NetInterface: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8f1ecIEMhdDFqz2NkrYbjoP", "NetInterface");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  NetManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "36926qTKX5EsJ+mV+wfKKQG", "NetManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CWebSocket_1 = require("./CWebSocket");
    var EventCenter_1 = require("../EventCenter");
    var SocketState;
    (function(SocketState) {
      SocketState[SocketState["Closed"] = 0] = "Closed";
      SocketState[SocketState["Connecting"] = 1] = "Connecting";
      SocketState[SocketState["Connected"] = 2] = "Connected";
    })(SocketState || (SocketState = {}));
    var NetManager = function() {
      function NetManager() {
        this.state = SocketState.Closed;
        this.reconnectTimes = 0;
        this.eventHandlers = cc.js.createMap();
      }
      NetManager.getInstance = function() {
        null == this.instance && (this.instance = new NetManager());
        return this.instance;
      };
      NetManager.prototype.connect = function(connectOption, reconnectTimes) {
        if (!this.socket) {
          this.socket = new CWebSocket_1.default();
          this.addEventToSocket();
        }
        this.connectOption = connectOption;
        this.reconnectTimes = reconnectTimes;
        this.socket && this.state === SocketState.Closed && this.socket.connect(this.connectOption);
        this.state = SocketState.Connecting;
      };
      NetManager.prototype.send = function(msg) {
        if (this.state !== SocketState.Connected) {
          cc.log("\u7f51\u7edc\u672a\u8fde\u63a5\uff01\u65e0\u6cd5\u53d1\u9001\u6570\u636e");
          return false;
        }
        return this.socket.send(msg);
      };
      NetManager.prototype.request = function(msg, callback, target) {
        this.onEventHandler(msg.cmd, callback, target);
        this.send(msg);
      };
      NetManager.prototype.addEventToSocket = function() {
        var self = this;
        this.socket.onConnect = function(e) {
          cc.log("\u8fde\u63a5\u7f51\u7edc\u6210\u529f!");
          self.state = SocketState.Connected;
          EventCenter_1.EventCenter.emit("NetWork_Connect", null);
        };
        this.socket.onMessage = function(msg) {
          var arr = self.eventHandlers[msg.cmd];
          if (!arr) {
            cc.log("\u6536\u5230\u4e00\u4e2a\u672a\u77e5\u547d\u4ee4:" + msg.cmd);
            return;
          }
          for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var e = arr_1[_i];
            e.target ? e.callback.call(e.target, msg.data) : e.callback(msg.data);
          }
        };
        this.socket.onClose = function(e) {
          if (self.reconnectTimes < 0) {
            self.connect(self.connectOption, self.reconnectTimes);
            return;
          }
          if (0 === self.reconnectTimes) {
            cc.log("\u8fde\u63a5\u5173\u95ed\uff01");
            return;
          }
          self.reconnectTimes--;
          self.connect(self.connectOption, self.reconnectTimes);
        };
        this.socket.onError = function(e) {
          cc.log("\u7f51\u7edc\u9519\u8bef\uff01");
        };
      };
      NetManager.prototype.onEventHandler = function(cmd, callback, target, once) {
        void 0 === once && (once = false);
        this.eventHandlers[cmd] || (this.eventHandlers[cmd] = []);
        this.eventHandlers[cmd].push(new EventHandler(callback, target, once));
      };
      NetManager.prototype.onceEventHandler = function(cmd, callback, target) {
        this.onEventHandler(cmd, callback, target, true);
      };
      NetManager.prototype.offEventHandler = function(cmd, callback, target) {
        var arr = this.eventHandlers[cmd];
        if (!arr) {
          cc.log("\u6ca1\u6709\u8fd9\u4e2a\u547d\u4ee4" + cmd + "\uff0c\u8bf7\u6ce8\u610f");
          return;
        }
        for (var i = arr.length - 1; i >= 0; i--) if (arr[i] && arr[i].callback === callback && arr[i].target === target) {
          arr.splice(i, 1);
          break;
        }
        0 === arr.length && this.clearEventHandler[cmd];
      };
      NetManager.prototype.clearEventHandler = function(cmd) {
        if (!this.eventHandlers[cmd]) return;
        this.eventHandlers[cmd] = null;
        delete this.eventHandlers[cmd];
      };
      NetManager.instance = null;
      return NetManager;
    }();
    exports.default = NetManager;
    var EventHandler = function() {
      function EventHandler(callback, target, once) {
        this.callback = callback;
        this.target = target;
        this.once = once;
      }
      return EventHandler;
    }();
    cc._RF.pop();
  }, {
    "../EventCenter": "EventCenter",
    "./CWebSocket": "CWebSocket"
  } ],
  NetTest: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "792860pzepEeql1MnEMXfDm", "NetTest");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  PlayerMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bea7406655LzLidqx+dJrtq", "PlayerMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PlayerMgr = function() {
      function PlayerMgr() {}
      PlayerMgr.prototype.onConfigChange = function() {};
      return PlayerMgr;
    }();
    exports.default = PlayerMgr;
    cc._RF.pop();
  }, {} ],
  Pool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "284d8zxqTdJtYjT+CGS5XDE", "Pool");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Pool = void 0;
    var Pool = function() {
      function Pool(fn, size) {
        this._fn = fn;
        this._idx = size - 1;
        this._frees = new Array(size);
        for (var i = 0; i < size; i++) this._frees[i] = fn();
      }
      Object.defineProperty(Pool.prototype, "freeCount", {
        get: function() {
          return this._frees.length;
        },
        enumerable: false,
        configurable: true
      });
      Pool.prototype.alloc = function() {
        this._idx < 0 && this._expand(Math.round(1.2 * this._frees.length) + 1);
        var obj = this._frees[this._idx];
        this._frees.splice(this._idx);
        --this._idx;
        obj.use && obj.use();
        return obj;
      };
      Pool.prototype.free = function(obj) {
        ++this._idx;
        obj.free && obj.free();
        this._frees[this._idx] = obj;
      };
      Pool.prototype.clear = function(fn) {
        for (var i = 0; i < this._idx; i++) fn && fn(this._frees[i]);
        this._frees.splice(0);
        this._idx = -1;
      };
      Pool.prototype._expand = function(size) {
        var old = this._frees;
        this._frees = new Array(size);
        var len = size - old.length;
        for (var i = 0; i < len; i++) this._frees[i] = this._fn();
        for (var i = len, j = 0; i < size; ++i, ++j) this._frees[i] = old[j];
        this._idx += len;
      };
      return Pool;
    }();
    exports.Pool = Pool;
    cc._RF.pop();
  }, {} ],
  PriorityQueue: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f2318nn5GJChLoRevUhhLkg", "PriorityQueue");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PriorityElement = void 0;
    var PriorityElement = function() {
      function PriorityElement(data, pIdx) {
        this.data = data;
        this.pIdx = pIdx;
      }
      return PriorityElement;
    }();
    exports.PriorityElement = PriorityElement;
    var PriorityQueue = function() {
      function PriorityQueue() {
        this.queue = new Array(32);
        this.size = 0;
      }
      PriorityQueue.prototype.hasElement = function(t) {
        for (var _i = 0, _a = this.queue; _i < _a.length; _i++) {
          var e = _a[_i];
          if (e.data === t) return true;
        }
        return false;
      };
      PriorityQueue.prototype.enqueue = function(e, pIdx) {
        void 0 === pIdx && (pIdx = 0);
        this.size > this.queue.length && this._expand();
        this.queue[this.size++] = new PriorityElement(e, pIdx);
        this.upAdjust();
      };
      PriorityQueue.prototype.dequeue = function() {
        if (this.size <= 0) return null;
        var head = this.queue[0];
        this.queue[0] = this.queue[--this.size];
        this.downAdjust();
        return head.data;
      };
      PriorityQueue.prototype.upAdjust = function() {
        var childIndex = this.size - 1;
        var parentIndex = Math.floor(childIndex / 2);
        var tmp = this.queue[childIndex];
        while (childIndex > 0 && tmp.pIdx > this.queue[parentIndex].pIdx) {
          this.queue[childIndex] = this.queue[parentIndex];
          childIndex = parentIndex;
          parentIndex = Math.floor(parentIndex / 2);
        }
        this.queue[childIndex] = tmp;
      };
      PriorityQueue.prototype.downAdjust = function() {
        var parentIndex = 0;
        var tmp = this.queue[parentIndex];
        var childIndex = 1;
        while (childIndex < this.size) {
          childIndex + 1 < this.size && this.queue[childIndex + 1].pIdx > this.queue[childIndex].pIdx && childIndex++;
          if (tmp.pIdx >= this.queue[childIndex].pIdx) break;
          this.queue[parentIndex] = this.queue[childIndex];
          parentIndex = childIndex;
          childIndex = 2 * childIndex + 1;
        }
        this.queue[parentIndex] = tmp;
      };
      PriorityQueue.prototype._expand = function() {
        var newSize = Math.round(1.2 * this.queue.length) + 1;
        var oldQueue = this.queue;
        this.queue = new Array(newSize);
        for (var i = 0; i < oldQueue.length; i++) this.queue[i] = oldQueue[i];
      };
      PriorityQueue.prototype.toString = function() {
        var s = "";
        for (var i = 0; i < this.size; i++) {
          var data = this.queue[i].data;
          data.toString ? s += data.toString() : s += "object" === typeof data ? JSON.stringify(data) : data;
        }
        return s;
      };
      return PriorityQueue;
    }();
    exports.default = PriorityQueue;
    cc._RF.pop();
  }, {} ],
  PropBind: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2f9f8Tv5WdH8a3E1C7Bm4Ro", "PropBind");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PropBind = function() {
      function PropBind() {}
      return PropBind;
    }();
    exports.default = PropBind;
    cc._RF.pop();
  }, {} ],
  Queue: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "146d9Q6AJVLm5Z5V9zs9sHL", "Queue");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Queue = function() {
      function Queue() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
      }
      Queue.prototype.enqueue = function(element) {
        this.items[this.count] = element;
        this.count++;
      };
      Queue.prototype.dequeue = function() {
        if (this.isEmpty()) return;
        var result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
      };
      Queue.prototype.peek = function() {
        if (this.isEmpty()) return;
        return this.items[this.lowestCount];
      };
      Queue.prototype.isEmpty = function() {
        return 0 === this.size();
      };
      Queue.prototype.clear = function() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
      };
      Queue.prototype.size = function() {
        return this.count - this.lowestCount;
      };
      Queue.prototype.toString = function() {
        if (this.isEmpty()) return "";
        var objString = "" + this.items[this.lowestCount];
        for (var i = this.lowestCount + 1; i < this.count; i++) objString = objString + "," + this.items[i];
        return objString;
      };
      return Queue;
    }();
    exports.default = Queue;
    cc._RF.pop();
  }, {} ],
  ResHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3c20d4+pMpC7oZMT/SwOeHC", "ResHelper");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ResMgr_1 = require("../../UIFrame/ResMgr");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ResHelper = function(_super) {
      __extends(ResHelper, _super);
      function ResHelper() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.prefabs = [];
        _this.textures = [];
        _this.audioClips = [];
        _this.animClips = [];
        return _this;
      }
      ResHelper.prototype.onLoad = function() {
        for (var _i = 0, _a = this.prefabs; _i < _a.length; _i++) {
          var pre = _a[_i];
          ResMgr_1.default.inst.addStub(pre, cc.Prefab);
        }
        for (var _b = 0, _c = this.textures; _b < _c.length; _b++) {
          var texture = _c[_b];
          ResMgr_1.default.inst.addStub(texture, cc.Texture2D);
        }
        for (var _d = 0, _e = this.audioClips; _d < _e.length; _d++) {
          var audioClip = _e[_d];
          ResMgr_1.default.inst.addStub(audioClip, cc.AudioClip);
        }
        for (var _f = 0, _g = this.animClips; _f < _g.length; _f++) {
          var animClip = _g[_f];
          ResMgr_1.default.inst.addStub(animClip, cc.AnimationClip);
        }
      };
      __decorate([ property([ cc.Prefab ]) ], ResHelper.prototype, "prefabs", void 0);
      __decorate([ property({
        type: [ cc.Texture2D ]
      }) ], ResHelper.prototype, "textures", void 0);
      __decorate([ property({
        type: [ cc.AudioClip ]
      }) ], ResHelper.prototype, "audioClips", void 0);
      __decorate([ property([ cc.AnimationClip ]) ], ResHelper.prototype, "animClips", void 0);
      ResHelper = __decorate([ ccclass ], ResHelper);
      return ResHelper;
    }(cc.Component);
    exports.default = ResHelper;
    cc._RF.pop();
  }, {
    "../../UIFrame/ResMgr": "ResMgr"
  } ],
  ResMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a1946LwxMZELpC3XyersJGl", "ResMgr");
    "use strict";
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CocosHelper_1 = require("./CocosHelper");
    var EventCenter_1 = require("./EventCenter");
    var ResMgr = function() {
      function ResMgr() {
        this.staticDepends = cc.js.createMap();
        this.dynamicDepends = cc.js.createMap();
        this.tmpStaticDepends = [];
        this._stubRes = {};
      }
      Object.defineProperty(ResMgr, "inst", {
        get: function() {
          null === this.instance && (this.instance = new ResMgr());
          return this.instance;
        },
        enumerable: false,
        configurable: true
      });
      ResMgr.prototype.addStub = function(res, type) {
        var content = this._stubRes[type.name];
        content || (content = this._stubRes[type.name] = {});
        content[res.name] = res;
      };
      ResMgr.prototype.getStubRes = function(resName, type) {
        var content = this._stubRes[type.name];
        if (!content) return null;
        return content[resName];
      };
      ResMgr.prototype._addTmpStaticDepends = function(completedCount, totalCount, item) {
        this.tmpStaticDepends[this.tmpStaticDepends.length] = item.url;
        this.staticDepends[item.url] ? this.staticDepends[item.url]++ : this.staticDepends[item.url] = 1;
      };
      ResMgr.prototype._clearTmpStaticDepends = function() {
        for (var _i = 0, _a = this.tmpStaticDepends; _i < _a.length; _i++) {
          var s = _a[_i];
          if (!this.staticDepends[s] || 0 === this.staticDepends[s]) continue;
          this.staticDepends[s]--;
          0 === this.staticDepends[s] && delete this.staticDepends[s];
        }
        this.tmpStaticDepends = [];
      };
      ResMgr.prototype.loadForm = function(formName) {
        return __awaiter(this, void 0, void 0, function() {
          var form, deps;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, CocosHelper_1.default.loadResSync(formName, cc.Prefab, this._addTmpStaticDepends.bind(this)) ];

             case 1:
              form = _a.sent();
              this._clearTmpStaticDepends();
              deps = cc.loader.getDependsRecursively(formName);
              this.addStaticDepends(deps);
              return [ 2, form ];
            }
          });
        });
      };
      ResMgr.prototype.destoryForm = function(com) {
        if (!com) {
          cc.log("\u53ea\u652f\u6301\u9500\u6bc1\u7ee7\u627f\u4e86UIBase\u7684\u7a97\u4f53!");
          return;
        }
        EventCenter_1.EventCenter.targetOff(com);
        var deps = cc.loader.getDependsRecursively(com.uid);
        this.removeStaticDepends(deps);
        com.node.destroy();
      };
      ResMgr.prototype.addStaticDepends = function(deps) {
        for (var _i = 0, deps_1 = deps; _i < deps_1.length; _i++) {
          var s = deps_1[_i];
          this.staticDepends[s] ? this.staticDepends[s] += 1 : this.staticDepends[s] = 1;
        }
      };
      ResMgr.prototype.removeStaticDepends = function(deps) {
        for (var _i = 0, deps_2 = deps; _i < deps_2.length; _i++) {
          var s = deps_2[_i];
          if (!this.staticDepends[s] || 0 === this.staticDepends[s]) continue;
          this.staticDepends[s]--;
          if (0 === this.staticDepends[s]) {
            cc.loader.release(s);
            delete this.staticDepends[s];
          }
        }
      };
      ResMgr.prototype.loadDynamicRes = function(url, type, tag) {
        return __awaiter(this, void 0, void 0, function() {
          var sources;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, CocosHelper_1.default.loadResSync(url, type) ];

             case 1:
              sources = _a.sent();
              tag || (tag = url);
              this.dynamicDepends[tag] || (this.dynamicDepends[tag] = []);
              this.dynamicDepends[tag].push(url);
              return [ 2, sources ];
            }
          });
        });
      };
      ResMgr.prototype.destoryDynamicRes = function(tag) {
        if (!this.dynamicDepends[tag]) return false;
        for (var key in this.dynamicDepends) cc.loader.release(this.dynamicDepends[key]);
        return true;
      };
      ResMgr.instance = null;
      return ResMgr;
    }();
    exports.default = ResMgr;
    cc._RF.pop();
  }, {
    "./CocosHelper": "CocosHelper",
    "./EventCenter": "EventCenter"
  } ],
  ResourceLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "15fc7kg9oxFObM6V19H0dKf", "ResourceLoader");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ResourceLoader = function() {
      function ResourceLoader() {
        this.percentageAll = 0;
        this.bundleLoadCount = 0;
        this.bundleList = [ "Pics", "DragonBone" ];
      }
      ResourceLoader.getInstance = function() {
        this.instance || (this.instance = new ResourceLoader());
        return this.instance;
      };
      ResourceLoader.prototype.loadfinish = function() {
        return this.bundleLoadCount == this.bundleList.length;
      };
      ResourceLoader.prototype.getAllBundle = function(callback) {
        var percentageList = [ .7, .3 ];
        this.doPreLoad(this.bundleList, percentageList, callback);
      };
      ResourceLoader.prototype.doPreLoad = function(bundleList, percentageList, callback) {
        if (this.bundleLoadCount >= bundleList.length) {
          callback(1);
          return;
        }
        var self = this;
        cc.assetManager.loadBundle(bundleList[this.bundleLoadCount], function(err, bundle) {
          if (err) return console.error(err);
          var type = "Prefabs" == bundle.name ? cc.Prefab : cc.SpriteFrame;
          bundle.preloadDir("", type, function(finish, total, item) {
            var per = self.percentageAll + percentageList[self.bundleLoadCount] * finish / total;
            callback(per);
            if (finish == total) {
              self.percentageAll += percentageList[self.bundleLoadCount];
              self.bundleLoadCount++;
              console.log("load bundle " + self.bundleLoadCount);
              if (self.bundleLoadCount == bundleList.length) {
                callback(1);
                return;
              }
              self.doPreLoad(bundleList, percentageList, callback);
            }
          }, function(err, item) {
            if (err) return;
            console.log(bundleList[self.bundleLoadCount - 1]);
          });
        });
      };
      ResourceLoader.prototype.getPrefab = function(name, callback) {
        var bundle = cc.assetManager.getBundle("Prefabs");
        bundle.load(name, cc.Prefab, callback);
      };
      ResourceLoader.prototype.getTexture = function(name, callback) {
        var bundle = cc.assetManager.getBundle("Pics");
        bundle.load(name, cc.SpriteFrame, callback);
      };
      return ResourceLoader;
    }();
    exports.default = ResourceLoader;
    cc._RF.pop();
  }, {} ],
  Scene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b13f3yncLhOvJSRs1QLB0sR", "Scene");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Game_1 = require("../Logic/Game");
    var AdapterMgr_1 = require("../UIFrame/AdapterMgr");
    var EventCenter_1 = require("../UIFrame/EventCenter");
    var EventType_1 = require("../UIFrame/EventType");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Scene = function(_super) {
      __extends(Scene, _super);
      function Scene() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ndBlock = null;
        _this._block = 0;
        return _this;
      }
      Scene_1 = Scene;
      Scene.prototype.onLoad = function() {
        this.initBlockNode();
      };
      Scene.prototype.initBlockNode = function() {
        this.ndBlock = new cc.Node("block");
        this.ndBlock.addComponent(cc.BlockInputEvents);
        this.node.addChild(this.ndBlock, cc.macro.MAX_ZINDEX);
      };
      Scene.prototype.start = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              Scene_1.inst = this;
              AdapterMgr_1.default.inst.adapatByType(AdapterMgr_1.AdaptaterType.FullScreen, this.node);
              return [ 4, this.onGameInit() ];

             case 1:
              _a.sent();
              this.registerEvent();
              return [ 2 ];
            }
          });
        });
      };
      Scene.prototype.onGameInit = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, Game_1.default.init(this.node) ];

             case 1:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      Scene.prototype.registerEvent = function() {
        cc.game.on(cc.game.EVENT_SHOW, this.onGameShow, this);
        cc.game.on(cc.game.EVENT_HIDE, this.onGameHide, this);
      };
      Scene.prototype.onGameShow = function(param) {
        EventCenter_1.EventCenter.emit(EventType_1.EventType.GameShow, param);
        cc.director.resume();
      };
      Scene.prototype.onGameHide = function() {
        EventCenter_1.EventCenter.emit(EventType_1.EventType.GameHide);
        cc.director.pause();
      };
      Scene.prototype.update = function(dt) {
        Game_1.default.update(dt);
      };
      Scene.prototype.lateUpdate = function() {};
      Scene.prototype.setInputBlock = function(bool) {
        if (!this.ndBlock) {
          cc.warn("\u672a\u542f\u7528 block input");
          return;
        }
        bool ? ++this._block : --this._block;
        this.ndBlock.active = this._block > 0;
      };
      var Scene_1;
      Scene.inst = null;
      Scene = Scene_1 = __decorate([ ccclass ], Scene);
      return Scene;
    }(cc.Component);
    exports.default = Scene;
    cc._RF.pop();
  }, {
    "../Logic/Game": "Game",
    "../UIFrame/AdapterMgr": "AdapterMgr",
    "../UIFrame/EventCenter": "EventCenter",
    "../UIFrame/EventType": "EventType"
  } ],
  ScrollViewHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "90448z1fXJKVppxfCvCjY6W", "ScrollViewHelper");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ScrollViewHelper = exports.ScrollViewElementProxy = exports.ScrollViewElementProxyState = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ScrollViewElementProxyState;
    (function(ScrollViewElementProxyState) {
      ScrollViewElementProxyState[ScrollViewElementProxyState["NoUI"] = 0] = "NoUI";
      ScrollViewElementProxyState[ScrollViewElementProxyState["HaveUI"] = 1] = "HaveUI";
    })(ScrollViewElementProxyState = exports.ScrollViewElementProxyState || (exports.ScrollViewElementProxyState = {}));
    var ScrollViewElementProxy = function() {
      function ScrollViewElementProxy() {
        this.state = ScrollViewElementProxyState.NoUI;
      }
      return ScrollViewElementProxy;
    }();
    exports.ScrollViewElementProxy = ScrollViewElementProxy;
    var ScrollViewHelper = function(_super) {
      __extends(ScrollViewHelper, _super);
      function ScrollViewHelper() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.syncInterval = .05;
        _this._proxys = [];
        _this._syncCounter = 0;
        _this._lastCheckX = 0;
        return _this;
      }
      Object.defineProperty(ScrollViewHelper.prototype, "scrollView", {
        get: function() {
          return this._svCachedScrollView;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(ScrollViewHelper.prototype, "datas", {
        get: function() {
          return this._proxys;
        },
        enumerable: false,
        configurable: true
      });
      ScrollViewHelper.prototype.clearData = function() {
        for (var _i = 0, _a = this._proxys; _i < _a.length; _i++) {
          var proxy = _a[_i];
          proxy.ui && this.onFreeUI && this.onFreeUI(proxy);
        }
        this._proxys.length = 0;
      };
      ScrollViewHelper.prototype.addData = function(data) {
        this._initializeProxy(data);
        this._proxys.push(data);
      };
      ScrollViewHelper.prototype.setDebug = function(debug) {
        if (debug && !this._debugNode) {
          this._debugNode = new cc.Node().addComponent(cc.Graphics);
          this.scrollView.content.addChild(this._debugNode.node);
          this._debugNode.node.setPosition(cc.v2(0, 0));
        } else if (!debug && this._debugNode) {
          this._debugNode.node.removeFromParent();
          this._debugNode.node.destroy();
        }
        this._refreshDebug();
      };
      ScrollViewHelper.prototype.checkUI = function() {
        this._checkUIState();
        this._syncingUI = true;
      };
      ScrollViewHelper.prototype.setLoopHorizontal = function(loop) {
        if (loop != this._horizontalLoop) {
          if (loop) {
            for (var i = this._proxys.length - 1; i >= 0; i--) {
              var target = this._proxys[i];
              if (!target.horizontalLoop) {
                var copyed = new ScrollViewElementProxy();
                this._initializeProxy(copyed);
                copyed.src = target.src;
                copyed.region = new cc.Rect(target.region.x, target.region.y, target.region.width, target.region.height);
                copyed.horizontalLoop = true;
                copyed.verticalLoop = target.verticalLoop;
                copyed.region.x += this.scrollView.content.width;
                this._proxys.push(copyed);
              }
            }
            this.scrollView.content.setContentSize(2 * this.scrollView.content.width, this.scrollView.content.height);
          } else {
            for (var i = this._proxys.length - 1; i >= 0; i--) {
              var target = this._proxys[i];
              if (target.horizontalLoop && target.ui) {
                this.onFreeUI(target);
                target.ui = null;
                this._proxys.splice(i, 1);
              }
            }
            this.scrollView.content.setContentSize(this.scrollView.content.width / 2, this.scrollView.content.height);
          }
          this._horizontalLoop = loop;
        }
      };
      ScrollViewHelper.prototype.onLoad = function() {
        this._bindScrollView(this.getComponent(cc.ScrollView));
      };
      ScrollViewHelper.prototype.update = function(dt) {
        if (this._syncingUI) {
          this._syncCounter += dt;
          if (this._syncCounter >= this.syncInterval) {
            this._syncCounter = 0;
            this._syncUIState(1);
          }
        }
      };
      ScrollViewHelper.prototype._initializeProxy = function(proxy) {
        proxy.horizontalLoop = false;
        proxy.src = proxy;
        proxy.state = ScrollViewElementProxyState.NoUI;
        proxy.ui = null;
        proxy.verticalLoop = false;
      };
      ScrollViewHelper.prototype._checkLoopHorizontal = function() {
        var offset = this.scrollView.getScrollOffset();
        var delta = offset.x - this._lastCheckX;
        if (Math.abs(delta) > 2) {
          this._lastCheckX = offset.x;
          var originalWidth = this.scrollView.content.width / 2;
          if (delta < 0 && offset.x < -originalWidth) {
            offset.x += originalWidth;
            this._lastCheckX = offset.x;
            offset.x = -offset.x;
            this.scrollView.scrollToOffset(offset);
          } else if (delta > 0 && offset.x > 0) {
            offset.x -= originalWidth;
            this._lastCheckX = offset.x;
            offset.x = -offset.x;
            this.scrollView.scrollToOffset(offset);
          }
        }
      };
      ScrollViewHelper.prototype._bindScrollView = function(view) {
        this._svCachedScrollView = this.getComponent(cc.ScrollView);
        var eventHandler = new cc.Component.EventHandler();
        eventHandler.target = this.node;
        eventHandler.component = "ScrollViewHelper";
        eventHandler.handler = "_onScroll";
        this._svCachedScrollView.scrollEvents.push(eventHandler);
        this._svCachedScrollView.node.on(cc.Node.EventType.SIZE_CHANGED, this._refreshViewportRect, this);
        this._svCachedScrollView.content.on(cc.Node.EventType.ANCHOR_CHANGED, this._refreshViewportRect, this);
        this._svCachedScrollView.content.on(cc.Node.EventType.SIZE_CHANGED, this._refreshViewportRect, this);
        this._refreshViewportRect();
      };
      ScrollViewHelper.prototype._refreshViewportRect = function() {
        this._rectCachedViewport = cc.rect();
        this._rectCachedViewport.size = this._svCachedScrollView.node.getContentSize();
        this._rectCachedViewport.origin = cc.v2(-this._svCachedScrollView.content.anchorX * this._svCachedScrollView.content.width, (1 - this._svCachedScrollView.content.anchorY) * this._svCachedScrollView.content.height - this._rectCachedViewport.size.height);
        this._checkUIState();
        this._syncingUI = true;
      };
      ScrollViewHelper.prototype._checkUIState = function() {
        var delta = this._svCachedScrollView.getScrollOffset();
        var viewWidth = this._rectCachedViewport.width;
        var viewHeight = this._rectCachedViewport.height;
        var viewX = -delta.x + this._rectCachedViewport.x;
        var viewY = -delta.y + this._rectCachedViewport.y;
        for (var _i = 0, _a = this._proxys; _i < _a.length; _i++) {
          var proxy = _a[_i];
          var rect = proxy.region;
          var x = rect.x;
          var y = rect.y;
          x > viewX - rect.width && x < viewX + viewWidth && y > viewY - rect.height && y < viewY + viewHeight ? proxy.state = ScrollViewElementProxyState.HaveUI : proxy.state = ScrollViewElementProxyState.NoUI;
        }
      };
      ScrollViewHelper.prototype._syncUIState = function(maxAllocCount) {
        var changeCount = 0;
        for (var _i = 0, _a = this._proxys; _i < _a.length; _i++) {
          var proxy = _a[_i];
          if (proxy.state == ScrollViewElementProxyState.NoUI && proxy.ui) {
            this.onFreeUI(proxy);
            changeCount++;
            this._debugNode && cc.log("ScrollViewHelper._syncUIState ----\x3e free ui");
          }
        }
        for (var _b = 0, _c = this._proxys; _b < _c.length; _b++) {
          var proxy = _c[_b];
          if (proxy.state == ScrollViewElementProxyState.HaveUI && !proxy.ui) {
            var pooled = this.isUIPooled && this.isUIPooled(proxy);
            this.onAllocUI(proxy);
            changeCount++;
            pooled || maxAllocCount--;
            this._debugNode && cc.log("ScrollViewHelper._syncUIState ----\x3e alloc ui");
          }
          if (maxAllocCount <= 0) break;
        }
        changeCount <= 0 && (this._syncingUI = false);
      };
      ScrollViewHelper.prototype._onScroll = function() {
        this._horizontalLoop && this._checkLoopHorizontal();
        this._checkUIState();
        this._syncingUI = true;
      };
      ScrollViewHelper.prototype._refreshDebug = function() {
        if (this._debugNode) {
          this._debugNode.clear();
          this._debugNode.fillColor = cc.color(255, 0, 0, 255);
          for (var i = 0; i < this._proxys.length; i++) this._debugNode.fillRect(this._proxys[i].region.x, this._proxys[i].region.y, this._proxys[i].region.width, this._proxys[i].region.height);
        }
      };
      __decorate([ property() ], ScrollViewHelper.prototype, "syncInterval", void 0);
      ScrollViewHelper = __decorate([ ccclass ], ScrollViewHelper);
      return ScrollViewHelper;
    }(cc.Component);
    exports.ScrollViewHelper = ScrollViewHelper;
    cc._RF.pop();
  }, {} ],
  Skin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "536fb+lw75B5YLmNOdQ2AXX", "Skin");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        dragonBone: dragonBones.ArmatureDisplay,
        _InitialScaleX: 1
      },
      onLoad: function onLoad() {
        var _this = this;
        this._InitialScaleX = this.node.scaleX;
        this._InitialPositionX = this.node.position.x;
        this.node.parent.on("playAnim", function(name, times) {
          if ("attack_2" === name) {
            var names = _this.dragonBone.getAnimationNames(_this.dragonBone.armatureName);
            -1 === names.indexOf(name) && (name = "attack");
          }
          _this.dragonBone.playAnimation(name, times);
        }, this);
        this.node.parent.on("setScaleX", function(sign) {
          if (0 !== sign) {
            _this.node.scaleX = sign * _this._InitialScaleX;
            0 !== _this._InitialPositionX && _this.node.setPosition(sign * _this._InitialPositionX, _this.node.position.y);
          }
        });
      },
      start: function start() {
        this.Init();
      },
      Init: function Init() {
        console.info("\u8282\u70b9" + this.node.name + "\u4e0a\u6302\u8f7d\u7684Skin\u7ec4\u4ef6\u6ca1\u6709\u5b9e\u73b0\u52a8\u753b\u72b6\u6001\u673a,\u8bf7\u68c0\u67e5\u662f\u5426\u6302\u8f7d\u4e86\u7236\u7c7b,\u6216\u662f\u5b50\u7c7b\u6ca1\u6709\u5b9e\u73b0Init\u65b9\u6cd5");
      }
    });
    cc._RF.pop();
  }, {} ],
  SoundMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "712729Tx0JBoI/gunNGv3kP", "SoundMgr");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CocosHelper_1 = require("./CocosHelper");
    var SysDefine_1 = require("./config/SysDefine");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SoundMgr = function(_super) {
      __extends(SoundMgr, _super);
      function SoundMgr() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.audioCache = cc.js.createMap();
        _this.currEffectId = -1;
        _this.currMusicId = -1;
        _this.volume = new Volume();
        return _this;
      }
      Object.defineProperty(SoundMgr, "inst", {
        get: function() {
          null == this._inst && (this._inst = cc.find(SysDefine_1.SysDefine.SYS_UIROOT_NAME).addComponent(this));
          return this._inst;
        },
        enumerable: false,
        configurable: true
      });
      SoundMgr.prototype.onLoad = function() {
        var volume = this.getVolumeToLocal();
        if (volume) this.volume = volume; else {
          this.volume.musicVolume = 1;
          this.volume.effectVolume = 1;
        }
        this.setVolumeToLocal();
        cc.game.on(cc.game.EVENT_HIDE, function() {
          cc.audioEngine.pauseAll();
        }, this);
        cc.game.on(cc.game.EVENT_SHOW, function() {
          cc.audioEngine.resumeAll();
        }, this);
      };
      SoundMgr.prototype.getVolume = function() {
        return this.volume;
      };
      SoundMgr.prototype.start = function() {};
      SoundMgr.prototype.setMusicVolume = function(musicVolume) {
        this.volume.musicVolume = musicVolume;
        this.setVolumeToLocal();
      };
      SoundMgr.prototype.setEffectVolume = function(effectVolume) {
        this.volume.effectVolume = effectVolume;
        this.setVolumeToLocal();
      };
      SoundMgr.prototype.playMusic = function(url, loop) {
        void 0 === loop && (loop = true);
        return __awaiter(this, void 0, void 0, function() {
          var sound;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!url || "" === url) return [ 2 ];
              if (this.audioCache[url]) {
                cc.audioEngine.playMusic(this.audioCache[url], loop);
                return [ 2 ];
              }
              return [ 4, CocosHelper_1.default.loadResSync(url, cc.AudioClip) ];

             case 1:
              sound = _a.sent();
              this.audioCache[url] = sound;
              this.currMusicId = cc.audioEngine.playMusic(sound, loop);
              return [ 2 ];
            }
          });
        });
      };
      SoundMgr.prototype.playEffect = function(url, loop) {
        void 0 === loop && (loop = false);
        return __awaiter(this, void 0, void 0, function() {
          var sound;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!url || "" === url) return [ 2 ];
              if (this.audioCache[url]) {
                cc.audioEngine.playEffect(this.audioCache[url], loop);
                return [ 2 ];
              }
              return [ 4, CocosHelper_1.default.loadResSync(url, cc.AudioClip) ];

             case 1:
              sound = _a.sent();
              this.audioCache[url] = sound;
              this.currEffectId = cc.audioEngine.playEffect(sound, loop);
              return [ 2 ];
            }
          });
        });
      };
      SoundMgr.prototype.getVolumeToLocal = function() {
        var objStr = cc.sys.localStorage.getItem("Volume_For_Creator");
        if (!objStr) return null;
        return JSON.parse(objStr);
      };
      SoundMgr.prototype.setVolumeToLocal = function() {
        cc.audioEngine.setMusicVolume(this.volume.musicVolume);
        cc.audioEngine.setEffectsVolume(this.volume.effectVolume);
        cc.sys.localStorage.setItem("Volume_For_Creator", JSON.stringify(this.volume));
      };
      SoundMgr.prototype.setEffectActive = function(active, id) {
        void 0 === id && (id = -1);
        active ? cc.audioEngine.stop(id < 0 ? this.currEffectId : id) : cc.audioEngine.resume(id < 0 ? this.currEffectId : id);
      };
      SoundMgr._inst = null;
      SoundMgr = __decorate([ ccclass ], SoundMgr);
      return SoundMgr;
    }(cc.Component);
    exports.default = SoundMgr;
    var Volume = function() {
      function Volume() {}
      return Volume;
    }();
    cc._RF.pop();
  }, {
    "./CocosHelper": "CocosHelper",
    "./config/SysDefine": "SysDefine"
  } ],
  StartScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1f63aZJV2FNo7GMNNKMC181", "StartScene");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ResourceLoader_1 = require("./ResourceLoader");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.resourceLoader = null;
        _this.indicator = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.resourceLoader = ResourceLoader_1.default.getInstance();
      };
      NewClass.prototype.start = function() {
        var that = this;
        this.resourceLoader.getAllBundle(function(per) {
          that.indicator.string = "\u8d44\u6e90\u52a0\u8f7d\u8fdb\u5ea6:" + Math.round(100 * per) + "%";
        });
      };
      NewClass.prototype.loadGame = function() {
        var that = this;
        if (false == this.resourceLoader.loadfinish()) {
          var shouldStartGame = function() {
            if (false == that.resourceLoader.loadfinish()) return;
            that.unschedule(shouldStartGame);
            cc.director.loadScene("menu");
          };
          this.schedule(shouldStartGame, .2);
        } else this.scheduleOnce(function() {
          cc.director.loadScene("menu");
        }, .05);
      };
      __decorate([ property(ResourceLoader_1.default) ], NewClass.prototype, "resourceLoader", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "indicator", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "./ResourceLoader": "ResourceLoader"
  } ],
  SysDefine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7f8ffNRvZxCz4zNi1L6dBHr", "SysDefine");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SysDefine = exports.UIState = exports.ModalOpacity = exports.FormType = void 0;
    var FormType;
    (function(FormType) {
      FormType[FormType["Screen"] = 0] = "Screen";
      FormType[FormType["FixedUI"] = 1] = "FixedUI";
      FormType[FormType["PopUp"] = 2] = "PopUp";
      FormType[FormType["TopTips"] = 3] = "TopTips";
    })(FormType = exports.FormType || (exports.FormType = {}));
    var ModalOpacity;
    (function(ModalOpacity) {
      ModalOpacity[ModalOpacity["None"] = 0] = "None";
      ModalOpacity[ModalOpacity["OpacityZero"] = 1] = "OpacityZero";
      ModalOpacity[ModalOpacity["OpacityLow"] = 2] = "OpacityLow";
      ModalOpacity[ModalOpacity["OpacityHalf"] = 3] = "OpacityHalf";
      ModalOpacity[ModalOpacity["OpacityHigh"] = 4] = "OpacityHigh";
      ModalOpacity[ModalOpacity["OpacityFull"] = 5] = "OpacityFull";
    })(ModalOpacity = exports.ModalOpacity || (exports.ModalOpacity = {}));
    var UIState;
    (function(UIState) {
      UIState[UIState["None"] = 0] = "None";
      UIState[UIState["Loading"] = 1] = "Loading";
      UIState[UIState["Showing"] = 2] = "Showing";
      UIState[UIState["Hiding"] = 3] = "Hiding";
    })(UIState = exports.UIState || (exports.UIState = {}));
    var SysDefine = function() {
      function SysDefine() {}
      SysDefine.SYS_PATH_CANVAS = "Canvas";
      SysDefine.SYS_PATH_UIFORMS_CONFIG_INFO = "UIFormsConfigInfo";
      SysDefine.SYS_PATH_CONFIG_INFO = "SysConfigInfo";
      SysDefine.SYS_UIROOT_NAME = "Canvas/Scene/UIROOT";
      SysDefine.SYS_UIMODAL_NAME = "Canvas/Scene/UIROOT/UIModalManager";
      SysDefine.SYS_UIAdapter_NAME = "Canvas/Scene/UIROOT/UIAdapterManager";
      SysDefine.SYS_SCENE_NODE = "Scene";
      SysDefine.SYS_UIROOT_NODE = "UIROOT";
      SysDefine.SYS_SCREEN_NODE = "Screen";
      SysDefine.SYS_FIXEDUI_NODE = "FixedUI";
      SysDefine.SYS_POPUP_NODE = "PopUp";
      SysDefine.SYS_TOPTIPS_NODE = "TopTips";
      SysDefine.SYS_STANDARD_Prefix = "_";
      SysDefine.SYS_STANDARD_Separator = "$";
      SysDefine.SYS_STANDARD_End = "#";
      SysDefine.UI_PATH_ROOT = "UIForms/";
      SysDefine.SeparatorMap = {
        _Node: "cc.Node",
        _Label: "cc.Label",
        _Button: "cc.Button",
        _Sprite: "cc.Sprite",
        _RichText: "cc.RichText",
        _Mask: "cc.Mask",
        _MotionStreak: "cc.MotionStreak",
        _TiledMap: "cc.TiledMap",
        _TiledTile: "cc.TiledTile",
        _Spine: "sp.Skeleton",
        _Graphics: "cc.Graphics",
        _Animation: "cc.Animation",
        _WebView: "cc.WebView",
        _EditBox: "cc.EditBox",
        _ScrollView: "cc.ScrollView",
        _VideoPlayer: "cc.VideoPlayer",
        _ProgressBar: "cc.ProgressBar",
        _PageView: "cc.PageView",
        _Slider: "cc.Slider",
        _Toggle: "cc.Toggle",
        _ButtonPlus: "ButtonPlus"
      };
      return SysDefine;
    }();
    exports.SysDefine = SysDefine;
    cc._RF.pop();
  }, {} ],
  TaskMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "10a36aUDJJN8rMs7QsSfiI4", "TaskMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Command = exports.CommandType = void 0;
    var PriorityQueue_1 = require("../Common/Utils/PriorityQueue");
    var CommandType;
    (function(CommandType) {
      CommandType[CommandType["task"] = 0] = "task";
    })(CommandType = exports.CommandType || (exports.CommandType = {}));
    var Command = function() {
      function Command() {}
      return Command;
    }();
    exports.Command = Command;
    var TaskMgr = function() {
      function TaskMgr() {
        this._cmdMap = cc.js.createMap();
        this._debugHistory = [];
        this._debug = false;
      }
      Object.defineProperty(TaskMgr, "inst", {
        get: function() {
          this._instance || (this._instance = new TaskMgr());
          return this._instance;
        },
        enumerable: false,
        configurable: true
      });
      TaskMgr.prototype.setDebug = function(debug) {
        void 0 === debug && (debug = true);
        this._debug = debug;
      };
      TaskMgr.prototype.pushCommand = function(key, command, pIdx) {
        void 0 === pIdx && (pIdx = 0);
        this._debug && this._debugHistory.push(command);
        var cmdQueue = this._cmdMap[key];
        cmdQueue || (cmdQueue = this._cmdMap[key] = new PriorityQueue_1.default());
        cmdQueue.enqueue(command, pIdx);
      };
      TaskMgr.prototype.popCommand = function(key) {
        var cmdQueue = this._cmdMap[key];
        if (!cmdQueue) return null;
        return cmdQueue.dequeue();
      };
      TaskMgr.prototype.hasCommand = function(ele, key) {
        if (key) {
          var cmdQueue = this._cmdMap[key];
          return cmdQueue.hasElement(ele);
        }
        for (var key_1 in this._cmdMap) if (this._cmdMap[key_1].hasElement(ele)) return true;
        return false;
      };
      TaskMgr._instance = null;
      return TaskMgr;
    }();
    exports.default = TaskMgr;
    cc._RF.pop();
  }, {
    "../Common/Utils/PriorityQueue": "PriorityQueue"
  } ],
  Task: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a3922MUAERMCq1yQBXVZZNP", "Task");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ButtonPlus_1 = require("./Script/Common/Components/ButtonPlus");
    var EventCenter_1 = require("./Script/UIFrame/EventCenter");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Task = function(_super) {
      __extends(Task, _super);
      function Task() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.description = null;
        _this.coin = null;
        _this.diamond = null;
        _this.battery = null;
        _this.xofy = null;
        _this.progressBar = null;
        _this.completeButton = null;
        _this.data = null;
        return _this;
      }
      Task.prototype.onLoad = function() {
        var _this = this;
        this.completeButton.addClick(this.completeTask, this);
        this.node.on("InitTask", function(data) {
          _this.data = data;
          _this.description.string = data.descripition;
          _this.coin.string = "x" + data.reward.coin;
          _this.diamond.string = "x" + data.reward.diamond;
          _this.battery.string = "x" + data.reward.battery;
          if (data.currentNum >= data.targetNum) {
            _this.progressBar.progress = 1;
            _this.xofy.string = data.targetNum + "/" + data.targetNum;
            _this.completeButton.interactable = true;
          } else {
            _this.progressBar.progress = data.currentNum / data.targetNum;
            _this.xofy.string = data.currentNum + "/" + data.targetNum;
            _this.completeButton.interactable = false;
          }
          EventCenter_1.EventCenter.on("completeAllTasks", function() {
            _this.completeButton.interactable && _this.completeTask();
          }, _this);
        });
      };
      Task.prototype.start = function() {};
      Task.prototype.completeTask = function() {
        var _this = this;
        EventCenter_1.EventCenter.emit("coinChange", this.data.reward.coin);
        EventCenter_1.EventCenter.emit("batteryChange", this.data.reward.battery);
        EventCenter_1.EventCenter.emit("diamondChange", this.data.reward.diamond);
        EventCenter_1.EventCenter.emit("progressChange", this.data.reward.progress);
        var taskData = JSON.parse(cc.sys.localStorage.getItem("taskData"));
        var index = taskData.findIndex(function(data) {
          return data.id === _this.node.uuid;
        });
        console.log(index, taskData);
        -1 !== index && taskData.splice(index, 1);
        cc.sys.localStorage.setItem("taskData", JSON.stringify(taskData));
        this.scheduleOnce(function() {
          return _this.node.destroy();
        }, 0);
      };
      Task.prototype.onDestroy = function() {
        EventCenter_1.EventCenter.targetOff(this);
      };
      __decorate([ property(cc.Label) ], Task.prototype, "description", void 0);
      __decorate([ property(cc.Label) ], Task.prototype, "coin", void 0);
      __decorate([ property(cc.Label) ], Task.prototype, "diamond", void 0);
      __decorate([ property(cc.Label) ], Task.prototype, "battery", void 0);
      __decorate([ property(cc.Label) ], Task.prototype, "xofy", void 0);
      __decorate([ property(cc.ProgressBar) ], Task.prototype, "progressBar", void 0);
      __decorate([ property(ButtonPlus_1.default) ], Task.prototype, "completeButton", void 0);
      Task = __decorate([ ccclass ], Task);
      return Task;
    }(cc.Component);
    exports.default = Task;
    cc._RF.pop();
  }, {
    "./Script/Common/Components/ButtonPlus": "ButtonPlus",
    "./Script/UIFrame/EventCenter": "EventCenter"
  } ],
  TextureAssembler: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e0687tDW69CxalPcgT1Omra", "TextureAssembler");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CommonUtils_1 = require("../Utils/CommonUtils");
    var gfx = cc["gfx"];
    var vfmtPosUvColor = new gfx.VertexFormat([ {
      name: gfx.ATTR_POSITION,
      type: gfx.ATTR_TYPE_FLOAT32,
      num: 2
    }, {
      name: gfx.ATTR_UV0,
      type: gfx.ATTR_TYPE_FLOAT32,
      num: 2
    }, {
      name: gfx.ATTR_COLOR,
      type: gfx.ATTR_TYPE_UINT8,
      num: 4,
      normalize: true
    } ]);
    var TextureAssembler = function(_super) {
      __extends(TextureAssembler, _super);
      function TextureAssembler() {
        var _this = _super.call(this) || this;
        _this.verticesCount = 4;
        _this.indicesCount = 6;
        _this.floatsPerVert = 5;
        _this.uvOffset = 2;
        _this.colorOffset = 4;
        _this.indicesArr = [];
        _this._renderData = null;
        _this._renderData = new cc.RenderData();
        _this._renderData.init(_this);
        _this.initData();
        return _this;
      }
      Object.defineProperty(TextureAssembler.prototype, "verticesFloats", {
        get: function() {
          return this.verticesCount * this.floatsPerVert;
        },
        enumerable: false,
        configurable: true
      });
      TextureAssembler.prototype.getVfmt = function() {
        return vfmtPosUvColor;
      };
      TextureAssembler.prototype.getBuffer = function() {
        return cc.renderer["_handle"].getBuffer("mesh", this.getVfmt());
      };
      TextureAssembler.prototype.initData = function() {
        var data = this._renderData;
        data.createQuadData(0, this.verticesFloats, this.indicesCount);
      };
      TextureAssembler.prototype.resetData = function(comp) {
        var points = comp.polygon;
        if (!points || points.length < 3) return;
        this.verticesCount = points.length;
        this.indicesCount = this.verticesCount + 2 * (this.verticesCount - 3);
        this._renderData.clear();
        this.initData();
      };
      TextureAssembler.prototype.updateColor = function(comp, color) {
        var uintVerts = this._renderData.uintVDatas[0];
        if (!uintVerts) return;
        color = null != color ? color : comp.node.color["_val"];
        var floatsPerVert = this.floatsPerVert;
        var colorOffset = this.colorOffset;
        var polygon = comp.polygon;
        for (var i = 0; i < polygon.length; i++) uintVerts[colorOffset + i * floatsPerVert] = color;
      };
      TextureAssembler.prototype.updateUVs = function(comp) {
        var uvOffset = this.uvOffset;
        var floatsPerVert = this.floatsPerVert;
        var verts = this._renderData.vDatas[0];
        var uvs = CommonUtils_1.CommonUtils.computeUv(comp.polygon, comp.node.width, comp.node.height);
        var polygon = comp.polygon;
        for (var i = 0; i < polygon.length; i++) {
          var dstOffset = floatsPerVert * i + uvOffset;
          verts[dstOffset] = uvs[i].x;
          verts[dstOffset + 1] = uvs[i].y;
        }
      };
      TextureAssembler.prototype.updateWorldVertsWebGL = function(comp) {
        var verts = this._renderData.vDatas[0];
        var matrix = comp.node["_worldMatrix"];
        var matrixm = matrix.m, a = matrixm[0], b = matrixm[1], c = matrixm[4], d = matrixm[5], tx = matrixm[12], ty = matrixm[13];
        var justTranslate = 1 === a && 0 === b && 0 === c && 1 === d;
        var floatsPerVert = this.floatsPerVert;
        if (justTranslate) {
          var polygon = comp.polygon;
          for (var i = 0; i < polygon.length; i++) {
            verts[i * floatsPerVert] = polygon[i].x + tx;
            verts[i * floatsPerVert + 1] = polygon[i].y + ty;
          }
        } else {
          var polygon = comp.polygon;
          for (var i = 0; i < polygon.length; i++) {
            verts[i * floatsPerVert] = a * polygon[i].x + c * polygon[i].y + tx;
            verts[i * floatsPerVert + 1] = b * polygon[i].x + d * polygon[i].y + ty;
          }
        }
      };
      TextureAssembler.prototype.updateWorldVertsNative = function(comp) {
        var verts = this._renderData.vDatas[0];
        var floatsPerVert = this.floatsPerVert;
        var polygon = comp.polygon;
        for (var i = 0; i < polygon.length; i++) {
          verts[i * floatsPerVert] = polygon[i].x;
          verts[i * floatsPerVert + 1] = polygon[i].y;
        }
      };
      TextureAssembler.prototype.updateWorldVerts = function(comp) {
        false;
        this.updateWorldVertsWebGL(comp);
      };
      TextureAssembler.prototype.updateVerts = function(comp) {
        this.indicesArr = CommonUtils_1.CommonUtils.splitePolygon(comp.polygon);
        this.updateWorldVerts(comp);
      };
      TextureAssembler.prototype.updateRenderData = function(comp) {
        if (comp._vertsDirty) {
          this.resetData(comp);
          this.updateUVs(comp);
          this.updateVerts(comp);
          this.updateColor(comp, null);
          comp._vertsDirty = false;
        }
      };
      TextureAssembler.prototype.fillBuffers = function(comp, renderer) {
        renderer.worldMatDirty && this.updateWorldVerts(comp);
        var renderData = this._renderData;
        var vData = renderData.vDatas[0];
        var iData = renderData.iDatas[0];
        var buffer = this.getBuffer();
        var offsetInfo = buffer.request(this.verticesCount, this.indicesCount);
        var vertexOffset = offsetInfo.byteOffset >> 2, vbuf = buffer._vData;
        vData.length + vertexOffset > vbuf.length ? vbuf.set(vData.subarray(0, vbuf.length - vertexOffset), vertexOffset) : vbuf.set(vData, vertexOffset);
        var ibuf = buffer._iData, indiceOffset = offsetInfo.indiceOffset, vertexId = offsetInfo.vertexOffset;
        var ins = this.indicesArr;
        for (var i = 0; i < iData.length; i++) ibuf[indiceOffset++] = vertexId + ins[i];
      };
      TextureAssembler.prototype.packToDynamicAtlas = function(comp, frame) {
        false;
        if (!frame._original && cc.dynamicAtlasManager && frame._texture.packable) {
          var packedFrame = cc.dynamicAtlasManager.insertSpriteFrame(frame);
          packedFrame && frame._setDynamicAtlasFrame(packedFrame);
        }
        var material = comp._materials[0];
        if (!material) return;
        if (material.getProperty("texture") !== frame._texture) {
          comp._vertsDirty = true;
          comp._updateMaterial();
        }
      };
      return TextureAssembler;
    }(cc.Assembler);
    exports.default = TextureAssembler;
    cc._RF.pop();
  }, {
    "../Utils/CommonUtils": "CommonUtils"
  } ],
  TexturePlus: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "58ad8KR/hRJi7EtoZ+PAyOU", "TexturePlus");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TextureAssembler_1 = require("../Assemblers/TextureAssembler");
    var CommonUtils_1 = require("../Utils/CommonUtils");
    var renderEngine = cc.renderer.renderEngine;
    var TextureType;
    (function(TextureType) {
      TextureType[TextureType["Cut"] = 0] = "Cut";
      TextureType[TextureType["Stretch"] = 1] = "Stretch";
    })(TextureType || (TextureType = {}));
    var _vec2_temp = new cc.Vec2();
    var _mat4_temp = new cc.Mat4();
    var _a = cc._decorator, ccclass = _a.ccclass, inspector = _a.inspector, executeInEditMode = _a.executeInEditMode, mixins = _a.mixins, property = _a.property;
    var TexturePlus = function(_super) {
      __extends(TexturePlus, _super);
      function TexturePlus() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._texture = null;
        _this._type = 0;
        _this._polygon = [];
        _this.editing = false;
        _this._assembler = null;
        return _this;
      }
      Object.defineProperty(TexturePlus.prototype, "texture", {
        get: function() {
          return this._texture;
        },
        set: function(val) {
          this._texture = val;
          var l = -val.width / 2, b = -val.height / 2, t = val.height / 2, r = val.width / 2;
          this.polygon = [ cc.v2(l, b), cc.v2(r, b), cc.v2(r, t), cc.v2(l, t) ];
          this._updateMaterial();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(TexturePlus.prototype, "type", {
        get: function() {
          return this._type;
        },
        set: function(val) {
          this._type = val;
          this.setVertsDirty();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(TexturePlus.prototype, "polygon", {
        get: function() {
          return this._polygon;
        },
        set: function(points) {
          this._polygon = points;
          this._updateVerts();
        },
        enumerable: false,
        configurable: true
      });
      TexturePlus.prototype.onLoad = function() {
        this.node["_hitTest"] = this._hitTest.bind(this);
      };
      TexturePlus.prototype.start = function() {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function() {
          console.log("click texture plus");
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
          _this.node.x += e.getDeltaX();
          _this.node.y += e.getDeltaY();
        }, this);
      };
      TexturePlus.prototype._updateVerts = function() {
        this.setVertsDirty();
      };
      TexturePlus.prototype._updateMaterial = function() {
        var texture = this._texture;
        var material = this.getMaterial(0);
        if (material) {
          void 0 !== material.getDefine("USE_TEXTURE") && material.define("USE_TEXTURE", true);
          material.setProperty("texture", texture);
        }
        this.setVertsDirty();
      };
      TexturePlus.prototype._validateRender = function() {};
      TexturePlus.prototype._resetAssembler = function() {
        var assembler = this._assembler = new TextureAssembler_1.default();
        assembler.init(this);
        this._updateColor();
        this.setVertsDirty();
      };
      TexturePlus.prototype._hitTest = function(cameraPt) {
        var node = this.node;
        var size = node.getContentSize(), w = size.width, h = size.height, testPt = _vec2_temp;
        node["_updateWorldMatrix"]();
        if (!cc.Mat4.invert(_mat4_temp, node["_worldMatrix"])) return false;
        cc.Vec2.transformMat4(testPt, cameraPt, _mat4_temp);
        return CommonUtils_1.CommonUtils.isInPolygon(testPt, this.polygon);
      };
      TexturePlus.Type = TextureType;
      __decorate([ property(cc.Texture2D) ], TexturePlus.prototype, "_texture", void 0);
      __decorate([ property(cc.Texture2D) ], TexturePlus.prototype, "texture", null);
      __decorate([ property({
        type: cc.Enum(TextureType),
        serializable: true
      }) ], TexturePlus.prototype, "type", null);
      __decorate([ property({
        type: [ cc.Vec2 ],
        serializable: true
      }) ], TexturePlus.prototype, "_polygon", void 0);
      __decorate([ property({
        type: [ cc.Vec2 ],
        serializable: true
      }) ], TexturePlus.prototype, "polygon", null);
      __decorate([ property(cc.Boolean) ], TexturePlus.prototype, "editing", void 0);
      TexturePlus = __decorate([ ccclass, executeInEditMode ], TexturePlus);
      return TexturePlus;
    }(cc.RenderComponent);
    exports.default = TexturePlus;
    cc._RF.pop();
  }, {
    "../Assemblers/TextureAssembler": "TextureAssembler",
    "../Utils/CommonUtils": "CommonUtils"
  } ],
  TipsForm: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "19b60D7M2pKq6gEI5Arh6P/", "TipsForm");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CocosHelper_1 = require("./CocosHelper");
    var UIBase_1 = require("./UIBase");
    var SysDefine_1 = require("./config/SysDefine");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TipsForm = function(_super) {
      __extends(TipsForm, _super);
      function TipsForm() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.tips = null;
        _this.formType = SysDefine_1.FormType.TopTips;
        return _this;
      }
      TipsForm_1 = TipsForm;
      TipsForm.popUp = function(url, params) {
        return __awaiter(this, void 0, void 0, function() {
          var prefab, node, com;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, CocosHelper_1.default.loadResSync(url, cc.Prefab) ];

             case 1:
              prefab = _a.sent();
              if (!prefab) return [ 2 ];
              node = cc.instantiate(prefab);
              com = node.getComponent(TipsForm_1);
              com.tips.string = params;
              return [ 4, com.exitAnim() ];

             case 2:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      TipsForm.prototype.start = function() {};
      TipsForm.prototype.exitAnim = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, CocosHelper_1.default.runActionSync(this.node, cc.moveBy(1.2, 0, 30)) ];

             case 1:
              _a.sent();
              this.node.removeFromParent();
              this.node.destroy();
              return [ 2 ];
            }
          });
        });
      };
      var TipsForm_1;
      __decorate([ property(cc.Label) ], TipsForm.prototype, "tips", void 0);
      TipsForm = TipsForm_1 = __decorate([ ccclass ], TipsForm);
      return TipsForm;
    }(UIBase_1.default);
    exports.default = TipsForm;
    cc._RF.pop();
  }, {
    "./CocosHelper": "CocosHelper",
    "./UIBase": "UIBase",
    "./config/SysDefine": "SysDefine"
  } ],
  TipsMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6203812cXtNHJ8vqmVbOWHK", "TipsMgr");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    var __spreadArrays = this && this.__spreadArrays || function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
      k++) r[k] = a[j];
      return r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UIManager_1 = require("./UIManager");
    var UIToast_1 = require("../test/UIToast");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TipsMgr = function() {
      function TipsMgr() {}
      TipsMgr_1 = TipsMgr;
      Object.defineProperty(TipsMgr, "inst", {
        get: function() {
          null == this._instance && (this._instance = new TipsMgr_1());
          return this._instance;
        },
        enumerable: false,
        configurable: true
      });
      TipsMgr.prototype.setLoadingForm = function(loadingName) {
        this.loadingFormName = loadingName;
      };
      TipsMgr.prototype.showLoadingForm = function() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) params[_i] = arguments[_i];
        return __awaiter(this, void 0, void 0, function() {
          var _a;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              if (!this.loadingFormName || this.loadingFormName.length <= 0) {
                cc.warn("\u8bf7\u5148\u8bbe\u7f6eloading form");
                return [ 2 ];
              }
              return [ 4, (_a = UIManager_1.default.getInstance()).openUIForm.apply(_a, __spreadArrays([ this.loadingFormName ], params)) ];

             case 1:
              _b.sent();
              return [ 2 ];
            }
          });
        });
      };
      TipsMgr.prototype.hideLoadingForm = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, UIManager_1.default.getInstance().closeUIForm(this.loadingFormName) ];

             case 1:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      TipsMgr.prototype.setTipsForm = function(tipsFormName) {
        this.tipsFormName = tipsFormName;
      };
      TipsMgr.prototype.showToast = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, UIToast_1.default.popUp() ];

             case 1:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      var TipsMgr_1;
      TipsMgr._instance = null;
      TipsMgr = TipsMgr_1 = __decorate([ ccclass ], TipsMgr);
      return TipsMgr;
    }();
    exports.default = TipsMgr;
    cc._RF.pop();
  }, {
    "../test/UIToast": "UIToast",
    "./UIManager": "UIManager"
  } ],
  TouchPlus: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1c88eM+YFpH45yVr93vRF2l", "TouchPlus");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TouchPlus = function(_super) {
      __extends(TouchPlus, _super);
      function TouchPlus() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.offset = 15;
        _this.isTouch = false;
        _this.isClick = true;
        return _this;
      }
      TouchPlus.prototype.addEvent = function(click, slide) {
        this.clickEvent = click;
        this.slideEvent = slide;
      };
      TouchPlus.prototype.start = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
      };
      TouchPlus.prototype.touchStart = function(e) {
        this.isTouch = true;
        this.startPosition = e.getLocation();
      };
      TouchPlus.prototype.touchMove = function(e) {
        if (!this.isTouch) return;
        var pos = e.getLocation();
        var len = pos.sub(this.startPosition).mag();
        if (len > this.offset) {
          this.isClick = false;
          this.slideEvent && this.slideEvent(e);
        }
      };
      TouchPlus.prototype.touchEnd = function(e) {
        if (!this.isTouch) return;
        this.isTouch = false;
        this.isClick && this.clickEvent && this.clickEvent(e);
        this.isClick = true;
      };
      TouchPlus.prototype.touchCancel = function(e) {
        if (!this.isTouch) return;
        this.isTouch = false;
        this.isClick = true;
      };
      TouchPlus.prototype.onDestroy = function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
      };
      TouchPlus = __decorate([ ccclass ], TouchPlus);
      return TouchPlus;
    }(cc.Component);
    exports.default = TouchPlus;
    cc._RF.pop();
  }, {} ],
  UIBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5ba19xmlHJNg4x0oLeSB7Ay", "UIBase");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    var __spreadArrays = this && this.__spreadArrays || function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
      k++) r[k] = a[j];
      return r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CocosHelper_1 = require("./CocosHelper");
    var UIManager_1 = require("./UIManager");
    var SysDefine_1 = require("./config/SysDefine");
    var FrameType_1 = require("./FrameType");
    var AdapterMgr_1 = require("./AdapterMgr");
    var TipsMgr_1 = require("./TipsMgr");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UIBase = function(_super) {
      __extends(UIBase, _super);
      function UIBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.formType = 0;
        _this.maskType = new FrameType_1.MaskType();
        _this.canDestory = false;
        _this._inited = false;
        _this.model = null;
        _this._blocker = null;
        return _this;
      }
      Object.defineProperty(UIBase, "prefabPath", {
        get: function() {
          if (!this._prefabPath || this._prefabPath.length <= 0) {
            this._prefabPath = SysDefine_1.SysDefine.UI_PATH_ROOT + CocosHelper_1.default.getComponentName(this);
            console.log("component name:", CocosHelper_1.default.getComponentName(this));
          }
          return this._prefabPath;
        },
        set: function(path) {
          this._prefabPath = path;
        },
        enumerable: false,
        configurable: true
      });
      UIBase.openView = function() {
        var parmas = [];
        for (var _i = 0; _i < arguments.length; _i++) parmas[_i] = arguments[_i];
        return __awaiter(this, void 0, Promise, function() {
          var _a;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              return [ 4, (_a = UIManager_1.default.getInstance()).openUIForm.apply(_a, __spreadArrays([ this.prefabPath ], parmas)) ];

             case 1:
              return [ 2, _b.sent() ];
            }
          });
        });
      };
      UIBase.openViewWithLoading = function() {
        var parmas = [];
        for (var _i = 0; _i < arguments.length; _i++) parmas[_i] = arguments[_i];
        return __awaiter(this, void 0, Promise, function() {
          var uiBase;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, TipsMgr_1.default.inst.showLoadingForm(this.prefabPath) ];

             case 1:
              _a.sent();
              return [ 4, this.openView.apply(this, parmas) ];

             case 2:
              uiBase = _a.sent();
              return [ 4, TipsMgr_1.default.inst.hideLoadingForm() ];

             case 3:
              _a.sent();
              return [ 2, uiBase ];
            }
          });
        });
      };
      UIBase.closeView = function() {
        return __awaiter(this, void 0, Promise, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, UIManager_1.default.getInstance().closeUIForm(this.prefabPath) ];

             case 1:
              return [ 2, _a.sent() ];
            }
          });
        });
      };
      UIBase.prototype._preInit = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (this._inited) return [ 2 ];
              this._inited = true;
              this.view = this.getComponent(this.node.name + "_Auto");
              autorun(this.refreshView.bind(this));
              return [ 4, this.load() ];

             case 1:
              _a.sent();
              this.onInit();
              return [ 2 ];
            }
          });
        });
      };
      UIBase.prototype.refreshView = function(r) {};
      UIBase.prototype.load = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [ 2 ];
          });
        });
      };
      UIBase.prototype.onInit = function() {};
      UIBase.prototype.onShow = function() {
        var obj = [];
        for (var _i = 0; _i < arguments.length; _i++) obj[_i] = arguments[_i];
      };
      UIBase.prototype.onHide = function() {};
      UIBase.prototype.waitPromise = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          _this._cb = function(confirm) {
            resolve(confirm);
          };
        });
      };
      UIBase.prototype.showUIForm = function(uiFormName) {
        var obj = [];
        for (var _i = 1; _i < arguments.length; _i++) obj[_i - 1] = arguments[_i];
        return __awaiter(this, void 0, Promise, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, UIManager_1.default.getInstance().openUIForm(uiFormName, obj) ];

             case 1:
              return [ 2, _a.sent() ];
            }
          });
        });
      };
      UIBase.prototype.closeUIForm = function() {
        return __awaiter(this, void 0, Promise, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, UIManager_1.default.getInstance().closeUIForm(this.uid) ];

             case 1:
              return [ 2, _a.sent() ];
            }
          });
        });
      };
      UIBase.prototype.showAnimation = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!(this.formType === SysDefine_1.FormType.PopUp)) return [ 3, 2 ];
              this.node.scale = 0;
              return [ 4, CocosHelper_1.default.runTweenSync(this.node, cc.tween().to(.3, {
                scale: 1
              }, cc.easeBackOut())) ];

             case 1:
              _a.sent();
              _a.label = 2;

             case 2:
              return [ 2 ];
            }
          });
        });
      };
      UIBase.prototype.hideAnimation = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [ 2 ];
          });
        });
      };
      UIBase.prototype.setBlockInput = function(block) {
        if (!this._blocker) {
          var node = new cc.Node("block_input_events");
          this._blocker = node.addComponent(cc.BlockInputEvents);
          this._blocker.node.setContentSize(AdapterMgr_1.default.inst.visibleSize);
          this.node.addChild(this._blocker.node, cc.macro.MAX_ZINDEX);
        }
        this._blocker.node.active = block;
      };
      UIBase._prefabPath = "";
      __decorate([ observable ], UIBase.prototype, "model", void 0);
      UIBase = __decorate([ ccclass ], UIBase);
      return UIBase;
    }(cc.Component);
    exports.default = UIBase;
    cc._RF.pop();
  }, {
    "./AdapterMgr": "AdapterMgr",
    "./CocosHelper": "CocosHelper",
    "./FrameType": "FrameType",
    "./TipsMgr": "TipsMgr",
    "./UIManager": "UIManager",
    "./config/SysDefine": "SysDefine"
  } ],
  UIBinder: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a5644JDD31Is5mBaTbYG2Kk", "UIBinder");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UIBinder = function(_super) {
      __extends(UIBinder, _super);
      function UIBinder() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._Nodes = cc.js.createMap();
        _this._Labels = cc.js.createMap();
        _this._Buttons = cc.js.createMap();
        _this._Sprites = cc.js.createMap();
        _this._RichTexts = cc.js.createMap();
        _this._MotionStreaks = cc.js.createMap();
        _this._Graphicss = cc.js.createMap();
        _this._EditBoxs = cc.js.createMap();
        _this._ScrollViews = cc.js.createMap();
        _this._ProgressBars = cc.js.createMap();
        _this._Sliders = cc.js.createMap();
        _this._ButtonPlus = cc.js.createMap();
        _this._PageViews = cc.js.createMap();
        return _this;
      }
      UIBinder.prototype.start = function() {};
      UIBinder = __decorate([ ccclass ], UIBinder);
      return UIBinder;
    }(cc.Component);
    exports.default = UIBinder;
    cc._RF.pop();
  }, {} ],
  UIManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f18581vC/JBkoXNDtnFIDo4", "UIManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    var __spreadArrays = this && this.__spreadArrays || function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
      k++) r[k] = a[j];
      return r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UIBase_1 = require("./UIBase");
    var SysDefine_1 = require("./config/SysDefine");
    var ResMgr_1 = require("./ResMgr");
    var ModalMgr_1 = require("./ModalMgr");
    var AdapterMgr_1 = require("./AdapterMgr");
    var Scene_1 = require("../Scene/Scene");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UIManager = function(_super) {
      __extends(UIManager, _super);
      function UIManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._NoNormal = null;
        _this._NoFixed = null;
        _this._NoPopUp = null;
        _this._NoTips = null;
        _this._StaCurrentUIForms = [];
        _this._MapAllUIForms = cc.js.createMap();
        _this._MapCurrentShowUIForms = cc.js.createMap();
        _this._MapIndependentForms = cc.js.createMap();
        _this._LoadingForm = cc.js.createMap();
        _this._currWindowId = "";
        _this._currScreenId = "";
        return _this;
      }
      UIManager_1 = UIManager;
      Object.defineProperty(UIManager.prototype, "currWindowId", {
        get: function() {
          return this._currWindowId;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UIManager.prototype, "currScreenId", {
        get: function() {
          return this._currScreenId;
        },
        enumerable: false,
        configurable: true
      });
      UIManager.getInstance = function() {
        var _this = this;
        if (null == this.instance) {
          var canvas = cc.director.getScene().getChildByName("Canvas");
          var scene = canvas.getChildByName(SysDefine_1.SysDefine.SYS_SCENE_NODE);
          if (!scene) {
            scene = new cc.Node(SysDefine_1.SysDefine.SYS_SCENE_NODE);
            scene.addComponent(Scene_1.default);
            scene.parent = canvas;
          }
          var UIROOT = new cc.Node(SysDefine_1.SysDefine.SYS_UIROOT_NODE);
          scene.addChild(UIROOT);
          UIROOT.addChild(new cc.Node(SysDefine_1.SysDefine.SYS_SCREEN_NODE));
          UIROOT.addChild(new cc.Node(SysDefine_1.SysDefine.SYS_FIXEDUI_NODE));
          UIROOT.addChild(new cc.Node(SysDefine_1.SysDefine.SYS_POPUP_NODE));
          UIROOT.addChild(new cc.Node(SysDefine_1.SysDefine.SYS_TOPTIPS_NODE));
          console.log(cc.director.getScene());
          this.instance = cc.find(SysDefine_1.SysDefine.SYS_UIROOT_NAME).addComponent(this);
          cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, function() {
            _this.instance = null;
          });
        }
        return this.instance;
      };
      UIManager.prototype.onLoad = function() {
        this._NoNormal = this.node.getChildByName(SysDefine_1.SysDefine.SYS_SCREEN_NODE);
        this._NoFixed = this.node.getChildByName(SysDefine_1.SysDefine.SYS_FIXEDUI_NODE);
        this._NoPopUp = this.node.getChildByName(SysDefine_1.SysDefine.SYS_POPUP_NODE);
        this._NoTips = this.node.getChildByName(SysDefine_1.SysDefine.SYS_TOPTIPS_NODE);
      };
      UIManager.prototype.start = function() {};
      UIManager.prototype.getComponentByUid = function(uid) {
        return this._MapAllUIForms[uid];
      };
      UIManager.prototype.loadUIForms = function() {
        var uibases = [];
        for (var _i = 0; _i < arguments.length; _i++) uibases[_i] = arguments[_i];
        return __awaiter(this, void 0, void 0, function() {
          var _a, uibases_1, uibase, uiBase;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              _a = 0, uibases_1 = uibases;
              _b.label = 1;

             case 1:
              if (!(_a < uibases_1.length)) return [ 3, 4 ];
              uibase = uibases_1[_a];
              return [ 4, this.loadFormsToAllUIFormsCatch(uibase.prefabPath) ];

             case 2:
              uiBase = _b.sent();
              uiBase || console.warn(uiBase + "\u6ca1\u6709\u88ab\u6210\u529f\u52a0\u8f7d");
              _b.label = 3;

             case 3:
              _a++;
              return [ 3, 1 ];

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.openUIForm = function(prefabPath) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) params[_i - 1] = arguments[_i];
        return __awaiter(this, void 0, void 0, function() {
          var uiBase, _a;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              if ("" === prefabPath || null == prefabPath) return [ 2 ];
              if (this.checkUIFormIsShowing(prefabPath) || this.checkUIFormIsLoading(prefabPath)) {
                cc.warn(prefabPath + "\u7a97\u4f53\u5df2\u7ecf\u5728\u663e\u793a,\u6216\u8005\u6b63\u5728\u52a0\u8f7d\u4e2d!");
                return [ 2, null ];
              }
              return [ 4, this.loadFormsToAllUIFormsCatch(prefabPath) ];

             case 1:
              uiBase = _b.sent();
              if (null == uiBase) {
                cc.warn(prefabPath + "\u672a\u52a0\u8f7d!");
                return [ 2, null ];
              }
              uiBase.uid = prefabPath;
              _a = uiBase.formType;
              switch (_a) {
               case SysDefine_1.FormType.Screen:
                return [ 3, 2 ];

               case SysDefine_1.FormType.FixedUI:
                return [ 3, 4 ];

               case SysDefine_1.FormType.PopUp:
                return [ 3, 6 ];

               case SysDefine_1.FormType.TopTips:
                return [ 3, 8 ];
              }
              return [ 3, 10 ];

             case 2:
              return [ 4, this.enterUIFormsAndHideOther.apply(this, __spreadArrays([ prefabPath ], params)) ];

             case 3:
              _b.sent();
              return [ 3, 10 ];

             case 4:
              return [ 4, this.loadUIToCurrentCache.apply(this, __spreadArrays([ prefabPath ], params)) ];

             case 5:
              _b.sent();
              return [ 3, 10 ];

             case 6:
              return [ 4, this.pushUIFormToStack.apply(this, __spreadArrays([ prefabPath ], params)) ];

             case 7:
              _b.sent();
              return [ 3, 10 ];

             case 8:
              return [ 4, this.loadUIFormsToIndependent.apply(this, __spreadArrays([ prefabPath ], params)) ];

             case 9:
              _b.sent();
              return [ 3, 10 ];

             case 10:
              return [ 2, uiBase ];
            }
          });
        });
      };
      UIManager.prototype.closeUIForm = function(prefabPath) {
        return __awaiter(this, void 0, void 0, function() {
          var UIBase, _a;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              if ("" == prefabPath || null == prefabPath) return [ 2 ];
              UIBase = this._MapAllUIForms[prefabPath];
              if (null == UIBase) return [ 2, true ];
              _a = UIBase.formType;
              switch (_a) {
               case SysDefine_1.FormType.Screen:
                return [ 3, 1 ];

               case SysDefine_1.FormType.FixedUI:
                return [ 3, 3 ];

               case SysDefine_1.FormType.PopUp:
                return [ 3, 5 ];

               case SysDefine_1.FormType.TopTips:
                return [ 3, 7 ];
              }
              return [ 3, 9 ];

             case 1:
              return [ 4, this.exitUIFormsAndDisplayOther(prefabPath) ];

             case 2:
              _b.sent();
              return [ 3, 9 ];

             case 3:
              return [ 4, this.exitUIForms(prefabPath) ];

             case 4:
              _b.sent();
              return [ 3, 9 ];

             case 5:
              return [ 4, this.popUIForm() ];

             case 6:
              _b.sent();
              return [ 3, 9 ];

             case 7:
              return [ 4, this.exitIndependentForms(prefabPath) ];

             case 8:
              _b.sent();
              return [ 3, 9 ];

             case 9:
              UIBase.canDestory && this.destoryForm(UIBase, prefabPath);
              return [ 2, true ];
            }
          });
        });
      };
      UIManager.prototype.loadFormsToAllUIFormsCatch = function(prefabPath) {
        return __awaiter(this, void 0, void 0, function() {
          var baseUIResult;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              baseUIResult = this._MapAllUIForms[prefabPath];
              if (!(null == baseUIResult && !this._LoadingForm[prefabPath])) return [ 3, 2 ];
              this._LoadingForm[prefabPath] = true;
              return [ 4, this.loadUIForm(prefabPath) ];

             case 1:
              baseUIResult = _a.sent();
              this._LoadingForm[prefabPath] = false;
              delete this._LoadingForm[prefabPath];
              _a.label = 2;

             case 2:
              return [ 2, baseUIResult ];
            }
          });
        });
      };
      UIManager.prototype.loadUIForm = function(formPath) {
        return __awaiter(this, void 0, void 0, function() {
          var pre, node, baseUI;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if ("" == formPath || null == formPath) return [ 2 ];
              return [ 4, ResMgr_1.default.inst.loadForm(formPath) ];

             case 1:
              pre = _a.sent();
              if (!pre) {
                cc.warn(formPath + " \u8d44\u6e90\u52a0\u8f7d\u5931\u8d25, \u8bf7\u786e\u8ba4\u8def\u5f84\u662f\u5426\u6b63\u786e");
                return [ 2 ];
              }
              node = cc.instantiate(pre);
              baseUI = node.getComponent(UIBase_1.default);
              if (null == baseUI) {
                cc.warn(formPath + " \u6ca1\u6709\u7ed1\u5b9aUIBase\u7684Component");
                return [ 2 ];
              }
              node.active = false;
              switch (baseUI.formType) {
               case SysDefine_1.FormType.Screen:
                UIManager_1.getInstance()._NoNormal.addChild(node);
                break;

               case SysDefine_1.FormType.FixedUI:
                UIManager_1.getInstance()._NoFixed.addChild(node);
                break;

               case SysDefine_1.FormType.PopUp:
                UIManager_1.getInstance()._NoPopUp.addChild(node);
                break;

               case SysDefine_1.FormType.TopTips:
                UIManager_1.getInstance()._NoTips.addChild(node);
              }
              this._MapAllUIForms[formPath] = baseUI;
              return [ 2, baseUI ];
            }
          });
        });
      };
      UIManager.prototype.clearStackArray = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _i, _a, baseUI;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              if (null == this._StaCurrentUIForms || this._StaCurrentUIForms.length <= 0) return [ 2 ];
              _i = 0, _a = this._StaCurrentUIForms;
              _b.label = 1;

             case 1:
              if (!(_i < _a.length)) return [ 3, 4 ];
              baseUI = _a[_i];
              return [ 4, baseUI.closeUIForm() ];

             case 2:
              _b.sent();
              _b.label = 3;

             case 3:
              _i++;
              return [ 3, 1 ];

             case 4:
              this._StaCurrentUIForms = [];
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.closeTopStackUIForm = function() {
        if (null != this._StaCurrentUIForms && this._StaCurrentUIForms.length >= 1) {
          var uiFrom = this._StaCurrentUIForms[this._StaCurrentUIForms.length - 1];
          uiFrom.maskType.clickMaskClose && uiFrom.closeUIForm();
        }
      };
      UIManager.prototype.loadUIToCurrentCache = function(prefabPath) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) params[_i - 1] = arguments[_i];
        return __awaiter(this, void 0, void 0, function() {
          var UIBase, UIBaseFromAllCache;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              UIBase = null;
              UIBaseFromAllCache = null;
              UIBase = this._MapCurrentShowUIForms[prefabPath];
              if (null != UIBase) return [ 2 ];
              UIBaseFromAllCache = this._MapAllUIForms[prefabPath];
              if (!(null != UIBaseFromAllCache)) return [ 3, 3 ];
              return [ 4, UIBaseFromAllCache._preInit() ];

             case 1:
              _a.sent();
              this._MapCurrentShowUIForms[prefabPath] = UIBaseFromAllCache;
              UIBaseFromAllCache.onShow.apply(UIBaseFromAllCache, params);
              return [ 4, this.showForm(UIBaseFromAllCache) ];

             case 2:
              _a.sent();
              _a.label = 3;

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.pushUIFormToStack = function(prefabPath) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) params[_i - 1] = arguments[_i];
        return __awaiter(this, void 0, void 0, function() {
          var topUIForm, baseUI;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this._StaCurrentUIForms.length > 0 && (topUIForm = this._StaCurrentUIForms[this._StaCurrentUIForms.length - 1]);
              baseUI = this._MapAllUIForms[prefabPath];
              if (null == baseUI) return [ 2 ];
              return [ 4, baseUI._preInit() ];

             case 1:
              _a.sent();
              this._StaCurrentUIForms.push(baseUI);
              baseUI.node.zIndex = this._StaCurrentUIForms.length;
              baseUI.onShow.apply(baseUI, params);
              this._currWindowId = baseUI.uid;
              ModalMgr_1.default.inst.checkModalWindow(this._StaCurrentUIForms);
              return [ 4, this.showForm(baseUI) ];

             case 2:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.enterUIFormsAndHideOther = function(prefabPath) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) params[_i - 1] = arguments[_i];
        return __awaiter(this, void 0, void 0, function() {
          var UIBase, _a, _b, _c, key, UIBaseFromAll;
          var _this = this;
          return __generator(this, function(_d) {
            switch (_d.label) {
             case 0:
              UIBase = this._MapCurrentShowUIForms[prefabPath];
              if (null != UIBase) return [ 2 ];
              _a = [];
              for (_b in this._MapCurrentShowUIForms) _a.push(_b);
              _c = 0;
              _d.label = 1;

             case 1:
              if (!(_c < _a.length)) return [ 3, 4 ];
              key = _a[_c];
              return [ 4, this._MapCurrentShowUIForms[key].closeUIForm() ];

             case 2:
              _d.sent();
              _d.label = 3;

             case 3:
              _c++;
              return [ 3, 1 ];

             case 4:
              this._StaCurrentUIForms.forEach(function(uiForm) {
                return __awaiter(_this, void 0, void 0, function() {
                  return __generator(this, function(_a) {
                    switch (_a.label) {
                     case 0:
                      return [ 4, uiForm.closeUIForm() ];

                     case 1:
                      _a.sent();
                      return [ 2 ];
                    }
                  });
                });
              });
              UIBaseFromAll = this._MapAllUIForms[prefabPath];
              if (null == UIBaseFromAll) return [ 2 ];
              AdapterMgr_1.default.inst.adapatByType(AdapterMgr_1.AdaptaterType.FullScreen, UIBaseFromAll.node);
              return [ 4, UIBaseFromAll._preInit() ];

             case 5:
              _d.sent();
              this._MapCurrentShowUIForms[prefabPath] = UIBaseFromAll;
              UIBaseFromAll.onShow.apply(UIBaseFromAll, params);
              this._currScreenId = UIBaseFromAll.uid;
              return [ 4, this.showForm(UIBaseFromAll) ];

             case 6:
              _d.sent();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.loadUIFormsToIndependent = function(prefabPath) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) params[_i - 1] = arguments[_i];
        return __awaiter(this, void 0, void 0, function() {
          var UIBase;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              UIBase = this._MapAllUIForms[prefabPath];
              if (null == UIBase) return [ 2 ];
              return [ 4, UIBase._preInit() ];

             case 1:
              _a.sent();
              this._MapIndependentForms[prefabPath] = UIBase;
              UIBase.onShow.apply(UIBase, params);
              return [ 4, this.showForm(UIBase) ];

             case 2:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.exitUIForms = function(prefabPath) {
        return __awaiter(this, void 0, void 0, function() {
          var UIBase;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              UIBase = this._MapAllUIForms[prefabPath];
              if (null == UIBase) return [ 2 ];
              UIBase.onHide();
              return [ 4, this.hideForm(UIBase) ];

             case 1:
              _a.sent();
              this._MapCurrentShowUIForms[prefabPath] = null;
              delete this._MapCurrentShowUIForms[prefabPath];
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.popUIForm = function() {
        return __awaiter(this, void 0, void 0, function() {
          var topUIForm;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!(this._StaCurrentUIForms.length >= 1)) return [ 3, 2 ];
              topUIForm = this._StaCurrentUIForms.pop();
              topUIForm.onHide();
              ModalMgr_1.default.inst.checkModalWindow(this._StaCurrentUIForms);
              return [ 4, this.hideForm(topUIForm) ];

             case 1:
              _a.sent();
              this._currWindowId = this._StaCurrentUIForms.length > 0 ? this._StaCurrentUIForms[this._StaCurrentUIForms.length - 1].uid : "";
              _a.label = 2;

             case 2:
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.exitUIFormsAndDisplayOther = function(prefabPath) {
        return __awaiter(this, void 0, void 0, function() {
          var UIBase;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if ("" == prefabPath || null == prefabPath) return [ 2 ];
              UIBase = this._MapCurrentShowUIForms[prefabPath];
              if (null == UIBase) return [ 2 ];
              UIBase.onHide();
              return [ 4, this.hideForm(UIBase) ];

             case 1:
              _a.sent();
              this._MapCurrentShowUIForms[prefabPath] = null;
              delete this._MapCurrentShowUIForms[prefabPath];
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.exitIndependentForms = function(prefabPath) {
        return __awaiter(this, void 0, void 0, function() {
          var UIBase;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              UIBase = this._MapAllUIForms[prefabPath];
              if (null == UIBase) return [ 2 ];
              UIBase.onHide();
              return [ 4, this.hideForm(UIBase) ];

             case 1:
              _a.sent();
              this._MapIndependentForms[prefabPath] = null;
              delete this._MapIndependentForms[prefabPath];
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showForm = function(baseUI) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              baseUI.node.active = true;
              return [ 4, baseUI.showAnimation() ];

             case 1:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.hideForm = function(baseUI) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, baseUI.hideAnimation() ];

             case 1:
              _a.sent();
              baseUI.node.active = false;
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.destoryForm = function(UIBase, prefabPath) {
        ResMgr_1.default.inst.destoryForm(UIBase);
        this._MapAllUIForms[prefabPath] = null;
        delete this._MapAllUIForms[prefabPath];
      };
      UIManager.prototype.checkUIFormIsShowing = function(prefabPath) {
        var UIBases = this._MapAllUIForms[prefabPath];
        if (null == UIBases) return false;
        return UIBases.node.active;
      };
      UIManager.prototype.checkUIFormIsLoading = function(prefabPath) {
        var UIBase = this._LoadingForm[prefabPath];
        return !!UIBase;
      };
      var UIManager_1;
      UIManager.instance = null;
      UIManager = UIManager_1 = __decorate([ ccclass ], UIManager);
      return UIManager;
    }(cc.Component);
    exports.default = UIManager;
    cc._RF.pop();
  }, {
    "../Scene/Scene": "Scene",
    "./AdapterMgr": "AdapterMgr",
    "./ModalMgr": "ModalMgr",
    "./ResMgr": "ResMgr",
    "./UIBase": "UIBase",
    "./config/SysDefine": "SysDefine"
  } ],
  UIModalScript: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a6a5a+wskdJZJdS5tPl1qBP", "UIModalScript");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UIManager_1 = require("./UIManager");
    var SysDefine_1 = require("./config/SysDefine");
    var CocosHelper_1 = require("./CocosHelper");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UIModalScript = function(_super) {
      __extends(UIModalScript, _super);
      function UIModalScript() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._texture = null;
        return _this;
      }
      UIModalScript.prototype.getSingleTexture = function() {
        if (this._texture) return this._texture;
        var data = new Uint8Array(16);
        for (var i = 0; i < 2; i++) for (var j = 0; j < 2; j++) {
          data[2 * i * 4 + 4 * j + 0] = 255;
          data[2 * i * 4 + 4 * j + 1] = 255;
          data[2 * i * 4 + 4 * j + 2] = 255;
          data[2 * i * 4 + 4 * j + 3] = 255;
        }
        var texture = new cc.Texture2D();
        texture.initWithData(data, cc.Texture2D.PixelFormat.RGBA8888, 2, 2);
        texture.handleLoadedTexture();
        this._texture = texture;
        return this._texture;
      };
      UIModalScript.prototype.init = function() {
        var maskTexture = this.getSingleTexture();
        var size = cc.view.getVisibleSize();
        this.node.height = size.height;
        this.node.width = size.width;
        this.node.addComponent(cc.Button);
        this.node.on("click", this.clickMaskWindow, this);
        var sprite = this.node.addComponent(cc.Sprite);
        sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        sprite.spriteFrame = new cc.SpriteFrame(maskTexture);
        this.node.color = new cc.Color(0, 0, 0);
        this.node.opacity = 0;
        this.node.active = true;
      };
      UIModalScript.prototype.showModal = function(lucenyType, time, isEasing) {
        void 0 === time && (time = .6);
        void 0 === isEasing && (isEasing = true);
        return __awaiter(this, void 0, void 0, function() {
          var o;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              o = 0;
              switch (lucenyType) {
               case SysDefine_1.ModalOpacity.None:
                this.node.active = false;
                break;

               case SysDefine_1.ModalOpacity.OpacityZero:
                o = 0;
                break;

               case SysDefine_1.ModalOpacity.OpacityLow:
                o = 63;
                break;

               case SysDefine_1.ModalOpacity.OpacityHalf:
                o = 126;
                break;

               case SysDefine_1.ModalOpacity.OpacityHigh:
                o = 189;
                break;

               case SysDefine_1.ModalOpacity.OpacityFull:
                o = 255;
              }
              if (!this.node.active) return [ 2 ];
              if (!isEasing) return [ 3, 2 ];
              return [ 4, CocosHelper_1.default.runTweenSync(this.node, cc.tween().to(time, {
                opacity: o
              })) ];

             case 1:
              _a.sent();
              return [ 3, 3 ];

             case 2:
              this.node.opacity = o;
              _a.label = 3;

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      UIModalScript.prototype.clickMaskWindow = function() {
        return __awaiter(this, void 0, void 0, function() {
          var com;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              com = UIManager_1.default.getInstance().getComponentByUid(this.uid);
              if (!(com && com.maskType.clickMaskClose)) return [ 3, 2 ];
              return [ 4, UIManager_1.default.getInstance().closeUIForm(this.uid) ];

             case 1:
              _a.sent();
              _a.label = 2;

             case 2:
              return [ 2 ];
            }
          });
        });
      };
      UIModalScript = __decorate([ ccclass ], UIModalScript);
      return UIModalScript;
    }(cc.Component);
    exports.default = UIModalScript;
    cc._RF.pop();
  }, {
    "./CocosHelper": "CocosHelper",
    "./UIManager": "UIManager",
    "./config/SysDefine": "SysDefine"
  } ],
  UIToast: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "205d5t/akpPMZhlvcdUHHPH", "UIToast");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CocosHelper_1 = require("../UIFrame/CocosHelper");
    var SysDefine_1 = require("../UIFrame/config/SysDefine");
    var Scene_1 = require("../Scene/Scene");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UIToast = function(_super) {
      __extends(UIToast, _super);
      function UIToast() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      UIToast_1 = UIToast;
      UIToast.popUp = function(str) {
        var _a;
        return __awaiter(this, void 0, void 0, function() {
          var prefab, node, parent, lab, error_1;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              Scene_1.default.inst.setInputBlock(true);
              _b.label = 1;

             case 1:
              _b.trys.push([ 1, 3, , 4 ]);
              return [ 4, CocosHelper_1.default.loadResSync("UIToast", cc.Prefab) ];

             case 2:
              prefab = _b.sent();
              node = cc.instantiate(prefab);
              parent = cc.find(SysDefine_1.SysDefine.SYS_UIROOT_NAME + "/" + SysDefine_1.SysDefine.SYS_TOPTIPS_NODE);
              if (!parent) return [ 2 ];
              parent.addChild(node);
              lab = null === (_a = node.getChildByName("label")) || void 0 === _a ? void 0 : _a.getComponent(cc.Label);
              lab && (lab.string = str);
              node.getComponent(UIToast_1).showAnim();
              return [ 3, 4 ];

             case 3:
              error_1 = _b.sent();
              Scene_1.default.inst.setInputBlock(false);
              return [ 2 ];

             case 4:
              Scene_1.default.inst.setInputBlock(false);
              return [ 2 ];
            }
          });
        });
      };
      UIToast.prototype.showAnim = function() {
        var _this = this;
        this.node.y = 0;
        this.node.opacity = 255;
        cc.tween(this.node).by(2, {
          position: cc.v3(0, 80, 0)
        }).to(.3, {
          opacity: 0
        }).call(function() {
          _this.node.destroy();
          _this.node.removeFromParent();
        }).start();
      };
      var UIToast_1;
      UIToast = UIToast_1 = __decorate([ ccclass ], UIToast);
      return UIToast;
    }(cc.Component);
    exports.default = UIToast;
    cc._RF.pop();
  }, {
    "../Scene/Scene": "Scene",
    "../UIFrame/CocosHelper": "CocosHelper",
    "../UIFrame/config/SysDefine": "SysDefine"
  } ],
  bullet: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aa334KGbAtEj7CnFxDjx6ha", "bullet");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        rigidBody: cc.RigidBody,
        dragonBone: dragonBones.ArmatureDisplay,
        buff: null
      },
      onLoad: function onLoad() {
        var _this = this;
        this.node.on("fire", function(data) {
          _this.data = data;
          _this.attacked = false;
          _this.canUpdate = false;
          "EnemyBullet" === _this.node.group && _this.node.parent.emit("bulletStart", _this.node.uuid);
          _this.extPrepare(_this.data);
        });
        this.node.on("addBuff", function(buffData) {
          _this.buff = buffData;
        });
      },
      start: function start() {
        var _this2 = this;
        this.dragonBone.on(dragonBones.EventObject.COMPLETE, function(event) {
          if (event.type === dragonBones.EventObject.COMPLETE && "end" === _this2.dragonBone.animationName) {
            "EnemyBullet" === _this2.node.group && _this2.node.parent.emit("bulletEnd", _this2.node.uuid);
            _this2.node.destroy();
          }
        }, this);
      },
      extPrepare: function extPrepare(data) {
        this.shoot(data);
      },
      shoot: function shoot(data) {
        var vec = !data.vec ? cc.v3(Math.sin(data.rot * Math.PI / 180), Math.cos(data.rot * Math.PI / 180)) : data.vec;
        "Roudan" === this.node.group && (data.speed *= 4);
        this.rigidBody.applyLinearImpulse(vec.mul(data.speed * this.rigidBody.getMass()), this.node.position);
      },
      onBeginContact: function onBeginContact(contact, selfCollider, otherCollider) {
        if (false === otherCollider.sensor) {
          if (false === selfCollider.sensor) {
            var worldManifold = contact.getWorldManifold();
            "Wall" !== otherCollider.node.group && otherCollider.node.name !== contact.colliderA.node.name || this.bubble({
              eventName: "spark",
              extData: {
                worldManifold: worldManifold.points[0]
              }
            });
          }
          switch (otherCollider.node.group) {
           case "Hero":
            "EnemyBullet" === selfCollider.node.group && this.Attack(otherCollider.node);
            break;

           case "Enemy":
            "HeroBullet" === selfCollider.node.group && this.Attack(otherCollider.node);
            if ("Roudan" === selfCollider.node.group) {
              this.Attack(otherCollider.node);
              contact.disabled = true;
            }
            break;

           case "Rock":
            this.Attack(otherCollider.node);
            break;

           case "Wall":
            this.End();
          }
        }
      },
      Attack: function Attack(target) {
        console.warn(this.data);
        target.emit("damageReturn", this.data);
        null !== this.buff && target.emit("addBuff", this.buff);
        this.End();
      },
      End: function End() {
        console.log("\u5b50\u5f39\u653b\u51fb\u7ed3\u675f");
        this.rigidBody.linearVelocity = cc.Vec2.ZERO;
        this.dragonBone.playAnimation("end", 1);
      },
      bubble: function bubble(data) {
        var e = new cc.Event.EventCustom(data.eventName, true);
        ({}).hasOwnProperty.call(data, "extData") && e.setUserData(data.extData);
        this.node.dispatchEvent(e);
      }
    });
    cc._RF.pop();
  }, {} ],
  daoguang: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e0c43kV9cNOGKS6V4RJPUZl", "daoguang");
    "use strict";
    cc.Class({
      extends: require("bullet"),
      start: function start() {
        var _this = this;
        this.dragonBone.on(dragonBones.EventObject.COMPLETE, function(event) {
          if (event.type === dragonBones.EventObject.COMPLETE && !_this.attacked) {
            console.log("\u5200\u5149\u653b\u51fb\u7ed3\u675f");
            _this.attacked = true;
            _this.scheduleOnce(function() {
              "EnemyBullet" === _this.node.group && _this.node.parent.emit("bulletEnd", _this.node.uuid);
              _this.node.destroy();
            }, .3);
          }
        }, this);
      },
      extPrepare: function extPrepare(data) {
        console.log(data);
      },
      End: function End() {
        console.log("\u5200\u5149\u653b\u51fb\u5230\u654c\u4eba");
      }
    });
    cc._RF.pop();
  }, {
    bullet: "bullet"
  } ],
  dummy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6e833QtenhKOpFvD+/PXHdT", "dummy");
    "use strict";
    cc.Class({
      extends: require("bullet"),
      properties: {},
      start: function start() {
        this._InitialScaleX = this.dragonBone.node.scaleX;
        this._InitialPositionX = this.dragonBone.node.position.x;
      },
      extPrepare: function extPrepare(data) {
        var _this = this;
        "Roudan" === this.node.group && this.data.source.children.forEach(function(child) {
          child.active = false;
        });
        this.shoot(data);
        this.scheduleOnce(function() {
          _this.canUpdate = true;
          _this.node.parent.emit("start", {
            target: {
              uuid: _this.node.uuid
            }
          });
        }, 2);
      },
      End: function End() {
        console.log("dummy", this.canUpdate);
      },
      update: function update() {
        if (this.canUpdate && this.rigidBody.linearVelocity.mag() < 80) {
          this.node.parent.emit("stop", {
            target: {
              uuid: this.node.uuid
            }
          });
          this.rigidBody.linearVelocity = cc.Vec2.ZERO;
          if ("Roudan" === this.node.group) {
            this.data.source.position = this.node.position;
            var bone = this.data.source.getComponentInChildren(dragonBones.ArmatureDisplay);
            var bar = this.data.source.getChildByName("blood_black");
            bone.node.active = true;
            bone.playAnimation("idle", 0);
            bar.active = true;
          }
          this.node.destroy();
        }
      },
      dealScaleX: function dealScaleX(x) {
        var sign = Math.sign(x);
        if (0 !== sign) {
          this.dragonBone.node.scaleX = sign * this._InitialScaleX;
          0 !== this._InitialPositionX && this.dragonBone.node.setPosition(sign * this._InitialPositionX, this.dragonBone.node.position.y);
        }
      },
      onEndContact: function onEndContact(contact, selfCollider, otherCollider) {
        false === otherCollider.sensor && 0 === selfCollider.tag && this.rigidBody.type === cc.RigidBodyType.Dynamic && this.dealScaleX(this.rigidBody.linearVelocity.x);
      }
    });
    cc._RF.pop();
  }, {
    bullet: "bullet"
  } ],
  shake: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7d620jfnY9H17XQJ2nlEls1", "shake");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _state: "idle"
      },
      setAll: function setAll(x, y, times, duration) {
        this.amplitudeX = x;
        this.amplitudeY = y;
        this.duration = duration;
        this.times = times;
      },
      shaker: function shaker(type, durType) {
        void 0 === type && (type = "out");
        void 0 === durType && (durType = "limited");
        var node = this.node;
        this.shakeObj = {
          node: node,
          originPos: node.position,
          offset: cc.v2(20, 20),
          times: 4,
          duration: .4,
          startTime: Date.now(),
          amplitudeModifier: "out",
          durType: durType
        };
        this.shakeObj.amplitudeModifier = type;
        this._state = "shaker";
        this.curTime = 0;
      },
      start: function start() {
        var _this = this;
        this.node.parent.on("shake", function(type, durType) {
          return _this.shaker(type, durType);
        });
        this.node.parent.on("stopShake", function() {
          return _this.stop();
        });
      },
      stop: function stop() {
        this._state = "idle";
        this.curTime = 0;
        this.shakeObj.node.position = this.shakeObj.originPos;
      },
      update: function update(dt) {
        if ("shaker" == this._state) {
          var shakeObj = this.shakeObj;
          this.node.position = cc.Vec2.ZERO;
          this.curTime += dt;
          var aX = shakeObj.offset.x;
          var aY = shakeObj.offset.y;
          var n = shakeObj.times;
          var duration = shakeObj.duration;
          var range = 2 * n * Math.PI;
          var am = shakeObj.amplitudeModifier;
          if (this.curTime < duration) {
            var factor = 1;
            var percent = this.curTime / duration;
            var angle = range * percent;
            var xo = aX * Math.cos(angle);
            var yo = aY * Math.sin(angle);
            "in" === am ? factor = percent : "out" === am ? factor = 1 - percent : "inOut" === am && (factor = 2 * (percent < .5 ? percent : 1 - percent));
            xo *= factor;
            yo *= factor;
            var p = shakeObj.originPos.add(cc.v2(xo, yo));
            shakeObj.node.position = p;
          } else {
            this.stop();
            "endless" === shakeObj.durType && this.shaker(shakeObj.amplitudeModifier, shakeObj.durType);
          }
        }
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "BattleUIManager", "Brain", "EnemyBrain", "EnemySkin", "GameManager", "HealAll", "Hero", "HeroSkin", "Input", "MenuAvatar", "MenuAvatarDisplay", "MenuCard", "MenuManager", "ResourceLoader", "TextureAssembler", "ButtonPlus", "CameraCapture", "DrawBorad", "GridScrollList", "MaskPlus", "ResHelper", "ScrollViewHelper", "TexturePlus", "TouchPlus", "GameConfig", "BigNumUtils", "CommonUtils", "DebugWindowUtils", "DrawingBoard", "EnumUtils", "GlobalHelper", "MatchUtils", "Pool", "PriorityQueue", "PropBind", "Queue", "Game", "ConfigMgr", "PlayerMgr", "Scene", "AdapterMgr", "Binder", "BroadCast", "CocosHelper", "EventCenter", "EventType", "FrameType", "ModalMgr", "CWebSocket", "NetInterface", "NetManager", "NetTest", "ResMgr", "SoundMgr", "TaskMgr", "TipsForm", "TipsMgr", "UIBase", "UIBinder", "UIManager", "UIModalScript", "SysDefine", "BattleSettingsButton", "BattleSettingsPanel", "BattleStageName", "MenuHeroPanel", "MenuLevelSelect", "MenuSettingsButton", "MenuTaskButton", "MenuTaskPanel", "MenuTreasurePanel", "MenuUIResource", "UIToast", "Skin", "StartScene", "Task", "bullet", "daoguang", "dummy", "shake" ]);