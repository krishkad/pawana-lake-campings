import React from "react";

type CancellationRule = {
  daysBefore: number; // >= this many days before check-in
  refundPercent: number; // percent of remaining amount (after advance) refundable
  note?: string;
};

type Props = {
  totalPrice: number; // total booking amount
  advanceAmount: number; // paid in advance (non-refundable)
  checkInDate?: Date | string;
  currency?: string;
  rules?: CancellationRule[]; // sorted descending by daysBefore
};

const defaultRules: CancellationRule[] = [
  {
    daysBefore: 15,
    refundPercent: 100,
    note: "Full refund of remaining amount (advance non-refundable)",
  },
  {
    daysBefore: 7,
    refundPercent: 50,
    note: "50% refund of remaining amount (advance non-refundable)",
  },
  { daysBefore: 1, refundPercent: 0, note: "No refund of remaining amount" },
];

function formatCurrency(amount: number, currency = "₹") {
  // Simple formatting – you can replace with Intl.NumberFormat if desired
  return `${currency}${amount.toLocaleString()}`;
}

function calculateRefund(
  totalPrice: number,
  advanceAmount: number,
  daysBefore: number,
  rules: CancellationRule[]
) {
  // remaining amount is the paid after advance
  const remaining = Math.max(0, totalPrice - advanceAmount);

  // find the first rule where daysBefore >= rule.daysBefore
  const applicable = rules.find((r) => daysBefore >= r.daysBefore) ?? null;

  if (!applicable) {
    // if no rule matches (i.e. cancel very close), use lowest refund percent
    const lowest = rules[rules.length - 1];
    const refund = Math.round((remaining * lowest.refundPercent) / 100);
    return {
      refundOfRemaining: refund,
      totalRefund: refund, // advance is non-refundable
      applicableRule: lowest,
      remaining,
    };
  }

  const refund = Math.round((remaining * applicable.refundPercent) / 100);
  return {
    refundOfRemaining: refund,
    totalRefund: refund, // advance is non-refundable
    applicableRule: applicable,
    remaining,
  };
}

export default function TermsAndConditions({
  totalPrice,
  advanceAmount,
  checkInDate,
  currency = "₹",
  rules = defaultRules,
}: Props) {
  // Example helper to show a few sample calculations
  const sampleDays = [30, 10, 3, 0];
  const samples = sampleDays.map((d) => ({
    daysBefore: d,
    ...calculateRefund(totalPrice, advanceAmount, d, rules),
  }));

  return (
    <section className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-3">Terms & Conditions</h2>

      <div className="prose mb-4">
        <p>
          Thank you for booking. Please read these terms carefully — by
          completing a booking you accept these terms.
        </p>
      </div>

      <div className="space-y-3 mb-6">
        <div>
          <h3 className="font-medium">Advance & Payment</h3>
          <p className="text-sm text-muted-foreground">
            An advance amount of{" "}
            <strong>{formatCurrency(advanceAmount, currency)}</strong> is
            required to confirm the booking. This advance is{" "}
            <strong>non-refundable on cancellation</strong> under all
            circumstances.
          </p>
        </div>

        <div>
          <h3 className="font-medium">Cancellation & Refund Calculation</h3>
          <p className="text-sm text-muted-foreground">
            Refunds (if any) are calculated only on the{" "}
            <em>remaining amount</em> (i.e. total price minus the advance). The
            advance amount is always retained by the camp and is not returned.
          </p>

          <div className="mt-3">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="pb-2">
                    Cancelation window (days before check-in)
                  </th>
                  <th className="pb-2">Refund on remaining amount</th>
                  <th className="pb-2">Note</th>
                </tr>
              </thead>
              <tbody>
                {rules.map((r) => (
                  <tr key={r.daysBefore} className="border-b">
                    <td className="py-2">{`>= ${r.daysBefore} days`}</td>
                    <td className="py-2">{`${r.refundPercent}% of remaining amount`}</td>
                    <td className="py-2">{r.note ?? "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="font-medium">Example Calculations</h3>
          <p className="text-sm text-muted-foreground mb-2">
            (Using total {formatCurrency(totalPrice, currency)} and advance{" "}
            {formatCurrency(advanceAmount, currency)})
          </p>

          <ul className="list-disc pl-5 text-sm">
            {samples.map((s) => (
              <li key={s.daysBefore} className="mb-1">
                Cancel {s.daysBefore} days before: Refund of remaining amount ={" "}
                <strong>{formatCurrency(s.refundOfRemaining, currency)}</strong>
                . Total refund paid to customer ={" "}
                <strong>{formatCurrency(s.totalRefund, currency)}</strong>.
                (Advance is retained.)
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-medium">Options if you cannot attend</h3>
          <p className="text-sm text-muted-foreground">
            If you cannot come to the camp, you may transfer the booking to
            another person with at least 72 hours notice and subject to
            approval. Alternatively, you can reschedule the booking (subject to
            availability) — rescheduling rules and any additional charges will
            be communicated at the time of request.
          </p>
        </div>

        <div>
          <h3 className="font-medium">Acceptance</h3>
          <p className="text-sm text-muted-foreground">
            By making a booking and paying the advance, you agree to these
            terms. If you need a written confirmation or have questions, contact
            our support team.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t pt-4">
        <div className="text-xs text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </div>
        <div className="text-sm">
          <button className="px-4 py-2 rounded-md bg-gradient-to-r from-amber-400 to-amber-500 text-white shadow-sm">
            I Accept
          </button>
        </div>
      </div>

      {/*
        Notes for developer:
        - This component is intentionally self-contained and uses Tailwind utility classes.
        - You can pass custom "rules" prop to override cancellation windows and refund percentages.
        - The advanceAmount is treated as fully non-refundable per your request.
      */}
    </section>
  );
}
