import React from 'react';

function PrivacyPolicy() {
  return (
    <main>
      <section className="spacing">
        <div className="limit-width">
          <h1 className="centered golden main-heading mb26">Privacy Policy</h1>

        <p><strong>Last updated:</strong> September 29, 2025</p>
          <p>
            This Privacy Policy explains how Bumpyourserver (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects, 
            uses, and protects your information when you use our Discord bot (&quot;Bot&quot;). {/*} and website 
            (<a href="https://www.bumpyourserver.xyz/" target="_blank" rel="noopener noreferrer">https://www.bumpyourserver.xyz/</a>).  */}
            By using our Services, you agree to this Privacy Policy.
          </p>

          <h2>Information We Collect</h2>
          <ul>
            <li><strong>Account Data:</strong> Your Discord username, server ID, and other identifiers needed for the Bot to function.</li>
            <li><strong>Usage Data:</strong> Commands you use, bump messages, and interaction logs for improving and monitoring service performance.</li>
            <li><strong>Website Data:</strong> Standard analytics such as IP address, browser type, and pages visited when you access our website.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To operate and improve the Bot and Website.</li>
            <li>To track bumps, server interactions, and maintain functionality.</li>
            <li>To detect misuse or abuse and enforce rules.</li>
            <li>To respond to support requests and inquiries.</li>
          </ul>

          <h2>Data Sharing</h2>
          <ul>
            <li>We do not sell or trade your personal data.</li>
            <li>We may share limited data with trusted third-party services (e.g., hosting, analytics) necessary to run our Services.</li>
            <li>We may disclose information if required by law, or to protect the safety, rights, or integrity of our Services.</li>
          </ul>

          <h2>Data Retention</h2>
          <p>
            We only keep your data for as long as necessary to provide the Services.  
            Some logs (like bump history) may be retained for moderation and troubleshooting purposes, 
            but will be cleared periodically.
          </p>

          <h2>Your Rights</h2>
          <ul>
            <li>You may request access to the data we store about you.</li>
            <li>You may request deletion of your data by contacting us.</li>
            <li>You may remove the Bot from your server at any time to stop data collection.</li>
          </ul>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our Services are not intended for individuals under the age of 13 (or the minimum age required in your country).  
            We do not knowingly collect personal data from children. If you believe we have, please contact us and we will delete it.
          </p>

          <h2>Security</h2>
          <p>
            We take reasonable steps to protect your information from unauthorized access or misuse.  
            However, no online service can guarantee 100% security.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time.  
            If significant changes are made, we will make reasonable efforts to notify users.  
            Continued use of our Services means you accept the updated policy.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, reach out to us via:
          </p>
          <ul>
            <li>Email: <a href="mailto:bysbumpyourserver@gmail.com">bysbumpyourserver@gmail.com</a></li>
            <li>Discord: Support Server (open a ticket)</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default PrivacyPolicy;
