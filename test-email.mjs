import { sendThankYouEmail } from "./dist/lib/email.js";

console.log("Testing thank-you email automation...\n");

// Simulate a donation
const testDonation = {
  to: "donor@example.com",
  name: "Jane Doe",
  amount: 25.00,
  donationId: "cs_test_123456789",
};

console.log("Simulating donation:", testDonation);
console.log("\n" + "=".repeat(60) + "\n");

// Send test email
const result = await sendThankYouEmail(testDonation);

if (result.success) {
  console.log("\n✅ Email automation test completed successfully!");
  console.log("\nIn production with SMTP configured, this email would be sent to:", testDonation.to);
} else {
  console.error("\n❌ Email test failed:", result.error);
}
