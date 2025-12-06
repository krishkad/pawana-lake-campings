export const metadata = {
  title: "Terms & Conditions | Camp Booking",
  description:
    "Terms and conditions including advance payment and cancellation policy.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <section className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-md">
        <h1 className="mb-4 text-2xl font-semibold">Terms & Conditions</h1>

        <p className="mb-4 text-sm text-gray-600">
          Please read these terms carefully before making a booking. By
          confirming your booking, you agree to the following conditions.
        </p>

        {/* Advance Payment */}
        <div className="mb-5">
          <h2 className="font-medium text-gray-900">Advance Payment</h2>
          <p className="mt-1 text-sm text-gray-700">
            An advance amount is mandatory to confirm the booking. The advance
            amount once paid is <strong>strictly non-refundable</strong> under
            any circumstances.
          </p>
        </div>

        {/* Cancellation Policy */}
        <div className="mb-5">
          <h2 className="font-medium text-gray-900">Cancellation Policy</h2>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
            <li>
              In case of cancellation, the advance amount will not be refunded.
            </li>
            <li>
              Any remaining amount paid (if applicable) is subject to the
              campsite’s cancellation rules.
            </li>
            <li>
              Same-day or last-minute cancellations are not eligible for any
              refund.
            </li>
          </ul>
        </div>

        {/* Attendance */}
        <div className="mb-5">
          <h2 className="font-medium text-gray-900">Non-Attendance</h2>
          <p className="mt-1 text-sm text-gray-700">
            If you do not arrive at the camp on the scheduled date, the booking
            will be treated as cancelled and no amount will be refunded.
          </p>
        </div>

        {/* Acceptance */}
        <div className="border-t pt-4">
          <p className="text-sm text-gray-600">
            By proceeding with the booking and paying the advance amount, you
            confirm that you have read, understood, and agreed to all the above
            terms and conditions.
          </p>
        </div>
      </section>
    </main>
  );
}
