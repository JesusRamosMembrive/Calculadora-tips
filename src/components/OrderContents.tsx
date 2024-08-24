import type { OrderItem } from '../types'
import { formatCurrency } from '../helpers'
type OrderContentsProps = {
    order: OrderItem[]
    removeItem: (id: number) => void
}


export default function OrderContents({order, removeItem}: OrderContentsProps) {
  return (
    <div>
        <h2 className='font-black text-4xl'>Consumo</h2>
            <div 
                className='space-y-3 mt-10 '>
                    {order.length === 0 ? 
                        <p className='text-center'>No hay elementos en la orden</p> :
                        (
                            order.map(item => (
                                <div key={item.id} 
                                className='text-lg flex items-center justify-between border-t border-gray-200 py-5 last-of-type:border-b'>
                                <div>
                                    <p className='text-lg'>{item.name} - {formatCurrency(item.price)}</p>
                                    <p className='font-black'>Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}</p>
                                </div>                      
                                    <button className='bg-red-500 text-white p-2 rounded-lg'
                                    onClick={() => removeItem(item.id)}
                                    >Eliminar</button>
                                </div>
                            )
                        )) 
                    }
            </div>
    </div>
  )
}
