import { iocContainer } from './ioc-container';
import { Ninja } from './support_for_class';

const ninja = iocContainer.get(Ninja);

console.log('Ninja: ', ninja.sneak());
console.log('Ninja: ', ninja.fight());

console.log('Hello World AAAFFTER');
