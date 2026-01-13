# EmailJS Setup Guide for Kayson Wheels

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Select "Gmail" (recommended for kaysoncycles@gmail.com)
4. Click "Connect Account" and sign in with kaysoncycles@gmail.com
5. Note down the **Service ID** (e.g., "service_abc123")

## Step 3: Create Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template:

**Template Name:** Kayson Wheels - Enquiry Form

**Subject:** 
```
New Enquiry from {{from_name}}
```

**Content (Body):**
```
Hello,

You have received a new enquiry from your website.

Customer Details:
================
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
========
{{message}}

---
This enquiry was submitted from kaysonwheels-demo.vercel.app
Reply directly to this email to contact the customer.
```

4. In the "To Email" field, enter: {{to_email}}
5. Click "Save"
6. Note down the **Template ID** (e.g., "template_xyz789")

## Step 4: Get Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., "a1b2c3d4e5f6g7h8")
3. Copy it

## Step 5: Configure Your Project

### Local Development:

1. Create a `.env` file in your project root:
```bash
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

2. Replace the placeholder values with your actual credentials

### Vercel Deployment:

1. Go to your Vercel project dashboard
2. Navigate to: **Settings** → **Environment Variables**
3. Add these three variables:
   - `VITE_EMAILJS_SERVICE_ID` = your service ID
   - `VITE_EMAILJS_TEMPLATE_ID` = your template ID
   - `VITE_EMAILJS_PUBLIC_KEY` = your public key
4. Redeploy your project

## Step 6: Test the Form

1. Go to your website's Enquiry page
2. Fill out the form with test data
3. Click "Send Enquiry"
4. Check kaysoncycles@gmail.com inbox for the email

## Troubleshooting

**Email not received?**
- Check spam/junk folder
- Verify all credentials are correct
- Check EmailJS dashboard → "Email Log" for delivery status
- Make sure Gmail service is properly connected

**"Error sending email" message?**
- Check browser console for error details
- Verify environment variables are set correctly
- Make sure you've deployed after adding env variables on Vercel

## Free Tier Limits

EmailJS free plan includes:
- 200 emails per month
- Perfect for a small business website
- No credit card required

If you need more emails, upgrade to their paid plan at https://www.emailjs.com/pricing/

---

**Need help?** Contact EmailJS support at https://www.emailjs.com/docs/
