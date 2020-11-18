import {updateBrie} from './brie';
import {updateTicket} from './ticket';
import {updateNormal} from './normal';
import {updateSulfuras} from './sulfuras';
import {updateConjured} from './conjured';


export const isBrie = (item) => {
  return item.name == 'Aged Brie';
}
export const isTicket = (item) => {
  return item.name == 'Backstage passes to a TAFKAL80ETC concert';
}
export const isSulfuras = (item) => {
  return item.name == 'Sulfuras, Hand of Ragnaros';
}

export const isConjured = (item) => {
  return item.name == 'Conjured Mana Cake';
}

export const getUpdateStrategy = (item) => {

  if (isSulfuras(item)) {
    return updateSulfuras;
  }

  if (isConjured(item)) {
    return updateConjured;
  }

  if (isBrie(item)) {
    return updateBrie;
  }

  if (isTicket(item)) {
    return updateTicket;
  }

  return updateNormal;
}

