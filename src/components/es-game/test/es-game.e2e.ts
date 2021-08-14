import { newE2EPage } from '@stencil/core/testing';

describe('es-game', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<es-game></es-game>');

    const element = await page.find('es-game');
    expect(element).toHaveClass('hydrated');
  });
});
