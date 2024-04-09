System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, NodePool, instantiate, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, PipePool;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      NodePool = _cc.NodePool;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "456a94ZnUhI+q/qNHEoCyJP", "PipePool", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'NodePool', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PipePool", PipePool = (_dec = ccclass('PipePool'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = class PipePool extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "prefabPipes", _descriptor, this);

          _initializerDefineProperty(this, "pipePoolHome", _descriptor2, this);

          this.pool = new NodePool();
          this.createPipe = void 0;
        }

        initPool() {
          let initCount = 3;

          for (let i = 0; i < initCount; i++) {
            this.createPipe = instantiate(this.prefabPipes);

            if (i == 0) {
              this.pipePoolHome.addChild(this.createPipe);
            } else {
              this.pool.put(this.createPipe);
            }
          }
        }

        addPool() {
          if (this.pool.size() > 0) {
            this.createPipe = this.pool.get();
          } else {
            this.createPipe = instantiate(this.prefabPipes);
          }

          this.pipePoolHome.addChild(this.createPipe);
        }

        reset() {
          this.pipePoolHome.removeAllChildren();
          this.pool.clear();
          this.initPool();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefabPipes", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pipePoolHome", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=05f869818c899a9e3c646ff426977c0f886f8420.js.map