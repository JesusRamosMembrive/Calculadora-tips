import { useCallback} from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps = {
    order: OrderItem[]
    tip: number
    placeOrder: () => void
}


export default function OrderTotal({order, tip, placeOrder} : OrderTotalProps) {
    const subTotalAmount = useCallback(() => order.reduce( (total, item) => total + (item.price * item.quantity), 0), [order])
    const tipAmount = useCallback(() => subTotalAmount() * tip , [subTotalAmount, tip])
    const totalAmount = useCallback(() => subTotalAmount() + tipAmount(), [subTotalAmount, tipAmount])

    return (
    <>
        <div className="space-y-3">
            
            <h2 className="font-black text-4xl">
                Total y propina:
            </h2>
            
            <p className="text-lg">
                Subtotal:  
                <span className="font-bold"> {formatCurrency(subTotalAmount())} </span>
            </p>

            <p className="text-lg">
                Propina:  
                <span className="font-bold"> {formatCurrency(tipAmount())}</span>
            </p>

            <p className="text-lg">
                Total a pagar:  
                <span className="font-bold"> {formatCurrency(totalAmount())}</span>
            </p>


        </div>
        <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10
        disabled:opacity-50"
        disabled={totalAmount() === 0}
        onClick={placeOrder}
        
        >
            Guardar orden


        </button>
    
    </>
  )
}
