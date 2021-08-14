import { newSpecPage } from '@stencil/core/testing';
import { GrowingFlower } from '../growing-flower';

describe('growing-flower', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GrowingFlower],
      html: `<growing-flower></growing-flower>`,
    });
    expect(page.root).toEqualHtml(`
      <growing-flower>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </growing-flower>
    `);
  });
});
