import React from 'react';
import { render, screen } from '@testing-library/react';
import OtherTran from "../Component/aboutUs/AboutUs"

describe('OtherTran component', () => {
  test('renders the component', () => {
    render(<OtherTran />);

    const yellowBgText = screen.getByText('Frequently Asked Questions');
    const customerCareText = screen.getByText('1-800-102-7111');
    const howToSendUPIText = screen.getByText('How do I send money to India with UPI?');
    const howToSendMoneyOnlineText = screen.getByText('How do I send money online?');
    const howToCompleteFirstTransferText = screen.getByText('How do I complete my first money transfer online in India?');
    
    expect(yellowBgText).toBeInTheDocument();
    expect(customerCareText).toBeInTheDocument();
    expect(howToSendUPIText).toBeInTheDocument();
    expect(howToSendMoneyOnlineText).toBeInTheDocument();
    expect(howToCompleteFirstTransferText).toBeInTheDocument();
  });
});
