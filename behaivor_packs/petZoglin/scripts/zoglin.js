import * as mc from 'Minecraft';
import * as GameTest from 'GameTest';

export default class Zoglin
{
  _entity;

  constructor(entity) {
    this._entity = entity;
  }


  static create(test, location) {
    let entity = test.spawn("minecraft:zoglin", location);
    let zoglin = new Zoglin(entity);
    return zoglin;
  }

  fullyHeal() {
    this._entity.getComponent("minecraft:health").resetToMaxValue();
  }

  setHealth(newValue) {
    this._entity.getComponent("minecraft:health").setCurrent(newValue);
  }

  tame() {
    return this._entity.getComponent("minecraft:tameable").tame();
  }

}