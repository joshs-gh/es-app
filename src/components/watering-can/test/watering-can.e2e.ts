import { newE2EPage } from '@stencil/core/testing';

describe('watering-can', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<watering-can></watering-can>');

    const element = await page.find('watering-can');
    expect(element).toHaveClass('hydrated');
  });
});
