import { newSpecPage } from '@stencil/core/testing';
import { WateringCan } from '../watering-can';

describe('watering-can', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WateringCan],
      html: `<watering-can></watering-can>`,
    });
    expect(page.root).toEqualHtml(`
      <watering-can>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </watering-can>
    `);
  });
});
