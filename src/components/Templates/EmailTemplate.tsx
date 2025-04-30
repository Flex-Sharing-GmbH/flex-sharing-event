import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    lastName,
    email,
    phone,
    message,
}) => (
    <div style={{
        fontFamily: 'system-ui, -apple-system, sans-serif',
        lineHeight: '1.5',
        color: '#333',
        backgroundColor: '#f9f9f9',
        padding: '24px',
        borderRadius: '8px',
        maxWidth: '600px',
        margin: '0 auto',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
    }}>
        <h2 style={{ color: '#202020', marginBottom: '16px' }}>Neue Nachricht von Ihrer Website</h2>

        <div style={{ marginBottom: '8px' }}>
            <strong>Name:</strong> {firstName} {lastName}
        </div>
        <div style={{ marginBottom: '8px' }}>
            <strong>E-Mail:</strong> {email}
        </div>
        <div style={{ marginBottom: '8px' }}>
            <strong>Telefon:</strong> {phone}
        </div>
        <div style={{ marginTop: '24px' }}>
            <strong>Nachricht:</strong>
            <p style={{ whiteSpace: 'pre-line', marginTop: '8px' }}>
                {message}
            </p>
        </div>
    </div>
);
