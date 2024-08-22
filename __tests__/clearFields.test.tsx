import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ShortenUrl from '@/components/dashboard page/shortUrl';

describe('ShortenUrl Component', () => {

  it('should clear input fields and close the modal when the Cancel button is clicked', () => {
    render(<ShortenUrl />);
    
    // Open the modal first
    const openModalButton = screen.getByRole('button', { name: /short url/i });
    fireEvent.click(openModalButton);

    // Mock filling the input and setting the short URL
    fireEvent.change(screen.getByPlaceholderText('Enter URL'), {
      target: { value: 'http://long.url' },
    });
    
    // Mock the URL shortening process to set the short URL
    fireEvent.click(screen.getByRole('button', { name: /shorten/i }));
    
    // set short URL
    const shortUrlText = 'http://short.url';
    fireEvent.click(screen.getByRole('button', { name: /shorten/i }));
    setTimeout(() => {
      expect(screen.getByText(shortUrlText)).toBeInTheDocument();
      expect(screen.getByDisplayValue('http://long.url')).toBeInTheDocument();

        // Click the cancel button
      const cancelButton = screen.getByRole('button', { name: /cancel/i });
      fireEvent.click(cancelButton);

    // input fields should be cleared and modal should be closed
      expect(screen.queryByText(shortUrlText)).not.toBeInTheDocument();
      expect(screen.queryByDisplayValue('http://long.url')).not.toBeInTheDocument();
      expect(screen.queryByText('Shorten Your Url')).not.toBeInTheDocument();
    }, 0);
  });
});
