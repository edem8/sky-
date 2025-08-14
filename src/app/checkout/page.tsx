import CheckoutForm from "@/components/checkout/checkout-form";
import CheckoutSummary from "@/components/checkout/summary";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-4 pt-10">
      {/* Top notification bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b ">
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
          Already have an account?
          <span className="text-[#088F8F] underline font-medium cursor-pointer">
            sign in
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-5xl lg:max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 px-2 sm:px-6 lg:px-8">
        <CheckoutForm />
        <CheckoutSummary />
      </div>
    </div>
  );
}
