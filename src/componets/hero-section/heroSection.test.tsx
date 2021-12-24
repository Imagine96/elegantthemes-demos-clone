import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './heroSection';

describe('renders heroSection component', () => {
  render(<Hero />);

  it('renders both the hero and the subtitles headers', () => {
      
      const text = ['COFFE HOUSE', 'Serving Only the Best since 2013']

      const headers = screen.getAllByRole('heading')
      expect(headers).toHaveLength(2)

      headers.forEach((heading, index) => {
          expect(heading.textContent).toEqual(text[index])
      });
  })
});
