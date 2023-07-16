import StripeCheckOutButton from "@/components/Checkout"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Stripe Check out
        <StripeCheckOutButton />
      </div>
    </main>
  )
}
