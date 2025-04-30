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
    <div
        style={{
            fontFamily: 'Segoe UI, Roboto, sans-serif',
            lineHeight: '1.6',
            color: '#1a1a1a',
            backgroundColor: '#ffffff',
            padding: '32px',
            borderRadius: '12px',
            maxWidth: '640px',
            margin: '0 auto',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            border: '1px solid #eaeaea',
        }}
    >
        <h1 style={{ color: '#202020', fontSize: '24px', marginBottom: '24px' }}>
            📩 Neue Nachricht von <span style={{ color: '#4f46e5' }}>Flex Sharing Event</span>
        </h1>

        <div style={{ fontSize: '16px', marginBottom: '12px' }}>
            <strong style={{ width: '100px', display: 'inline-block' }}>👤 Name:</strong>
            {firstName} {lastName}
        </div>

        <div style={{ fontSize: '16px', marginBottom: '12px' }}>
            <strong style={{ width: '100px', display: 'inline-block' }}>📧 E-Mail:</strong>
            {email}
        </div>

        <div style={{ fontSize: '16px', marginBottom: '24px' }}>
            <strong style={{ width: '100px', display: 'inline-block' }}>📞 Telefon:</strong>
            {phone}
        </div>

        <div>
            <strong style={{ fontSize: '18px', color: '#202020' }}>💬 Nachricht:</strong>
            <div
                style={{
                    backgroundColor: '#f4f4ff',
                    padding: '16px',
                    marginTop: '12px',
                    borderRadius: '8px',
                    fontSize: '16px',
                    whiteSpace: 'pre-line',
                    borderLeft: '4px solid #4f46e5',
                }}
            >
                {message}
            </div>
        </div>
    </div>
);
