'use client'

import getStripePromise from "@/lib/stripe"

const products = [
    {
        product: 1,
        name: 'Stripe Product 1',
        price: 400,
        quantity: 3,
    },
    {
        product: 2,
        name: 'Stripe Product 2',
        price: 100,
        quantity: 5,
    },
]

const StripeCheckOutButton = async () => {

    const stripe = await getStripePromise()

    const handleCheckout = async () => {

        const response = await fetch('/api/stripe-session/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            cache: 'no-cache',
            body: JSON.stringify({
                products
            }),
        })

        const data = await response.json()

        if (data.session) {
            stripe?.redirectToCheckout({ sessionId: data.session.id })
        }

    }

    return (
        <div className="py-5">
            <button className="bg-green-500 py-3 px-3 rounded-md" onClick={handleCheckout}>
                Check out
            </button>
        </div>
    )
}

export default StripeCheckOutButton