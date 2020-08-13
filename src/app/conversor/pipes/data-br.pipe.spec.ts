import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formatar a data 2020-08-10 para 10/08/2020', () => {
  	const pipe = new DataBrPipe();
  	expect(pipe.transform('2020-08-10')).toEqual('10/08/2020');
  });
});
