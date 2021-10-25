type Demo = { exec: () => unknown; result: any };

export default function demoTest(demos: { name: string; demo: Demo }): void {
  Object.entries(demos).forEach(([name, demo]: [string, Demo]) => {
    if (typeof demo.exec === 'function' && 'result' in demo) {
      it(name, async () => {
        const result = await demo.exec();
        expect(result).toBe(demo.result);
      });
    }
  });
}
