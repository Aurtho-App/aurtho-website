import * as SibApiV3Sdk from '@sendinblue/client';
import { NextResponse } from 'next/server';
import { z } from 'zod';

// Enhanced email validation schema
const emailSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .transform(email => email.toLowerCase().trim()),
});

// Create a type from the schema
type EmailInput = z.infer<typeof emailSchema>;

// Configure Brevo client
const apiInstance = new SibApiV3Sdk.ContactsApi();
// Set the API key directly
apiInstance.setApiKey(SibApiV3Sdk.ContactsApiApiKeys.apiKey, process.env.BREVO_API_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the input
    const result = emailSchema.safeParse(body);
    
    if (!result.success) {
      // Return detailed validation errors
      return NextResponse.json({
        success: false,
        message: result.error.errors[0].message,
      }, { status: 400 });
    }

    const { email } = result.data;

    // Create contact in Brevo
    const createContact = new SibApiV3Sdk.CreateContact();
    createContact.email = email;
    createContact.listIds = [3];
    createContact.updateEnabled = true;

    await apiInstance.createContact(createContact);

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully joined the waitlist!' 
    });

  } catch (error: unknown) {
    console.error('Waitlist error:', error);
    
    // Type guard for error object with response property
    if (
      error && 
      typeof error === 'object' && 
      'response' in error &&
      error.response && 
      typeof error.response === 'object' && 
      'status' in error.response
    ) {
      // Handle duplicate contact error
      if (error.response.status === 409) {
        return NextResponse.json(
          { success: false, message: 'This email is already on the waitlist.' },
          { status: 409 }
        );
      }
    }

    // Handle other errors
    return NextResponse.json(
      { success: false, message: 'Failed to join waitlist. Please try again.' },
      { status: 500 }
    );
  }
} 






