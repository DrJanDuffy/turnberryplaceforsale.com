import { NextApiRequest, NextApiResponse } from 'next'

interface LeadFormData {
  name: string
  email: string
  phone?: string
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, phone, message }: LeadFormData = req.body

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        details: {
          name: !name ? 'Name is required' : undefined,
          email: !email ? 'Email is required' : undefined,
          message: !message ? 'Message is required' : undefined,
        }
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' })
    }

    // Here you would integrate with your CRM/lead management system
    // Examples: Follow Up Boss, RealScout, Salesforce, etc.
    
    // For now, we'll log the lead data
    console.log('New lead submission:', {
      name,
      email,
      phone: phone || 'Not provided',
      message,
      timestamp: new Date().toISOString(),
      source: 'turnberryplaceforsale.com',
    })

    // TODO: Integrate with your CRM/lead system
    // Example integrations:
    // - Follow Up Boss API
    // - RealScout API
    // - Send to email service (SendGrid, Mailgun)
    // - Save to database
    // - Webhook to third-party service

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500))

    // Return success response
    return res.status(200).json({ 
      success: true,
      message: 'Lead submitted successfully',
      leadId: `lead-${Date.now()}`, // In production, this would come from your CRM
    })
  } catch (error) {
    console.error('Lead submission error:', error)
    return res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to submit lead. Please try again or call (702) 500-1971.'
    })
  }
}
