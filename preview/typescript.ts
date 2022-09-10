import assert from 'assert';

interface Area {
  area(): number;
}

export abstract class Shape implements Area {
  protected x!: number;
  abstract area(): number;
}

export class Rectangle extends Shape {
  constructor(protected x: number, protected y: number) {
    super();
  }

  override area() {
    return this.x * this.y;
  }
}

export class Circle extends Shape {
  constructor(protected x: number) {
    super();
  }

  override area(): number {
    return Math.PI * this.x ** 2;
  }
}

(function main() {
  const REGEX = /^\d\t{2}[0-9]+(\.21?).$/;
  const shapes: Shape[] = [new Rectangle(9, 4), new Circle(3), new Circle(7)];
  let sumArea = 0;

  for (let i = 0; i < shapes.length; i++) {
    sumArea = sumArea + shapes[i].area();
  }

  sumArea = toFixed(sumArea, 2);

  assert(sumArea === 218.21);
  assert(REGEX.test('218.21') === true);

  console.log(`The sum of the shapes is \`${sumArea}\``);

  return { shapes, sum: sumArea };
})();

/**
 * Formats a number using fixed-point notation
 * @param num Number to fixed
 * @param digits The number of digits to appear after the decimal point
 * @returns Fixed number
 */
function toFixed(num: number, digits: number): number {
  return Number(num.toFixed(digits));
}
