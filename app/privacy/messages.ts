export const PRIVACY_TITLE = "Daily Pray \u2014 Privacy Policy";
export const PRIVACY_UPDATED = "Last updated: February 11, 2026";
export const PRIVACY_EFFECTIVE = "This Privacy Policy is effective as of February 11, 2026.";

export const PRIVACY_INTRO =
  'Anim LLC (\u201cwe,\u201d \u201cour,\u201d or \u201cus\u201d) operates the Daily Pray mobile application (the \u201cApp\u201d). This Privacy Policy explains how we collect, use, and protect your information when you use the App. By using Daily Pray, you agree to the practices described in this Privacy Policy.';

export const PRIVACY_SECTIONS = [
  {
    id: "1",
    title: "1. Information We Collect",
    subsections: [
      {
        title: "1.1 Information You Provide",
        items: [
          "First name (optional, entered during onboarding)",
          "Email address (optional, entered during onboarding)",
          "Spiritual goals and motivations selected during onboarding",
          "Subscription plan selection (entered via onboarding email form)",
          "Daily Examen journal entries, including written reflections and selected emotions",
          "Bible translation preference",
          "App selection for screen time management",
        ],
      },
      {
        title: "1.2 Cancellation Feedback",
        items: [
          "Cancellation reason",
          "Additional details you choose to share",
          "Streak count at time of cancellation",
          "Number of reflections completed",
          "Device model and app version (collected automatically for troubleshooting)",
        ],
      },
      {
        title: "1.3 Automatically Collected Information",
        items: [
          "Prayer streak and activity dates (used to track your daily habit)",
          "Subscription status (managed by Apple)",
        ],
      },
      {
        title: "1.4 Information We Do NOT Collect",
        items: [
          "We do not collect location data.",
          "We do not collect device identifiers or advertising IDs.",
          "We do not use analytics, tracking, or third-party SDKs.",
          "We do not access the content of your blocked apps or browsing history.",
        ],
      },
    ],
  },
  {
    id: "2",
    title: "2. How Your Data Is Stored",
    subsections: [
      {
        title: "2.1 On-Device Data",
        items: [
          "Journal entries, emotions, streak history, preferences, and Screen Time configuration are stored locally on your device using Apple\u2019s on-device storage (UserDefaults and local files within the App Group container).",
          "This data never leaves your device.",
        ],
      },
      {
        title: "2.2 Data Collected via Google Forms",
        items: [
          "Name, email, goals, subscription plan, and cancellation feedback are collected via Google Forms and stored in Google Sheets on our private Google Drive.",
          "This data is used solely by us to improve the App and communicate with you about your account. It is not shared with or sold to any third party.",
        ],
      },
    ],
  },
  {
    id: "3",
    title: "3. Screen Time and Family Controls",
    paragraphs: [
      "Daily Pray uses Apple\u2019s Screen Time API (FamilyControls, ManagedSettings) to allow you to voluntarily shield selected apps until you complete your daily prayer reflection. This feature is entirely self-directed:",
    ],
    items: [
      "You choose which apps to shield.",
      "You choose whether to enable adult content filtering.",
      "We do not monitor, log, or transmit any information about your app usage, screen time, or the apps you select.",
      "All Screen Time configuration data stays on your device and never leaves the phone.",
    ],
    footnote: {
      text: "Apple processes Screen Time data according to",
      linkText: "Apple\u2019s Privacy Policy",
      linkHref: "https://www.apple.com/privacy/",
    },
  },
  {
    id: "4",
    title: "4. Subscriptions and Payments",
    paragraphs: [
      "Daily Pray offers auto-renewable subscriptions managed entirely by Apple through the App Store. We do not collect, process, or store any payment information such as credit card numbers or billing addresses. All payment processing, subscription management, and receipt validation is handled by Apple.",
    ],
    footnote: {
      text: "For details on how Apple handles payment data, see",
      linkText: "Apple\u2019s Privacy Policy",
      linkHref: "https://www.apple.com/privacy/",
    },
  },
  {
    id: "5",
    title: "5. Notifications",
    paragraphs: [
      "If you grant notification permission, Daily Pray may send local notifications (e.g., daily prayer reminders, prompts from the shield screen). These notifications are generated on your device. We do not use push notification services, and no notification data is sent to external servers.",
    ],
  },
  {
    id: "6",
    title: "6. Data Sharing",
    paragraphs: [
      "We do not sell, rent, trade, or otherwise share your personal data with any third party. On-device data (journal entries, streak, preferences, Screen Time) is stored locally and we have no access to it. Data collected via Google Forms (name, email, goals, feedback) is stored in our private Google Sheets and is accessible only to our team.",
    ],
  },
  {
    id: "7",
    title: "7. Data Retention and Deletion",
    paragraphs: [
      "On-device data remains on your device for as long as the App is installed. You can delete it at any time by:",
    ],
    items: [
      "Using the \u201cRedo Onboarding\u201d option in Settings (resets name, goals, and preferences)",
      "Deleting individual journal entries within the App",
      "Uninstalling the App (removes all locally stored data)",
    ],
    afterItems: [
      "Data collected via Google Forms (name, email, goals, feedback) is retained in our Google Sheets. To request deletion of this data, email us at dailyprayapp@gmail.com and we will remove your information promptly.",
    ],
  },
  {
    id: "8",
    title: "8. Children\u2019s Privacy",
    paragraphs: [
      "Daily Pray is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. The App\u2019s use of the Family Controls framework is for individual, self-directed use only and is not designed as a parental control tool.",
    ],
  },
  {
    id: "9",
    title: "9. Security",
    paragraphs: [
      "Because all data is stored locally on your device, your data is protected by your device\u2019s built-in security features, including device passcode, Face ID, Touch ID, and Apple\u2019s hardware encryption. We recommend keeping your device software up to date.",
    ],
  },
  {
    id: "10",
    title: "10. Changes to This Privacy Policy",
    paragraphs: [
      'We may update this Privacy Policy from time to time. Any changes will be reflected by updating the \u201cLast updated\u201d date at the top of this page. We encourage you to review this Privacy Policy periodically. Continued use of the App after changes constitutes acceptance of the updated policy.',
    ],
  },
  {
    id: "11",
    title: "11. Your Rights",
    paragraphs: [
      "Depending on your jurisdiction, you may have the right to:",
    ],
    items: [
      "Access the personal data stored about you (on-device data is visible within the App)",
      "Delete your personal data (see Section 7)",
      "Request deletion of data stored in Google Sheets by emailing dailyprayapp@gmail.com",
      "Opt out of data collection (on-device data is managed locally; optional fields like name and email can be skipped during onboarding)",
    ],
    afterItems: [
      "On-device data is inherently under your control. For data collected via Google Forms, contact us and we will fulfill your request promptly.",
    ],
  },
  {
    id: "12",
    title: "12. Contact Us",
    paragraphs: [
      "If you have any questions about this Privacy Policy or the App\u2019s privacy practices, please contact us at:",
    ],
    contact: {
      company: "Anim LLC",
      email: "dailyprayapp@gmail.com",
    },
  },
];
