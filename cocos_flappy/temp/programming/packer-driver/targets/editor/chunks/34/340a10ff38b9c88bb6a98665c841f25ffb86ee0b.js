System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, screen, find, UITransform, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, random, Pipes;

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
      Vec3 = _cc.Vec3;
      screen = _cc.screen;
      find = _cc.find;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8be13GQR0VHR6LX2ZTJV9lW", "Pipes", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'screen', 'find', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      random = (min, max) => {
        return Math.random() * (max - min) + min;
      };

      _export("Pipes", Pipes = (_dec = ccclass('Pipes'), _dec2 = property({
        type: Node,
        tooltip: 'Top pipe'
      }), _dec3 = property({
        type: Node,
        tooltip: 'Bottom pipe'
      }), _dec(_class = (_class2 = class Pipes extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "topPipe", _descriptor, this);

          _initializerDefineProperty(this, "BottomPipe", _descriptor2, this);

          this.tempStartLocationUp = new Vec3(0, 0, 0);
          this.tempStartLocationDown = new Vec3(0, 0, 0);
          this.scene = screen.windowSize;
          this.game = void 0;
          //speed of pipes from Gamectrl
          this.pipeSpeed = void 0;
          this.tempSpeed = void 0;
          this.isPass = void 0;
        }

        onLoad() {
          this.game = find("GameCtrl").getComponent("GameCtrl");
          this.pipeSpeed = this.game.pipeSpeed;
          this.initPos();
          this.isPass = false;
        }

        initPos() {
          this.tempStartLocationUp.x = this.topPipe.getComponent(UITransform).width + this.scene.width / 2;
          this.tempStartLocationDown.x = this.topPipe.getComponent(UITransform).width + this.scene.width / 2;
          let gap = random(90, 100);
          let topHeight = random(0, 450);
          this.tempStartLocationUp.y = topHeight;
          this.tempStartLocationDown.y = topHeight - gap * 10;
          this.BottomPipe.setPosition(this.tempStartLocationDown);
          this.topPipe.setPosition(this.tempStartLocationUp);
        }

        update(deltaTime) {
          this.tempSpeed = this.pipeSpeed * deltaTime;
          this.tempStartLocationDown = this.BottomPipe.position;
          this.tempStartLocationUp = this.topPipe.position;
          this.tempStartLocationDown.x -= this.tempSpeed;
          this.tempStartLocationUp.x -= this.tempSpeed;
          this.BottomPipe.setPosition(this.tempStartLocationDown);
          this.topPipe.setPosition(this.tempStartLocationUp);

          if (this.isPass == false && this.topPipe.position.x <= 0) {
            this.isPass = true;
            this.game.passPipe();
          }

          if (this.topPipe.position.x < 0 - this.scene.width) {
            this.game.createPipe();
            this.destroy();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "topPipe", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "BottomPipe", [_dec3], {
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
//# sourceMappingURL=340a10ff38b9c88bb6a98665c841f25ffb86ee0b.js.map