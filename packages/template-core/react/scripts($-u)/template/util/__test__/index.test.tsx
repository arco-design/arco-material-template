import * as demos from '../demo';

type UtilsDemo = { exec: () => unknown; result: any };

function demoTest(demos: { name: string; demo: UtilsDemo }): void {
  Object.entries(demos).forEach(([name, demo]: [string, UtilsDemo]) => {
    if (typeof demo.exec === 'function' && 'result' in demo) {
      it(name, async () => {
        const result = await demo.exec();
        expect(result).toBe(demo.result);
      });
    }
  });
}

describe('[@CONST_UTIL_NAME@] works', () => demoTest(demos));
