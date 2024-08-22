import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ShortenUrl from '@/components/dashboard page/shortUrl';


Object.assign(navigator, {
    clipboard: {
      writeText: jest.fn(),
    },
  });
  
  describe('ShortenUrl Component', () => {
    it('should copy the short URL to clipboard when the copy button is clicked', () => {
      render(<ShortenUrl />);

      const openModalButton = screen.getByRole('button', { name: /short url/i });
      fireEvent.click(openModalButton);

      const shortUrl = 'http://short.url';
      fireEvent.change(screen.getByPlaceholderText('Enter URL'), {
        target: { value: 'http://long.url' },
      });
      fireEvent.click(screen.getByRole('button', { name: /shorten/i }));

      setTimeout(() => {
        // Ensure the short URL is set
        screen.getByText(shortUrl);
        
      
      const copyButton = screen.getByRole('button', { name: /copy/i });
      fireEvent.click(copyButton);
  
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(shortUrl);
  
      expect(copyButton).toHaveTextContent('Copied!')
      },0);
    });
  });